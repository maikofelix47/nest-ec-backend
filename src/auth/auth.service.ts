import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

import { randomBytes, scrypt} from 'crypto';
import { promisify } from 'util';

const promisifiedScrypt = promisify(scrypt);


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){

    }

    async signUp(email: string, password: string){
        const users = await this.usersService.findByEmail(email);
        if(users.length){
          throw new BadRequestException('email already in use');
        }

        const salt = randomBytes(8).toString('hex');
        const hash =  (await promisifiedScrypt(password,salt,32)) as Buffer;
        const hashedAndSaltedPw = salt + '.' + hash.toString('hex');

        return this.usersService.create({email,password: hashedAndSaltedPw});

    }

    async signIn(email: string, password: string){

        const users = await this.usersService.findByEmail(email);
        if(users.length === 0) throw new NotFoundException('user with such an email and password doe snot exist');

        const user = users[0];
        const [dbSalt,dbPassword] = (user.password).split('.');
        const hash = (await promisifiedScrypt(password,dbSalt,32)) as Buffer;
        const hashedPw = hash.toString('hex');

        if(dbPassword !== hashedPw) throw new BadRequestException('wrong username or password');

        return user;

    }
}

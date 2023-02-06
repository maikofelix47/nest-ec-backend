import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){

    }

    findAll(): Promise<User[]>{
       return this.usersRepository.find();
    }

    findOne(id: number): Promise<User>{
       return this.usersRepository.findOneBy({id});
    }

    async remove(id: number): Promise<void>{
        const user = await this.findOne(id);
        if(!user){
          throw new Error('User not found!');
        }
        await this.usersRepository.remove(user);
    }

    create(user: User): Promise<User>{
        const userEntity = this.usersRepository.create(user);
        return this.usersRepository.save(userEntity);
    }

    async updateUserPassword(email: string, newPassword: string){
        const user = await this.usersRepository.findOneBy({email: email});
        if(!user){
            throw new Error('User with the email not found!');
        }
        Object.assign(user,{ password: newPassword });
        return this.usersRepository.save(user);
    }
}

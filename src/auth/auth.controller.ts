import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user-dto';

import { SerializeResponse } from '../interceptors/serialize.interceptor';
import { UserDto } from '../users/dtos/user.dto';

@Controller('auth')
@SerializeResponse(UserDto)
export class AuthController {
     constructor(private authService: AuthService){

     }

    @Post('sign-up')
    signUpUser(@Body() body: CreateUserDto){
        const { email, password } = body;
       return this.authService.signUp(email,password);
    }

    @Post('/sign-in')
    signIn(@Body() body: CreateUserDto){
        const { email, password } = body;
       return this.authService.signIn(email,password);
    }


}

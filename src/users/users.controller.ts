import { Controller, Get, Post, Param, Body } from '@nestjs/common';

import { UsersService } from './users.service';

import { CreateUserDto } from './dtos/create-user-dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){

    }

     @Get()
     findAll(){
        return this.usersService.findAll()
     }
    
     @Get('/:id')
     findOne(@Param('id') id: number){
         return this.usersService.findOne(id);
     }

     @Post()
     signUpUser(@Body() body: CreateUserDto){
         const payload = {
            ...body,
            isActive: true,
            id: 0
         };
        return this.usersService.create(payload);
     }



}

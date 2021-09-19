import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

import {UserService} from './user.service';

@Controller('user')
export class UserController {
    
    constructor (private readonly userService:UserService){}

    @Get("/all")
    getAll(){
        return this.userService.getAll();
    }
    @Get("/:id")
    getSpecificUser(@Param('id') id: number){
        return this.userService.getSpecificUser(id);
    }
    @Post('/register')
    addUser(@Body() body: any){
        return this.userService.addUser(body);
    }
    @Post('/login')
    loginUser(@Body() body: any){
        return this.userService.loginUser(body);
    }
    @Delete('/:id')
    deleteUser(@Param("id") id: number){
        return this.userService.deleteUser(id);
    }
    @Put('/:id')
    putUser(@Param("id") id: number, @Body() body:any){
        return this.userService.putUser(id,body);
    }
    @Patch('/:id')
    replaceUser(@Param("id") id: number, @Body() body:any){
        return this.userService.replaceUser(id,body);
    }
    @Get("/search/:term")
    searchUser(@Param("term") term:string){
        return this.userService.searchUser(term);
    }

}

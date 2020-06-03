import { Controller, Get, Post, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
    constructor(private service:UserService){}

    @Get()
    async getUser(){
        return await this.service.getData();
    }

    @Post('profile/:userId')
    async insertUser(@Param('userId') userId, @Body() body, @Res() res){
        const result = await this.service.inserUser(userId,body);
        if(result.status === "success"){
            return res.status(HttpStatus.OK).json(result);
        }else{
            return res.status(HttpStatus.BAD_REQUEST).json(result);
        }
        
    }
}

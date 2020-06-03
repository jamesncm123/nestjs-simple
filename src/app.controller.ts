import { Controller, Get, Post, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello1(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getHello2(){
    //return this.appService.getUser(10);
     
  }

  @Post('profile/:id')
  getHello3(@Param('id') id, @Res() res, @Body() body) {
    console.log(body)
    const result = this.appService.getUser(parseInt(id),body)
    return res.status(HttpStatus.OK).json(result)
  }
  
}

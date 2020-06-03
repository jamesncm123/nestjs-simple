import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getUser(value: number, body:any) {
    const dataJson = {
      fristName: body.fristName,
      lastName: body.lastName,
      age: body.age + value
    }
    return dataJson;
  }
}

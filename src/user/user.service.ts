import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly modelUser: Model<User>){}

    async getData(){
        const result = await this.modelUser.find().exec();
        return result;
    }

    async inserUser(userId,body){
        console.log(userId);
        console.log(body);

        const check = await this.modelUser.findOne({userId: userId}).exec();
        
        if( check == null){
            const newUser = new this.modelUser(body);
            newUser.userId = userId;
            newUser.createdAt = new Date();
            await newUser.save();
    
            const status = {
                status: "success"
            }
    
            return status;
        }else{
            const status = {
                status: "error"
            }
    
            return status;
        }
        
    }
}

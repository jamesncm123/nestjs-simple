import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { MongooseModule } from '@nestjs/mongoose'
import { UserShema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "User", schema: UserShema }
    ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

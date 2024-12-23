import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { UserGateway } from './user.gateway';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [UserService, UserGateway],
  exports: [UserService],
})
export class UserModule {}

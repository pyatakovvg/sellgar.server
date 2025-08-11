import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { UserRepository } from './repository/user.repository';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}

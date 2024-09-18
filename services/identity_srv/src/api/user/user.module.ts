import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  providers: [PrismaService, UserService, UserRepository],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

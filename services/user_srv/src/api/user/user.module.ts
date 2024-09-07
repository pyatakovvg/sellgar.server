import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PrismaService } from '@/prisma/prisma.service';

import { UserRepository } from './repository/user.repository';

import { UserService } from './user.service';

import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [ConfigModule],
  exports: [UserService],
  providers: [PrismaService, ConfigService, UserService, UserRepository],
})
export class UserModule {}

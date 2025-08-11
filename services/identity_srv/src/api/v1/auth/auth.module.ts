import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { SessionModule } from '../session/session.module';

import { AuthRepository } from './repository/auth.repository';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [SessionModule],
  controllers: [AuthController],
  providers: [PrismaService, AuthService, AuthRepository],
})
export class AuthModule {}

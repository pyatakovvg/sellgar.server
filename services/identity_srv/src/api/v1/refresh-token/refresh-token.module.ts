import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '@/prisma/prisma.service';

import { RefreshTokenController } from './controller/refresh-token.controller';
import { RefreshTokenService } from './service/refresh-token.service';
import { RefreshTokenRepository } from './repository/refresh-token.repository';

@Module({
  controllers: [RefreshTokenController],
  providers: [RefreshTokenService, RefreshTokenRepository, JwtService, PrismaService],
  exports: [RefreshTokenService],
})
export class RefreshTokenModule {}

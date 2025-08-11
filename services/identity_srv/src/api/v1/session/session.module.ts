import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { AccessTokenModule } from '../access-token/access-token.module';
import { RefreshTokenModule } from '../refresh-token/refresh-token.module';

import { SessionController } from './controller/session.controller';
import { SessionService } from './service/session.service';
import { SessionRepository } from './repository/repository.repository';

@Module({
  imports: [RefreshTokenModule, AccessTokenModule],
  controllers: [SessionController],
  providers: [PrismaService, SessionService, SessionRepository],
  exports: [SessionService, SessionRepository],
})
export class SessionModule {}

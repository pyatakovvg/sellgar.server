import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApiV1Module } from '@/api/v1/api.module';

import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: './.env', isGlobal: true }), PrismaModule, ApiV1Module],
})
export class AppModule {}

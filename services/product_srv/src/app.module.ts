import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from '@/prisma/prisma.module';

import { ApiV1Module } from '@/api/v1/api.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: './.env', isGlobal: true }), PrismaModule, ApiV1Module],
})
class AppModule {}

export { AppModule };

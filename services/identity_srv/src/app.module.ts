import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@mkfyi/nestjs-rmq';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';

import { ApiV1Module } from './api/v1/api-v1.module';

@Module({
  imports: [
    PrismaModule,
    ApiV1Module,

    ConfigModule.forRoot({ envFilePath: './.env', isGlobal: true }),

    RabbitMQModule.forRootAsync({
      connection: {
        imports: [ConfigModule],
        useFactory: (config: ConfigService) => ({
          port: config.get('AMQP_PORT'),
          hostname: config.get('AMQP_HOSTNAME'),
          username: config.get('AMQP_USERNAME'),
          password: config.get('AMQP_PASSWORD'),
        }),
        inject: [ConfigService],
      },
    }),
  ],
})
export class AppModule {}

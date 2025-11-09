import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RabbitMQModule } from '@mkfyi/nestjs-rmq';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ApiV1Module } from './api/v1/api-v1.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: './.env', isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DATABASE_HOST'),
          port: +configService.get('DATABASE_PORT'),
          username: configService.get('DATABASE_USERNAME'),
          password: configService.get('DATABASE_PASSWORD'),
          database: configService.get('DATABASE_DATABASE_NAME'),
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),

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

    ApiV1Module,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
// import { QueueAdapterType, RabbitMQModule } from '@mkfyi/nestjs-rmq';

import { ApiIdentityV1Module } from './api/identity_srv/v1/api.module';
import { ApiProductV1Module } from './api/product_srv/v1/api.module';
import { ApiFileV1Module } from './api/file_srv/v1/api.module';

import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { TokenService } from './common/services/token.service';

@Module({
  imports: [
    PassportModule.register({
      session: false,
      defaultStrategy: 'jwt',
    }),
    ConfigModule.forRoot({
      envFilePath: './.env',
      cache: true,
      isGlobal: true,
    }),

    // RabbitMQModule.forRootAsync({
    //   connection: {
    //     imports: [ConfigModule],
    //     useFactory: (config: ConfigService) => ({
    //       hostname: config.get('AMQP_HOSTNAME'),
    //       username: config.get('AMQP_USERNAME'),
    //       password: config.get('AMQP_PASSWORD'),
    //     }),
    //     inject: [ConfigService],
    //   },
    // adapters: [
    //   {
    //     name: 'user.adapter.mq',
    //     queue: 'admin_gw.user.update',
    //     type: QueueAdapterType.Worker
    //   }
    // ]
    // }),

    ApiIdentityV1Module,
    ApiProductV1Module,
    ApiFileV1Module,
  ],
  controllers: [],
  providers: [
    TokenService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
class AppModule {}

export { AppModule };

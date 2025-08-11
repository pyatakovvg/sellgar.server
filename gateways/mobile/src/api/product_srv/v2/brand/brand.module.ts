import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { BrandController } from './controller/brand.controller';

import { BrandService } from './service/brand.service';

@Module({
  controllers: [BrandController],
  providers: [ConfigService, BrandService],
  imports: [
    ClientsModule.registerAsync({
      clients: [
        {
          name: 'PRODUCT_SERVICE',
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => {
            return {
              transport: Transport.RMQ,
              options: {
                persistent: true,
                queue: config.get('AMQP_PRODUCT_SRV_QUEUE'),
                queueOptions: {
                  durable: true,
                },
                urls: [
                  {
                    port: config.get('AMQP_PORT'),
                    hostname: config.get('AMQP_HOSTNAME'),
                    username: config.get('AMQP_USERNAME'),
                    password: config.get('AMQP_PASSWORD'),
                  },
                ],
              },
            };
          },
        },
      ],
    }),
  ],
})
export class BrandModule {}

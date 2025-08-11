import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { CurrencyController } from './controller/currency.controller';
import { CurrencyService } from './service/currency.service';
import { CurrencyGateway } from './gateway/currency.gateway';

@Module({
  controllers: [CurrencyController],
  providers: [ConfigService, CurrencyService, CurrencyGateway],
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
export class CurrencyModule {}

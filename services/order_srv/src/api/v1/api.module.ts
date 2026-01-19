import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ShopModule } from './shop/shop.module';
import { StoreModule } from './store/store.module';
import { PriceModule } from './price/price.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [
    ShopModule,
    StoreModule,
    StoreModule,
    PriceModule,
    CurrencyModule,

    ClientsModule.registerAsync({
      isGlobal: true,
      clients: [
        {
          name: 'ORDER_EVENT_SERVICE',
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => {
            return {
              urls: [
                {
                  port: config.get('AMQP_PORT'),
                  hostname: config.get('AMQP_HOSTNAME'),
                  username: config.get('AMQP_USERNAME'),
                  password: config.get('AMQP_PASSWORD'),
                },
              ],
              transport: Transport.RMQ,
              options: {
                wildcards: true,
                persistent: true,
                queue: '',
                queueOptions: {
                  durable: false,
                  exclusive: true,
                  autoDelete: true,
                },
                exchange: config.get('AMQP_EVENTS_EXCHANGE'),
                exchangeType: 'topic',
              },
            };
          },
        },
      ],
    }),
  ],
})
export class ApiV1Module {}

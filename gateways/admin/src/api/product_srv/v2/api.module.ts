import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UnitModule } from './unit/unit.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { StoreModule } from './store/store.module';
import { ProductModule } from './product/product.module';
import { PriceModule } from './price/price.module';
import { PropertyModule } from './property/property.module';
import { ProductVariantModule } from './product-variant/product-variant.module';
import { PropertyGroupModule } from './property-group/property-group.module';

@Module({
  imports: [
    ProductModule,
    ProductVariantModule,
    PriceModule,
    StoreModule,
    PropertyGroupModule,
    PropertyModule,
    UnitModule,
    BrandModule,
    CategoryModule,

    ClientsModule.registerAsync({
      isGlobal: true,
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
  providers: [],
})
export class ApiProductV2Module {}

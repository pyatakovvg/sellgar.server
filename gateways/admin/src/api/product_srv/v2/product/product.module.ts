import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import { ProductGateway } from './gateway/product.gateway';

import { PriceModule } from '../price/price.module';

@Module({
  imports: [HttpModule, PriceModule],
  providers: [ConfigService, ProductService, ProductGateway],
  controllers: [ProductController],
})
export class ProductModule {}

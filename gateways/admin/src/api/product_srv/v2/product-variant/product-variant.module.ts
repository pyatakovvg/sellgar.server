import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { ProductVariantController } from './controller/product-variant.controller';
import { ProductVariantService } from './service/product-variant.service';
import { ProductVariantGateway } from './gateway/product-variant.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, ProductVariantService, ProductVariantGateway],
  controllers: [ProductVariantController],
})
export class ProductVariantModule {}

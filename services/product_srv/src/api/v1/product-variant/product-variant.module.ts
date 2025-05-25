import { Module } from '@nestjs/common';

import { ProductVariantService } from './service/product-variant.service';
import { ProductVariantRepository } from './repository/product-variant.repository';
import { ProductVariantController } from './controller/product-variant.controller';

@Module({
  controllers: [ProductVariantController],
  providers: [ProductVariantService, ProductVariantRepository],
})
export class ProductVariantModule {}

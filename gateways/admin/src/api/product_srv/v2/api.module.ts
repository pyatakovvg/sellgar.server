import { Module } from '@nestjs/common';

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
  ],
  providers: [],
})
export class ApiProductV2Module {}

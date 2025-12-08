import { Module } from '@nestjs/common';

import { PropertyModule } from './property/property.module';
import { PropertyGroupModule } from './property-group/property-group.module';
import { UnitModule } from './unit/unit.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { VariantModule } from './variant/variant.module';
// import { StoreModule } from './store/store.module';
// import { PriceModule } from './price/price.module';
import { ImageModule } from './image/image.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [
    ProductModule,
    VariantModule,
    // PriceModule,
    PropertyGroupModule,
    PropertyModule,
    UnitModule,
    BrandModule,
    CategoryModule,
    ImageModule,
    // StoreModule,
    CurrencyModule,
  ],
})
export class ApiV1Module {}

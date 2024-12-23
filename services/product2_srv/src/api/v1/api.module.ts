import { Module } from '@nestjs/common';

import { PropertyModule } from './property/property.module';
import { PropertyGroupModule } from './property-group/property-group.module';
import { UnitModule } from './unit/unit.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { PriceModule } from './price/price.module';

@Module({
  imports: [PriceModule, ProductModule, PropertyGroupModule, PropertyModule, UnitModule, BrandModule, CategoryModule],
})
export class ApiV1Module {}

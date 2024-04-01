import { Module } from '@nestjs/common';

import { ShopModule } from './shop/shop.module';
import { CompanyModule } from './company/company.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CompanyModule, CategoryModule, ShopModule, ProductModule],
})
export class ApiV1Module {}

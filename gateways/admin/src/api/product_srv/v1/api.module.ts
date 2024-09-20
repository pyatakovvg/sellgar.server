import { Module } from '@nestjs/common';

import { ShopModule } from './shop/shop.module';
import { CompanyModule } from './company/company.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CompanyModule, ShopModule, ProductModule],
  providers: [],
})
export class ApiProductV1Module {}

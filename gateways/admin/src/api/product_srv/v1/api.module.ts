import { Module } from '@nestjs/common';

import { ShopModule } from './shop/shop.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [CompanyModule, ShopModule],
  providers: [],
})
export class ApiProductV1Module {}

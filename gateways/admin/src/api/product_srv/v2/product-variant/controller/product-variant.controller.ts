import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { ProductVariantService } from '../service/product-variant.service';

@Controller('v2/variants')
export class ProductVariantController {
  constructor(private readonly productVariantService: ProductVariantService) {}

  @Get()
  findAll() {
    return this.productVariantService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.productVariantService.findByUuid(uuid);
  }
}

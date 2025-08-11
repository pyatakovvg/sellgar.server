import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern } from '@nestjs/microservices';

import { ProductVariantService } from '../service/product-variant.service';

@ApiTags('Product variant')
@Controller('/variants')
export class ProductVariantController {
  constructor(private readonly productVariantService: ProductVariantService) {}

  @MessagePattern({ cmd: 'product.variant.findAll' })
  findAll() {
    return this.productVariantService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.productVariantService.findByUuid(uuid);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateProductDto } from '../repository/dto/create-product.dto';
import { UpdateProductDto } from '../repository/dto/update-product.dto';

import { ProductVariantService } from '../service/product-variant.service';

@ApiTags('Product variant')
@Controller('/variants')
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productVariantService.remove(+id);
  }
}

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { ProductVariantService } from '../service/product-variant.service';
import { UpdateProductDto } from '../gateway/dto/update-product.dto';
import { CreateProductDto } from '../gateway/dto/create-product.dto';

@Controller('v2/products')
export class ProductVariantController {
  constructor(private readonly productService: ProductVariantService) {}

  @Get('/')
  findAll() {
    return this.productService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.productService.findByUuid(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateCategoryDto: UpdateProductDto) {
    return this.productService.update(uuid, updateCategoryDto);
  }

  @Post()
  create(@Body() createCategoryDto: CreateProductDto) {
    return this.productService.create(createCategoryDto);
  }
}

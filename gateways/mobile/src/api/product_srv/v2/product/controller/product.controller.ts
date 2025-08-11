import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { ProductService } from '../service/product.service';
import { UpdateProductDto } from '../service/dto/update-product.dto';
import { CreateProductDto } from '../service/dto/create-product.dto';

import { PriceService } from '../../price/service/price.service';
import { CreatePriceDto } from '../../price/gateway/dto/create-price.dto';

@Controller('v2/products')
export class ProductController {
  constructor(
    private readonly priceService: PriceService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.productService.findByUuid(uuid);
  }

  @Patch(':uuid')
  update(@Body() dto: UpdateProductDto) {
    return this.productService.update(dto);
  }

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get(':uuid/prices')
  priceFindAll(@Param('uuid') uuid: string) {
    return this.priceService.findAll(uuid);
  }

  @Post(':uuid/prices')
  priceCreate(@Param('uuid') uuid: string, @Body() dto: CreatePriceDto) {
    return this.priceService.create(uuid, dto);
  }
}

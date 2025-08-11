import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { StoreService } from '../service/store.service';
import { UpdateProductDto } from '../service/dto/update-product.dto';
import { CreateProductDto } from '../service/dto/create-product.dto';
import { CreatePriceDto } from '../../price/gateway/dto/create-price.dto';

import { PriceService } from '../../price/service/price.service';

@Controller('v2/store')
export class StoreController {
  constructor(
    private readonly priceService: PriceService,
    private readonly storeService: StoreService,
  ) {}

  @Get()
  findAll() {
    return this.storeService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.storeService.findByUuid(uuid);
  }

  @Patch(':uuid')
  update(@Body() dto: UpdateProductDto) {
    return this.storeService.update(dto);
  }

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.storeService.create(dto);
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

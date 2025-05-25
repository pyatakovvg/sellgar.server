import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePriceDto } from '../repository/dto/create-price.dto';

import { PriceService } from '../service/price.service';

@ApiTags('Products')
@Controller('store')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get(':uuid/prices')
  findAll(@Param('uuid') uuid: string) {
    return this.priceService.findAll(uuid);
  }

  @Post(':uuid/prices')
  create(@Param('uuid') uuid: string, @Body() dto: CreatePriceDto) {
    return this.priceService.create(uuid, dto);
  }
}

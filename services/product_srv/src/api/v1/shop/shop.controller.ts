import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

import { ShopService } from './shop.service';

import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

@Controller('shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  findAll() {
    return this.shopService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.shopService.findOne(uuid);
  }

  @Post()
  create(@Body() createShopDto: CreateShopDto) {
    return this.shopService.create(createShopDto);
  }

  @Put(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateShopDto: UpdateShopDto) {
    return this.shopService.update(uuid, updateShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopService.remove(+id);
  }
}

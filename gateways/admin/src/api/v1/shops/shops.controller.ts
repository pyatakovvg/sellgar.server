import { Body, Controller, Get, Param, Put, Post, Delete } from '@nestjs/common';

import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.shopsService.findOneByUuid(uuid);
  }

  @Put(':uuid')
  updateShop(@Body() body: UpdateShopDto, @Param('uuid') uuid: string) {
    return this.shopsService.updateShopByUuid(uuid, body);
  }

  @Post()
  createShop(@Body() body: CreateShopDto) {
    return this.shopsService.createShop(body);
  }

  @Get()
  findAll() {
    return this.shopsService.findAll();
  }

  @Delete()
  removeShop(uuid: string) {
    return this.shopsService.deleteShopById(uuid);
  }
}

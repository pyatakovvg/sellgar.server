import { Controller, Body, Param, Get, Post } from '@nestjs/common';

import { ShopService } from './shop.service';

@Controller('v1/shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  getAll() {
    return this.shopService.getAll();
  }

  @Get(':uuid')
  getByUuid(@Param('uuid') uuid: string) {
    return this.shopService.getByUuid(uuid);
  }

  @Post()
  create(@Body() data: any) {
    console.log(data);
  }
}

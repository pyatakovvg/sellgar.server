import { Body, Controller, Get, Param, Put, Post } from '@nestjs/common';

import { ShopsService } from './shops.service';

@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.shopsService.findOneByUuid(uuid);
  }

  @Put(':uuid')
  updateShop(@Body() body: any, @Param('uuid') uuid: string) {
    return this.shopsService.updateShopByUuid(uuid, body);
  }

  @Post()
  createShop(@Body() body: any) {
    return this.shopsService.createShop(body);
  }

  @Get()
  findAll() {
    return this.shopsService.findAll();
  }
}

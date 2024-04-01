import { Body, Controller, Get, Param, Put } from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.productsService.findOneByUuid(uuid);
  }

  @Put(':uuid')
  updateUser(@Body() body: any, @Param('uuid') uuid: string) {
    return this.productsService.updateUserByUuid(uuid, body);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}

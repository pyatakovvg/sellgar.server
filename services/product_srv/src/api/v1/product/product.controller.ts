import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';

import { plainToInstance } from 'class-transformer';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';

import { ProductEntity } from '@/entities/product.entity';

import { IProductFindAllParams, ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(params: IProductFindAllParams) {
    return this.productService.create(params);
  }

  @Get()
  async findAll() {
    const findResult = await this.productService.findAll();

    return {
      data: findResult.map((product) => plainToInstance(ProductEntity, product, { excludeExtraneousValues: true })),
      meta: {
        totalRows: await this.productService.count(),
      },
    };
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.productService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateShopDto: UpdateProductDto) {
    return this.productService.update(uuid, updateShopDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.productService.remove(uuid);
  }
}

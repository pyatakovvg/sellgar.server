import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateBrandDto } from '../repository/dto/create-brand.dto';
import { UpdateBrandDto } from '../repository/dto/update-brand.dto';

import { BrandService } from '../service/brand.service';

@Controller('brands')
@ApiTags('Brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  create(@Body() createCategoryDto: CreateBrandDto) {
    return this.brandService.create(createCategoryDto);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateCategoryDto: UpdateBrandDto) {
    return this.brandService.update(uuid, updateCategoryDto);
  }

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.brandService.findByUuid(uuid);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}

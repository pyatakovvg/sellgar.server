import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePropertyDto } from '../repository/dto/create-property.dto';
import { UpdatePropertyDto } from '../repository/dto/update-property.dto';

import { PropertyService } from '../service/property.service';

@Controller('properties')
@ApiTags('Properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  create(@Body() createCategoryDto: CreatePropertyDto) {
    return this.propertyService.create(createCategoryDto);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateCategoryDto: UpdatePropertyDto) {
    return this.propertyService.update(uuid, updateCategoryDto);
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.propertyService.findByUuid(uuid);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.propertyService.remove(uuid);
  }
}

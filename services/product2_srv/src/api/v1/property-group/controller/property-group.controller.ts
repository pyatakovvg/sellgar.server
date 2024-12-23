import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePropertyGroupDto } from '../repository/dto/create-property-group.dto';
import { UpdatePropertyGroupDto } from '../repository/dto/update-property-group.dto';

import { PropertyGroupService } from '../service/property-group.service';

@Controller('properties/groups')
@ApiTags('Properties')
export class PropertyGroupController {
  constructor(private readonly propertyService: PropertyGroupService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.propertyService.findByUuid(uuid);
  }

  @Post()
  create(@Body() createCategoryDto: CreatePropertyGroupDto) {
    return this.propertyService.create(createCategoryDto);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() dto: UpdatePropertyGroupDto) {
    return this.propertyService.update(uuid, dto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.propertyService.remove(uuid);
  }
}

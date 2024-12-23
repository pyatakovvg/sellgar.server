import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { PropertyService } from '../service/property.service';
import { UpdatePropertyDto } from '../gateway/dto/update-property.dto';
import { CreatePropertyDto } from '../gateway/dto/create-property.dto';

@Controller('v2/properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get('/')
  findAll() {
    return this.propertyService.findAllGroups();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.propertyService.findByUuid(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateCategoryDto: UpdatePropertyDto) {
    return this.propertyService.update(uuid, updateCategoryDto);
  }

  @Post()
  create(@Body() createCategoryDto: CreatePropertyDto) {
    return this.propertyService.create(createCategoryDto);
  }
}

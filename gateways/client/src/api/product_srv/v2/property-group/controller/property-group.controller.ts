import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { PropertyGroupService } from '../service/property-group.service';
import { UpdatePropertyGroupDto } from '../gateway/dto/update-property-group.dto';
import { CreatePropertyGroupDto } from '../gateway/dto/create-property-group.dto';

@Controller('v2/properties/groups')
export class PropertyGroupController {
  constructor(private readonly unitService: PropertyGroupService) {}

  @Get('/')
  findAll() {
    return this.unitService.findAllGroups();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.unitService.findByUuid(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateCategoryDto: UpdatePropertyGroupDto) {
    return this.unitService.update(uuid, updateCategoryDto);
  }

  @Post()
  create(@Body() createCategoryDto: CreatePropertyGroupDto) {
    return this.unitService.create(createCategoryDto);
  }
}

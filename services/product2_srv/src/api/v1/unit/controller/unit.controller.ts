import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateUnitDto } from '../repository/dto/create-unit.dto';
import { UpdateUnitDto } from '../repository/dto/update-unit.dto';

import { UnitService } from '../service/unit.service';

@Controller('units')
@ApiTags('Units')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Post()
  create(@Body() createCategoryDto: CreateUnitDto) {
    return this.unitService.create(createCategoryDto);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateCategoryDto: UpdateUnitDto) {
    return this.unitService.update(uuid, updateCategoryDto);
  }

  @Get()
  findAll() {
    return this.unitService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.unitService.findByUuid(uuid);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitService.remove(+id);
  }
}

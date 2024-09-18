import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

import { PermissionService } from './permission.service';

import { PermissionCreateDto } from './repository/dto/permission-create.dto';
import { PermissionUpdateDto } from './repository/dto/permission-update.dto';
import { GetAllPermissionFilterDto } from './repository/dto/get-all-permission-filter.dto';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionController {
  constructor(private readonly roleService: PermissionService) {}

  @Get()
  async findAll(@Query() query: GetAllPermissionFilterDto) {
    return await this.roleService.findAll(query);
  }

  @Get(':code')
  findByCode(@Param('code') code: string) {
    return this.roleService.findByCode(code);
  }

  @Put(':code')
  update(@Param('code') code: string, @Body() body: PermissionUpdateDto) {
    return this.roleService.update(code, body);
  }

  @Post()
  create(@Body() body: PermissionCreateDto) {
    return this.roleService.create(body);
  }
}

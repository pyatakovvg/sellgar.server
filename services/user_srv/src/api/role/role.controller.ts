import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

import { plainToInstance } from 'class-transformer';

import { RoleService } from './role.service';

import { RoleCreateDto } from './repository/dto/role-create.dto';
import { RoleUpdateDto } from './repository/dto/role-update.dto';
import { GetAllRoleFilterDto } from './repository/dto/get-all-role-filter.dto';

import { RoleEntity } from './repository/entity/role.entity';

@ApiTags('Roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Put(':code')
  async update(@Param('code') code: string, @Body() body: RoleUpdateDto) {
    return plainToInstance(RoleEntity, await this.roleService.update(code, body));
  }

  @Post()
  async create(@Body() body: RoleCreateDto) {
    return plainToInstance(RoleEntity, await this.roleService.create(body));
  }

  @Get()
  async findAll(@Query() query: GetAllRoleFilterDto) {
    return await this.roleService.findAll(query);
  }

  @Get(':code')
  findByCode(@Param('code') code: string) {
    return this.roleService.findByUuid(code);
  }
}

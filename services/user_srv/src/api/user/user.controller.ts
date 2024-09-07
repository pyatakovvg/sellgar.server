import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

import { plainToInstance } from 'class-transformer';

import { UserService } from './user.service';

import { UserCreateDto } from './repository/dto/user-create.dto';
import { UserUpdateDto } from './repository/dto/user-update.dto';
import { GetAllUserFilterDto } from './repository/dto/get-all-user-filter.dto';

import { UserEntity } from './repository/entity/user.entity';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Put(':uuid')
  async updateUser(@Param('uuid') uuid: string, @Body() body: UserUpdateDto) {
    return plainToInstance(UserEntity, await this.usersService.update(uuid, body));
  }

  @Post()
  async createUser(@Body() body: UserCreateDto) {
    return plainToInstance(UserEntity, await this.usersService.create(body));
  }

  @Get()
  async findAllUsers(@Query() query: GetAllUserFilterDto) {
    return await this.usersService.findAll(query);
  }

  @Get(':uuid')
  findUserByUuid(@Param('uuid') uuid: string) {
    return this.usersService.findByUuid(uuid);
  }
}

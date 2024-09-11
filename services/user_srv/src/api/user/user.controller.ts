import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

import { plainToInstance } from 'class-transformer';

import { UserService } from './user.service';

import { UserCreateDto } from './repository/dto/user-create.dto';
import { UserUpdateDto } from './repository/dto/user-update.dto';
import { GetAllUserFilterDto } from './repository/dto/get-all-user-filter.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Put(':uuid')
  updateUser(@Param('uuid') uuid: string, @Body() body: UserUpdateDto) {
    return this.usersService.update(uuid, body);
  }

  @Post()
  createUser(@Body() body: UserCreateDto) {
    return this.usersService.create(body);
  }

  @Get()
  findAllUsers(@Query() query: GetAllUserFilterDto) {
    return this.usersService.findAll(query);
  }

  @Get(':uuid')
  findUserByUuid(@Param('uuid') uuid: string) {
    return this.usersService.findByUuid(uuid);
  }
}

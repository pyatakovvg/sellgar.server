import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

import { Prisma } from '@/prisma/client';

import { plainToInstance } from 'class-transformer';

import { UsersService } from './users.service';

import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';

import { UserEntity } from './entities/user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put(':uuid')
  async updateUser(@Body() body: UserUpdateDto, @Param('uuid') uuid: string) {
    return plainToInstance(UserEntity, await this.usersService.update(uuid, body));
  }

  @Post()
  async createUser(@Body() body: UserCreateDto) {
    return plainToInstance(UserEntity, await this.usersService.create(body));
  }

  @Get()
  async findAllUsers(@Query() query: Prisma.UserWhereInput) {
    return {
      data: await this.usersService.findAll({
        where: query,
      }),
      meta: {
        totalRows: await this.usersService.count({
          where: query,
        }),
      },
    };
  }

  @Get(':uuid')
  findUserByUuid(@Query() query: Prisma.UserWhereInput, @Param('uuid') uuid: string) {
    return this.usersService.findOneByFilter({
      uuid,
    });
  }
}

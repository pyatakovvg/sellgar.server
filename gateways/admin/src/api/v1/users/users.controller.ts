import { Body, Controller, Get, Param, Put, Post } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.usersService.findOneByUuid(uuid);
  }

  @Put(':uuid')
  updateUser(@Body() body: any, @Param('uuid') uuid: string) {
    try {
      return this.usersService.updateUserByUuid(uuid, body);
    } catch (e) {
      console.log(e);
    }
  }

  @Post()
  createUser(@Body() body: any) {
    try {
      return this.usersService.createUser(body);
    } catch (e) {
      console.log(e);
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}

import { ApiTags } from '@nestjs/swagger';
import { Param, Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':uuid')
  getByUuid(@Param('uuid') uuid: string) {
    return this.userService.getByUuid(uuid);
  }
}

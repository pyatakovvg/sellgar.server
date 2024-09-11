import { Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';

import { AuthUuid } from '@/common/decorators/auth-uuid.decorator';

@Controller('v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  async getUser(@AuthUuid() authUuid: string) {
    return await this.userService.getByAuthUuid(authUuid);
  }
}

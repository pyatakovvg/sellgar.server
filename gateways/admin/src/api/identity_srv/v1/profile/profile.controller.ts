import { Controller, Get } from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

import { AuthUuid } from '@/common/decorators/auth-uuid.decorator';

@Controller('v1/profile')
export class ProfileController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  static getRoles(roles: any[]) {
    return roles.map((role) => role.code);
  }

  static getPermissionsFromRoles(roles: any[]) {
    const permissions = new Set();

    roles.forEach((role) => {
      role.permissions.forEach((permission) => {
        permissions.add(permission.code);
      });
    });

    return Array.from(permissions);
  }

  @Get()
  async getUser(@AuthUuid() authUuid: string) {
    const user = await this.userService.getByAuthUuid(authUuid);
    const auth = await this.authService.getUser(authUuid);

    return {
      data: {
        uuid: auth.uuid,
        login: auth.login,
        isBlocked: auth.isBlocked,
        roles: ProfileController.getRoles(auth.roles),
        permissions: ProfileController.getPermissionsFromRoles(auth.roles),
        user,
      },
      meta: {},
    };
  }
}

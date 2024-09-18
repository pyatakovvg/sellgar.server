import { Injectable } from '@nestjs/common';

import { UserService } from '../../user/user.service';

@Injectable()
export class GetUserByCredentialUseCase {
  constructor(private readonly userService: UserService) {}

  execute(login: string, password: string) {
    return this.userService.getByCredentials(login, password);
  }
}

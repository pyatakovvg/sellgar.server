import { Injectable } from '@nestjs/common';

import { UserService } from '../../user/user.service';

@Injectable()
export class GetUserByUuidUseCase {
  constructor(private readonly userService: UserService) {}

  execute(uuid: string) {
    return this.userService.getByUuid(uuid);
  }
}

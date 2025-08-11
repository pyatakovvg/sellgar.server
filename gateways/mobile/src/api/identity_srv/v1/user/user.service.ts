import { Injectable } from '@nestjs/common';

import { UserGateway } from './user.gateway';

@Injectable()
export class UserService {
  constructor(private readonly userGateway: UserGateway) {}

  getByAuthUuid(authUuid: string) {
    return this.userGateway.getByAuthUuid(authUuid);
  }
}

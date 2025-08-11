import { Injectable } from '@nestjs/common';

import { ProfileGateway } from '../gateway/profile.gateway';

@Injectable()
export class ProfileService {
  constructor(private readonly profileGateway: ProfileGateway) {}

  getByUserUuid(userUuid: string) {
    return this.profileGateway.getByUserUuid(userUuid);
  }
}

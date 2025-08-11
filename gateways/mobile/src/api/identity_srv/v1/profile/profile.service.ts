import { Injectable } from '@nestjs/common';

import { ProfileGateway } from './profile.gateway';

@Injectable()
export class ProfileService {
  constructor(private readonly profileGateway: ProfileGateway) {}

  getByAuthUuid(authUuid: string) {
    return this.profileGateway.getByAuthUuid(authUuid);
  }
}

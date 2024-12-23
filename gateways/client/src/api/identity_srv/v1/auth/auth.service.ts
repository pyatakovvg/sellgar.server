import { Injectable } from '@nestjs/common';

import { SignInDto } from './dto/sign-in.dto';

import { AuthGateway } from './auth.gateway';

@Injectable()
export class AuthService {
  constructor(private readonly authGateway: AuthGateway) {}

  login(user: SignInDto) {
    return this.authGateway.login(user);
  }

  getUser(authUuid: string) {
    return this.authGateway.getUser(authUuid);
  }
}

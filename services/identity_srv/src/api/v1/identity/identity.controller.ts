import { Controller, Post, Body } from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';

import { IdentityService } from './identity.service';

@Controller('identity')
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Post('login')
  loginByCredential(@Body() body: LoginDto) {
    return this.identityService.login(body.login, body.password);
  }

  @Post('refresh')
  refreshAccess(@Body() body: RefreshDto) {
    return this.identityService.refresh(body.token);
  }
}

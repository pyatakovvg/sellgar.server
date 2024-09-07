import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';

import { AuthService } from '../service/auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  loginByCredential(@Body() body: LoginDto) {
    return this.authService.loginByCredentials(body.login, body.password);
  }

  @Post('access-refresh')
  refreshAccess(@Body() body: RefreshDto) {
    return this.authService.refreshAccessToken(body.accessToken);
  }
}

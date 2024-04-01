import { ConfigService } from '@nestjs/config';
import { Controller, Request, Post, Get, Res } from '@nestjs/common';

import { Response as ExpressResponse, Request as ExpressRequest } from 'express';

import { Public } from '@/common/decorators/public.decorator';

import { AuthService } from './auth.service';

// import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService,
  ) {}

  @Public()
  @Post('login')
  async login(@Request() req: ExpressRequest, @Res({ passthrough: true }) res: ExpressResponse) {
    const token = await this.authService.login(req.body);

    res.cookie(this.config.get('AUTH_COOKIE'), JSON.stringify(token), {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: true,
    });

    res.send();
  }

  @Get('profile')
  getProfile(@Request() req: ExpressRequest) {
    return req.user;
  }
}

import { Body, Controller, Get, Post, Res, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Response } from 'express';

import { UserDto } from './dto/user.dto';

import { AuthService } from './auth.service';

@Controller('v1/auth')
export class AuthController {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @Get('profile')
  getProfile() {
    throw new UnauthorizedException();
  }

  @Post('sign-in')
  async signIn(@Body() body: UserDto, @Res() res: Response) {
    const result = await this.authService.login(body);

    res.cookie(this.config.get('AUTH_COOKIE'), result, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    res.json({ message: 'Logged in successfully' });
  }
}

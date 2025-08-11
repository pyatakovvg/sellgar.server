import { Body, Controller, Post, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Response } from 'express';

import { Public } from '@/common/decorators/public.decorator';

import { SignInDto } from './dto/sign-in.dto';

import { AuthService } from './auth.service';

@Controller('v1/auth')
export class AuthController {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @Public()
  @Post('sign-in')
  async signIn(@Body() body: SignInDto, @Res({ passthrough: true }) res: Response) {
    const result = await this.authService.login(body);

    res.cookie(this.config.get('AUTH_COOKIE'), JSON.stringify(result), {
      maxAge: this.config.get('AUTH_COOKIE_EXTEND'),
      httpOnly: true,
      secure: true,
    });

    res.json({ message: 'Logged in successfully' });
  }

  @Public()
  @Post('sign-up')
  signUp() {}

  @Post('sign-out')
  signOut(@Res({ passthrough: true }) res: Response) {
    res.cookie('token', '', { expires: new Date() });
  }
}

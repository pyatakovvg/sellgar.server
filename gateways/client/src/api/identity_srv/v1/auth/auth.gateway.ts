import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { createHmac } from 'crypto';
import { AxiosResponse } from 'axios';
import { firstValueFrom, map } from 'rxjs';

import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
  ) {}

  public hashPassword(password: string) {
    const md5Hash = createHmac('sha512', this.config.get('PASSWORD_SALT'));
    return md5Hash.update(password).digest('hex');
  }

  generateAccessToken(user: any): Promise<string> {
    const payload = { user, sub: user.uuid };

    return this.jwtService.signAsync(payload);
  }

  public async getRefreshToken(userUuid: string): Promise<string> {
    const result: AxiosResponse<any, any> = await firstValueFrom(
      this.httpService.post('/refresh_token', userUuid, {
        baseURL: this.config.get('API_IDENTITY_SRV'),
      }),
    );

    // const fetch = new Fetch({
    //   baseURL: this.config.get('API_IDENTITY_SRV'),
    // });
    //
    // const userDataToUpdate = {
    //   token: generate(64),
    //   expire: moment().day(1).format('YYYY-MM-DDThh:mm:ss.SSSZ'),
    // };
    //
    // await fetch.send({
    //   url: '/refresh-token',
    //   method: 'post',
    //   data: {
    //     userUuid,
    //     ...userDataToUpdate,
    //   },
    // });
    //o
    // return userDataToUpdate.token;

    return result.data.token;
  }

  async validateUser(email: string, password: string) {
    const request = this.httpService
      .post(
        '/users/check',
        {
          email,
          password,
        },
        {
          baseURL: this.config.get('API_IDENTITY_SRV'),
        },
      )
      .pipe(map((res) => res.data));

    return await firstValueFrom(request);
  }

  async login(user: SignInDto) {
    const request = this.httpService
      .post(
        '/auth/sign-in',
        {
          login: user.email,
          password: this.hashPassword(user.password),
        },
        {
          baseURL: this.config.get('API_IDENTITY_SRV'),
        },
      )
      .pipe(map((res) => res.data));

    return await firstValueFrom(request);
  }

  getUser(authUuid: string) {
    const request = this.httpService
      .get('/users/' + authUuid, {
        baseURL: this.config.get('API_IDENTITY_SRV'),
      })
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}

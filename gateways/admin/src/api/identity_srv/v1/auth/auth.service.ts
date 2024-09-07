import { JwtService } from '@nestjs/jwt';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

import { Fetch } from '@helper/fetch';

import * as moment from 'moment';
import { generate } from 'rand-token';
import { createHmac } from 'crypto';
import { AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { firstValueFrom, map, catchError } from 'rxjs';

import { UserEntity } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
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

  async validateUser(email: string, password: string): Promise<any> {
    const fetch = new Fetch({
      baseURL: this.config.get('API_IDENTITY_SRV'),
    });

    return plainToInstance(
      UserEntity,
      await fetch.send({
        url: '/users/check',
        method: 'post',
        data: {
          email,
          password,
        },
      }),
    );
  }

  async validateRefreshToken(userUuid: string, token: string) {
    console.log(userUuid, token);
    return true;
  }

  async login(user: UserDto) {
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
      .pipe(map((res) => res.data))
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        }),
      );

    return await firstValueFrom(request);
  }
}

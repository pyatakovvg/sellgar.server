import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Fetch } from '@helper/fetch';

import * as moment from 'moment';
import { generate } from 'rand-token';
import { plainToInstance } from 'class-transformer';

import { UserEntity } from './entities/user.entity';
import { UserDto } from '@/api/v1/auth/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  generateAccessToken(user: any): Promise<string> {
    const payload = { user, sub: user.uuid };
    return this.jwtService.signAsync(payload);
  }

  async generateRefreshToken(user: any) {}

  resolveRefreshToken() {}

  createAccessTokenFromRefreshToken() {}

  decodeRefreshToken() {}

  getUserFromRefreshTokenPayload() {}

  getStoredTokenFromRefreshTokenPayload() {}

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

  public async getRefreshToken(userUuid: string): Promise<string> {
    const fetch = new Fetch({
      baseURL: this.config.get('API_IDENTITY_SRV'),
    });

    const userDataToUpdate = {
      token: generate(64),
      expire: moment().day(1).format('YYYY-MM-DDThh:mm:ss.SSSZ'),
    };

    await fetch.send({
      url: '/refresh-token',
      method: 'post',
      data: {
        userUuid,
        ...userDataToUpdate,
      },
    });

    return userDataToUpdate.token;
  }

  async validateRefreshToken(userUuid: string, token: string) {
    console.log(userUuid, token);
    return true;
  }

  login(user: UserDto) {
    const fetch = new Fetch({
      baseURL: this.config.get('API_IDENTITY_SRV'),
    });

    return fetch.send({
      url: '/identity/login',
      method: 'POST',
      data: {
        login: user.email,
        password: user.password,
      },
    });
  }
}

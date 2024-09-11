import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class ProfileGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async getByAuthUuid(authUuid: string) {
    console.log(123123, authUuid);
    const request = this.httpService
      .get('/users', {
        baseURL: this.config.get('API_USER_SRV'),
        params: {
          authUuid,
        },
      })
      .pipe(
        map((res) => {
          console.log(res.data);
          return res.data.data[0];
        }),
      );

    return firstValueFrom(request);
  }
}

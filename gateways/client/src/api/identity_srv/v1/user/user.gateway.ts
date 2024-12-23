import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map, catchError } from 'rxjs';

@Injectable()
export class UserGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async getByAuthUuid(authUuid: string) {
    const request = this.httpService
      .get('/users/' + authUuid, {
        baseURL: this.config.get('API_USER_SRV'),
      })
      .pipe(
        map((res) => {
          return res.data.data;
        }),
        catchError((e) => {
          throw e;
        }),
      );

    return firstValueFrom(request);
  }
}

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class ShopGateway {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async getAll() {
    const request = this.httpService
      .get('/shops', {
        baseURL: this.config.get('API_PRODUCT_SRV'),
      })
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async getByUuid(uuid: string) {
    const request = this.httpService
      .get('/shops/' + uuid, {
        baseURL: this.config.get('API_PRODUCT_SRV'),
      })
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}

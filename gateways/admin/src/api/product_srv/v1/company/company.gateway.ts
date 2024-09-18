import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class CompanyGateway {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async getAll() {
    const request = this.httpService
      .get('/companies', {
        baseURL: this.config.get('API_PRODUCT_SRV'),
      })
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}

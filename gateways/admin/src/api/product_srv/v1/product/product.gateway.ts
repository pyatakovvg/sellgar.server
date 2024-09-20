import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class ProductGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  getAll() {
    const request = this.httpService.get(this.config.get('API_PRODUCT_SRV') + '/products').pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}

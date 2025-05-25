import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

import { CreatePriceDto } from './dto/create-price.dto';

@Injectable()
export class PriceGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async findAll(productUuid: string) {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/store/' + productUuid + '/prices')
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async create(productUuid: string, dto: CreatePriceDto) {
    const request = this.httpService
      .post(this.config.get('API_PRODUCT_SRV') + '/store/' + productUuid + '/prices', dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}

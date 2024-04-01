import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { map } from 'rxjs';

import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

import type { IShop } from './shops.types';

@Injectable()
export class ShopsService {
  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {}

  findOneByUuid(uuid: string) {
    return this.http
      .get<IShop | null>(this.config.get('API_PRODUCTS_SRV') + '/shops/' + uuid)
      .pipe(map((res) => res.data));
  }

  updateShopByUuid(uuid: string, body: UpdateShopDto) {
    return this.http
      .put<IShop>(this.config.get('API_PRODUCTS_SRV') + '/shops/' + uuid, body)
      .pipe(map((res) => res.data));
  }

  createShop(body: CreateShopDto) {
    return this.http.post<IShop>(this.config.get('API_PRODUCTS_SRV') + '/shops', body).pipe(map((res) => res.data));
  }

  deleteShopById(uuid: string) {
    return this.http.delete<string>(this.config.get('API_PRODUCTS_SRV') + '/shops' + uuid).pipe(map((res) => res.data));
  }

  async findAll() {
    return this.http.get<IShop[]>(this.config.get('API_PRODUCTS_SRV') + '/shops').pipe(map((res) => res.data));
  }
}

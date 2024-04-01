import { Injectable } from '@nestjs/common';

import { Fetch } from '@helper/fetch';
import { ConfigService } from '@nestjs/config';

import { IShop } from './shops.types';

@Injectable()
export class ShopsService {
  constructor(private readonly config: ConfigService) {}

  private readonly shopsFetch: Fetch = new Fetch({
    baseURL: this.config.get('API_PRODUCTS_SRV'),
  });

  async findOneByUuid(uuid: string): Promise<IShop | null> {
    return this.shopsFetch.send({
      url: '/shops/' + uuid,
    });
  }

  async updateShopByUuid(uuid: string, body: any): Promise<IShop> {
    return await this.shopsFetch.send({
      url: '/shops/' + uuid,
      method: 'put',
      data: body,
    });
  }

  async createShop(body: any): Promise<IShop> {
    return await this.shopsFetch.send({
      url: '/shops',
      method: 'post',
      data: body,
    });
  }

  async findAll(): Promise<IShop[]> {
    return this.shopsFetch.send({
      url: '/shops',
    });
  }
}

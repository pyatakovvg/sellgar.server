import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Fetch } from '@helper/fetch';

export type User = any;

@Injectable()
export class ProductsService {
  private readonly productsFetch: Fetch = new Fetch({
    baseURL: this.config.get('API_PRODUCTS_SRV'),
  });

  constructor(private readonly config: ConfigService) {}

  async findOneByUuid(uuid: string): Promise<User | undefined> {
    return this.productsFetch.send({
      url: '/products/' + uuid,
    });
  }

  async updateUserByUuid(uuid: string, body: any): Promise<User> {
    return await this.productsFetch.send({
      url: '/products/' + uuid,
      method: 'put',
      data: body,
    });
  }

  async findAll(): Promise<User[]> {
    return this.productsFetch.send({
      url: '/products',
    });
  }
}

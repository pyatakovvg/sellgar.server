import { Injectable } from '@nestjs/common';

import { Fetch } from '@helper/fetch';
import { ConfigService } from '@nestjs/config';

export type User = any;

@Injectable()
export class CompanyService {
  constructor(private readonly config: ConfigService) {}

  private readonly companyFetch: Fetch = new Fetch({
    baseURL: this.config.get('API_PRODUCTS_SRV'),
  });

  async findOneByUuid(uuid: string): Promise<User | undefined> {
    return this.companyFetch.send({
      url: '/company/' + uuid,
    });
  }

  async updateUserByUuid(uuid: string, body: any): Promise<User> {
    return await this.companyFetch.send({
      url: '/company/' + uuid,
      method: 'put',
      data: body,
    });
  }

  async findAll(): Promise<User[]> {
    return this.companyFetch.send({
      url: '/company',
    });
  }
}

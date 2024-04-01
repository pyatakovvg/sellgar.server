import { Injectable } from '@nestjs/common';

import { Fetch } from '@helper/fetch';
import { ConfigService } from '@nestjs/config';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private readonly config: ConfigService) {}

  private readonly usersFetch: Fetch = new Fetch({
    baseURL: this.config.get('API_IDENTITY_SRV'),
  });

  async findOneByUuid(uuid: string): Promise<User | undefined> {
    return this.usersFetch.send({
      url: '/users/' + uuid,
    });
  }

  async updateUserByUuid(uuid: string, body: any): Promise<User> {
    return await this.usersFetch.send({
      url: '/users/' + uuid,
      method: 'put',
      data: body,
    });
  }

  async createUser(body: any): Promise<User> {
    return await this.usersFetch.send({
      url: '/users',
      method: 'post',
      data: body,
    });
  }

  async findAll(): Promise<User[]> {
    return this.usersFetch.send({
      url: '/users',
    });
  }
}

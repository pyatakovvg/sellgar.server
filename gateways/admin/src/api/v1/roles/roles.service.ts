import { Injectable } from '@nestjs/common';

import { Fetch } from '@helper/fetch';

export type TRole = any;

@Injectable()
export class RolesService {
  private readonly rolesFetch: Fetch = new Fetch({
    baseURL: 'http://localhost:5010',
  });

  async findAll(): Promise<TRole[]> {
    return this.rolesFetch.send({
      url: '/roles',
    });
  }
}

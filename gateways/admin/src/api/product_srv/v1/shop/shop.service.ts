import { Injectable } from '@nestjs/common';

import { ShopGateway } from './shop.gateway';

@Injectable()
export class ShopService {
  constructor(private readonly shopGateway: ShopGateway) {}

  getAll() {
    return this.shopGateway.getAll();
  }

  getByUuid(uuid: string) {
    return this.shopGateway.getByUuid(uuid);
  }
}

import { Injectable } from '@nestjs/common';

import { ProductGateway } from './product.gateway';

@Injectable()
export class ProductService {
  constructor(private readonly productGateway: ProductGateway) {}

  getAll() {
    return this.productGateway.getAll();
  }
}

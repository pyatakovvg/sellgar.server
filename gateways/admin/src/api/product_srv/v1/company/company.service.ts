import { Injectable } from '@nestjs/common';

import { CompanyGateway } from './company.gateway';

@Injectable()
export class CompanyService {
  constructor(private readonly companyGateway: CompanyGateway) {}

  getAll() {
    return this.companyGateway.getAll();
  }
}

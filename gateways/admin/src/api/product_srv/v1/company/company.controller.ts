import { Controller, Get } from '@nestjs/common';

import { CompanyService } from './company.service';

@Controller('v1/companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  getAll() {
    return this.companyService.getAll();
  }
}

import { Injectable } from '@nestjs/common';

import { CompanyRepository } from './company.repository';

import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.companyRepository.create(createCompanyDto);
  }

  async findAllByFilter() {
    return {
      data: await this.companyRepository.findAllByFilter(),
      meta: {
        totalRows: await this.companyRepository.count(),
      },
    };
  }

  async findOne(uuid: string) {
    return this.companyRepository.findOne(uuid);
  }

  update(uuid: string, updateCompanyDto: UpdateCompanyDto) {
    return this.companyRepository.update(uuid, updateCompanyDto);
  }

  remove(uuid: string) {
    return this.companyRepository.remove(uuid);
  }
}

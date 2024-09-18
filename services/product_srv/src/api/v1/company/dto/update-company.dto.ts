import { PartialType } from '@nestjs/swagger';

import { IsUUID } from 'class-validator';

import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @IsUUID()
  uuid: string;
}

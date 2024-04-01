import { IsBoolean, IsString, IsNotEmpty, IsObject } from 'class-validator';

import { CompanyDto } from './company.dto';

export class CreateShopDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsObject()
  company: CompanyDto;
}

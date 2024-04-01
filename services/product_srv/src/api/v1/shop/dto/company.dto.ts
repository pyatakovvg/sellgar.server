import { IsString, IsNotEmpty } from 'class-validator';

export class CompanyDto {
  @IsString()
  @IsNotEmpty()
  uuid: string;
}

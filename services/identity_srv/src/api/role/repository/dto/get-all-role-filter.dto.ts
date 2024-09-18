import { IsNumber, IsOptional } from 'class-validator';

export class GetAllRoleFilterDto {
  @IsNumber()
  @IsOptional()
  skip?: number;

  @IsNumber()
  @IsOptional()
  take?: number;
}

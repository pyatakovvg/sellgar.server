import { IsNumber, IsOptional } from 'class-validator';

export class GetAllPermissionFilterDto {
  @IsNumber()
  @IsOptional()
  skip?: number;

  @IsNumber()
  @IsOptional()
  take?: number;
}

import { IsNumber, IsOptional } from 'class-validator';

export class GetAllUserFilterDto {
  @IsNumber()
  @IsOptional()
  skip?: number;

  @IsNumber()
  @IsOptional()
  take?: number;
}

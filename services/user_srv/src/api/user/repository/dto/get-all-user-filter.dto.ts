import { IsNumber, IsOptional, IsUUID } from 'class-validator';

export class GetAllUserFilterDto {
  @IsUUID()
  authUuid: string;

  @IsNumber()
  @IsOptional()
  skip?: number;

  @IsNumber()
  @IsOptional()
  take?: number;
}

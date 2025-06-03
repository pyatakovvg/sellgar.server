import { IsUUID, IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsUUID()
  variantUuid: string;

  @IsNumber()
  count: number;

  @IsBoolean()
  showing: boolean;

  @IsNumber()
  @IsOptional()
  price?: string;
}

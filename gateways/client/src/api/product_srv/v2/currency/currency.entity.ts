import { Type, Expose } from 'class-transformer';
import { IsUUID, IsString, ValidateNested, IsNumber } from 'class-validator';

export class CurrencyEntity {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsString()
  code: string;

  @Expose()
  @IsString()
  name: string;
}

class MetaEntity {
  @Expose()
  @IsNumber()
  totalRows: number;
}

export class CurrencyResultEntity {
  @Expose()
  @ValidateNested()
  @Type(() => CurrencyEntity)
  data: CurrencyEntity[];

  @Expose()
  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}

import { PartialType } from '@nestjs/swagger';

import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

import { CreateShopDto } from './create-shop.dto';

export class UpdateShopDto extends PartialType(CreateShopDto) {
  @IsString()
  @IsNotEmpty()
  uuid: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}

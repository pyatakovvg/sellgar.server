import { ApiProperty } from '@nestjs/swagger';

import { Company } from '@/prisma/client';

import { ShopEntity } from '@/api/v1/shop/entities/shop.entity';

export class CompanyEntity implements Company {
  @ApiProperty({ required: true })
  uuid: string;

  @ApiProperty({ required: true, minLength: 1, maxLength: 256 })
  name: string;

  @ApiProperty({ required: true, minLength: 2 })
  country: string;

  @ApiProperty({ required: true })
  district: string;

  @ApiProperty({ required: true })
  region: string;

  @ApiProperty({ required: true })
  city: string;

  @ApiProperty({ required: true, minLength: 1 })
  legalAddress: string;

  @ApiProperty({ required: true, minLength: 1 })
  actualAddress: string;

  @ApiProperty({ required: true, minLength: 6, maxLength: 6 })
  postalCode: number;

  @ApiProperty({ required: true, minLength: 12 })
  supportPhone: string;

  @ApiProperty({ required: true })
  supportEmail: string;

  @ApiProperty({ required: true, minLength: 12 })
  managerPhone: string;

  @ApiProperty({ required: true })
  managerEmail: string;

  @ApiProperty({ required: true, minLength: 12 })
  orderPhone: string;

  @ApiProperty({ required: true })
  orderEmail: string;

  @ApiProperty({ required: true })
  replayToEmail: string;

  @ApiProperty({ required: true, minLength: 4, maxLength: 4 })
  startYear: number;

  @ApiProperty({ isArray: true, required: false })
  shops?: ShopEntity[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

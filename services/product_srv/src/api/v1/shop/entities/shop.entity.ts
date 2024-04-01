import { ApiProperty } from '@nestjs/swagger';

import { Shop } from '@/prisma/client';

import { CompanyEntity } from '@/api/v1/company/entities/company.entity';

export class ShopEntity implements Omit<Shop, 'companyUuid'> {
  @ApiProperty({ required: true })
  uuid: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  address: string | null;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  company: CompanyEntity;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;
}

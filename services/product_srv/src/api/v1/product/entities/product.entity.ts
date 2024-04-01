import { ApiProperty } from '@nestjs/swagger';

import { Product } from '@/prisma/client';

export class ProductEntity implements Product {
  @ApiProperty({ required: true })
  uuid: string;

  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty()
  brandCode: string;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;
}

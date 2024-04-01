import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Prisma } from '@/prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

import { UpdateProductDto } from './dto/update-product.dto';

export interface IProductFindAllParams {
  skip?: number;
  take?: number;
  cursor?: Prisma.ProductWhereUniqueInput;
  where?: Prisma.ProductWhereInput;
  orderBy?: Prisma.ProductOrderByWithRelationInput;
}

const productSelect: Prisma.ProductSelect = {
  uuid: true,
  title: true,
  description: true,
  prices: {
    select: {
      price: true,
      prevPrice: true,
      description: true,
      phase: true,
      currency: {
        select: {
          code: true,
          value: true,
          description: true,
        },
      },
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  },
  attributeOnProduct: {
    select: {
      attribute: {
        select: {
          code: true,
          name: true,
          description: true,
          unit: {
            select: {
              code: true,
              value: true,
              description: true,
            },
          },
        },
      },
      value: {
        select: {
          value: true,
        },
      },
    },
  },
  categoryOnProduct: {
    select: {
      category: {
        select: {
          code: true,
          title: true,
          description: true,
          parent: {
            select: {
              code: true,
              title: true,
              description: true,
              parent: {
                select: {
                  code: true,
                  title: true,
                  description: true,
                  parent: {
                    select: {
                      code: true,
                      title: true,
                      description: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  brand: {
    select: {
      code: true,
      name: true,
      description: true,
    },
  },
  updatedAt: true,
  createdAt: true,
};

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  count() {
    return this.prisma.product.count();
  }

  findAll() {
    return this.prisma.product.findMany({
      select: productSelect,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  create(params: IProductFindAllParams) {
    return 'This action adds a new shop';
  }

  findOne(uuid: string) {
    return this.prisma.product.findUnique({
      where: {
        uuid,
      },
      select: productSelect,
    });
  }

  update(uuid: string, updateЗкщвгсеDto: UpdateProductDto) {
    return `This action updates a #${uuid} shop`;
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} shop`;
  }
}

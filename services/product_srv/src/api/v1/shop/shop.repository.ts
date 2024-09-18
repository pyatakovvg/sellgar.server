import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

@Injectable()
export class ShopRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createShopDto: CreateShopDto) {
    return this.prisma.shop.create({
      select: {
        uuid: true,
        name: true,
        address: true,
        isActive: true,
        company: {
          select: {
            uuid: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
      data: {
        name: createShopDto.name,
        address: createShopDto.address,
        isActive: false,
        companyUuid: createShopDto.company.uuid,
      },
    });
  }

  count() {
    return this.prisma.shop.count();
  }

  findAll() {
    return this.prisma.shop.findMany({
      select: {
        uuid: true,
        name: true,
        address: true,
        isActive: true,
        company: {
          select: {
            uuid: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  findOne(uuid: string) {
    return this.prisma.shop.findUnique({
      select: {
        uuid: true,
        name: true,
        address: true,
        isActive: true,
        company: {
          select: {
            uuid: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
      where: {
        uuid,
      },
    });
  }

  update(uuid: string, updateShopDto: UpdateShopDto) {
    return this.prisma.shop.update({
      where: {
        uuid,
      },
      select: {
        uuid: true,
        name: true,
        address: true,
        isActive: true,
        company: {
          select: {
            uuid: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
      data: {
        name: updateShopDto.name,
        address: updateShopDto.address,
        isActive: updateShopDto.isActive,
        companyUuid: updateShopDto.company.uuid,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }
}

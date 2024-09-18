import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyRepository {
  constructor(private prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({
      data: createCompanyDto,
    });
  }

  count() {
    return this.prisma.company.count();
  }

  findAllByFilter() {
    return this.prisma.company.findMany({
      select: {
        uuid: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        shops: {
          select: {
            uuid: true,
            name: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(uuid: string) {
    return this.prisma.company.findUnique({
      where: {
        uuid,
      },
      include: {
        shops: {
          select: {
            uuid: true,
            name: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });
  }

  update(uuid: string, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.company.update({
      where: {
        uuid,
      },
      data: updateCompanyDto,
    });
  }

  remove(uuid: string) {
    return this.prisma.company.delete({
      where: {
        uuid,
      },
    });
  }
}

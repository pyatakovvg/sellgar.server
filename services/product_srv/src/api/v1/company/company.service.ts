import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({
      data: createCompanyDto,
    });
  }

  findAllByFilter() {
    return this.prisma.company.findMany({
      select: {
        uuid: true,
        name: true,
        shops: {
          select: {
            uuid: true,
            name: true,
            isActive: true,
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

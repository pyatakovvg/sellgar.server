import { Injectable } from '@nestjs/common';

import { Prisma } from '@/prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

import { PermissionCreateDto } from './dto/permission-create.dto';
import { PermissionUpdateDto } from './dto/permission-update.dto';
import { GetAllPermissionFilterDto } from './dto/get-all-permission-filter.dto';

import { PermissionEntity } from './entity/permission.entity';

@Injectable()
export class PermissionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count(params: GetAllPermissionFilterDto): Promise<number> {
    return this.prismaService.permission.count({
      skip: params.skip,
      take: params.take,
    });
  }

  findAll(params: GetAllPermissionFilterDto): Promise<PermissionEntity[]> {
    return this.prismaService.permission.findMany({
      select: {
        code: true,
        displayName: true,
      },
      skip: params.skip,
      take: params.take,
    });
  }

  findOneByFilter(where: Prisma.PermissionWhereInput): Promise<PermissionEntity> {
    return this.prismaService.permission.findFirst({
      select: {
        code: true,
        displayName: true,
      },
      where,
    });
  }

  create(data: PermissionCreateDto) {
    return this.prismaService.permission.create({
      data: {
        code: data.code,
        displayName: data.displayName,
      },
    });
  }

  update(code: string, data: PermissionUpdateDto) {
    return this.prismaService.permission.update({
      where: {
        code,
      },
      data: {
        code: data.code,
        displayName: data.displayName,
      },
    });
  }
}

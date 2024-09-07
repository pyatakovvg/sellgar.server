import { Injectable } from '@nestjs/common';

import { Prisma } from '@/prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

import { RoleCreateDto } from './dto/role-create.dto';
import { RoleUpdateDto } from './dto/role-update.dto';
import { GetAllRoleFilterDto } from './dto/get-all-role-filter.dto';

import { RoleEntity } from './entity/role.entity';

@Injectable()
export class RoleRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count(params: GetAllRoleFilterDto): Promise<number> {
    return this.prismaService.user.count({
      skip: params.skip,
      take: params.take,
    });
  }

  findAll(params: GetAllRoleFilterDto): Promise<RoleEntity[]> {
    return this.prismaService.role.findMany({
      select: {
        code: true,
        displayName: true,
        permissions: true,
      },
      skip: params.skip,
      take: params.take,
    });
  }

  findOneByFilter(where: Prisma.RoleWhereInput): Promise<RoleEntity> {
    return this.prismaService.role.findFirst({
      select: {
        code: true,
        displayName: true,
        permissions: true,
      },
      where,
    });
  }

  create(data: RoleCreateDto): Promise<RoleEntity> {
    return this.prismaService.role.create({
      include: {
        permissions: true,
      },
      data: {
        code: data.code,
        displayName: data.displayName,
        permissions: {
          connect: data.permissions ? data.permissions.map((code) => ({ code })) : undefined,
        },
      },
    });
  }

  update(code: string, data: RoleUpdateDto): Promise<RoleEntity> {
    return this.prismaService.role.update({
      where: {
        code,
      },
      include: {
        permissions: true,
      },
      data: {
        code: data.code,
        displayName: data.displayName,
        permissions: {
          set: data.permissions
            ? data.permissions.map((code) => ({
                code,
              }))
            : undefined,
        },
      },
    });
  }
}

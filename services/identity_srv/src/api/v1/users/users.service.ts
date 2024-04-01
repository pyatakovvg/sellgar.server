import { Injectable } from '@nestjs/common';

import { Prisma } from '@/prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { createHmac } from 'crypto';
import { ConfigService } from '@nestjs/config';

export interface IUserFindAllParams {
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput;
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  count(params: IUserFindAllParams) {
    return this.prisma.user.count({
      where: params.where,
      skip: params.skip,
      take: params.take,
      cursor: params.cursor,
    });
  }

  findAll(params: IUserFindAllParams) {
    return this.prisma.user.findMany({
      select: {
        uuid: true,
        email: true,
        isBlocked: true,
        createdAt: true,
        updatedAt: true,
        roles: {
          include: {
            permissions: true,
          },
        },
        claims: true,
        person: true,
      },
      where: params.where,
      skip: params.skip,
      take: params.take,
      cursor: params.cursor,
      orderBy: params.orderBy,
    });
  }

  findOneByFilter(where: Prisma.UserWhereInput) {
    return this.prisma.user.findFirst({
      select: {
        uuid: true,
        email: true,
        isBlocked: true,
        createdAt: true,
        updatedAt: true,
        roles: {
          include: {
            permissions: true,
          },
        },
        claims: true,
        person: {
          select: {
            uuid: true,
            firstName: true,
            middleName: true,
            lastName: true,
            birthday: true,
            sex: true,
          },
        },
      },
      where,
    });
  }

  create(data: UserCreateDto) {
    return this.prisma.user.create({
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
        claims: true,
        person: true,
      },
      data: {
        email: data.email,
        roles: {
          connect: data.roles.length ? data.roles.map((role) => ({ code: role })) : [],
        },
        claims: { connect: data?.claims },
        person: {
          create: data?.person,
        },
      },
    });
  }

  update(uuid: string, data: UserUpdateDto) {
    return this.prisma.user.update({
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
        claims: true,
        person: true,
      },
      where: {
        uuid,
      },
      data: {
        email: data.email,
        roles: { set: data.roles.length ? data.roles.map((role) => ({ code: role })) : [] },
        claims: {
          set: data?.claims,
        },
        person: {
          update: data?.person,
        },
      },
    });
  }
}

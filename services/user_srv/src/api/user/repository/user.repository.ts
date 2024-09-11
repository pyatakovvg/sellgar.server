import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { createHmac } from 'crypto';

import { Prisma } from '@/prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { GetAllUserFilterDto } from './dto/get-all-user-filter.dto';

@Injectable()
export class UserRepository {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  count(params: GetAllUserFilterDto): Promise<number> {
    return this.prismaService.user.count({
      skip: params.skip,
      take: params.take,
    });
  }

  findAll(params: GetAllUserFilterDto) {
    return this.prismaService.user.findMany({
      select: {
        uuid: true,
        name: true,
        patronymic: true,
        surname: true,
        sex: true,
        birthday: true,
        createdAt: true,
        updatedAt: true,
      },
      skip: params.skip,
      take: params.take,
    });
  }

  findOneByFilter(where: Prisma.UserWhereInput) {
    return this.prismaService.user.findFirst({
      select: {
        uuid: true,
        name: true,
        patronymic: true,
        surname: true,
        sex: true,
        birthday: true,
        createdAt: true,
        updatedAt: true,
      },
      where,
    });
  }

  create(data: UserCreateDto) {
    return this.prismaService.user.create({
      select: {
        uuid: true,
        name: true,
        patronymic: true,
        surname: true,
        sex: true,
        birthday: true,
        createdAt: true,
        updatedAt: true,
      },
      data,
    });
  }

  update(uuid: string, data: UserUpdateDto) {
    return this.prismaService.user.update({
      select: {
        uuid: true,
        name: true,
        patronymic: true,
        surname: true,
        sex: true,
        birthday: true,
        createdAt: true,
        updatedAt: true,
      },
      where: {
        uuid,
      },
      data,
    });
  }
}

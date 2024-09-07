import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { createHmac } from 'crypto';

import { Prisma } from '@/prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { GetAllUserFilterDto } from './dto/get-all-user-filter.dto';

import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  public hashPassword(password: string): string {
    const md5Hash = createHmac('sha512', this.configService.get('PASSWORD_SALT'));
    return md5Hash.update(password).digest('hex');
  }

  count(params: GetAllUserFilterDto): Promise<number> {
    return this.prismaService.user.count({
      skip: params.skip,
      take: params.take,
    });
  }

  findAll(params: GetAllUserFilterDto): Promise<UserEntity[]> {
    return this.prismaService.user.findMany({
      select: {
        uuid: true,
        login: true,
        createdAt: true,
        updatedAt: true,
        roles: {
          include: {
            permissions: true,
          },
        },
      },
      skip: params.skip,
      take: params.take,
    });
  }

  findOneByFilter(where: Prisma.UserWhereInput): Promise<UserEntity> {
    return this.prismaService.user.findFirst({
      select: {
        uuid: true,
        login: true,
        createdAt: true,
        updatedAt: true,
        roles: {
          include: {
            permissions: true,
          },
        },
      },
      where,
    });
  }

  create(data: UserCreateDto) {
    return this.prismaService.user.create({
      select: {
        uuid: true,
        login: true,
        roles: {
          include: {
            permissions: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
      data: {
        login: data.login,
        password: this.hashPassword(data.password),
        roles: {
          connect: data.roles ? data.roles.map((role) => ({ code: role })) : undefined,
        },
      },
    });
  }

  changePassword(uuid: string, password: string): Promise<UserEntity> {
    return this.prismaService.user.update({
      where: {
        uuid,
      },
      select: {
        uuid: true,
        login: true,
        roles: {
          include: {
            permissions: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
      data: {
        password: this.hashPassword(password),
      },
    });
  }

  update(uuid: string, data: UserUpdateDto) {
    return this.prismaService.user.update({
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
      },
      where: {
        uuid,
      },
      data: {
        login: data.login,
        roles: { set: data.roles ? data.roles.map((role) => ({ code: role })) : undefined },
      },
    });
  }
}

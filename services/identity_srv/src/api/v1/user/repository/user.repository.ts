import { Injectable } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { UserEntity } from '../user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getByUuid(uuid: string) {
    const result = await this.prismaService.user.findUniqueOrThrow({
      where: {
        uuid,
      },
      select: {
        uuid: true,
        login: true,
        isBlocked: true,
        roles: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(UserEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}

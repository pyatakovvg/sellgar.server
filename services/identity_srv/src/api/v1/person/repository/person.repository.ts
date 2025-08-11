import { Injectable } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { PersonEntity } from '../person.entity';

@Injectable()
export class PersonRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getByUserUuid(userUuid: string) {
    const result = await this.prismaService.person.findUniqueOrThrow({
      where: {
        userUuid,
      },
      select: {
        uuid: true,
        name: true,
        surname: true,
        patronymic: true,
        birthday: true,
        sex: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(PersonEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async getByUuid(uuid: string) {
    const result = await this.prismaService.person.findUniqueOrThrow({
      where: {
        uuid,
      },
      select: {
        uuid: true,
        name: true,
        surname: true,
        patronymic: true,
        birthday: true,
        sex: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(PersonEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}

import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { FolderEntity } from '../folder.entity';

@Injectable()
export class FolderRepository {
  constructor(private readonly prisma: PrismaService) {}

  count(parentUuid: string = null) {
    return this.prisma.folder.count({
      where: {
        parentUuid,
      },
    });
  }

  findAll(parentUuid: string = null) {
    return this.prisma.folder.findMany({
      select: {
        uuid: true,
        name: true,
      },
      where: {
        parentUuid,
      },
    });
  }

  findByUuid(uuid: string) {
    return this.prisma.folder.findUnique({
      select: {
        uuid: true,
        name: true,
      },
      where: {
        uuid,
      },
    });
  }
}

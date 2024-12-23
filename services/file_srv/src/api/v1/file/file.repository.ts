import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { FileDto } from './dto/file.dto';

@Injectable()
export class FileRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count(folderUuid: string) {
    return folderUuid
      ? this.prismaService.file.count({
          where: {
            dir: {
              some: {
                uuid: folderUuid,
              },
            },
          },
        })
      : 0;
  }

  getAll(folderUuid: string) {
    return folderUuid
      ? this.prismaService.file.findMany({
          where: {
            dir: {
              some: {
                uuid: folderUuid,
              },
            },
          },
        })
      : [];
  }

  create(fileDto: FileDto) {
    return this.prismaService.file.create({
      select: {
        uuid: true,
      },
      data: fileDto,
    });
  }
}

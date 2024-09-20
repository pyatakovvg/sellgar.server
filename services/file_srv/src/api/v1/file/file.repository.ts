import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { FileDto } from './dto/file.dto';

@Injectable()
export class FileRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(fileDto: FileDto) {
    return this.prismaService.file.create({
      select: {
        uuid: true,
      },
      data: fileDto,
    });
  }
}

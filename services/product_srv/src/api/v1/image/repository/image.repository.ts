import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImageRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(dto: CreateImageDto) {
    return this.prismaService.image.create({
      data: {
        uuid: dto.uuid,
        fileName: dto.name,
      },
      select: {
        uuid: true,
        fileName: true,
      },
    });
  }

  update(dto: UpdateImageDto) {
    return this.prismaService.image.update({
      where: {
        uuid: dto.uuid,
      },
      data: {
        uuid: dto.uuid,
        fileName: dto.name,
      },
      select: {
        uuid: true,
        fileName: true,
      },
    });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}

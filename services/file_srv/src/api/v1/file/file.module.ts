import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaService } from '@/prisma/prisma.service';

import { FileService } from './file.service';
import { FileRepository } from './file.repository';
import { FileController } from './file.controller';

import { MinioClientRepository } from './minio-client.repository';

@Module({
  imports: [ConfigModule],
  controllers: [FileController],
  providers: [PrismaService, FileService, FileRepository, MinioClientRepository],
})
export class FileModule {}

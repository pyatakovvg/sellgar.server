import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { FolderService } from './folder.service';
import { FolderRepository } from './folder.repository';
import { FolderController } from './folder.controller';

@Module({
  providers: [PrismaService, FolderService, FolderRepository],
  controllers: [FolderController],
})
export class FolderModule {}

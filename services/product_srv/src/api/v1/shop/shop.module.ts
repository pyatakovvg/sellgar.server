import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { ShopService } from './shop.service';
import { ShopRepository } from './shop.repository';
import { ShopController } from './shop.controller';

@Module({
  controllers: [ShopController],
  providers: [PrismaService, ShopService, ShopRepository],
})
export class ShopModule {}

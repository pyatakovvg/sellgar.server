import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { CategoryController } from './controller/category.controller';
import { CategoryService } from './service/category.service';
import { CategoryGateway } from './gateway/category.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, CategoryService, CategoryGateway],
  controllers: [CategoryController],
})
export class CategoryModule {}

import { Module } from '@nestjs/common';

import { CategoryService } from './service/category.service';
import { CategoryRepository } from './repository/category.repository';
import { CategoryController } from './controller/category.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
})
export class CategoryModule {}

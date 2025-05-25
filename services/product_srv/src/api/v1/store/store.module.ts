import { Module } from '@nestjs/common';

import { StoreService } from './service/store.service';
import { StoreRepository } from './repository/store.repository';
import { StoreController } from './controller/store.controller';

@Module({
  controllers: [StoreController],
  providers: [StoreService, StoreRepository],
})
export class StoreModule {}

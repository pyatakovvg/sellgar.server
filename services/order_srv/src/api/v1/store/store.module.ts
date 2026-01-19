import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StoreConsumer } from './controller/store.consumer';
import { StoreService } from './service/store.service';
import { StoreRepository } from './repository/store.repository';

import { StoreModel } from './store.model';

@Module({
  imports: [TypeOrmModule.forFeature([StoreModel])],
  controllers: [StoreConsumer],
  providers: [StoreService, StoreRepository],
})
export class StoreModule {}

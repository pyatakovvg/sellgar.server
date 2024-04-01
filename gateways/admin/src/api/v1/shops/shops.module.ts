import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';

@Module({
  imports: [HttpModule],
  controllers: [ShopsController],
  providers: [ShopsService],
})
export class ShopsModule {}

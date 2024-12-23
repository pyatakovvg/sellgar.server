import { Module } from '@nestjs/common';

import { PriceService } from './service/price.service';
import { PriceRepository } from './repository/price.repository';
import { PriceController } from './controller/price.controller';

@Module({
  controllers: [PriceController],
  providers: [PriceService, PriceRepository],
})
export class PriceModule {}

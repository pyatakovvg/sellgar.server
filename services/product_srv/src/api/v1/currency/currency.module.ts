import { Module } from '@nestjs/common';

import { CurrencyService } from './service/currency.service';
import { CurrencyRepository } from './repository/currency.repository';
import { CurrencyController } from './controller/currency.controller';

@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService, CurrencyRepository],
})
export class CurrencyModule {}

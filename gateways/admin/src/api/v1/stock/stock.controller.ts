import { ConfigService } from '@nestjs/config';
import { Controller, Get } from '@nestjs/common';

import { StockService } from './stock.service';

@Controller('users')
export class StockController {
  constructor(
    private readonly config: ConfigService,
    private readonly stockService: StockService,
  ) {}

  @Get()
  findAll() {
    return this.stockService.findAll();
  }
}

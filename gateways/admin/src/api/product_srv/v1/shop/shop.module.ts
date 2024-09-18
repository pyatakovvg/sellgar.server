import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { ShopGateway } from './shop.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, ShopService, ShopGateway],
  controllers: [ShopController],
})
export class ShopModule {}

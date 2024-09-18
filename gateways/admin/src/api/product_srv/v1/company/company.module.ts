import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyGateway } from './company.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, CompanyService, CompanyGateway],
  controllers: [CompanyController],
})
export class CompanyModule {}

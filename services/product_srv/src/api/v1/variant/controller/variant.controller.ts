import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern } from '@nestjs/microservices';

import { VariantService } from '../service/variant.service';

@ApiTags('Product variant')
@Controller('/variants')
export class VariantController {
  constructor(private readonly productVariantService: VariantService) {}

  @MessagePattern({ cmd: 'product.variant.findAll' })
  findAll() {
    return this.productVariantService.findAll();
  }

  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.productVariantService.findByUuid(uuid);
  }
}

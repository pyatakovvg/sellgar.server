import { Controller, Get, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { VariantService } from '../service/variant.service';

@Controller()
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

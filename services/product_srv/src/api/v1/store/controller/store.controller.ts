import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateProductDto } from '../repository/dto/create-product.dto';
import { UpdateProductDto } from '../repository/dto/update-product.dto';

import { StoreService } from '../service/store.service';

@Controller()
@ApiTags('Products')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @MessagePattern({ cmd: 'store.findAll' })
  findAll() {
    return this.storeService.findAll();
  }

  @MessagePattern({ cmd: 'store.findByUuid' })
  findByUuid(@Payload('uuid') uuid: string) {
    return this.storeService.findByUuid(uuid);
  }

  @MessagePattern({ cmd: 'store.create' })
  create(@Payload() dto: CreateProductDto) {
    return this.storeService.create(dto);
  }

  @MessagePattern({ cmd: 'store.update' })
  update(@Payload('uuid') uuid: string, @Payload() dto: UpdateProductDto) {
    return this.storeService.update(uuid, dto);
  }

  @MessagePattern({ cmd: 'store.delete' })
  remove(@Payload('uuid') uuid: string) {
    return this.storeService.remove(uuid);
  }
}

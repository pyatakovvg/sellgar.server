import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateProductDto } from '../repository/dto/create-product.dto';
import { UpdateProductDto } from '../repository/dto/update-product.dto';

import { ProductService } from '../service/product.service';

@Controller()
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'product.findAll' })
  findAll() {
    return this.productService.findAll();
  }

  @MessagePattern({ cmd: 'product.findByUuid' })
  findByUuid(@Payload('uuid') uuid: string) {
    return this.productService.findByUuid(uuid);
  }

  @MessagePattern({ cmd: 'product.create' })
  create(@Payload() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @MessagePattern({ cmd: 'product.update' })
  update(@Payload('uuid') uuid: string, @Payload() dto: UpdateProductDto) {
    return this.productService.update(uuid, dto);
  }

  @MessagePattern({ cmd: 'product.delete' })
  remove(@Payload('uuid') uuid: string) {
    return this.productService.remove(uuid);
  }
}

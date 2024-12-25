import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

import { CreateImageDto } from '../repository/dto/create-image.dto';
import { UpdateImageDto } from '../repository/dto/update-image.dto';

import { ImageService } from '../service/image.service';

@Controller()
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @MessagePattern('file.create')
  create(@Payload() dto: CreateImageDto) {
    console.log(123, dto);
    return this.imageService.create(dto);
  }

  @MessagePattern('file.update')
  update(@Payload() dto: UpdateImageDto) {
    return this.imageService.update(dto);
  }

  @MessagePattern('file.delete')
  remove(@Payload('uuid') uuid: string) {
    return this.imageService.remove(uuid);
  }
}

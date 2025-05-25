import { Injectable } from '@nestjs/common';

import { CreatePropertyDto } from '../repository/dto/create-property.dto';
import { UpdatePropertyDto } from '../repository/dto/update-property.dto';

import { PropertyRepository } from '../repository/property.repository';

@Injectable()
export class PropertyService {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  async findAll() {
    return Promise.all([this.propertyRepository.findAll(), this.propertyRepository.count()]).then(([data, count]) => {
      return {
        data: data,
        meta: {
          totalRows: count,
        },
      };
    });
  }

  findByUuid(uuid: string) {
    return this.propertyRepository.findByUuid(uuid);
  }

  create(dto: CreatePropertyDto) {
    return this.propertyRepository.create(dto);
  }

  update(dto: UpdatePropertyDto) {
    return this.propertyRepository.update(dto);
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} category`;
  }
}

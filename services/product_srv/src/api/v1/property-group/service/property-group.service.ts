import { Injectable } from '@nestjs/common';

import { CreatePropertyGroupDto } from '../repository/dto/create-property-group.dto';
import { UpdatePropertyGroupDto } from '../repository/dto/update-property-group.dto';

import { PropertyGroupRepository } from '../repository/property-group.repository';

@Injectable()
export class PropertyGroupService {
  constructor(private readonly propertyGroupRepository: PropertyGroupRepository) {}

  async findAll() {
    return Promise.all([this.propertyGroupRepository.findAll(), this.propertyGroupRepository.count()]).then(
      ([data, count]) => {
        return {
          data: data,
          meta: {
            totalRows: count,
          },
        };
      },
    );
  }

  findByUuid(uuid: string) {
    return this.propertyGroupRepository.findByUuid(uuid);
  }

  create(dto: CreatePropertyGroupDto) {
    return this.propertyGroupRepository.create(dto);
  }

  update(dto: UpdatePropertyGroupDto) {
    return this.propertyGroupRepository.update(dto);
  }

  remove(uuid: string) {
    return this.propertyGroupRepository.remove(uuid);
  }
}

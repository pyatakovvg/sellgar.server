import { Injectable } from '@nestjs/common';

import { CreateUnitDto } from '../repository/dto/create-unit.dto';
import { UpdateUnitDto } from '../repository/dto/update-unit.dto';

import { UnitRepository } from '../repository/unit.repository';

@Injectable()
export class UnitService {
  constructor(private readonly unitRepository: UnitRepository) {}

  async findAll() {
    return Promise.all([this.unitRepository.findAll(), this.unitRepository.count()]).then(([data, count]) => {
      return {
        data: data,
        meta: {
          totalRows: count,
        },
      };
    });
  }

  findByUuid(uuid: string) {
    return this.unitRepository.findByUuid(uuid);
  }

  create(dto: CreateUnitDto) {
    return this.unitRepository.create(dto);
  }

  update(dto: UpdateUnitDto) {
    return this.unitRepository.update(dto);
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} category`;
  }
}

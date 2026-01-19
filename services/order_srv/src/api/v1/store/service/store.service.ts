import { Injectable } from '@nestjs/common';

import { StoreRepository } from '../repository/store.repository';

import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}

  async create(dto: CreateDto) {
    await this.storeRepository.create(dto);
  }

  async update(dto: UpdateDto) {
    await this.storeRepository.update(dto);
  }
}

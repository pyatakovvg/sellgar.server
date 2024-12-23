import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async findAll() {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/categories')
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async findByUuid(uuid: string) {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/categories/' + uuid)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async update(uuid: string, dto: UpdateCategoryDto) {
    const request = this.httpService
      .patch(this.config.get('API_PRODUCT_SRV') + '/categories/' + uuid, dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async create(dto: CreateCategoryDto) {
    const request = this.httpService
      .post(this.config.get('API_PRODUCT_SRV') + '/categories', dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}

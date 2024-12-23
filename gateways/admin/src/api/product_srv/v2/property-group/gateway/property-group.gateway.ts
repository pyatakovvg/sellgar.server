import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

import { UpdatePropertyGroupDto } from './dto/update-property-group.dto';
import { CreatePropertyGroupDto } from './dto/create-property-group.dto';

@Injectable()
export class PropertyGroupGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async findAll() {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/properties/groups')
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async findByUuid(uuid: string) {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/properties/groups/' + uuid)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async update(uuid: string, dto: UpdatePropertyGroupDto) {
    const request = this.httpService
      .patch(this.config.get('API_PRODUCT_SRV') + '/properties/groups/' + uuid, dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async create(dto: CreatePropertyGroupDto) {
    const request = this.httpService
      .post(this.config.get('API_PRODUCT_SRV') + '/properties/groups/', dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}

import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { PassThrough } from 'stream';

import { GetFileQueryDto } from './dto/get-file-query.dto';

import { FileGateway } from './file.gateway';

@Injectable()
export class FileService {
  constructor(private readonly fileGateway: FileGateway) {}

  getAll(folderUuid?: string) {
    return this.fileGateway.getAll(folderUuid);
  }

  upload(tunnel: PassThrough, headers: any) {
    return this.fileGateway.upload(tunnel, headers);
  }

  getByUuid(uuid: string, query: GetFileQueryDto): Promise<AxiosResponse> {
    return this.fileGateway.getByUuid(uuid, query);
  }
}

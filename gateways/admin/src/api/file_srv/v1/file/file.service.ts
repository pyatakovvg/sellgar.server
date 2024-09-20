import { Injectable } from '@nestjs/common';

import { FileGateway } from './file.gateway';
import { PassThrough } from 'stream';

@Injectable()
export class FileService {
  constructor(private readonly fileGateway: FileGateway) {}

  getAll() {
    return this.fileGateway.getAll();
  }

  upload(tunnel: PassThrough, headers: any) {
    return this.fileGateway.upload(tunnel, headers);
  }
}

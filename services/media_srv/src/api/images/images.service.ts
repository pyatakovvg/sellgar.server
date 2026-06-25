import { Injectable } from '@nestjs/common';

import { FileMetadataGateway } from '../../file-metadata/file-metadata.gateway';
import { MinioStorageRepository } from '../../storage/minio-storage.repository';

@Injectable()
export class ImagesService {
  constructor(
    private readonly fileMetadataGateway: FileMetadataGateway,
    private readonly storageRepository: MinioStorageRepository,
  ) {}

  async getByFileUuid(fileUuid: string) {
    const file = await this.fileMetadataGateway.findByUuid(fileUuid);
    const stream = await this.storageRepository.getObject(file.storageKey);

    return { file, stream };
  }
}

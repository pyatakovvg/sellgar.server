import { Injectable } from '@nestjs/common';

import { FileUploadDto } from './dto/file-upload.dto';

import { FileRepository } from './file.repository';
import { MinioClientRepository } from './minio-client.repository';

@Injectable()
export class FileService {
  constructor(
    private readonly fileRepository: FileRepository,
    private readonly minioClientRepository: MinioClientRepository,
  ) {}

  upload(fileUploadDto: FileUploadDto) {
    this.minioClientRepository.upload(fileUploadDto.fieldname, Buffer.from(fileUploadDto.buffer), {});

    return this.fileRepository.create({
      name: fileUploadDto.fieldname,
      size: fileUploadDto.size,
      mime: fileUploadDto.mimetype,
    });
  }
}

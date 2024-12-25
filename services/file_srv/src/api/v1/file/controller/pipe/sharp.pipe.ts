import { Injectable, PipeTransform } from '@nestjs/common';

import * as path from 'path';
import * as sharp from 'sharp';

import { FileUploadDto } from '../../repository/dto/file-upload.dto';

@Injectable()
export class SharpPipe implements PipeTransform<FileUploadDto, Promise<FileUploadDto>> {
  async transform(image: FileUploadDto, meta: any): Promise<FileUploadDto> {
    const originalName = path.parse(image.originalname).name;
    const fileName = Date.now() + '-' + originalName + '.webp';

    return {
      ...image,
      mimetype: 'image/webp',
      fieldname: fileName,
      buffer: await sharp(image.buffer).resize(800).webp({ effort: 3 }).toBuffer(),
    };
  }
}

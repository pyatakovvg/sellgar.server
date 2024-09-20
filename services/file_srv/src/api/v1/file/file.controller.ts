import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { FileService } from './file.service';

import { FileUploadDto } from './dto/file-upload.dto';

import { SharpPipe } from './pipe/sharp.pipe';

@Controller('v1/files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile(SharpPipe) fileUploadDto: FileUploadDto) {
    return this.fileService.upload(fileUploadDto);
  }
}

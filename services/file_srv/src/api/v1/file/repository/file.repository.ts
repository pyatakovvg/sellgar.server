import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { FileDto } from './dto/file.dto';
import { FileModel } from '../file.model';
import { FolderModel } from '../../folder/folder.model';

@Injectable()
export class FileRepository {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  count(folderUuid: string) {
    const builder = this.dataSource.createQueryBuilder(FileModel, 'file');

    if (folderUuid) {
      builder.where('file.folderUuid = :folderUuid', { folderUuid });
    } else {
      builder.where('file.folderUuid IS NULL');
    }

    return builder.getCount();
  }

  getAll(folderUuid: string) {
    const builder = this.dataSource
      .createQueryBuilder(FileModel, 'file')
      .select([
        'file.uuid',
        'file.name',
        'file.storageKey',
        'file.mime',
        'file.size',
        'file.folderUuid',
        'file.createdAt',
        'file.updatedAt',
      ])
      .orderBy('file.createdAt', 'DESC');

    if (folderUuid) {
      builder.where('file.folderUuid = :folderUuid', { folderUuid });
    } else {
      builder.where('file.folderUuid IS NULL');
    }

    return builder.getMany();
  }

  async create(fileDto: FileDto, folderUuid?: string) {
    if (folderUuid) {
      const folderExists = await this.dataSource
        .createQueryBuilder(FolderModel, 'folder')
        .where('folder.uuid = :folderUuid', { folderUuid })
        .getExists();

      if (!folderExists) {
        throw new NotFoundException(`Folder ${folderUuid} not found`);
      }
    }

    const runner = this.dataSource.createQueryRunner();

    await runner.connect();
    await runner.startTransaction();

    try {
      const insertResult = await runner.manager
        .createQueryBuilder()
        .insert()
        .into(FileModel)
        .values({
          name: fileDto.name,
          storageKey: fileDto.storageKey,
          mime: fileDto.mime,
          size: fileDto.size,
          folderUuid: folderUuid ?? null,
        })
        .execute();

      const uuid = insertResult.raw[0].uuid;

      const result = await runner.manager
        .createQueryBuilder(FileModel, 'file')
        .select([
          'file.uuid',
          'file.name',
          'file.storageKey',
          'file.mime',
          'file.size',
          'file.folderUuid',
          'file.createdAt',
          'file.updatedAt',
        ])
        .where('file.uuid = :uuid', { uuid })
        .getOneOrFail();

      await runner.commitTransaction();

      return result;
    } catch (error) {
      await runner.rollbackTransaction();
      throw error;
    } finally {
      await runner.release();
    }
  }

  findByUuid(uuid: string) {
    return this.dataSource
      .createQueryBuilder(FileModel, 'file')
      .select([
        'file.uuid',
        'file.name',
        'file.storageKey',
        'file.mime',
        'file.size',
        'file.folderUuid',
        'file.createdAt',
        'file.updatedAt',
      ])
      .where('file.uuid = :uuid', { uuid })
      .getOne();
  }
}

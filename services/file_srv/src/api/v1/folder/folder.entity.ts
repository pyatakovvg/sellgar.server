import { Folder } from '@/prisma/client';

export class FolderEntity implements Omit<Folder, 'parentUuid'> {
  uuid: string;

  name: string;

  parent: FolderEntity;

  children: FolderEntity[];
}

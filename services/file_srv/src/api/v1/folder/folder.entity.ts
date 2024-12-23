import { Dir } from '@/prisma/client';

export class FolderEntity implements Omit<Dir, 'parentUuid'> {
  uuid: string;

  name: string;

  parent: FolderEntity;

  children: FolderEntity[];
}

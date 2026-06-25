export interface FileMetadataEntity {
  uuid: string;
  name: string;
  storageKey: string;
  mime: string;
  size: number;
  folderUuid: string | null;
  createdAt: string;
  updatedAt: string;
}

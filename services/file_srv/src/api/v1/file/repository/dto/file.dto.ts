export interface FileDto {
  name: string;
  storageKey: string;
  mime: string;
  size: number;
  folderUuid?: string;
}

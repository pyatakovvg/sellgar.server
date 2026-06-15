# @service/file

`services/file_srv` - сервис файлов и папок. Он соединяет HTTP API, Prisma persistence и MinIO-хранилище.

## Что здесь находится

- `src/main.ts` - HTTP bootstrap с validation pipe.
- `src/app.module.ts` - `ConfigModule`, `MinioModule`, `PrismaModule`, `ApiV1Module`.
- `src/api/v1/file` - загрузка, получение и repository-слой файлов, включая MinIO client repository.
- `src/api/v1/folder` - операции с папками.
- `_prisma/schema.prisma` - Prisma-схема сервиса.

## Правила изменений

- Файловые метаданные и объектное хранение меняйте вместе: Prisma-сущности и MinIO-операции должны оставаться согласованными.
- При изменении upload/download DTO проверьте gateway file v1 в admin/client/mobile.
- Не храните клиентские правила доступа в сервисе, если они относятся только к конкретному gateway; сервис должен проверять доменный контракт.
- MinIO-настройки берутся из `MINIO_ENDPOINT`, `MINIO_PORT`, `MINIO_ACCESS_KEY`, `MINIO_SECRET_KEY`.

## Проверка

Основная проверка: `yarn workspace @service/file run build`.

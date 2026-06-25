# @service/file

`services/file_srv` - control-plane файлов и папок. Он владеет file metadata,
каталогами, lifecycle/status, upload intent/finalize и reference cleanup.

В текущем переходном состоянии здесь еще остается legacy MinIO upload/download.
Новая публичная доставка изображений уже должна идти через `services/media_srv`;
следующий срез - вынести запись/удаление bytes из `file_srv` в `media_srv`.

## Что здесь находится

- `src/main.ts` - HTTP bootstrap с validation pipe и RMQ command consumer.
- `src/app.module.ts` - `ConfigModule`, `TypeOrmModule`, `MinioModule`, `ApiV1Module`.
- `src/api/v1/file` - file metadata, legacy upload/download, TypeORM-модель и repository-слой файлов.
- `src/api/v1/folder` - операции с папками.

## Правила изменений

- Файловые метаданные и объектное хранение меняйте вместе: TypeORM-модели и MinIO-операции должны оставаться согласованными.
- При изменении upload/download DTO проверьте gateway file v1 в admin/client/mobile.
- `file_srv` не владеет связями файлов с товарами, вариантами или другими доменными сущностями. Такие связи хранят сервисы-владельцы домена, например `product_srv` через `variant_image`.
- После успешной загрузки файл может использоваться другими сервисами по UUID; публичный byte stream изображений должен идти через `media_srv`/CDN, а не через admin/client file endpoint.
- Внутреннюю коммуникацию с `media_srv` и доменными сервисами строить через RabbitMQ. Не передавать file bytes через Rabbit.
- Не храните клиентские правила доступа в сервисе, если они относятся только к конкретному gateway; сервис должен проверять доменный контракт.
- MinIO-настройки в этом сервисе считаются legacy до завершения переноса write/delete в `media_srv`.

## Проверка

Основная проверка: `yarn workspace @service/file run build`.

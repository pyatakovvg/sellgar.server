# @service/media

`services/media_srv` - data-plane сервис над MinIO для публичной доставки
изображений и будущих write/delete операций над объектами.

## Что здесь находится

- `src/api/images` - public image delivery endpoint для CDN origin.
- `src/file-metadata` - Rabbit adapter к `file_srv`, который получает metadata
  по `fileUuid`.
- `src/storage` - MinIO adapter. Здесь должны оставаться операции чтения,
  записи и удаления object bytes.

## Правила изменений

- Публичный CDN path использует `GET /images/:fileUuid`.
- Не храните каталожную модель и связи с товарами здесь. `product_srv` хранит
  `variant_image`, `file_srv` хранит file metadata, этот сервис работает с
  bytes/object storage.
- Write/delete endpoints должны быть internal-only или закрыты отдельной
  авторизацией; не открывайте их через `docker-compose-cdn.yaml`.
- RabbitMQ использовать для инфраструктурных событий/команд по metadata, но не
  для передачи bytes.
- HTTP здесь считается внешним data-plane API; внутренние обращения к
  `file_srv` идут через RabbitMQ.

## Проверка

Основная проверка: `yarn workspace @service/media run build`.

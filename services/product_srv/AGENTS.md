# @service/product

`services/product_srv` - доменный сервис каталога и покупательских операций. Он владеет товарами, вариантами, категориями, свойствами, брендами, изображениями, корзиной, заказами и справочниками.

## Что здесь находится

- `src/main.ts` - RMQ command queue и event queue bootstrap.
- `src/app.module.ts` - `ConfigModule`, PostgreSQL через TypeORM, `ApiV1Module`.
- `src/api/v1/product`, `variant`, `category`, `property`, `property-group`, `brand`, `image` - каталог и его структура.
- `src/api/v1/cart` и `order` - корзина и заказы.
- `src/api/v1/shop`, `store`, `price`, `currency`, `unit`, `user` - связанные справочники и ссылки на владельцев.

## Правила изменений

- Каталог и его связи изменяйте в сервисе-владельце, а gateway обновляйте как адаптеры внешнего API.
- Для TypeORM-частей поддерживайте согласованность `model`, `entity`, `repository`, `service`, `controller`.
- Изменения product v1 могут требовать синхронизации с gateway product v2, где внешний контракт может отличаться от внутренней версии.
- RMQ queues/exchange берутся из `AMQP_PRODUCT_SRV_COMMAND_QUEUE`, `AMQP_PRODUCT_SRV_EVENT_QUEUE`, `AMQP_EVENTS_EXCHANGE`.

## Проверка

Основная проверка: `yarn workspace @service/product run build`.

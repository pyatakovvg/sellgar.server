# @service/order

`services/order_srv` - сервис заказов и связанных торговых справочников. Он содержит операции по stores/shops, prices и currencies и поднимается как RMQ command/event microservice.

## Что здесь находится

- `src/main.ts` - RMQ command queue и event queue bootstrap.
- `src/app.module.ts` - `ConfigModule`, PostgreSQL через TypeORM, `ApiV1Module`.
- `src/api/v1/store` и `shop` - магазины и торговые точки.
- `src/api/v1/price` и `currency` - цены и валюты.

## Правила изменений

- Не смешивайте order/order-adjacent справочники с product catalog без явного контракта между сервисами.
- Для TypeORM-частей поддерживайте согласованность `model`, `entity`, `repository`, `service`, `controller`.
- Изменения stores/shops/price/currency должны сверяться с `services/product_srv` и gateway product v2, если там есть аналогичные внешние endpoint.
- RMQ queues/exchange берутся из `AMQP_ORDER_SRV_COMMAND_QUEUE`, `AMQP_ORDER_SRV_EVENT_QUEUE`, `AMQP_EVENTS_EXCHANGE`.

## Проверка

Основная проверка: `yarn workspace @service/order run build`.

# @gateway/admin

`gateways/admin` - административный gateway. Он обслуживает admin-клиент, подключает identity/product/file API и содержит дополнительные admin-only механизмы: cookie parsing, fingerprint/agent services, глобальный JWT guard и общий exception filter.

## Что здесь находится

- `src/main.ts` - HTTP bootstrap, CORS из `ORIGINS`, global validation pipe, exception filter и RMQ event microservice.
- `src/app.module.ts` - композиция admin API, auth/session/token модулей, product v2 API и общих сервисов.
- `src/api/identity_srv` - admin-контракты для auth, sign-up, session, token, user, role, permission и profile.
- `src/api/product_srv/v2` - admin-контракты управления каталогом и магазинами.
- `src/api/file_srv/v1` - admin-доступ к файловому сервису.
- `src/common` - guard, middleware, cookies, fingerprint, agent и инфраструктура обработки ошибок.

## Правила изменений

- Сохраняйте admin-специфичную авторизацию в gateway-слое, но не переносите сюда владение сущностями identity/product.
- При изменении auth/session/token сверяйте одноименные сервисы в `services/identity_srv`.
- При изменении product/file endpoint сверяйте сервис-владелец и DTO на стороне `services/product_srv` или `services/file_srv`.
- Не меняйте RMQ queues/exchange без проверки `.env` контракта и потребителей событий.

## Проверка

Основная проверка: `yarn workspace @gateway/admin run build`.

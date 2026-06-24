# Карта Архитектуры

Документ фиксирует карту текущего `sellgar.server`. Код остается фактом
текущего состояния, а документация задает норму для новых правок.

## Репозиторий

`sellgar.server` - Yarn workspaces монорепозиторий NestJS-сервисов.

Основные зоны:

- `gateways/*` - внешние HTTP gateway для клиентских поверхностей.
- `services/*` - доменные сервисы и владельцы бизнес-моделей.
- `docs/*` - правила разработки, проектирования и работы агентов.
- `docker-compose.yaml`, корневые `tsconfig.json`, `eslint.config.ts`,
  `package.json` - общая инфраструктура workspace.

## Gateway-Слой

Gateway отвечает за внешний HTTP-контракт:

- routing, controllers, входные DTO;
- cookies, CORS, guards и HTTP-specific обработка ошибок;
- адаптацию вызовов к доменным сервисам через RMQ/HTTP/client adapters;
- преобразование внешнего ответа в форму, удобную конкретному клиенту.

Gateway не владеет доменными правилами, persistence и долгоживущими сущностями.
Если endpoint только проксирует или агрегирует ответ, бизнес-решение остается в
`services/*`.

## Service-Слой

Доменные сервисы владеют:

- сущностями, моделями, репозиториями и миграциями;
- контроллерами RMQ/HTTP внутреннего API;
- доменными сервисами и проверками;
- подключением к PostgreSQL, Prisma/TypeORM, MinIO, RabbitMQ.

Изменение доменного контракта требует проверки gateway-потребителей.

## Identity/Auth Boundary

`services/identity_srv` является источником истины для пользователей, персон,
credentials, сессий и токенов.

Gateway-адаптеры:

- доставляют session credential через cookie/header;
- строят gateway-specific session context и fingerprint;
- вызывают `identity_srv` для `verify`, `renew`, `revoke`;
- не принимают решение о валидности session credential самостоятельно.

`admin_gw` работает с `admin.sid` как session cookie без собственного TTL.
Время жизни сессии принадлежит `identity_srv`.

## Проверки

Проверку выбирать по затронутому workspace:

```bash
yarn workspace @gateway/admin run build
yarn workspace @gateway/client run build
yarn workspace @gateway/mobile run build
yarn workspace @service/identity run build
yarn workspace @service/product run build
yarn workspace @service/file run build
yarn workspace @service/mailer run build
yarn workspace @service/order run build
```

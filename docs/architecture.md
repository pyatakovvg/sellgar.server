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

## Catalog/File Boundary

`services/product_srv` владеет моделью товарного каталога. Базовый товар
описывает сам продукт, его категорию, бренд и общие поля. Конкретные продаваемые
позиции представлены вариантами товара.

Изображения каталога привязаны к варианту товара, а не к базовому товару:

- `variant` - вариант товара и его описание;
- `image` - проекция файла из `file_srv` по UUID файла;
- `variant_image` - связь варианта с изображением, порядок и primary-флаг.

`services/file_srv` владеет файловыми метаданными, папками и объектами в MinIO.
Он не знает, к какому товару или варианту относится файл. Сервисы каталога
используют UUID файла как внешний идентификатор и хранят только доменную связь.

Gateway-слой не должен подменять эту границу публичными ссылками. Для admin UI
download/preview файла идет через защищенный endpoint gateway, например
`GET /v1/files/:uuid`, с обычной admin session авторизацией. Клиент может
превратить бинарный ответ в локальный `blob:` URL для отображения, но этот URL
не является внешним API и не должен сохраняться в доменной модели.

Публичная доставка изображений отделена от admin file API. Локальная CDN-схема
для разработки:

```text
browser -> http://localhost:8088/images/:fileUuid
  -> nginx proxy_cache
    -> media_srv
      -> MinIO
```

`media_srv` является data-plane сервисом над MinIO. CDN использует его read
endpoint, а будущие write/delete операции должны оставаться internal-only и
координироваться с `file_srv` metadata/lifecycle через RabbitMQ. HTTP между
сервисами не используется для внутренней коммуникации.

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

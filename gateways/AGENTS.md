# gateways

`gateways` содержит внешние NestJS-приложения, которые обслуживают разные клиентские поверхности и собирают API из внутренних сервисов.

## Роль слоя

- Принимать HTTP-запросы от admin/client/mobile клиентов.
- Применять CORS, cookies, JWT guards, validation pipes и DTO внешнего API.
- Держать клиентские маршруты и версии API, например `identity_srv/v1`, `product_srv/v2`, `file_srv/v1`.
- Вызывать внутренние сервисы через gateway/service классы, HTTP-клиенты или транспортные адаптеры.

## Границы

- Не размещайте здесь долгоживущую доменную модель, если ее владельцем является сервис из `services/*`.
- Общие decorators/guards/services в `src/common` должны оставаться тонким gateway-инструментарием.
- При добавлении endpoint сначала определите, это внешний контракт gateway или доменная операция конкретного сервиса.
- Документация и комментарии для новых правил пишутся на русском языке.

## Проверки

Собирайте конкретный gateway, который был затронут:

- `yarn workspace @gateway/admin run build`
- `yarn workspace @gateway/client run build`
- `yarn workspace @gateway/mobile run build`

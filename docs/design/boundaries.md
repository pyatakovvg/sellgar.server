# Архитектурные Границы

## Базовый Принцип

Сначала выбрать владельца ответственности, потом каталог.

## Слои

- `gateways/*` - внешний HTTP contract и gateway-side инфраструктура.
- `services/*` - доменная модель, persistence и внутренний API.
- `docs/*` - правила и решения.

Внутри NestJS feature:

- `controller` - transport вход;
- `service` - операция;
- `gateway` - adapter к другому сервису/API;
- `repository` - persistence;
- `module` - composition и exports.

## Gateway / Service Boundary

Gateway не переносит к себе бизнес-решение, если сервис уже владеет этим
решением. Gateway может адаптировать вход/выход и выполнять HTTP-specific
поведение: cookie, CORS, status codes, guards.

Service не должен знать о browser cookie, CORS или особенностях конкретного
gateway.

## Common И Helpers

`common` допустим только для действительно общей инфраструктуры workspace:
filters, базовые decorators, shared transport helpers. Если код обслуживает
один домен или один flow, держать его рядом с владельцем.

Helper-каталог должен иметь понятную роль. Не использовать цепочки технических
слов вместо ответственности.

Плохо:

```text
helpers/session-auth/transport/context
```

Лучше:

```text
helpers/session-auth/context
```

или один файл рядом с module, если роль мала.

## Auth/Session Boundary

`identity_srv` владеет session validity. Gateway-side session auth отвечает за:

- чтение credential из cookie/header;
- построение session context;
- вызов `verify/renew/revoke`;
- очистку browser cookie.

Gateway-side session auth не решает, активна ли сессия.

## Запрещено

- Создавать слой только для красивого слова в пути.
- Разносить один простой алгоритм на пять injectable services.
- Экспортировать helper provider без потребителя.
- Копировать DTO между слоями ради удобного импорта.
- Делать `common` свалкой feature-specific кода.

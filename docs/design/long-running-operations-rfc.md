# RFC: Долгие Операции

Status: draft.

Документ описывает общий подход для будущих долгих backend-операций в
`sellgar.server`.

## Когда Нужен Pattern

Использовать long-running operation, если HTTP/RMQ команда:

- не должна удерживать клиентское ожидание до полного завершения;
- может выполняться дольше обычного request timeout;
- имеет промежуточный progress;
- должна быть повторно читаема по идентификатору;
- может завершиться частичным успехом.

Не использовать pattern для обычного CRUD, который завершается в рамках одного
запроса.

## Границы

Gateway:

- принимает внешний запрос;
- валидирует внешний DTO;
- запускает операцию у сервиса-владельца;
- возвращает operation id/status endpoint contract.

Service-владелец:

- хранит состояние операции;
- выполняет бизнес-логику;
- публикует progress/result;
- определяет terminal status.

## Минимальная Модель

```text
Operation
  id
  type
  status: pending | running | completed | failed | canceled
  progress
  result
  error
  createdAt
  updatedAt
```

Status interpretation принадлежит сервису-владельцу.

## API Contract

Типовой внешний contract:

```text
POST /v1/<resource>/<action> -> { operationId }
GET  /v1/operations/:operationId -> operation state
```

Если операция относится только к внутреннему сервису, HTTP endpoint может не
появляться. Тогда contract остается RMQ/internal API.

## Проверки

Для реализации нужны тесты или ручная проверка:

- запуск операции возвращает id;
- status читается повторно;
- terminal success сохраняет result;
- terminal failure сохраняет error;
- повторный клиентский polling не запускает операцию заново.

## Что Не Закреплено

Этот RFC не выбирает конкретную таблицу, очередь, scheduler или event bus.
Выбор зависит от сервиса-владельца и должен фиксироваться отдельным design note
перед реализацией.

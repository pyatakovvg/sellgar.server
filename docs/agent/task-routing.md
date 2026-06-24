# Маршруты По Типам Задач

## Gateway Endpoint

1. Открыть `gateways/AGENTS.md` и `gateways/<name>/AGENTS.md`.
2. Проверить внешний HTTP contract, DTO и controller.
3. Проверить сервис-владелец в `services/*`, если endpoint проксирует домен.
4. Проверить build gateway workspace.

## Domain Service

1. Открыть `services/AGENTS.md` и `services/<name>/AGENTS.md`.
2. Проверить controller/service/repository/entity/model/migrations.
3. Найти gateway-потребителей при изменении contract.
4. Проверить build service workspace.

## Auth/Session

1. Открыть `services/identity_srv/AGENTS.md`.
2. Открыть `gateways/admin/AGENTS.md`, если меняется admin gateway.
3. Сверить `services/identity_srv/docs/auth-session-design.md`.
4. Проверить оба края: owner service и gateway adapter.

## Документация

1. Проверить, что документ не содержит путей из другого проекта.
2. Проверить ссылки.
3. Обновить ближайший `AGENTS.md`, если изменилась локальная структура или
   проверка.
4. Выполнить `git diff --check`.

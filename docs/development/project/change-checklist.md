# Чеклист Изменения

Scope: project-specific overlay.

## Перед Началом

1. Определить workspace-владелец: `gateways/*` или `services/*`.
2. Открыть ближайший `AGENTS.md`.
3. Сверить package name и scripts в `package.json`.
4. Если меняется gateway DTO/endpoint, проверить сервис-владелец.
5. Если меняется service contract, найти gateway-потребителей.

## Во Время Изменения

1. Менять только владельца и необходимые точки подключения.
2. Не переносить бизнес-правила из service в gateway.
3. Не создавать helper/common слой для одного сценария.
4. Не писать в `dist`, `node_modules`, cache и generated artifacts.
5. Сохранять локальный стиль каталогов и NestJS modules.

## Перед Завершением

1. Проверить `git diff --check`.
2. Запустить build затронутого workspace.
3. Запустить точечные tests, если они есть.
4. Для auth/session проверить оба края: gateway и `services/identity_srv`.
5. В финальном ответе указать, что проверено и что осталось непроверенным.

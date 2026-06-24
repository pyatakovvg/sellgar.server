# Источники Истины

Scope: project-specific overlay.

## Использовать

- текущий код затронутого workspace;
- ближайший `AGENTS.md`;
- `package.json`, `tsconfig.json`, `nest-cli.json` workspace;
- `services/*/docs`, если меняется сервисный домен;
- `docs/architecture.md`, `docs/design/*`, `docs/development/*`;
- текущих потребителей, найденных через `rg`.

## Не Использовать Как Норму

- `dist`, `coverage`, сгенерированные файлы;
- `node_modules`, кроме проверки установленных типов/экспортов;
- старые примеры из другого проекта;
- случайные соседние файлы, если они противоречат документации или владельцу
  слоя.

## Перед Правкой

1. Определить workspace и слой-владелец.
2. Открыть ближайший `AGENTS.md`.
3. Сверить workspace name в `package.json`.
4. Найти текущих потребителей, если меняется public contract.
5. Проверить сервис-владелец, если gateway меняет DTO или behavior внешнего
   endpoint.

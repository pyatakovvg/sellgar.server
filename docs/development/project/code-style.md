# Стиль Кода

Scope: project-specific overlay.

## Форматирование

Форматирование задается Prettier/ESLint текущего workspace. Не добавлять ручное
форматирование, которое конфликтует с локальным formatter.

## TypeScript

- Держать типы DTO рядом с владельцем контракта.
- Не использовать `any` без необходимости.
- Не добавлять абстракции "на будущее".
- Не смешивать DTO controller/service/repository, если у них разные роли.
- Для внутренних helper-значений не создавать class-validator DTO, если обычная
  явная проверка входа проще и прозрачнее.

## NestJS

- `controller` принимает внешний или внутренний transport contract.
- `service` выполняет application/domain operation.
- `gateway` адаптирует вызов к другому сервису или внешнему transport.
- `repository` работает с persistence.
- `module` подключает providers и exports.

Не превращать `common`, `helpers` или `utils` в место для feature-specific
логики. Если helper обслуживает один модуль, держать его рядом с этим модулем.

## Именование

- Каталоги и файлы: `kebab-case`.
- Модули: `{name}.module.ts`.
- Контроллеры: `{name}.controller.ts`.
- Сервисы: `{name}.service.ts`.
- Gateway adapters: `{name}.gateway.ts`.
- DTO: `{action}.dto.ts` или `{name}.dto.ts`.
- Entity/model/repository: по имени доменной сущности.

## Комментарии

Комментарии нужны только для инвариантов и неочевидных решений. Не пересказывать
код.

## Текст Документации

Новую документацию вести на русском языке, если она относится к этому repo.

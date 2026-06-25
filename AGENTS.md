# sellgar.server

Этот репозиторий - Yarn workspaces монорепозиторий с NestJS-сервисами для серверной части Sellgar. Код разделен на внешние gateway-приложения в `gateways/*` и доменные сервисы в `services/*`.

## Назначение

- `gateways/admin` - внешний API для административного интерфейса.
- `gateways/client` - внешний API для клиентского веб-интерфейса.
- `gateways/mobile` - внешний API для мобильного клиента.
- `services/identity_srv` - сервис пользователей, персон, авторизации, сессий и токенов.
- `services/product_srv` - сервис товарного каталога: товары, варианты, категории, свойства, бренды и проекции изображений.
- `services/file_srv` - control-plane файлов: папки, metadata, lifecycle и ссылки на storage objects.
- `services/media_srv` - data-plane над MinIO: публичная доставка изображений и internal операции с object bytes.
- `services/mailer_srv` - сервис отправки почты.
- `services/order_srv` - сервис заказов, магазинов, цен и валют.

## Технологии и запуск

Основной стек: NestJS, TypeScript, Yarn workspaces, PostgreSQL, TypeORM, RabbitMQ, MinIO; Prisma остается только в сервисах, которые еще не мигрированы. Корень содержит общие `tsconfig.json`, `eslint.config.ts`, `docker-compose.yaml` и workspace-скрипты.

Запускать и собирать пакеты нужно через Yarn workspaces:

- `yarn dev:admin_gw`
- `yarn dev:product_srv`
- `yarn dev:identity_srv`
- `yarn dev:media_srv`
- `yarn workspace <workspace-name> run build`

Перед доверием корневому скрипту сборки сверяйте имя workspace в `package.json`: в текущем состоянии часть скриптов может отставать от фактических имен пакетов.

## Документация

- `docs/architecture.md` - карта gateway/service границ.
- `docs/development` - структура файлов, импорты, NestJS runtime contract и checklist.
- `docs/design` - проектные границы и decision protocol.
- `docs/agent` - маршруты чтения и closeout для агентских задач.

При изменении документации проверяйте `docs/AGENTS.md`.

## Архитектурные границы

- Gateway-слои отвечают за внешний HTTP-контракт, cookies/CORS, guards, DTO входа и адаптацию к внутренним сервисам.
- Доменные сервисы отвечают за собственные модели, контроллеры, сервисы, репозитории и подключение к инфраструктуре.
- `product_srv` не хранит файловые байты: изображения каталога ссылаются на UUID файла из `file_srv`, а связь изображения с товарной карточкой идет через вариант товара.
- `media_srv` является владельцем MinIO adapter. `file_srv` и доменные сервисы не должны передавать file bytes через RabbitMQ.
- Цена, остатки и складской контекст не являются частью базовой модели товара; новые изменения в этой области должны сверяться с `order_srv` и отдельным проектированием stores/orders.
- Не переносите бизнес-правила из `services/*` в `gateways/*`, если gateway только проксирует или агрегирует ответ.
- Не меняйте `dist`, `node_modules`, `.yarn/cache` и IDE-файлы как часть смысловой правки.
- Новую документацию ведите на русском языке.

## Проверки

Для кодовых изменений выбирайте проверку по затронутому workspace:

- `yarn workspace @gateway/admin run build`
- `yarn workspace @gateway/client run build`
- `yarn workspace @gateway/mobile run build`
- `yarn workspace @service/identity run build`
- `yarn workspace @service/product run build`
- `yarn workspace @service/file run build`
- `yarn workspace @service/media run build`
- `yarn workspace @service/mailer run build`
- `yarn workspace @service/order run build`

Для документационных изменений достаточно проверить diff и отсутствие лишних изменений в уже грязных манифестах.

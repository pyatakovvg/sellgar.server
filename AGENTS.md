# sellgar.server

Этот репозиторий - Yarn workspaces монорепозиторий с NestJS-сервисами для серверной части Sellgar. Код разделен на внешние gateway-приложения в `gateways/*` и доменные сервисы в `services/*`.

## Назначение

- `gateways/admin` - внешний API для административного интерфейса.
- `gateways/client` - внешний API для клиентского веб-интерфейса.
- `gateways/mobile` - внешний API для мобильного клиента.
- `services/identity_srv` - сервис пользователей, персон, авторизации, сессий и токенов.
- `services/product_srv` - сервис товарного каталога, корзины, заказов и связанных справочников.
- `services/file_srv` - сервис папок, файлов и хранения в MinIO.
- `services/mailer_srv` - сервис отправки почты.
- `services/order_srv` - сервис заказов, магазинов, цен и валют.

## Технологии и запуск

Основной стек: NestJS, TypeScript, Yarn workspaces, PostgreSQL, TypeORM, Prisma, RabbitMQ, MinIO. Корень содержит общие `tsconfig.json`, `eslint.config.ts`, `docker-compose.yaml` и workspace-скрипты.

Запускать и собирать пакеты нужно через Yarn workspaces:

- `yarn dev:admin_gw`
- `yarn dev:product_srv`
- `yarn dev:identity_srv`
- `yarn workspace <workspace-name> run build`

Перед доверием корневому скрипту сборки сверяйте имя workspace в `package.json`: в текущем состоянии часть скриптов может отставать от фактических имен пакетов.

## Архитектурные границы

- Gateway-слои отвечают за внешний HTTP-контракт, cookies/CORS, guards, DTO входа и адаптацию к внутренним сервисам.
- Доменные сервисы отвечают за собственные модели, контроллеры, сервисы, репозитории и подключение к инфраструктуре.
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
- `yarn workspace @service/mailer run build`
- `yarn workspace @service/order run build`

Для документационных изменений достаточно проверить diff и отсутствие лишних изменений в уже грязных манифестах.

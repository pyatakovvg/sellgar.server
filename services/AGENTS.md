# services

`services` содержит доменные NestJS-сервисы. Они владеют моделями, сущностями, репозиториями, подключениями к БД/MinIO/RabbitMQ и внутренними API, которые используют gateway-приложения.

## Роль слоя

- Хранить бизнес-логику и доменные инварианты.
- Держать persistence-слой: TypeORM entities/repositories или Prisma modules.
- Публиковать внутренние controllers/consumers и версии API.
- Обслуживать очереди RabbitMQ там, где сервис работает как command/event consumer.

## Границы

- Не добавляйте клиентские HTTP-особенности gateway в доменный сервис.
- DTO между controller/service/repository могут совпадать по форме, но их назначение разное; не смешивайте слой входа, доменную операцию и persistence.
- При изменении доменного контракта проверьте все gateway, которые импортируют или дублируют этот контракт.
- Новые описания и архитектурные заметки ведите на русском языке.

## Проверки

Собирайте конкретный сервис:

- `yarn workspace @service/identity run build`
- `yarn workspace @service/product run build`
- `yarn workspace @service/file run build`
- `yarn workspace @service/mailer run build`
- `yarn workspace @service/order run build`

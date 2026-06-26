# services

`services` содержит доменные NestJS-сервисы. Они владеют моделями, сущностями, репозиториями, подключениями к БД/MinIO/RabbitMQ и внутренними API, которые используют gateway-приложения.

## Роль слоя

- Хранить бизнес-логику и доменные инварианты.
- Держать persistence-слой: TypeORM entities/repositories или Prisma modules.
- Публиковать внутренние controllers/consumers и версии API.
- Обслуживать очереди RabbitMQ там, где сервис работает как command/event consumer.
- Держать внутреннюю коммуникацию между сервисами через RabbitMQ; HTTP в
  сервисах допускается только как внешний API/data-plane endpoint.

## Границы

- Не добавляйте клиентские HTTP-особенности gateway в доменный сервис.
- DTO между controller/service/repository могут совпадать по форме, но их назначение разное; не смешивайте слой входа, доменную операцию и persistence.
- При изменении доменного контракта проверьте все gateway, которые импортируют или дублируют этот контракт.
- `services/media_srv` - исключение по роли: это data-plane сервис над MinIO.
  Он может иметь публичный read endpoint для CDN, но внутренние обращения к
  `file_srv`/другим сервисам должны идти через RabbitMQ. Byte upload из
  gateway в `media_srv` допускается отдельным internal HTTP data-plane
  запросом, потому что bytes не передаются через RabbitMQ.
- Новые описания и архитектурные заметки ведите на русском языке.

## Проверки

Собирайте конкретный сервис:

- `yarn workspace @service/identity run build`
- `yarn workspace @service/product run build`
- `yarn workspace @service/file run build`
- `yarn workspace @service/media run build`
- `yarn workspace @service/mailer run build`
- `yarn workspace @service/order run build`

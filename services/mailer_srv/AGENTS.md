# @service/mailer

`services/mailer_srv` - сервис отправки почты. Он использует Nest mailer, Prisma и RabbitMQ-настройки.

## Что здесь находится

- `src/main.ts` - HTTP bootstrap с CORS и validation pipe.
- `src/app.module.ts` - `ConfigModule`, `RabbitMQModule`, `PrismaModule`, `ApiV1Module`.
- `src/api/v1/mail` - controller/service/dto/entities для почтовых операций.
- `_prisma/schema.prisma` - Prisma-схема сервиса.

## Правила изменений

- Логику формирования и отправки писем держите в mail service, а не в gateway.
- При добавлении событий или очередей сверяйте RabbitMQ-настройки и реальные producer/consumer.
- Не коммитьте секреты SMTP или RabbitMQ в `.env`-подобных файлах.
- Если меняется публичный mail endpoint, проверьте, кто вызывает его из gateway или других сервисов.

## Проверка

Основная проверка: `yarn workspace @service/mailer run build`.

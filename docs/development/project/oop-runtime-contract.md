# NestJS Runtime Contract

Scope: project-specific overlay.

## Когда Читать

Открывать при изменении:

- `@Module`, `@Controller`, guards, filters, interceptors;
- service/gateway/repository слоя;
- DTO/entity/model;
- auth/session behavior;
- transport adapters RabbitMQ/HTTP/cookie.

## Роли

- `controller` - входной transport boundary.
- `service` - application/domain operation.
- `gateway` - adapter к другому сервису или внешнему API.
- `repository` - persistence boundary.
- `entity/model` - форма данных владельца.
- `guard/filter/interceptor` - инфраструктура gateway/application boundary.
- `module` - composition boundary.

Если класс получает несколько ролей, сначала выбрать владельца и разделить
ответственность.

## Gateway Правила

Gateway может:

- принимать HTTP-запросы;
- читать/ставить cookies;
- строить request context;
- вызывать внутренние сервисы;
- адаптировать response shape для клиента.

Gateway не должен:

- владеть доменными правилами сервиса;
- хранить persistence model;
- принимать решение о валидности session credential вместо `identity_srv`;
- копировать бизнес-логику из `services/*`.

## Service Правила

Доменные сервисы владеют бизнес-правилами, persistence и внутренними API.

DTO между controller/service/repository могут быть похожи, но их назначение
разное. Не объединять их только ради уменьшения числа файлов, если это смешивает
слои.

## Module Boundary

`Module` должен показывать, что является публичным для соседних модулей:

- `providers` - локальные реализации;
- `exports` - стабильные зависимости для других модулей;
- `imports` - явные зависимости.

Не экспортировать helper providers без реального внешнего потребителя.

## Auth/Session

`identity_srv` владеет session state. Gateway только транспортирует session
credential и строит context/fingerprint.

Для web gateway:

- cookie helper остается gateway-side инфраструктурой;
- session guard вызывает `identity.session.verify`;
- auto-renew вызывает `identity.session.renew`;
- logout очищает cookie и best-effort отзывает session.

## Старый Код

Если текущий код расходится с этими правилами, не копировать расхождение как
норму. Для текущей задачи менять только затронутый flow.

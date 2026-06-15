# @gateway/mobile

`gateways/mobile` - gateway для мобильного клиента. По структуре он близок к `@gateway/client`, но должен сохранять мобильный внешний контракт отдельно.

## Что здесь находится

- `src/main.ts` - HTTP bootstrap, CORS из `ORIGINS`, cookies и global validation pipe.
- `src/app.module.ts` - identity v1, product v2, file v1 и глобальный `JwtAuthGuard`.
- `src/api/identity_srv/v1` - мобильные auth/profile/user/role/permission контракты.
- `src/api/product_srv/v2` - мобильные контракты каталога и связанных сущностей.
- `src/api/file_srv/v1` - мобильные операции с файлами и папками.
- `src/common` - decorators, guards и token service для gateway.

## Правила изменений

- Не считайте mobile полной копией client: сначала проверьте фактический контракт endpoint и DTO.
- Общую правку между client и mobile вносите симметрично только после сравнения обоих деревьев.
- Бизнес-правила каталога, файлов и identity должны оставаться в сервисах-владельцах.

## Проверка

Основная проверка: `yarn workspace @gateway/mobile run build`.

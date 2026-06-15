# @gateway/client

`gateways/client` - gateway для клиентского веб-интерфейса. Он публикует внешний API клиента и подключает identity v1, product v2 и file v1 модули.

## Что здесь находится

- `src/main.ts` - HTTP bootstrap, CORS из `ORIGINS`, cookies и global validation pipe.
- `src/app.module.ts` - композиция API-модулей и глобальный `JwtAuthGuard`.
- `src/api/identity_srv/v1` - клиентские auth/profile/user/role/permission контракты.
- `src/api/product_srv/v2` - клиентские контракты каталога, цены, брендов, категорий, свойств и вариантов.
- `src/api/file_srv/v1` - клиентские контракты файлов и папок.
- `src/common` - общие для gateway decorators, guards и token service.

## Правила изменений

- Клиентский gateway должен описывать внешний контракт клиента, а не владеть бизнес-логикой сервисов.
- При изменении DTO не копируйте расхождения между client и mobile без явной причины: эти gateway похожи и должны расходиться только по клиентскому контракту.
- При изменении JWT/public decorators проверяйте влияние на все endpoint внутри gateway.

## Проверка

Основная проверка: `yarn workspace @gateway/client run build`.


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Price
 * 
 */
export type Price = $Result.DefaultSelection<Prisma.$PricePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model CategoryOnProduct
 * 
 */
export type CategoryOnProduct = $Result.DefaultSelection<Prisma.$CategoryOnProductPayload>
/**
 * Model BrandOnCategory
 * 
 */
export type BrandOnCategory = $Result.DefaultSelection<Prisma.$BrandOnCategoryPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model ImageOnProduct
 * 
 */
export type ImageOnProduct = $Result.DefaultSelection<Prisma.$ImageOnProductPayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model FeatureGroup
 * 
 */
export type FeatureGroup = $Result.DefaultSelection<Prisma.$FeatureGroupPayload>
/**
 * Model FeatureOnCategory
 * 
 */
export type FeatureOnCategory = $Result.DefaultSelection<Prisma.$FeatureOnCategoryPayload>
/**
 * Model Attribute
 * 
 */
export type Attribute = $Result.DefaultSelection<Prisma.$AttributePayload>
/**
 * Model AttributeValue
 * 
 */
export type AttributeValue = $Result.DefaultSelection<Prisma.$AttributeValuePayload>
/**
 * Model AttributeOnProduct
 * 
 */
export type AttributeOnProduct = $Result.DefaultSelection<Prisma.$AttributeOnProductPayload>
/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PricePhaseEnum: {
  NEW: 'NEW',
  CHANGE: 'CHANGE'
};

export type PricePhaseEnum = (typeof PricePhaseEnum)[keyof typeof PricePhaseEnum]


export const FeatureTypeEnum: {
  DEFAULT: 'DEFAULT',
  CHECKBOX: 'CHECKBOX',
  DATE: 'DATE',
  NUMBER: 'NUMBER',
  COLOR: 'COLOR'
};

export type FeatureTypeEnum = (typeof FeatureTypeEnum)[keyof typeof FeatureTypeEnum]


export const FeatureStatusEnum: {
  SHOW: 'SHOW',
  HIDE: 'HIDE',
  OFF: 'OFF'
};

export type FeatureStatusEnum = (typeof FeatureStatusEnum)[keyof typeof FeatureStatusEnum]

}

export type PricePhaseEnum = $Enums.PricePhaseEnum

export const PricePhaseEnum: typeof $Enums.PricePhaseEnum

export type FeatureTypeEnum = $Enums.FeatureTypeEnum

export const FeatureTypeEnum: typeof $Enums.FeatureTypeEnum

export type FeatureStatusEnum = $Enums.FeatureStatusEnum

export const FeatureStatusEnum: typeof $Enums.FeatureStatusEnum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.price.findMany()
    * ```
    */
  get price(): Prisma.PriceDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.categoryOnProduct`: Exposes CRUD operations for the **CategoryOnProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryOnProducts
    * const categoryOnProducts = await prisma.categoryOnProduct.findMany()
    * ```
    */
  get categoryOnProduct(): Prisma.CategoryOnProductDelegate<ExtArgs>;

  /**
   * `prisma.brandOnCategory`: Exposes CRUD operations for the **BrandOnCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrandOnCategories
    * const brandOnCategories = await prisma.brandOnCategory.findMany()
    * ```
    */
  get brandOnCategory(): Prisma.BrandOnCategoryDelegate<ExtArgs>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.imageOnProduct`: Exposes CRUD operations for the **ImageOnProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageOnProducts
    * const imageOnProducts = await prisma.imageOnProduct.findMany()
    * ```
    */
  get imageOnProduct(): Prisma.ImageOnProductDelegate<ExtArgs>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs>;

  /**
   * `prisma.featureGroup`: Exposes CRUD operations for the **FeatureGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureGroups
    * const featureGroups = await prisma.featureGroup.findMany()
    * ```
    */
  get featureGroup(): Prisma.FeatureGroupDelegate<ExtArgs>;

  /**
   * `prisma.featureOnCategory`: Exposes CRUD operations for the **FeatureOnCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureOnCategories
    * const featureOnCategories = await prisma.featureOnCategory.findMany()
    * ```
    */
  get featureOnCategory(): Prisma.FeatureOnCategoryDelegate<ExtArgs>;

  /**
   * `prisma.attribute`: Exposes CRUD operations for the **Attribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attributes
    * const attributes = await prisma.attribute.findMany()
    * ```
    */
  get attribute(): Prisma.AttributeDelegate<ExtArgs>;

  /**
   * `prisma.attributeValue`: Exposes CRUD operations for the **AttributeValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributeValues
    * const attributeValues = await prisma.attributeValue.findMany()
    * ```
    */
  get attributeValue(): Prisma.AttributeValueDelegate<ExtArgs>;

  /**
   * `prisma.attributeOnProduct`: Exposes CRUD operations for the **AttributeOnProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributeOnProducts
    * const attributeOnProducts = await prisma.attributeOnProduct.findMany()
    * ```
    */
  get attributeOnProduct(): Prisma.AttributeOnProductDelegate<ExtArgs>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    Shop: 'Shop',
    Product: 'Product',
    Price: 'Price',
    Category: 'Category',
    CategoryOnProduct: 'CategoryOnProduct',
    BrandOnCategory: 'BrandOnCategory',
    Unit: 'Unit',
    Image: 'Image',
    ImageOnProduct: 'ImageOnProduct',
    Feature: 'Feature',
    FeatureGroup: 'FeatureGroup',
    FeatureOnCategory: 'FeatureOnCategory',
    Attribute: 'Attribute',
    AttributeValue: 'AttributeValue',
    AttributeOnProduct: 'AttributeOnProduct',
    Currency: 'Currency',
    Brand: 'Brand'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'shop' | 'product' | 'price' | 'category' | 'categoryOnProduct' | 'brandOnCategory' | 'unit' | 'image' | 'imageOnProduct' | 'feature' | 'featureGroup' | 'featureOnCategory' | 'attribute' | 'attributeValue' | 'attributeOnProduct' | 'currency' | 'brand'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>,
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Price: {
        payload: Prisma.$PricePayload<ExtArgs>
        fields: Prisma.PriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findFirst: {
            args: Prisma.PriceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findMany: {
            args: Prisma.PriceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          create: {
            args: Prisma.PriceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          createMany: {
            args: Prisma.PriceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PriceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          update: {
            args: Prisma.PriceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          deleteMany: {
            args: Prisma.PriceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PriceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PriceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePrice>
          }
          groupBy: {
            args: Prisma.PriceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceCountArgs<ExtArgs>,
            result: $Utils.Optional<PriceCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      CategoryOnProduct: {
        payload: Prisma.$CategoryOnProductPayload<ExtArgs>
        fields: Prisma.CategoryOnProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryOnProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryOnProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          findFirst: {
            args: Prisma.CategoryOnProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryOnProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          findMany: {
            args: Prisma.CategoryOnProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>[]
          }
          create: {
            args: Prisma.CategoryOnProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          createMany: {
            args: Prisma.CategoryOnProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryOnProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          update: {
            args: Prisma.CategoryOnProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          deleteMany: {
            args: Prisma.CategoryOnProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryOnProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryOnProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          aggregate: {
            args: Prisma.CategoryOnProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategoryOnProduct>
          }
          groupBy: {
            args: Prisma.CategoryOnProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryOnProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryOnProductCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryOnProductCountAggregateOutputType> | number
          }
        }
      }
      BrandOnCategory: {
        payload: Prisma.$BrandOnCategoryPayload<ExtArgs>
        fields: Prisma.BrandOnCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandOnCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandOnCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandOnCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandOnCategoryPayload>
          }
          findFirst: {
            args: Prisma.BrandOnCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandOnCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandOnCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandOnCategoryPayload>
          }
          findMany: {
            args: Prisma.BrandOnCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandOnCategoryPayload>[]
          }
          create: {
            args: Prisma.BrandOnCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandOnCategoryPayload>
          }
          createMany: {
            args: Prisma.BrandOnCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrandOnCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandOnCategoryPayload>
          }
          update: {
            args: Prisma.BrandOnCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandOnCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BrandOnCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrandOnCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrandOnCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandOnCategoryPayload>
          }
          aggregate: {
            args: Prisma.BrandOnCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrandOnCategory>
          }
          groupBy: {
            args: Prisma.BrandOnCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandOnCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandOnCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandOnCategoryCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>,
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      ImageOnProduct: {
        payload: Prisma.$ImageOnProductPayload<ExtArgs>
        fields: Prisma.ImageOnProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageOnProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImageOnProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageOnProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImageOnProductPayload>
          }
          findFirst: {
            args: Prisma.ImageOnProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImageOnProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageOnProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImageOnProductPayload>
          }
          findMany: {
            args: Prisma.ImageOnProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImageOnProductPayload>[]
          }
          create: {
            args: Prisma.ImageOnProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImageOnProductPayload>
          }
          createMany: {
            args: Prisma.ImageOnProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImageOnProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImageOnProductPayload>
          }
          update: {
            args: Prisma.ImageOnProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImageOnProductPayload>
          }
          deleteMany: {
            args: Prisma.ImageOnProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageOnProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageOnProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImageOnProductPayload>
          }
          aggregate: {
            args: Prisma.ImageOnProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImageOnProduct>
          }
          groupBy: {
            args: Prisma.ImageOnProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageOnProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageOnProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageOnProductCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>,
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      FeatureGroup: {
        payload: Prisma.$FeatureGroupPayload<ExtArgs>
        fields: Prisma.FeatureGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureGroupPayload>
          }
          findFirst: {
            args: Prisma.FeatureGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureGroupPayload>
          }
          findMany: {
            args: Prisma.FeatureGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureGroupPayload>[]
          }
          create: {
            args: Prisma.FeatureGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureGroupPayload>
          }
          createMany: {
            args: Prisma.FeatureGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeatureGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureGroupPayload>
          }
          update: {
            args: Prisma.FeatureGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureGroupPayload>
          }
          deleteMany: {
            args: Prisma.FeatureGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeatureGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureGroupPayload>
          }
          aggregate: {
            args: Prisma.FeatureGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFeatureGroup>
          }
          groupBy: {
            args: Prisma.FeatureGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeatureGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<FeatureGroupCountAggregateOutputType> | number
          }
        }
      }
      FeatureOnCategory: {
        payload: Prisma.$FeatureOnCategoryPayload<ExtArgs>
        fields: Prisma.FeatureOnCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureOnCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureOnCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureOnCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureOnCategoryPayload>
          }
          findFirst: {
            args: Prisma.FeatureOnCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureOnCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureOnCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureOnCategoryPayload>
          }
          findMany: {
            args: Prisma.FeatureOnCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureOnCategoryPayload>[]
          }
          create: {
            args: Prisma.FeatureOnCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureOnCategoryPayload>
          }
          createMany: {
            args: Prisma.FeatureOnCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeatureOnCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureOnCategoryPayload>
          }
          update: {
            args: Prisma.FeatureOnCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureOnCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FeatureOnCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureOnCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeatureOnCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeatureOnCategoryPayload>
          }
          aggregate: {
            args: Prisma.FeatureOnCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFeatureOnCategory>
          }
          groupBy: {
            args: Prisma.FeatureOnCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeatureOnCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureOnCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<FeatureOnCategoryCountAggregateOutputType> | number
          }
        }
      }
      Attribute: {
        payload: Prisma.$AttributePayload<ExtArgs>
        fields: Prisma.AttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findFirst: {
            args: Prisma.AttributeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findMany: {
            args: Prisma.AttributeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          create: {
            args: Prisma.AttributeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          createMany: {
            args: Prisma.AttributeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttributeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          update: {
            args: Prisma.AttributeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          deleteMany: {
            args: Prisma.AttributeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttributeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          aggregate: {
            args: Prisma.AttributeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttribute>
          }
          groupBy: {
            args: Prisma.AttributeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeCountArgs<ExtArgs>,
            result: $Utils.Optional<AttributeCountAggregateOutputType> | number
          }
        }
      }
      AttributeValue: {
        payload: Prisma.$AttributeValuePayload<ExtArgs>
        fields: Prisma.AttributeValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeValueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeValueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          findFirst: {
            args: Prisma.AttributeValueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeValueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          findMany: {
            args: Prisma.AttributeValueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>[]
          }
          create: {
            args: Prisma.AttributeValueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          createMany: {
            args: Prisma.AttributeValueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttributeValueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          update: {
            args: Prisma.AttributeValueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          deleteMany: {
            args: Prisma.AttributeValueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeValueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttributeValueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeValuePayload>
          }
          aggregate: {
            args: Prisma.AttributeValueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttributeValue>
          }
          groupBy: {
            args: Prisma.AttributeValueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttributeValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeValueCountArgs<ExtArgs>,
            result: $Utils.Optional<AttributeValueCountAggregateOutputType> | number
          }
        }
      }
      AttributeOnProduct: {
        payload: Prisma.$AttributeOnProductPayload<ExtArgs>
        fields: Prisma.AttributeOnProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeOnProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeOnProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeOnProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeOnProductPayload>
          }
          findFirst: {
            args: Prisma.AttributeOnProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeOnProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeOnProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeOnProductPayload>
          }
          findMany: {
            args: Prisma.AttributeOnProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeOnProductPayload>[]
          }
          create: {
            args: Prisma.AttributeOnProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeOnProductPayload>
          }
          createMany: {
            args: Prisma.AttributeOnProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttributeOnProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeOnProductPayload>
          }
          update: {
            args: Prisma.AttributeOnProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeOnProductPayload>
          }
          deleteMany: {
            args: Prisma.AttributeOnProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeOnProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttributeOnProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributeOnProductPayload>
          }
          aggregate: {
            args: Prisma.AttributeOnProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttributeOnProduct>
          }
          groupBy: {
            args: Prisma.AttributeOnProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttributeOnProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeOnProductCountArgs<ExtArgs>,
            result: $Utils.Optional<AttributeOnProductCountAggregateOutputType> | number
          }
        }
      }
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    shops: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shops?: boolean | CompanyCountOutputTypeCountShopsArgs
  }

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    prices: number
    images: number
    categoryOnProduct: number
    attributeOnProduct: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | ProductCountOutputTypeCountPricesArgs
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    categoryOnProduct?: boolean | ProductCountOutputTypeCountCategoryOnProductArgs
    attributeOnProduct?: boolean | ProductCountOutputTypeCountAttributeOnProductArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageOnProductWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCategoryOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryOnProductWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAttributeOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeOnProductWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    features: number
    products: number
    brandOnCategory: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    features?: boolean | CategoryCountOutputTypeCountFeaturesArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
    brandOnCategory?: boolean | CategoryCountOutputTypeCountBrandOnCategoryArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureOnCategoryWhereInput
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryOnProductWhereInput
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBrandOnCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandOnCategoryWhereInput
  }



  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    features: number
    attribute: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | UnitCountOutputTypeCountFeaturesArgs
    attribute?: boolean | UnitCountOutputTypeCountAttributeArgs
  }

  // Custom InputTypes

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }


  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountAttributeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
  }



  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    products: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ImageCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageOnProductWhereInput
  }



  /**
   * Count Type FeatureCountOutputType
   */

  export type FeatureCountOutputType = {
    categories: number
  }

  export type FeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | FeatureCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCountOutputType
     */
    select?: FeatureCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureOnCategoryWhereInput
  }



  /**
   * Count Type FeatureGroupCountOutputType
   */

  export type FeatureGroupCountOutputType = {
    feature: number
  }

  export type FeatureGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureGroupCountOutputTypeCountFeatureArgs
  }

  // Custom InputTypes

  /**
   * FeatureGroupCountOutputType without action
   */
  export type FeatureGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroupCountOutputType
     */
    select?: FeatureGroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FeatureGroupCountOutputType without action
   */
  export type FeatureGroupCountOutputTypeCountFeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }



  /**
   * Count Type AttributeCountOutputType
   */

  export type AttributeCountOutputType = {
    attributeOnProduct: number
  }

  export type AttributeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributeOnProduct?: boolean | AttributeCountOutputTypeCountAttributeOnProductArgs
  }

  // Custom InputTypes

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeCountOutputType
     */
    select?: AttributeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountAttributeOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeOnProductWhereInput
  }



  /**
   * Count Type AttributeValueCountOutputType
   */

  export type AttributeValueCountOutputType = {
    attributeOnProduct: number
  }

  export type AttributeValueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributeOnProduct?: boolean | AttributeValueCountOutputTypeCountAttributeOnProductArgs
  }

  // Custom InputTypes

  /**
   * AttributeValueCountOutputType without action
   */
  export type AttributeValueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValueCountOutputType
     */
    select?: AttributeValueCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AttributeValueCountOutputType without action
   */
  export type AttributeValueCountOutputTypeCountAttributeOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeOnProductWhereInput
  }



  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    price: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    price?: boolean | CurrencyCountOutputTypeCountPriceArgs
  }

  // Custom InputTypes

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }



  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    product: number
    brandOnCategory: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | BrandCountOutputTypeCountProductArgs
    brandOnCategory?: boolean | BrandCountOutputTypeCountBrandOnCategoryArgs
  }

  // Custom InputTypes

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountBrandOnCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandOnCategoryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    uuid: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    uuid?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    uuid?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    uuid?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    uuid: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shops?: boolean | Company$shopsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    uuid?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shops?: boolean | Company$shopsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      shops: Prisma.$ShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }


  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const companyWithUuidOnly = await prisma.company.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    shops<T extends Company$shopsArgs<ExtArgs> = {}>(args?: Subset<T, Company$shopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly uuid: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }


  /**
   * Company.shops
   */
  export type Company$shopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    cursor?: ShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
  }



  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    companyUuid: string | null
  }

  export type ShopMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    companyUuid: string | null
  }

  export type ShopCountAggregateOutputType = {
    uuid: number
    name: number
    address: number
    isActive: number
    createdAt: number
    updatedAt: number
    companyUuid: number
    _all: number
  }


  export type ShopMinAggregateInputType = {
    uuid?: true
    name?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    companyUuid?: true
  }

  export type ShopMaxAggregateInputType = {
    uuid?: true
    name?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    companyUuid?: true
  }

  export type ShopCountAggregateInputType = {
    uuid?: true
    name?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    companyUuid?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    uuid: string
    name: string
    address: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    companyUuid: string
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyUuid?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    uuid?: boolean
    name?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyUuid?: boolean
  }

  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }


  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string
      address: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      companyUuid: string
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }


  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Shop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const shopWithUuidOnly = await prisma.shop.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends ShopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
    **/
    create<T extends ShopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopCreateArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Shops.
     *     @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     *     @example
     *     // Create many Shops
     *     const shop = await prisma.shop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShopCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
    **/
    delete<T extends ShopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
    **/
    upsert<T extends ShopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>
    ): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Shop model
   */ 
  interface ShopFieldRefs {
    readonly uuid: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly address: FieldRef<"Shop", 'String'>
    readonly isActive: FieldRef<"Shop", 'Boolean'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
    readonly companyUuid: FieldRef<"Shop", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }


  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }


  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
  }


  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }


  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }


  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
  }


  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShopInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    uuid: string | null
    title: string | null
    description: string | null
    brandCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    uuid: string | null
    title: string | null
    description: string | null
    brandCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    uuid: number
    title: number
    description: number
    brandCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    uuid?: true
    title?: true
    description?: true
    brandCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    uuid?: true
    title?: true
    description?: true
    brandCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    uuid?: true
    title?: true
    description?: true
    brandCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    uuid: string
    title: string
    description: string
    brandCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    title?: boolean
    description?: boolean
    brandCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | Product$brandArgs<ExtArgs>
    prices?: boolean | Product$pricesArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    categoryOnProduct?: boolean | Product$categoryOnProductArgs<ExtArgs>
    attributeOnProduct?: boolean | Product$attributeOnProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    uuid?: boolean
    title?: boolean
    description?: boolean
    brandCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | Product$brandArgs<ExtArgs>
    prices?: boolean | Product$pricesArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    categoryOnProduct?: boolean | Product$categoryOnProductArgs<ExtArgs>
    attributeOnProduct?: boolean | Product$attributeOnProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs> | null
      prices: Prisma.$PricePayload<ExtArgs>[]
      images: Prisma.$ImageOnProductPayload<ExtArgs>[]
      categoryOnProduct: Prisma.$CategoryOnProductPayload<ExtArgs>[]
      attributeOnProduct: Prisma.$AttributeOnProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      title: string
      description: string
      brandCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const productWithUuidOnly = await prisma.product.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    brand<T extends Product$brandArgs<ExtArgs> = {}>(args?: Subset<T, Product$brandArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    prices<T extends Product$pricesArgs<ExtArgs> = {}>(args?: Subset<T, Product$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'findMany'> | Null>;

    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    categoryOnProduct<T extends Product$categoryOnProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryOnProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    attributeOnProduct<T extends Product$attributeOnProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$attributeOnProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly uuid: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly brandCode: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.brand
   */
  export type Product$brandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    where?: BrandWhereInput
  }


  /**
   * Product.prices
   */
  export type Product$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }


  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    where?: ImageOnProductWhereInput
    orderBy?: ImageOnProductOrderByWithRelationInput | ImageOnProductOrderByWithRelationInput[]
    cursor?: ImageOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageOnProductScalarFieldEnum | ImageOnProductScalarFieldEnum[]
  }


  /**
   * Product.categoryOnProduct
   */
  export type Product$categoryOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    where?: CategoryOnProductWhereInput
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    cursor?: CategoryOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }


  /**
   * Product.attributeOnProduct
   */
  export type Product$attributeOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    where?: AttributeOnProductWhereInput
    orderBy?: AttributeOnProductOrderByWithRelationInput | AttributeOnProductOrderByWithRelationInput[]
    cursor?: AttributeOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeOnProductScalarFieldEnum | AttributeOnProductScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    prevPrice: number | null
    price: number | null
  }

  export type PriceSumAggregateOutputType = {
    prevPrice: number | null
    price: number | null
  }

  export type PriceMinAggregateOutputType = {
    uuid: string | null
    prevPrice: number | null
    price: number | null
    description: string | null
    phase: $Enums.PricePhaseEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    productUuid: string | null
    currencyCode: string | null
  }

  export type PriceMaxAggregateOutputType = {
    uuid: string | null
    prevPrice: number | null
    price: number | null
    description: string | null
    phase: $Enums.PricePhaseEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    productUuid: string | null
    currencyCode: string | null
  }

  export type PriceCountAggregateOutputType = {
    uuid: number
    prevPrice: number
    price: number
    description: number
    phase: number
    createdAt: number
    updatedAt: number
    productUuid: number
    currencyCode: number
    _all: number
  }


  export type PriceAvgAggregateInputType = {
    prevPrice?: true
    price?: true
  }

  export type PriceSumAggregateInputType = {
    prevPrice?: true
    price?: true
  }

  export type PriceMinAggregateInputType = {
    uuid?: true
    prevPrice?: true
    price?: true
    description?: true
    phase?: true
    createdAt?: true
    updatedAt?: true
    productUuid?: true
    currencyCode?: true
  }

  export type PriceMaxAggregateInputType = {
    uuid?: true
    prevPrice?: true
    price?: true
    description?: true
    phase?: true
    createdAt?: true
    updatedAt?: true
    productUuid?: true
    currencyCode?: true
  }

  export type PriceCountAggregateInputType = {
    uuid?: true
    prevPrice?: true
    price?: true
    description?: true
    phase?: true
    createdAt?: true
    updatedAt?: true
    productUuid?: true
    currencyCode?: true
    _all?: true
  }

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Price to aggregate.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }




  export type PriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithAggregationInput | PriceOrderByWithAggregationInput[]
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    uuid: string
    prevPrice: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt: Date
    updatedAt: Date
    productUuid: string
    currencyCode: string
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceGroupByOutputType[P]>
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
        }
      >
    >


  export type PriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    prevPrice?: boolean
    price?: boolean
    description?: boolean
    phase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productUuid?: boolean
    currencyCode?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectScalar = {
    uuid?: boolean
    prevPrice?: boolean
    price?: boolean
    description?: boolean
    phase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productUuid?: boolean
    currencyCode?: boolean
  }

  export type PriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }


  export type $PricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Price"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      currency: Prisma.$CurrencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      prevPrice: number | null
      price: number
      description: string
      phase: $Enums.PricePhaseEnum
      createdAt: Date
      updatedAt: Date
      productUuid: string
      currencyCode: string
    }, ExtArgs["result"]["price"]>
    composites: {}
  }


  type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = $Result.GetResult<Prisma.$PricePayload, S>

  type PriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceCountAggregateInputType | true
    }

  export interface PriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PriceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>
    ): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Price that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PriceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PriceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceFindFirstArgs<ExtArgs>>
    ): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PriceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const priceWithUuidOnly = await prisma.price.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends PriceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     * 
    **/
    create<T extends PriceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PriceCreateArgs<ExtArgs>>
    ): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Prices.
     *     @param {PriceCreateManyArgs} args - Arguments to create many Prices.
     *     @example
     *     // Create many Prices
     *     const price = await prisma.price.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PriceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     * 
    **/
    delete<T extends PriceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PriceDeleteArgs<ExtArgs>>
    ): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PriceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PriceUpdateArgs<ExtArgs>>
    ): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PriceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PriceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
    **/
    upsert<T extends PriceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PriceUpsertArgs<ExtArgs>>
    ): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAggregateArgs>(args: Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Price model
   */
  readonly fields: PriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    currency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Price model
   */ 
  interface PriceFieldRefs {
    readonly uuid: FieldRef<"Price", 'String'>
    readonly prevPrice: FieldRef<"Price", 'Float'>
    readonly price: FieldRef<"Price", 'Float'>
    readonly description: FieldRef<"Price", 'String'>
    readonly phase: FieldRef<"Price", 'PricePhaseEnum'>
    readonly createdAt: FieldRef<"Price", 'DateTime'>
    readonly updatedAt: FieldRef<"Price", 'DateTime'>
    readonly productUuid: FieldRef<"Price", 'String'>
    readonly currencyCode: FieldRef<"Price", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }


  /**
   * Price findUniqueOrThrow
   */
  export type PriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }


  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }


  /**
   * Price findFirstOrThrow
   */
  export type PriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }


  /**
   * Price findMany
   */
  export type PriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }


  /**
   * Price create
   */
  export type PriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to create a Price.
     */
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }


  /**
   * Price createMany
   */
  export type PriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Price update
   */
  export type PriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to update a Price.
     */
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     */
    where: PriceWhereUniqueInput
  }


  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
  }


  /**
   * Price upsert
   */
  export type PriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The filter to search for the Price to update in case it exists.
     */
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     */
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }


  /**
   * Price delete
   */
  export type PriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter which Price to delete.
     */
    where: PriceWhereUniqueInput
  }


  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PriceWhereInput
  }


  /**
   * Price without action
   */
  export type PriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    code: string | null
    title: string | null
    description: string | null
    parentCode: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    code: string | null
    title: string | null
    description: string | null
    parentCode: string | null
  }

  export type CategoryCountAggregateOutputType = {
    code: number
    title: number
    description: number
    parentCode: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    code?: true
    title?: true
    description?: true
    parentCode?: true
  }

  export type CategoryMaxAggregateInputType = {
    code?: true
    title?: true
    description?: true
    parentCode?: true
  }

  export type CategoryCountAggregateInputType = {
    code?: true
    title?: true
    description?: true
    parentCode?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    code: string
    title: string
    description: string
    parentCode: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    title?: boolean
    description?: boolean
    parentCode?: boolean
    children?: boolean | Category$childrenArgs<ExtArgs>
    parent?: boolean | Category$parentArgs<ExtArgs>
    features?: boolean | Category$featuresArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    brandOnCategory?: boolean | Category$brandOnCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    code?: boolean
    title?: boolean
    description?: boolean
    parentCode?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Category$childrenArgs<ExtArgs>
    parent?: boolean | Category$parentArgs<ExtArgs>
    features?: boolean | Category$featuresArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    brandOnCategory?: boolean | Category$brandOnCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      children: Prisma.$CategoryPayload<ExtArgs>[]
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      features: Prisma.$FeatureOnCategoryPayload<ExtArgs>[]
      products: Prisma.$CategoryOnProductPayload<ExtArgs>[]
      brandOnCategory: Prisma.$BrandOnCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      title: string
      description: string
      parentCode: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const categoryWithCodeOnly = await prisma.category.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    features<T extends Category$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Category$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    brandOnCategory<T extends Category$brandOnCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Category$brandOnCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly code: FieldRef<"Category", 'String'>
    readonly title: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly parentCode: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * Category.features
   */
  export type Category$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    where?: FeatureOnCategoryWhereInput
    orderBy?: FeatureOnCategoryOrderByWithRelationInput | FeatureOnCategoryOrderByWithRelationInput[]
    cursor?: FeatureOnCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureOnCategoryScalarFieldEnum | FeatureOnCategoryScalarFieldEnum[]
  }


  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    where?: CategoryOnProductWhereInput
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    cursor?: CategoryOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }


  /**
   * Category.brandOnCategory
   */
  export type Category$brandOnCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    where?: BrandOnCategoryWhereInput
    orderBy?: BrandOnCategoryOrderByWithRelationInput | BrandOnCategoryOrderByWithRelationInput[]
    cursor?: BrandOnCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandOnCategoryScalarFieldEnum | BrandOnCategoryScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model CategoryOnProduct
   */

  export type AggregateCategoryOnProduct = {
    _count: CategoryOnProductCountAggregateOutputType | null
    _min: CategoryOnProductMinAggregateOutputType | null
    _max: CategoryOnProductMaxAggregateOutputType | null
  }

  export type CategoryOnProductMinAggregateOutputType = {
    productUuid: string | null
    categoryCode: string | null
  }

  export type CategoryOnProductMaxAggregateOutputType = {
    productUuid: string | null
    categoryCode: string | null
  }

  export type CategoryOnProductCountAggregateOutputType = {
    productUuid: number
    categoryCode: number
    _all: number
  }


  export type CategoryOnProductMinAggregateInputType = {
    productUuid?: true
    categoryCode?: true
  }

  export type CategoryOnProductMaxAggregateInputType = {
    productUuid?: true
    categoryCode?: true
  }

  export type CategoryOnProductCountAggregateInputType = {
    productUuid?: true
    categoryCode?: true
    _all?: true
  }

  export type CategoryOnProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryOnProduct to aggregate.
     */
    where?: CategoryOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryOnProducts to fetch.
     */
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryOnProducts
    **/
    _count?: true | CategoryOnProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryOnProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryOnProductMaxAggregateInputType
  }

  export type GetCategoryOnProductAggregateType<T extends CategoryOnProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryOnProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryOnProduct[P]>
      : GetScalarType<T[P], AggregateCategoryOnProduct[P]>
  }




  export type CategoryOnProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryOnProductWhereInput
    orderBy?: CategoryOnProductOrderByWithAggregationInput | CategoryOnProductOrderByWithAggregationInput[]
    by: CategoryOnProductScalarFieldEnum[] | CategoryOnProductScalarFieldEnum
    having?: CategoryOnProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryOnProductCountAggregateInputType | true
    _min?: CategoryOnProductMinAggregateInputType
    _max?: CategoryOnProductMaxAggregateInputType
  }

  export type CategoryOnProductGroupByOutputType = {
    productUuid: string
    categoryCode: string
    _count: CategoryOnProductCountAggregateOutputType | null
    _min: CategoryOnProductMinAggregateOutputType | null
    _max: CategoryOnProductMaxAggregateOutputType | null
  }

  type GetCategoryOnProductGroupByPayload<T extends CategoryOnProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryOnProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryOnProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryOnProductGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryOnProductGroupByOutputType[P]>
        }
      >
    >


  export type CategoryOnProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productUuid?: boolean
    categoryCode?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryOnProduct"]>

  export type CategoryOnProductSelectScalar = {
    productUuid?: boolean
    categoryCode?: boolean
  }

  export type CategoryOnProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }


  export type $CategoryOnProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryOnProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productUuid: string
      categoryCode: string
    }, ExtArgs["result"]["categoryOnProduct"]>
    composites: {}
  }


  type CategoryOnProductGetPayload<S extends boolean | null | undefined | CategoryOnProductDefaultArgs> = $Result.GetResult<Prisma.$CategoryOnProductPayload, S>

  type CategoryOnProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryOnProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryOnProductCountAggregateInputType | true
    }

  export interface CategoryOnProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryOnProduct'], meta: { name: 'CategoryOnProduct' } }
    /**
     * Find zero or one CategoryOnProduct that matches the filter.
     * @param {CategoryOnProductFindUniqueArgs} args - Arguments to find a CategoryOnProduct
     * @example
     * // Get one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryOnProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryOnProductFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CategoryOnProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryOnProductFindUniqueOrThrowArgs} args - Arguments to find a CategoryOnProduct
     * @example
     * // Get one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryOnProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryOnProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CategoryOnProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductFindFirstArgs} args - Arguments to find a CategoryOnProduct
     * @example
     * // Get one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryOnProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryOnProductFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CategoryOnProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductFindFirstOrThrowArgs} args - Arguments to find a CategoryOnProduct
     * @example
     * // Get one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryOnProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryOnProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CategoryOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryOnProducts
     * const categoryOnProducts = await prisma.categoryOnProduct.findMany()
     * 
     * // Get first 10 CategoryOnProducts
     * const categoryOnProducts = await prisma.categoryOnProduct.findMany({ take: 10 })
     * 
     * // Only select the `productUuid`
     * const categoryOnProductWithProductUuidOnly = await prisma.categoryOnProduct.findMany({ select: { productUuid: true } })
     * 
    **/
    findMany<T extends CategoryOnProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryOnProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CategoryOnProduct.
     * @param {CategoryOnProductCreateArgs} args - Arguments to create a CategoryOnProduct.
     * @example
     * // Create one CategoryOnProduct
     * const CategoryOnProduct = await prisma.categoryOnProduct.create({
     *   data: {
     *     // ... data to create a CategoryOnProduct
     *   }
     * })
     * 
    **/
    create<T extends CategoryOnProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryOnProductCreateArgs<ExtArgs>>
    ): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CategoryOnProducts.
     *     @param {CategoryOnProductCreateManyArgs} args - Arguments to create many CategoryOnProducts.
     *     @example
     *     // Create many CategoryOnProducts
     *     const categoryOnProduct = await prisma.categoryOnProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryOnProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryOnProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryOnProduct.
     * @param {CategoryOnProductDeleteArgs} args - Arguments to delete one CategoryOnProduct.
     * @example
     * // Delete one CategoryOnProduct
     * const CategoryOnProduct = await prisma.categoryOnProduct.delete({
     *   where: {
     *     // ... filter to delete one CategoryOnProduct
     *   }
     * })
     * 
    **/
    delete<T extends CategoryOnProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryOnProductDeleteArgs<ExtArgs>>
    ): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CategoryOnProduct.
     * @param {CategoryOnProductUpdateArgs} args - Arguments to update one CategoryOnProduct.
     * @example
     * // Update one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryOnProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryOnProductUpdateArgs<ExtArgs>>
    ): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CategoryOnProducts.
     * @param {CategoryOnProductDeleteManyArgs} args - Arguments to filter CategoryOnProducts to delete.
     * @example
     * // Delete a few CategoryOnProducts
     * const { count } = await prisma.categoryOnProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryOnProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryOnProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryOnProducts
     * const categoryOnProduct = await prisma.categoryOnProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryOnProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryOnProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryOnProduct.
     * @param {CategoryOnProductUpsertArgs} args - Arguments to update or create a CategoryOnProduct.
     * @example
     * // Update or create a CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.upsert({
     *   create: {
     *     // ... data to create a CategoryOnProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryOnProduct we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryOnProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryOnProductUpsertArgs<ExtArgs>>
    ): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CategoryOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductCountArgs} args - Arguments to filter CategoryOnProducts to count.
     * @example
     * // Count the number of CategoryOnProducts
     * const count = await prisma.categoryOnProduct.count({
     *   where: {
     *     // ... the filter for the CategoryOnProducts we want to count
     *   }
     * })
    **/
    count<T extends CategoryOnProductCountArgs>(
      args?: Subset<T, CategoryOnProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryOnProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryOnProductAggregateArgs>(args: Subset<T, CategoryOnProductAggregateArgs>): Prisma.PrismaPromise<GetCategoryOnProductAggregateType<T>>

    /**
     * Group by CategoryOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryOnProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryOnProductGroupByArgs['orderBy'] }
        : { orderBy?: CategoryOnProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryOnProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryOnProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryOnProduct model
   */
  readonly fields: CategoryOnProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryOnProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryOnProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CategoryOnProduct model
   */ 
  interface CategoryOnProductFieldRefs {
    readonly productUuid: FieldRef<"CategoryOnProduct", 'String'>
    readonly categoryCode: FieldRef<"CategoryOnProduct", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CategoryOnProduct findUnique
   */
  export type CategoryOnProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProduct to fetch.
     */
    where: CategoryOnProductWhereUniqueInput
  }


  /**
   * CategoryOnProduct findUniqueOrThrow
   */
  export type CategoryOnProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProduct to fetch.
     */
    where: CategoryOnProductWhereUniqueInput
  }


  /**
   * CategoryOnProduct findFirst
   */
  export type CategoryOnProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProduct to fetch.
     */
    where?: CategoryOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryOnProducts to fetch.
     */
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryOnProducts.
     */
    cursor?: CategoryOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryOnProducts.
     */
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }


  /**
   * CategoryOnProduct findFirstOrThrow
   */
  export type CategoryOnProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProduct to fetch.
     */
    where?: CategoryOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryOnProducts to fetch.
     */
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryOnProducts.
     */
    cursor?: CategoryOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryOnProducts.
     */
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }


  /**
   * CategoryOnProduct findMany
   */
  export type CategoryOnProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProducts to fetch.
     */
    where?: CategoryOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryOnProducts to fetch.
     */
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryOnProducts.
     */
    cursor?: CategoryOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryOnProducts.
     */
    skip?: number
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }


  /**
   * CategoryOnProduct create
   */
  export type CategoryOnProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryOnProduct.
     */
    data: XOR<CategoryOnProductCreateInput, CategoryOnProductUncheckedCreateInput>
  }


  /**
   * CategoryOnProduct createMany
   */
  export type CategoryOnProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryOnProducts.
     */
    data: CategoryOnProductCreateManyInput | CategoryOnProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CategoryOnProduct update
   */
  export type CategoryOnProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryOnProduct.
     */
    data: XOR<CategoryOnProductUpdateInput, CategoryOnProductUncheckedUpdateInput>
    /**
     * Choose, which CategoryOnProduct to update.
     */
    where: CategoryOnProductWhereUniqueInput
  }


  /**
   * CategoryOnProduct updateMany
   */
  export type CategoryOnProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryOnProducts.
     */
    data: XOR<CategoryOnProductUpdateManyMutationInput, CategoryOnProductUncheckedUpdateManyInput>
    /**
     * Filter which CategoryOnProducts to update
     */
    where?: CategoryOnProductWhereInput
  }


  /**
   * CategoryOnProduct upsert
   */
  export type CategoryOnProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryOnProduct to update in case it exists.
     */
    where: CategoryOnProductWhereUniqueInput
    /**
     * In case the CategoryOnProduct found by the `where` argument doesn't exist, create a new CategoryOnProduct with this data.
     */
    create: XOR<CategoryOnProductCreateInput, CategoryOnProductUncheckedCreateInput>
    /**
     * In case the CategoryOnProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryOnProductUpdateInput, CategoryOnProductUncheckedUpdateInput>
  }


  /**
   * CategoryOnProduct delete
   */
  export type CategoryOnProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter which CategoryOnProduct to delete.
     */
    where: CategoryOnProductWhereUniqueInput
  }


  /**
   * CategoryOnProduct deleteMany
   */
  export type CategoryOnProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryOnProducts to delete
     */
    where?: CategoryOnProductWhereInput
  }


  /**
   * CategoryOnProduct without action
   */
  export type CategoryOnProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
  }



  /**
   * Model BrandOnCategory
   */

  export type AggregateBrandOnCategory = {
    _count: BrandOnCategoryCountAggregateOutputType | null
    _min: BrandOnCategoryMinAggregateOutputType | null
    _max: BrandOnCategoryMaxAggregateOutputType | null
  }

  export type BrandOnCategoryMinAggregateOutputType = {
    brandCode: string | null
    categoryCode: string | null
  }

  export type BrandOnCategoryMaxAggregateOutputType = {
    brandCode: string | null
    categoryCode: string | null
  }

  export type BrandOnCategoryCountAggregateOutputType = {
    brandCode: number
    categoryCode: number
    _all: number
  }


  export type BrandOnCategoryMinAggregateInputType = {
    brandCode?: true
    categoryCode?: true
  }

  export type BrandOnCategoryMaxAggregateInputType = {
    brandCode?: true
    categoryCode?: true
  }

  export type BrandOnCategoryCountAggregateInputType = {
    brandCode?: true
    categoryCode?: true
    _all?: true
  }

  export type BrandOnCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandOnCategory to aggregate.
     */
    where?: BrandOnCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandOnCategories to fetch.
     */
    orderBy?: BrandOnCategoryOrderByWithRelationInput | BrandOnCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandOnCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandOnCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandOnCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrandOnCategories
    **/
    _count?: true | BrandOnCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandOnCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandOnCategoryMaxAggregateInputType
  }

  export type GetBrandOnCategoryAggregateType<T extends BrandOnCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBrandOnCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrandOnCategory[P]>
      : GetScalarType<T[P], AggregateBrandOnCategory[P]>
  }




  export type BrandOnCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandOnCategoryWhereInput
    orderBy?: BrandOnCategoryOrderByWithAggregationInput | BrandOnCategoryOrderByWithAggregationInput[]
    by: BrandOnCategoryScalarFieldEnum[] | BrandOnCategoryScalarFieldEnum
    having?: BrandOnCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandOnCategoryCountAggregateInputType | true
    _min?: BrandOnCategoryMinAggregateInputType
    _max?: BrandOnCategoryMaxAggregateInputType
  }

  export type BrandOnCategoryGroupByOutputType = {
    brandCode: string
    categoryCode: string
    _count: BrandOnCategoryCountAggregateOutputType | null
    _min: BrandOnCategoryMinAggregateOutputType | null
    _max: BrandOnCategoryMaxAggregateOutputType | null
  }

  type GetBrandOnCategoryGroupByPayload<T extends BrandOnCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandOnCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandOnCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandOnCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BrandOnCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BrandOnCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    brandCode?: boolean
    categoryCode?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brandOnCategory"]>

  export type BrandOnCategorySelectScalar = {
    brandCode?: boolean
    categoryCode?: boolean
  }

  export type BrandOnCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }


  export type $BrandOnCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrandOnCategory"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      brandCode: string
      categoryCode: string
    }, ExtArgs["result"]["brandOnCategory"]>
    composites: {}
  }


  type BrandOnCategoryGetPayload<S extends boolean | null | undefined | BrandOnCategoryDefaultArgs> = $Result.GetResult<Prisma.$BrandOnCategoryPayload, S>

  type BrandOnCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandOnCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrandOnCategoryCountAggregateInputType | true
    }

  export interface BrandOnCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrandOnCategory'], meta: { name: 'BrandOnCategory' } }
    /**
     * Find zero or one BrandOnCategory that matches the filter.
     * @param {BrandOnCategoryFindUniqueArgs} args - Arguments to find a BrandOnCategory
     * @example
     * // Get one BrandOnCategory
     * const brandOnCategory = await prisma.brandOnCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandOnCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrandOnCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandOnCategoryClient<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BrandOnCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandOnCategoryFindUniqueOrThrowArgs} args - Arguments to find a BrandOnCategory
     * @example
     * // Get one BrandOnCategory
     * const brandOnCategory = await prisma.brandOnCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandOnCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandOnCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandOnCategoryClient<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BrandOnCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandOnCategoryFindFirstArgs} args - Arguments to find a BrandOnCategory
     * @example
     * // Get one BrandOnCategory
     * const brandOnCategory = await prisma.brandOnCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandOnCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandOnCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__BrandOnCategoryClient<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BrandOnCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandOnCategoryFindFirstOrThrowArgs} args - Arguments to find a BrandOnCategory
     * @example
     * // Get one BrandOnCategory
     * const brandOnCategory = await prisma.brandOnCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandOnCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandOnCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandOnCategoryClient<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BrandOnCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandOnCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandOnCategories
     * const brandOnCategories = await prisma.brandOnCategory.findMany()
     * 
     * // Get first 10 BrandOnCategories
     * const brandOnCategories = await prisma.brandOnCategory.findMany({ take: 10 })
     * 
     * // Only select the `brandCode`
     * const brandOnCategoryWithBrandCodeOnly = await prisma.brandOnCategory.findMany({ select: { brandCode: true } })
     * 
    **/
    findMany<T extends BrandOnCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandOnCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BrandOnCategory.
     * @param {BrandOnCategoryCreateArgs} args - Arguments to create a BrandOnCategory.
     * @example
     * // Create one BrandOnCategory
     * const BrandOnCategory = await prisma.brandOnCategory.create({
     *   data: {
     *     // ... data to create a BrandOnCategory
     *   }
     * })
     * 
    **/
    create<T extends BrandOnCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandOnCategoryCreateArgs<ExtArgs>>
    ): Prisma__BrandOnCategoryClient<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BrandOnCategories.
     *     @param {BrandOnCategoryCreateManyArgs} args - Arguments to create many BrandOnCategories.
     *     @example
     *     // Create many BrandOnCategories
     *     const brandOnCategory = await prisma.brandOnCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandOnCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandOnCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BrandOnCategory.
     * @param {BrandOnCategoryDeleteArgs} args - Arguments to delete one BrandOnCategory.
     * @example
     * // Delete one BrandOnCategory
     * const BrandOnCategory = await prisma.brandOnCategory.delete({
     *   where: {
     *     // ... filter to delete one BrandOnCategory
     *   }
     * })
     * 
    **/
    delete<T extends BrandOnCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrandOnCategoryDeleteArgs<ExtArgs>>
    ): Prisma__BrandOnCategoryClient<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BrandOnCategory.
     * @param {BrandOnCategoryUpdateArgs} args - Arguments to update one BrandOnCategory.
     * @example
     * // Update one BrandOnCategory
     * const brandOnCategory = await prisma.brandOnCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandOnCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandOnCategoryUpdateArgs<ExtArgs>>
    ): Prisma__BrandOnCategoryClient<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BrandOnCategories.
     * @param {BrandOnCategoryDeleteManyArgs} args - Arguments to filter BrandOnCategories to delete.
     * @example
     * // Delete a few BrandOnCategories
     * const { count } = await prisma.brandOnCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandOnCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandOnCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandOnCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandOnCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandOnCategories
     * const brandOnCategory = await prisma.brandOnCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandOnCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrandOnCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BrandOnCategory.
     * @param {BrandOnCategoryUpsertArgs} args - Arguments to update or create a BrandOnCategory.
     * @example
     * // Update or create a BrandOnCategory
     * const brandOnCategory = await prisma.brandOnCategory.upsert({
     *   create: {
     *     // ... data to create a BrandOnCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandOnCategory we want to update
     *   }
     * })
    **/
    upsert<T extends BrandOnCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrandOnCategoryUpsertArgs<ExtArgs>>
    ): Prisma__BrandOnCategoryClient<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BrandOnCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandOnCategoryCountArgs} args - Arguments to filter BrandOnCategories to count.
     * @example
     * // Count the number of BrandOnCategories
     * const count = await prisma.brandOnCategory.count({
     *   where: {
     *     // ... the filter for the BrandOnCategories we want to count
     *   }
     * })
    **/
    count<T extends BrandOnCategoryCountArgs>(
      args?: Subset<T, BrandOnCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandOnCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrandOnCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandOnCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandOnCategoryAggregateArgs>(args: Subset<T, BrandOnCategoryAggregateArgs>): Prisma.PrismaPromise<GetBrandOnCategoryAggregateType<T>>

    /**
     * Group by BrandOnCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandOnCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandOnCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandOnCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BrandOnCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandOnCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandOnCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrandOnCategory model
   */
  readonly fields: BrandOnCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrandOnCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandOnCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BrandOnCategory model
   */ 
  interface BrandOnCategoryFieldRefs {
    readonly brandCode: FieldRef<"BrandOnCategory", 'String'>
    readonly categoryCode: FieldRef<"BrandOnCategory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BrandOnCategory findUnique
   */
  export type BrandOnCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandOnCategory to fetch.
     */
    where: BrandOnCategoryWhereUniqueInput
  }


  /**
   * BrandOnCategory findUniqueOrThrow
   */
  export type BrandOnCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandOnCategory to fetch.
     */
    where: BrandOnCategoryWhereUniqueInput
  }


  /**
   * BrandOnCategory findFirst
   */
  export type BrandOnCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandOnCategory to fetch.
     */
    where?: BrandOnCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandOnCategories to fetch.
     */
    orderBy?: BrandOnCategoryOrderByWithRelationInput | BrandOnCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandOnCategories.
     */
    cursor?: BrandOnCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandOnCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandOnCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandOnCategories.
     */
    distinct?: BrandOnCategoryScalarFieldEnum | BrandOnCategoryScalarFieldEnum[]
  }


  /**
   * BrandOnCategory findFirstOrThrow
   */
  export type BrandOnCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandOnCategory to fetch.
     */
    where?: BrandOnCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandOnCategories to fetch.
     */
    orderBy?: BrandOnCategoryOrderByWithRelationInput | BrandOnCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandOnCategories.
     */
    cursor?: BrandOnCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandOnCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandOnCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandOnCategories.
     */
    distinct?: BrandOnCategoryScalarFieldEnum | BrandOnCategoryScalarFieldEnum[]
  }


  /**
   * BrandOnCategory findMany
   */
  export type BrandOnCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandOnCategories to fetch.
     */
    where?: BrandOnCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandOnCategories to fetch.
     */
    orderBy?: BrandOnCategoryOrderByWithRelationInput | BrandOnCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrandOnCategories.
     */
    cursor?: BrandOnCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandOnCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandOnCategories.
     */
    skip?: number
    distinct?: BrandOnCategoryScalarFieldEnum | BrandOnCategoryScalarFieldEnum[]
  }


  /**
   * BrandOnCategory create
   */
  export type BrandOnCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BrandOnCategory.
     */
    data: XOR<BrandOnCategoryCreateInput, BrandOnCategoryUncheckedCreateInput>
  }


  /**
   * BrandOnCategory createMany
   */
  export type BrandOnCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandOnCategories.
     */
    data: BrandOnCategoryCreateManyInput | BrandOnCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BrandOnCategory update
   */
  export type BrandOnCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BrandOnCategory.
     */
    data: XOR<BrandOnCategoryUpdateInput, BrandOnCategoryUncheckedUpdateInput>
    /**
     * Choose, which BrandOnCategory to update.
     */
    where: BrandOnCategoryWhereUniqueInput
  }


  /**
   * BrandOnCategory updateMany
   */
  export type BrandOnCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandOnCategories.
     */
    data: XOR<BrandOnCategoryUpdateManyMutationInput, BrandOnCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BrandOnCategories to update
     */
    where?: BrandOnCategoryWhereInput
  }


  /**
   * BrandOnCategory upsert
   */
  export type BrandOnCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BrandOnCategory to update in case it exists.
     */
    where: BrandOnCategoryWhereUniqueInput
    /**
     * In case the BrandOnCategory found by the `where` argument doesn't exist, create a new BrandOnCategory with this data.
     */
    create: XOR<BrandOnCategoryCreateInput, BrandOnCategoryUncheckedCreateInput>
    /**
     * In case the BrandOnCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandOnCategoryUpdateInput, BrandOnCategoryUncheckedUpdateInput>
  }


  /**
   * BrandOnCategory delete
   */
  export type BrandOnCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    /**
     * Filter which BrandOnCategory to delete.
     */
    where: BrandOnCategoryWhereUniqueInput
  }


  /**
   * BrandOnCategory deleteMany
   */
  export type BrandOnCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandOnCategories to delete
     */
    where?: BrandOnCategoryWhereInput
  }


  /**
   * BrandOnCategory without action
   */
  export type BrandOnCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
  }



  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitMinAggregateOutputType = {
    code: string | null
    value: string | null
    description: string | null
  }

  export type UnitMaxAggregateOutputType = {
    code: string | null
    value: string | null
    description: string | null
  }

  export type UnitCountAggregateOutputType = {
    code: number
    value: number
    description: number
    _all: number
  }


  export type UnitMinAggregateInputType = {
    code?: true
    value?: true
    description?: true
  }

  export type UnitMaxAggregateInputType = {
    code?: true
    value?: true
    description?: true
  }

  export type UnitCountAggregateInputType = {
    code?: true
    value?: true
    description?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    code: string
    value: string
    description: string | null
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    value?: boolean
    description?: boolean
    features?: boolean | Unit$featuresArgs<ExtArgs>
    attribute?: boolean | Unit$attributeArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    code?: boolean
    value?: boolean
    description?: boolean
  }

  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | Unit$featuresArgs<ExtArgs>
    attribute?: boolean | Unit$attributeArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      features: Prisma.$FeaturePayload<ExtArgs>[]
      attribute: Prisma.$AttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      value: string
      description: string | null
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }


  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UnitFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>
    ): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Unit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UnitFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>
    ): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const unitWithCodeOnly = await prisma.unit.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends UnitFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
    **/
    create<T extends UnitCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UnitCreateArgs<ExtArgs>>
    ): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Units.
     *     @param {UnitCreateManyArgs} args - Arguments to create many Units.
     *     @example
     *     // Create many Units
     *     const unit = await prisma.unit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UnitCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
    **/
    delete<T extends UnitDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>
    ): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UnitUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>
    ): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UnitDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UnitUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
    **/
    upsert<T extends UnitUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>
    ): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    features<T extends Unit$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Unit$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'findMany'> | Null>;

    attribute<T extends Unit$attributeArgs<ExtArgs> = {}>(args?: Subset<T, Unit$attributeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Unit model
   */ 
  interface UnitFieldRefs {
    readonly code: FieldRef<"Unit", 'String'>
    readonly value: FieldRef<"Unit", 'String'>
    readonly description: FieldRef<"Unit", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }


  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }


  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }


  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }


  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }


  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }


  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }


  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
  }


  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }


  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }


  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
  }


  /**
   * Unit.features
   */
  export type Unit$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }


  /**
   * Unit.attribute
   */
  export type Unit$attributeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    cursor?: AttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }


  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
  }



  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    uuid: string | null
    title: string | null
  }

  export type ImageMaxAggregateOutputType = {
    uuid: string | null
    title: string | null
  }

  export type ImageCountAggregateOutputType = {
    uuid: number
    title: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    uuid?: true
    title?: true
  }

  export type ImageMaxAggregateInputType = {
    uuid?: true
    title?: true
  }

  export type ImageCountAggregateInputType = {
    uuid?: true
    title?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    uuid: string
    title: string
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    title?: boolean
    products?: boolean | Image$productsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    uuid?: boolean
    title?: boolean
  }

  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Image$productsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      products: Prisma.$ImageOnProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      title: string
    }, ExtArgs["result"]["image"]>
    composites: {}
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const imageWithUuidOnly = await prisma.image.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Image$productsArgs<ExtArgs> = {}>(args?: Subset<T, Image$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly uuid: FieldRef<"Image", 'String'>
    readonly title: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image.products
   */
  export type Image$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    where?: ImageOnProductWhereInput
    orderBy?: ImageOnProductOrderByWithRelationInput | ImageOnProductOrderByWithRelationInput[]
    cursor?: ImageOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageOnProductScalarFieldEnum | ImageOnProductScalarFieldEnum[]
  }


  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
  }



  /**
   * Model ImageOnProduct
   */

  export type AggregateImageOnProduct = {
    _count: ImageOnProductCountAggregateOutputType | null
    _avg: ImageOnProductAvgAggregateOutputType | null
    _sum: ImageOnProductSumAggregateOutputType | null
    _min: ImageOnProductMinAggregateOutputType | null
    _max: ImageOnProductMaxAggregateOutputType | null
  }

  export type ImageOnProductAvgAggregateOutputType = {
    order: number | null
  }

  export type ImageOnProductSumAggregateOutputType = {
    order: number | null
  }

  export type ImageOnProductMinAggregateOutputType = {
    productUuid: string | null
    imageUuid: string | null
    order: number | null
  }

  export type ImageOnProductMaxAggregateOutputType = {
    productUuid: string | null
    imageUuid: string | null
    order: number | null
  }

  export type ImageOnProductCountAggregateOutputType = {
    productUuid: number
    imageUuid: number
    order: number
    _all: number
  }


  export type ImageOnProductAvgAggregateInputType = {
    order?: true
  }

  export type ImageOnProductSumAggregateInputType = {
    order?: true
  }

  export type ImageOnProductMinAggregateInputType = {
    productUuid?: true
    imageUuid?: true
    order?: true
  }

  export type ImageOnProductMaxAggregateInputType = {
    productUuid?: true
    imageUuid?: true
    order?: true
  }

  export type ImageOnProductCountAggregateInputType = {
    productUuid?: true
    imageUuid?: true
    order?: true
    _all?: true
  }

  export type ImageOnProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageOnProduct to aggregate.
     */
    where?: ImageOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageOnProducts to fetch.
     */
    orderBy?: ImageOnProductOrderByWithRelationInput | ImageOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageOnProducts
    **/
    _count?: true | ImageOnProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageOnProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageOnProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageOnProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageOnProductMaxAggregateInputType
  }

  export type GetImageOnProductAggregateType<T extends ImageOnProductAggregateArgs> = {
        [P in keyof T & keyof AggregateImageOnProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageOnProduct[P]>
      : GetScalarType<T[P], AggregateImageOnProduct[P]>
  }




  export type ImageOnProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageOnProductWhereInput
    orderBy?: ImageOnProductOrderByWithAggregationInput | ImageOnProductOrderByWithAggregationInput[]
    by: ImageOnProductScalarFieldEnum[] | ImageOnProductScalarFieldEnum
    having?: ImageOnProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageOnProductCountAggregateInputType | true
    _avg?: ImageOnProductAvgAggregateInputType
    _sum?: ImageOnProductSumAggregateInputType
    _min?: ImageOnProductMinAggregateInputType
    _max?: ImageOnProductMaxAggregateInputType
  }

  export type ImageOnProductGroupByOutputType = {
    productUuid: string
    imageUuid: string
    order: number
    _count: ImageOnProductCountAggregateOutputType | null
    _avg: ImageOnProductAvgAggregateOutputType | null
    _sum: ImageOnProductSumAggregateOutputType | null
    _min: ImageOnProductMinAggregateOutputType | null
    _max: ImageOnProductMaxAggregateOutputType | null
  }

  type GetImageOnProductGroupByPayload<T extends ImageOnProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageOnProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageOnProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageOnProductGroupByOutputType[P]>
            : GetScalarType<T[P], ImageOnProductGroupByOutputType[P]>
        }
      >
    >


  export type ImageOnProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productUuid?: boolean
    imageUuid?: boolean
    order?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageOnProduct"]>

  export type ImageOnProductSelectScalar = {
    productUuid?: boolean
    imageUuid?: boolean
    order?: boolean
  }

  export type ImageOnProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }


  export type $ImageOnProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageOnProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productUuid: string
      imageUuid: string
      order: number
    }, ExtArgs["result"]["imageOnProduct"]>
    composites: {}
  }


  type ImageOnProductGetPayload<S extends boolean | null | undefined | ImageOnProductDefaultArgs> = $Result.GetResult<Prisma.$ImageOnProductPayload, S>

  type ImageOnProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImageOnProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageOnProductCountAggregateInputType | true
    }

  export interface ImageOnProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageOnProduct'], meta: { name: 'ImageOnProduct' } }
    /**
     * Find zero or one ImageOnProduct that matches the filter.
     * @param {ImageOnProductFindUniqueArgs} args - Arguments to find a ImageOnProduct
     * @example
     * // Get one ImageOnProduct
     * const imageOnProduct = await prisma.imageOnProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageOnProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageOnProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageOnProductClient<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ImageOnProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageOnProductFindUniqueOrThrowArgs} args - Arguments to find a ImageOnProduct
     * @example
     * // Get one ImageOnProduct
     * const imageOnProduct = await prisma.imageOnProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageOnProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageOnProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageOnProductClient<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ImageOnProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageOnProductFindFirstArgs} args - Arguments to find a ImageOnProduct
     * @example
     * // Get one ImageOnProduct
     * const imageOnProduct = await prisma.imageOnProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageOnProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageOnProductFindFirstArgs<ExtArgs>>
    ): Prisma__ImageOnProductClient<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ImageOnProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageOnProductFindFirstOrThrowArgs} args - Arguments to find a ImageOnProduct
     * @example
     * // Get one ImageOnProduct
     * const imageOnProduct = await prisma.imageOnProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageOnProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageOnProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageOnProductClient<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ImageOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageOnProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageOnProducts
     * const imageOnProducts = await prisma.imageOnProduct.findMany()
     * 
     * // Get first 10 ImageOnProducts
     * const imageOnProducts = await prisma.imageOnProduct.findMany({ take: 10 })
     * 
     * // Only select the `productUuid`
     * const imageOnProductWithProductUuidOnly = await prisma.imageOnProduct.findMany({ select: { productUuid: true } })
     * 
    **/
    findMany<T extends ImageOnProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageOnProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ImageOnProduct.
     * @param {ImageOnProductCreateArgs} args - Arguments to create a ImageOnProduct.
     * @example
     * // Create one ImageOnProduct
     * const ImageOnProduct = await prisma.imageOnProduct.create({
     *   data: {
     *     // ... data to create a ImageOnProduct
     *   }
     * })
     * 
    **/
    create<T extends ImageOnProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageOnProductCreateArgs<ExtArgs>>
    ): Prisma__ImageOnProductClient<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ImageOnProducts.
     *     @param {ImageOnProductCreateManyArgs} args - Arguments to create many ImageOnProducts.
     *     @example
     *     // Create many ImageOnProducts
     *     const imageOnProduct = await prisma.imageOnProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageOnProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageOnProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImageOnProduct.
     * @param {ImageOnProductDeleteArgs} args - Arguments to delete one ImageOnProduct.
     * @example
     * // Delete one ImageOnProduct
     * const ImageOnProduct = await prisma.imageOnProduct.delete({
     *   where: {
     *     // ... filter to delete one ImageOnProduct
     *   }
     * })
     * 
    **/
    delete<T extends ImageOnProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageOnProductDeleteArgs<ExtArgs>>
    ): Prisma__ImageOnProductClient<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ImageOnProduct.
     * @param {ImageOnProductUpdateArgs} args - Arguments to update one ImageOnProduct.
     * @example
     * // Update one ImageOnProduct
     * const imageOnProduct = await prisma.imageOnProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageOnProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageOnProductUpdateArgs<ExtArgs>>
    ): Prisma__ImageOnProductClient<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ImageOnProducts.
     * @param {ImageOnProductDeleteManyArgs} args - Arguments to filter ImageOnProducts to delete.
     * @example
     * // Delete a few ImageOnProducts
     * const { count } = await prisma.imageOnProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageOnProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageOnProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageOnProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageOnProducts
     * const imageOnProduct = await prisma.imageOnProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageOnProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageOnProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImageOnProduct.
     * @param {ImageOnProductUpsertArgs} args - Arguments to update or create a ImageOnProduct.
     * @example
     * // Update or create a ImageOnProduct
     * const imageOnProduct = await prisma.imageOnProduct.upsert({
     *   create: {
     *     // ... data to create a ImageOnProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageOnProduct we want to update
     *   }
     * })
    **/
    upsert<T extends ImageOnProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageOnProductUpsertArgs<ExtArgs>>
    ): Prisma__ImageOnProductClient<$Result.GetResult<Prisma.$ImageOnProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ImageOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageOnProductCountArgs} args - Arguments to filter ImageOnProducts to count.
     * @example
     * // Count the number of ImageOnProducts
     * const count = await prisma.imageOnProduct.count({
     *   where: {
     *     // ... the filter for the ImageOnProducts we want to count
     *   }
     * })
    **/
    count<T extends ImageOnProductCountArgs>(
      args?: Subset<T, ImageOnProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageOnProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageOnProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageOnProductAggregateArgs>(args: Subset<T, ImageOnProductAggregateArgs>): Prisma.PrismaPromise<GetImageOnProductAggregateType<T>>

    /**
     * Group by ImageOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageOnProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageOnProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageOnProductGroupByArgs['orderBy'] }
        : { orderBy?: ImageOnProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageOnProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageOnProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageOnProduct model
   */
  readonly fields: ImageOnProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageOnProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageOnProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ImageOnProduct model
   */ 
  interface ImageOnProductFieldRefs {
    readonly productUuid: FieldRef<"ImageOnProduct", 'String'>
    readonly imageUuid: FieldRef<"ImageOnProduct", 'String'>
    readonly order: FieldRef<"ImageOnProduct", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ImageOnProduct findUnique
   */
  export type ImageOnProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageOnProduct to fetch.
     */
    where: ImageOnProductWhereUniqueInput
  }


  /**
   * ImageOnProduct findUniqueOrThrow
   */
  export type ImageOnProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageOnProduct to fetch.
     */
    where: ImageOnProductWhereUniqueInput
  }


  /**
   * ImageOnProduct findFirst
   */
  export type ImageOnProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageOnProduct to fetch.
     */
    where?: ImageOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageOnProducts to fetch.
     */
    orderBy?: ImageOnProductOrderByWithRelationInput | ImageOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageOnProducts.
     */
    cursor?: ImageOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageOnProducts.
     */
    distinct?: ImageOnProductScalarFieldEnum | ImageOnProductScalarFieldEnum[]
  }


  /**
   * ImageOnProduct findFirstOrThrow
   */
  export type ImageOnProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageOnProduct to fetch.
     */
    where?: ImageOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageOnProducts to fetch.
     */
    orderBy?: ImageOnProductOrderByWithRelationInput | ImageOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageOnProducts.
     */
    cursor?: ImageOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageOnProducts.
     */
    distinct?: ImageOnProductScalarFieldEnum | ImageOnProductScalarFieldEnum[]
  }


  /**
   * ImageOnProduct findMany
   */
  export type ImageOnProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageOnProducts to fetch.
     */
    where?: ImageOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageOnProducts to fetch.
     */
    orderBy?: ImageOnProductOrderByWithRelationInput | ImageOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageOnProducts.
     */
    cursor?: ImageOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageOnProducts.
     */
    skip?: number
    distinct?: ImageOnProductScalarFieldEnum | ImageOnProductScalarFieldEnum[]
  }


  /**
   * ImageOnProduct create
   */
  export type ImageOnProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageOnProduct.
     */
    data: XOR<ImageOnProductCreateInput, ImageOnProductUncheckedCreateInput>
  }


  /**
   * ImageOnProduct createMany
   */
  export type ImageOnProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageOnProducts.
     */
    data: ImageOnProductCreateManyInput | ImageOnProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ImageOnProduct update
   */
  export type ImageOnProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageOnProduct.
     */
    data: XOR<ImageOnProductUpdateInput, ImageOnProductUncheckedUpdateInput>
    /**
     * Choose, which ImageOnProduct to update.
     */
    where: ImageOnProductWhereUniqueInput
  }


  /**
   * ImageOnProduct updateMany
   */
  export type ImageOnProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageOnProducts.
     */
    data: XOR<ImageOnProductUpdateManyMutationInput, ImageOnProductUncheckedUpdateManyInput>
    /**
     * Filter which ImageOnProducts to update
     */
    where?: ImageOnProductWhereInput
  }


  /**
   * ImageOnProduct upsert
   */
  export type ImageOnProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageOnProduct to update in case it exists.
     */
    where: ImageOnProductWhereUniqueInput
    /**
     * In case the ImageOnProduct found by the `where` argument doesn't exist, create a new ImageOnProduct with this data.
     */
    create: XOR<ImageOnProductCreateInput, ImageOnProductUncheckedCreateInput>
    /**
     * In case the ImageOnProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageOnProductUpdateInput, ImageOnProductUncheckedUpdateInput>
  }


  /**
   * ImageOnProduct delete
   */
  export type ImageOnProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
    /**
     * Filter which ImageOnProduct to delete.
     */
    where: ImageOnProductWhereUniqueInput
  }


  /**
   * ImageOnProduct deleteMany
   */
  export type ImageOnProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageOnProducts to delete
     */
    where?: ImageOnProductWhereInput
  }


  /**
   * ImageOnProduct without action
   */
  export type ImageOnProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageOnProduct
     */
    select?: ImageOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageOnProductInclude<ExtArgs> | null
  }



  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureMinAggregateOutputType = {
    uuid: string | null
    title: string | null
    code: string | null
    description: string | null
    type: $Enums.FeatureTypeEnum | null
    isShowInProductTab: boolean | null
    isShowInProductList: boolean | null
    isShowInProductHeader: boolean | null
    status: $Enums.FeatureStatusEnum | null
    groupUuid: string | null
    unitCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureMaxAggregateOutputType = {
    uuid: string | null
    title: string | null
    code: string | null
    description: string | null
    type: $Enums.FeatureTypeEnum | null
    isShowInProductTab: boolean | null
    isShowInProductList: boolean | null
    isShowInProductHeader: boolean | null
    status: $Enums.FeatureStatusEnum | null
    groupUuid: string | null
    unitCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureCountAggregateOutputType = {
    uuid: number
    title: number
    code: number
    description: number
    type: number
    isShowInProductTab: number
    isShowInProductList: number
    isShowInProductHeader: number
    status: number
    groupUuid: number
    unitCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeatureMinAggregateInputType = {
    uuid?: true
    title?: true
    code?: true
    description?: true
    type?: true
    isShowInProductTab?: true
    isShowInProductList?: true
    isShowInProductHeader?: true
    status?: true
    groupUuid?: true
    unitCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureMaxAggregateInputType = {
    uuid?: true
    title?: true
    code?: true
    description?: true
    type?: true
    isShowInProductTab?: true
    isShowInProductList?: true
    isShowInProductHeader?: true
    status?: true
    groupUuid?: true
    unitCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureCountAggregateInputType = {
    uuid?: true
    title?: true
    code?: true
    description?: true
    type?: true
    isShowInProductTab?: true
    isShowInProductList?: true
    isShowInProductHeader?: true
    status?: true
    groupUuid?: true
    unitCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    uuid: string
    title: string
    code: string
    description: string
    type: $Enums.FeatureTypeEnum
    isShowInProductTab: boolean
    isShowInProductList: boolean
    isShowInProductHeader: boolean
    status: $Enums.FeatureStatusEnum
    groupUuid: string | null
    unitCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    title?: boolean
    code?: boolean
    description?: boolean
    type?: boolean
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: boolean
    groupUuid?: boolean
    unitCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | Feature$groupArgs<ExtArgs>
    unit?: boolean | Feature$unitArgs<ExtArgs>
    categories?: boolean | Feature$categoriesArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectScalar = {
    uuid?: boolean
    title?: boolean
    code?: boolean
    description?: boolean
    type?: boolean
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: boolean
    groupUuid?: boolean
    unitCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Feature$groupArgs<ExtArgs>
    unit?: boolean | Feature$unitArgs<ExtArgs>
    categories?: boolean | Feature$categoriesArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      group: Prisma.$FeatureGroupPayload<ExtArgs> | null
      unit: Prisma.$UnitPayload<ExtArgs> | null
      categories: Prisma.$FeatureOnCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      title: string
      code: string
      description: string
      type: $Enums.FeatureTypeEnum
      isShowInProductTab: boolean
      isShowInProductList: boolean
      isShowInProductHeader: boolean
      status: $Enums.FeatureStatusEnum
      groupUuid: string | null
      unitCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }


  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeatureFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>
    ): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Feature that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeatureFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>
    ): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const featureWithUuidOnly = await prisma.feature.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends FeatureFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
    **/
    create<T extends FeatureCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>
    ): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Features.
     *     @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     *     @example
     *     // Create many Features
     *     const feature = await prisma.feature.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeatureCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
    **/
    delete<T extends FeatureDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>
    ): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeatureUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>
    ): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeatureDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeatureUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
    **/
    upsert<T extends FeatureUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>
    ): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends Feature$groupArgs<ExtArgs> = {}>(args?: Subset<T, Feature$groupArgs<ExtArgs>>): Prisma__FeatureGroupClient<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    unit<T extends Feature$unitArgs<ExtArgs> = {}>(args?: Subset<T, Feature$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    categories<T extends Feature$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Feature$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Feature model
   */ 
  interface FeatureFieldRefs {
    readonly uuid: FieldRef<"Feature", 'String'>
    readonly title: FieldRef<"Feature", 'String'>
    readonly code: FieldRef<"Feature", 'String'>
    readonly description: FieldRef<"Feature", 'String'>
    readonly type: FieldRef<"Feature", 'FeatureTypeEnum'>
    readonly isShowInProductTab: FieldRef<"Feature", 'Boolean'>
    readonly isShowInProductList: FieldRef<"Feature", 'Boolean'>
    readonly isShowInProductHeader: FieldRef<"Feature", 'Boolean'>
    readonly status: FieldRef<"Feature", 'FeatureStatusEnum'>
    readonly groupUuid: FieldRef<"Feature", 'String'>
    readonly unitCode: FieldRef<"Feature", 'String'>
    readonly createdAt: FieldRef<"Feature", 'DateTime'>
    readonly updatedAt: FieldRef<"Feature", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }


  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }


  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }


  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }


  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }


  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }


  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }


  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
  }


  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }


  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }


  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
  }


  /**
   * Feature.group
   */
  export type Feature$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    where?: FeatureGroupWhereInput
  }


  /**
   * Feature.unit
   */
  export type Feature$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }


  /**
   * Feature.categories
   */
  export type Feature$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    where?: FeatureOnCategoryWhereInput
    orderBy?: FeatureOnCategoryOrderByWithRelationInput | FeatureOnCategoryOrderByWithRelationInput[]
    cursor?: FeatureOnCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureOnCategoryScalarFieldEnum | FeatureOnCategoryScalarFieldEnum[]
  }


  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
  }



  /**
   * Model FeatureGroup
   */

  export type AggregateFeatureGroup = {
    _count: FeatureGroupCountAggregateOutputType | null
    _avg: FeatureGroupAvgAggregateOutputType | null
    _sum: FeatureGroupSumAggregateOutputType | null
    _min: FeatureGroupMinAggregateOutputType | null
    _max: FeatureGroupMaxAggregateOutputType | null
  }

  export type FeatureGroupAvgAggregateOutputType = {
    order: number | null
  }

  export type FeatureGroupSumAggregateOutputType = {
    order: number | null
  }

  export type FeatureGroupMinAggregateOutputType = {
    uuid: string | null
    title: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureGroupMaxAggregateOutputType = {
    uuid: string | null
    title: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureGroupCountAggregateOutputType = {
    uuid: number
    title: number
    description: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeatureGroupAvgAggregateInputType = {
    order?: true
  }

  export type FeatureGroupSumAggregateInputType = {
    order?: true
  }

  export type FeatureGroupMinAggregateInputType = {
    uuid?: true
    title?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureGroupMaxAggregateInputType = {
    uuid?: true
    title?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureGroupCountAggregateInputType = {
    uuid?: true
    title?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeatureGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureGroup to aggregate.
     */
    where?: FeatureGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureGroups to fetch.
     */
    orderBy?: FeatureGroupOrderByWithRelationInput | FeatureGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureGroups
    **/
    _count?: true | FeatureGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeatureGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeatureGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureGroupMaxAggregateInputType
  }

  export type GetFeatureGroupAggregateType<T extends FeatureGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureGroup[P]>
      : GetScalarType<T[P], AggregateFeatureGroup[P]>
  }




  export type FeatureGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureGroupWhereInput
    orderBy?: FeatureGroupOrderByWithAggregationInput | FeatureGroupOrderByWithAggregationInput[]
    by: FeatureGroupScalarFieldEnum[] | FeatureGroupScalarFieldEnum
    having?: FeatureGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureGroupCountAggregateInputType | true
    _avg?: FeatureGroupAvgAggregateInputType
    _sum?: FeatureGroupSumAggregateInputType
    _min?: FeatureGroupMinAggregateInputType
    _max?: FeatureGroupMaxAggregateInputType
  }

  export type FeatureGroupGroupByOutputType = {
    uuid: string
    title: string
    description: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: FeatureGroupCountAggregateOutputType | null
    _avg: FeatureGroupAvgAggregateOutputType | null
    _sum: FeatureGroupSumAggregateOutputType | null
    _min: FeatureGroupMinAggregateOutputType | null
    _max: FeatureGroupMaxAggregateOutputType | null
  }

  type GetFeatureGroupGroupByPayload<T extends FeatureGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupGroupByOutputType[P]>
        }
      >
    >


  export type FeatureGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    feature?: boolean | FeatureGroup$featureArgs<ExtArgs>
    _count?: boolean | FeatureGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureGroup"]>

  export type FeatureGroupSelectScalar = {
    uuid?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeatureGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureGroup$featureArgs<ExtArgs>
    _count?: boolean | FeatureGroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FeatureGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureGroup"
    objects: {
      feature: Prisma.$FeaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      title: string
      description: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["featureGroup"]>
    composites: {}
  }


  type FeatureGroupGetPayload<S extends boolean | null | undefined | FeatureGroupDefaultArgs> = $Result.GetResult<Prisma.$FeatureGroupPayload, S>

  type FeatureGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeatureGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeatureGroupCountAggregateInputType | true
    }

  export interface FeatureGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureGroup'], meta: { name: 'FeatureGroup' } }
    /**
     * Find zero or one FeatureGroup that matches the filter.
     * @param {FeatureGroupFindUniqueArgs} args - Arguments to find a FeatureGroup
     * @example
     * // Get one FeatureGroup
     * const featureGroup = await prisma.featureGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeatureGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureGroupFindUniqueArgs<ExtArgs>>
    ): Prisma__FeatureGroupClient<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FeatureGroup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeatureGroupFindUniqueOrThrowArgs} args - Arguments to find a FeatureGroup
     * @example
     * // Get one FeatureGroup
     * const featureGroup = await prisma.featureGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeatureGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeatureGroupClient<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FeatureGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupFindFirstArgs} args - Arguments to find a FeatureGroup
     * @example
     * // Get one FeatureGroup
     * const featureGroup = await prisma.featureGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeatureGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureGroupFindFirstArgs<ExtArgs>>
    ): Prisma__FeatureGroupClient<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FeatureGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupFindFirstOrThrowArgs} args - Arguments to find a FeatureGroup
     * @example
     * // Get one FeatureGroup
     * const featureGroup = await prisma.featureGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeatureGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeatureGroupClient<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FeatureGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureGroups
     * const featureGroups = await prisma.featureGroup.findMany()
     * 
     * // Get first 10 FeatureGroups
     * const featureGroups = await prisma.featureGroup.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const featureGroupWithUuidOnly = await prisma.featureGroup.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends FeatureGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FeatureGroup.
     * @param {FeatureGroupCreateArgs} args - Arguments to create a FeatureGroup.
     * @example
     * // Create one FeatureGroup
     * const FeatureGroup = await prisma.featureGroup.create({
     *   data: {
     *     // ... data to create a FeatureGroup
     *   }
     * })
     * 
    **/
    create<T extends FeatureGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureGroupCreateArgs<ExtArgs>>
    ): Prisma__FeatureGroupClient<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FeatureGroups.
     *     @param {FeatureGroupCreateManyArgs} args - Arguments to create many FeatureGroups.
     *     @example
     *     // Create many FeatureGroups
     *     const featureGroup = await prisma.featureGroup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeatureGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeatureGroup.
     * @param {FeatureGroupDeleteArgs} args - Arguments to delete one FeatureGroup.
     * @example
     * // Delete one FeatureGroup
     * const FeatureGroup = await prisma.featureGroup.delete({
     *   where: {
     *     // ... filter to delete one FeatureGroup
     *   }
     * })
     * 
    **/
    delete<T extends FeatureGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureGroupDeleteArgs<ExtArgs>>
    ): Prisma__FeatureGroupClient<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FeatureGroup.
     * @param {FeatureGroupUpdateArgs} args - Arguments to update one FeatureGroup.
     * @example
     * // Update one FeatureGroup
     * const featureGroup = await prisma.featureGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeatureGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureGroupUpdateArgs<ExtArgs>>
    ): Prisma__FeatureGroupClient<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FeatureGroups.
     * @param {FeatureGroupDeleteManyArgs} args - Arguments to filter FeatureGroups to delete.
     * @example
     * // Delete a few FeatureGroups
     * const { count } = await prisma.featureGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeatureGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureGroups
     * const featureGroup = await prisma.featureGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeatureGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeatureGroup.
     * @param {FeatureGroupUpsertArgs} args - Arguments to update or create a FeatureGroup.
     * @example
     * // Update or create a FeatureGroup
     * const featureGroup = await prisma.featureGroup.upsert({
     *   create: {
     *     // ... data to create a FeatureGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureGroup we want to update
     *   }
     * })
    **/
    upsert<T extends FeatureGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureGroupUpsertArgs<ExtArgs>>
    ): Prisma__FeatureGroupClient<$Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FeatureGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupCountArgs} args - Arguments to filter FeatureGroups to count.
     * @example
     * // Count the number of FeatureGroups
     * const count = await prisma.featureGroup.count({
     *   where: {
     *     // ... the filter for the FeatureGroups we want to count
     *   }
     * })
    **/
    count<T extends FeatureGroupCountArgs>(
      args?: Subset<T, FeatureGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureGroupAggregateArgs>(args: Subset<T, FeatureGroupAggregateArgs>): Prisma.PrismaPromise<GetFeatureGroupAggregateType<T>>

    /**
     * Group by FeatureGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureGroup model
   */
  readonly fields: FeatureGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    feature<T extends FeatureGroup$featureArgs<ExtArgs> = {}>(args?: Subset<T, FeatureGroup$featureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FeatureGroup model
   */ 
  interface FeatureGroupFieldRefs {
    readonly uuid: FieldRef<"FeatureGroup", 'String'>
    readonly title: FieldRef<"FeatureGroup", 'String'>
    readonly description: FieldRef<"FeatureGroup", 'String'>
    readonly order: FieldRef<"FeatureGroup", 'Int'>
    readonly createdAt: FieldRef<"FeatureGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"FeatureGroup", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FeatureGroup findUnique
   */
  export type FeatureGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    /**
     * Filter, which FeatureGroup to fetch.
     */
    where: FeatureGroupWhereUniqueInput
  }


  /**
   * FeatureGroup findUniqueOrThrow
   */
  export type FeatureGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    /**
     * Filter, which FeatureGroup to fetch.
     */
    where: FeatureGroupWhereUniqueInput
  }


  /**
   * FeatureGroup findFirst
   */
  export type FeatureGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    /**
     * Filter, which FeatureGroup to fetch.
     */
    where?: FeatureGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureGroups to fetch.
     */
    orderBy?: FeatureGroupOrderByWithRelationInput | FeatureGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureGroups.
     */
    cursor?: FeatureGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureGroups.
     */
    distinct?: FeatureGroupScalarFieldEnum | FeatureGroupScalarFieldEnum[]
  }


  /**
   * FeatureGroup findFirstOrThrow
   */
  export type FeatureGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    /**
     * Filter, which FeatureGroup to fetch.
     */
    where?: FeatureGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureGroups to fetch.
     */
    orderBy?: FeatureGroupOrderByWithRelationInput | FeatureGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureGroups.
     */
    cursor?: FeatureGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureGroups.
     */
    distinct?: FeatureGroupScalarFieldEnum | FeatureGroupScalarFieldEnum[]
  }


  /**
   * FeatureGroup findMany
   */
  export type FeatureGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    /**
     * Filter, which FeatureGroups to fetch.
     */
    where?: FeatureGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureGroups to fetch.
     */
    orderBy?: FeatureGroupOrderByWithRelationInput | FeatureGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureGroups.
     */
    cursor?: FeatureGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureGroups.
     */
    skip?: number
    distinct?: FeatureGroupScalarFieldEnum | FeatureGroupScalarFieldEnum[]
  }


  /**
   * FeatureGroup create
   */
  export type FeatureGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureGroup.
     */
    data: XOR<FeatureGroupCreateInput, FeatureGroupUncheckedCreateInput>
  }


  /**
   * FeatureGroup createMany
   */
  export type FeatureGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureGroups.
     */
    data: FeatureGroupCreateManyInput | FeatureGroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FeatureGroup update
   */
  export type FeatureGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureGroup.
     */
    data: XOR<FeatureGroupUpdateInput, FeatureGroupUncheckedUpdateInput>
    /**
     * Choose, which FeatureGroup to update.
     */
    where: FeatureGroupWhereUniqueInput
  }


  /**
   * FeatureGroup updateMany
   */
  export type FeatureGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureGroups.
     */
    data: XOR<FeatureGroupUpdateManyMutationInput, FeatureGroupUncheckedUpdateManyInput>
    /**
     * Filter which FeatureGroups to update
     */
    where?: FeatureGroupWhereInput
  }


  /**
   * FeatureGroup upsert
   */
  export type FeatureGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureGroup to update in case it exists.
     */
    where: FeatureGroupWhereUniqueInput
    /**
     * In case the FeatureGroup found by the `where` argument doesn't exist, create a new FeatureGroup with this data.
     */
    create: XOR<FeatureGroupCreateInput, FeatureGroupUncheckedCreateInput>
    /**
     * In case the FeatureGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureGroupUpdateInput, FeatureGroupUncheckedUpdateInput>
  }


  /**
   * FeatureGroup delete
   */
  export type FeatureGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
    /**
     * Filter which FeatureGroup to delete.
     */
    where: FeatureGroupWhereUniqueInput
  }


  /**
   * FeatureGroup deleteMany
   */
  export type FeatureGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureGroups to delete
     */
    where?: FeatureGroupWhereInput
  }


  /**
   * FeatureGroup.feature
   */
  export type FeatureGroup$featureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }


  /**
   * FeatureGroup without action
   */
  export type FeatureGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureGroup
     */
    select?: FeatureGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureGroupInclude<ExtArgs> | null
  }



  /**
   * Model FeatureOnCategory
   */

  export type AggregateFeatureOnCategory = {
    _count: FeatureOnCategoryCountAggregateOutputType | null
    _min: FeatureOnCategoryMinAggregateOutputType | null
    _max: FeatureOnCategoryMaxAggregateOutputType | null
  }

  export type FeatureOnCategoryMinAggregateOutputType = {
    featureUuid: string | null
    categoryCode: string | null
  }

  export type FeatureOnCategoryMaxAggregateOutputType = {
    featureUuid: string | null
    categoryCode: string | null
  }

  export type FeatureOnCategoryCountAggregateOutputType = {
    featureUuid: number
    categoryCode: number
    _all: number
  }


  export type FeatureOnCategoryMinAggregateInputType = {
    featureUuid?: true
    categoryCode?: true
  }

  export type FeatureOnCategoryMaxAggregateInputType = {
    featureUuid?: true
    categoryCode?: true
  }

  export type FeatureOnCategoryCountAggregateInputType = {
    featureUuid?: true
    categoryCode?: true
    _all?: true
  }

  export type FeatureOnCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureOnCategory to aggregate.
     */
    where?: FeatureOnCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureOnCategories to fetch.
     */
    orderBy?: FeatureOnCategoryOrderByWithRelationInput | FeatureOnCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureOnCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureOnCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureOnCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureOnCategories
    **/
    _count?: true | FeatureOnCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureOnCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureOnCategoryMaxAggregateInputType
  }

  export type GetFeatureOnCategoryAggregateType<T extends FeatureOnCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureOnCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureOnCategory[P]>
      : GetScalarType<T[P], AggregateFeatureOnCategory[P]>
  }




  export type FeatureOnCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureOnCategoryWhereInput
    orderBy?: FeatureOnCategoryOrderByWithAggregationInput | FeatureOnCategoryOrderByWithAggregationInput[]
    by: FeatureOnCategoryScalarFieldEnum[] | FeatureOnCategoryScalarFieldEnum
    having?: FeatureOnCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureOnCategoryCountAggregateInputType | true
    _min?: FeatureOnCategoryMinAggregateInputType
    _max?: FeatureOnCategoryMaxAggregateInputType
  }

  export type FeatureOnCategoryGroupByOutputType = {
    featureUuid: string
    categoryCode: string
    _count: FeatureOnCategoryCountAggregateOutputType | null
    _min: FeatureOnCategoryMinAggregateOutputType | null
    _max: FeatureOnCategoryMaxAggregateOutputType | null
  }

  type GetFeatureOnCategoryGroupByPayload<T extends FeatureOnCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureOnCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureOnCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureOnCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureOnCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FeatureOnCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    featureUuid?: boolean
    categoryCode?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureOnCategory"]>

  export type FeatureOnCategorySelectScalar = {
    featureUuid?: boolean
    categoryCode?: boolean
  }

  export type FeatureOnCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }


  export type $FeatureOnCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureOnCategory"
    objects: {
      feature: Prisma.$FeaturePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      featureUuid: string
      categoryCode: string
    }, ExtArgs["result"]["featureOnCategory"]>
    composites: {}
  }


  type FeatureOnCategoryGetPayload<S extends boolean | null | undefined | FeatureOnCategoryDefaultArgs> = $Result.GetResult<Prisma.$FeatureOnCategoryPayload, S>

  type FeatureOnCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeatureOnCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeatureOnCategoryCountAggregateInputType | true
    }

  export interface FeatureOnCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureOnCategory'], meta: { name: 'FeatureOnCategory' } }
    /**
     * Find zero or one FeatureOnCategory that matches the filter.
     * @param {FeatureOnCategoryFindUniqueArgs} args - Arguments to find a FeatureOnCategory
     * @example
     * // Get one FeatureOnCategory
     * const featureOnCategory = await prisma.featureOnCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeatureOnCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureOnCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__FeatureOnCategoryClient<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FeatureOnCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeatureOnCategoryFindUniqueOrThrowArgs} args - Arguments to find a FeatureOnCategory
     * @example
     * // Get one FeatureOnCategory
     * const featureOnCategory = await prisma.featureOnCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeatureOnCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureOnCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeatureOnCategoryClient<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FeatureOnCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureOnCategoryFindFirstArgs} args - Arguments to find a FeatureOnCategory
     * @example
     * // Get one FeatureOnCategory
     * const featureOnCategory = await prisma.featureOnCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeatureOnCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureOnCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__FeatureOnCategoryClient<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FeatureOnCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureOnCategoryFindFirstOrThrowArgs} args - Arguments to find a FeatureOnCategory
     * @example
     * // Get one FeatureOnCategory
     * const featureOnCategory = await prisma.featureOnCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeatureOnCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureOnCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeatureOnCategoryClient<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FeatureOnCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureOnCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureOnCategories
     * const featureOnCategories = await prisma.featureOnCategory.findMany()
     * 
     * // Get first 10 FeatureOnCategories
     * const featureOnCategories = await prisma.featureOnCategory.findMany({ take: 10 })
     * 
     * // Only select the `featureUuid`
     * const featureOnCategoryWithFeatureUuidOnly = await prisma.featureOnCategory.findMany({ select: { featureUuid: true } })
     * 
    **/
    findMany<T extends FeatureOnCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureOnCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FeatureOnCategory.
     * @param {FeatureOnCategoryCreateArgs} args - Arguments to create a FeatureOnCategory.
     * @example
     * // Create one FeatureOnCategory
     * const FeatureOnCategory = await prisma.featureOnCategory.create({
     *   data: {
     *     // ... data to create a FeatureOnCategory
     *   }
     * })
     * 
    **/
    create<T extends FeatureOnCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureOnCategoryCreateArgs<ExtArgs>>
    ): Prisma__FeatureOnCategoryClient<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FeatureOnCategories.
     *     @param {FeatureOnCategoryCreateManyArgs} args - Arguments to create many FeatureOnCategories.
     *     @example
     *     // Create many FeatureOnCategories
     *     const featureOnCategory = await prisma.featureOnCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeatureOnCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureOnCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeatureOnCategory.
     * @param {FeatureOnCategoryDeleteArgs} args - Arguments to delete one FeatureOnCategory.
     * @example
     * // Delete one FeatureOnCategory
     * const FeatureOnCategory = await prisma.featureOnCategory.delete({
     *   where: {
     *     // ... filter to delete one FeatureOnCategory
     *   }
     * })
     * 
    **/
    delete<T extends FeatureOnCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureOnCategoryDeleteArgs<ExtArgs>>
    ): Prisma__FeatureOnCategoryClient<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FeatureOnCategory.
     * @param {FeatureOnCategoryUpdateArgs} args - Arguments to update one FeatureOnCategory.
     * @example
     * // Update one FeatureOnCategory
     * const featureOnCategory = await prisma.featureOnCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeatureOnCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureOnCategoryUpdateArgs<ExtArgs>>
    ): Prisma__FeatureOnCategoryClient<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FeatureOnCategories.
     * @param {FeatureOnCategoryDeleteManyArgs} args - Arguments to filter FeatureOnCategories to delete.
     * @example
     * // Delete a few FeatureOnCategories
     * const { count } = await prisma.featureOnCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeatureOnCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeatureOnCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureOnCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureOnCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureOnCategories
     * const featureOnCategory = await prisma.featureOnCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeatureOnCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureOnCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeatureOnCategory.
     * @param {FeatureOnCategoryUpsertArgs} args - Arguments to update or create a FeatureOnCategory.
     * @example
     * // Update or create a FeatureOnCategory
     * const featureOnCategory = await prisma.featureOnCategory.upsert({
     *   create: {
     *     // ... data to create a FeatureOnCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureOnCategory we want to update
     *   }
     * })
    **/
    upsert<T extends FeatureOnCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeatureOnCategoryUpsertArgs<ExtArgs>>
    ): Prisma__FeatureOnCategoryClient<$Result.GetResult<Prisma.$FeatureOnCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FeatureOnCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureOnCategoryCountArgs} args - Arguments to filter FeatureOnCategories to count.
     * @example
     * // Count the number of FeatureOnCategories
     * const count = await prisma.featureOnCategory.count({
     *   where: {
     *     // ... the filter for the FeatureOnCategories we want to count
     *   }
     * })
    **/
    count<T extends FeatureOnCategoryCountArgs>(
      args?: Subset<T, FeatureOnCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureOnCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureOnCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureOnCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureOnCategoryAggregateArgs>(args: Subset<T, FeatureOnCategoryAggregateArgs>): Prisma.PrismaPromise<GetFeatureOnCategoryAggregateType<T>>

    /**
     * Group by FeatureOnCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureOnCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureOnCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureOnCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FeatureOnCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureOnCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureOnCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureOnCategory model
   */
  readonly fields: FeatureOnCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureOnCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureOnCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FeatureOnCategory model
   */ 
  interface FeatureOnCategoryFieldRefs {
    readonly featureUuid: FieldRef<"FeatureOnCategory", 'String'>
    readonly categoryCode: FieldRef<"FeatureOnCategory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * FeatureOnCategory findUnique
   */
  export type FeatureOnCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeatureOnCategory to fetch.
     */
    where: FeatureOnCategoryWhereUniqueInput
  }


  /**
   * FeatureOnCategory findUniqueOrThrow
   */
  export type FeatureOnCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeatureOnCategory to fetch.
     */
    where: FeatureOnCategoryWhereUniqueInput
  }


  /**
   * FeatureOnCategory findFirst
   */
  export type FeatureOnCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeatureOnCategory to fetch.
     */
    where?: FeatureOnCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureOnCategories to fetch.
     */
    orderBy?: FeatureOnCategoryOrderByWithRelationInput | FeatureOnCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureOnCategories.
     */
    cursor?: FeatureOnCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureOnCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureOnCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureOnCategories.
     */
    distinct?: FeatureOnCategoryScalarFieldEnum | FeatureOnCategoryScalarFieldEnum[]
  }


  /**
   * FeatureOnCategory findFirstOrThrow
   */
  export type FeatureOnCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeatureOnCategory to fetch.
     */
    where?: FeatureOnCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureOnCategories to fetch.
     */
    orderBy?: FeatureOnCategoryOrderByWithRelationInput | FeatureOnCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureOnCategories.
     */
    cursor?: FeatureOnCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureOnCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureOnCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureOnCategories.
     */
    distinct?: FeatureOnCategoryScalarFieldEnum | FeatureOnCategoryScalarFieldEnum[]
  }


  /**
   * FeatureOnCategory findMany
   */
  export type FeatureOnCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeatureOnCategories to fetch.
     */
    where?: FeatureOnCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureOnCategories to fetch.
     */
    orderBy?: FeatureOnCategoryOrderByWithRelationInput | FeatureOnCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureOnCategories.
     */
    cursor?: FeatureOnCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureOnCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureOnCategories.
     */
    skip?: number
    distinct?: FeatureOnCategoryScalarFieldEnum | FeatureOnCategoryScalarFieldEnum[]
  }


  /**
   * FeatureOnCategory create
   */
  export type FeatureOnCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureOnCategory.
     */
    data: XOR<FeatureOnCategoryCreateInput, FeatureOnCategoryUncheckedCreateInput>
  }


  /**
   * FeatureOnCategory createMany
   */
  export type FeatureOnCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureOnCategories.
     */
    data: FeatureOnCategoryCreateManyInput | FeatureOnCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FeatureOnCategory update
   */
  export type FeatureOnCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureOnCategory.
     */
    data: XOR<FeatureOnCategoryUpdateInput, FeatureOnCategoryUncheckedUpdateInput>
    /**
     * Choose, which FeatureOnCategory to update.
     */
    where: FeatureOnCategoryWhereUniqueInput
  }


  /**
   * FeatureOnCategory updateMany
   */
  export type FeatureOnCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureOnCategories.
     */
    data: XOR<FeatureOnCategoryUpdateManyMutationInput, FeatureOnCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FeatureOnCategories to update
     */
    where?: FeatureOnCategoryWhereInput
  }


  /**
   * FeatureOnCategory upsert
   */
  export type FeatureOnCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureOnCategory to update in case it exists.
     */
    where: FeatureOnCategoryWhereUniqueInput
    /**
     * In case the FeatureOnCategory found by the `where` argument doesn't exist, create a new FeatureOnCategory with this data.
     */
    create: XOR<FeatureOnCategoryCreateInput, FeatureOnCategoryUncheckedCreateInput>
    /**
     * In case the FeatureOnCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureOnCategoryUpdateInput, FeatureOnCategoryUncheckedUpdateInput>
  }


  /**
   * FeatureOnCategory delete
   */
  export type FeatureOnCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
    /**
     * Filter which FeatureOnCategory to delete.
     */
    where: FeatureOnCategoryWhereUniqueInput
  }


  /**
   * FeatureOnCategory deleteMany
   */
  export type FeatureOnCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureOnCategories to delete
     */
    where?: FeatureOnCategoryWhereInput
  }


  /**
   * FeatureOnCategory without action
   */
  export type FeatureOnCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureOnCategory
     */
    select?: FeatureOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeatureOnCategoryInclude<ExtArgs> | null
  }



  /**
   * Model Attribute
   */

  export type AggregateAttribute = {
    _count: AttributeCountAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  export type AttributeMinAggregateOutputType = {
    code: string | null
    name: string | null
    description: string | null
    unitCode: string | null
  }

  export type AttributeMaxAggregateOutputType = {
    code: string | null
    name: string | null
    description: string | null
    unitCode: string | null
  }

  export type AttributeCountAggregateOutputType = {
    code: number
    name: number
    description: number
    unitCode: number
    _all: number
  }


  export type AttributeMinAggregateInputType = {
    code?: true
    name?: true
    description?: true
    unitCode?: true
  }

  export type AttributeMaxAggregateInputType = {
    code?: true
    name?: true
    description?: true
    unitCode?: true
  }

  export type AttributeCountAggregateInputType = {
    code?: true
    name?: true
    description?: true
    unitCode?: true
    _all?: true
  }

  export type AttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attribute to aggregate.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attributes
    **/
    _count?: true | AttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeMaxAggregateInputType
  }

  export type GetAttributeAggregateType<T extends AttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttribute[P]>
      : GetScalarType<T[P], AggregateAttribute[P]>
  }




  export type AttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithAggregationInput | AttributeOrderByWithAggregationInput[]
    by: AttributeScalarFieldEnum[] | AttributeScalarFieldEnum
    having?: AttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeCountAggregateInputType | true
    _min?: AttributeMinAggregateInputType
    _max?: AttributeMaxAggregateInputType
  }

  export type AttributeGroupByOutputType = {
    code: string
    name: string
    description: string | null
    unitCode: string | null
    _count: AttributeCountAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  type GetAttributeGroupByPayload<T extends AttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeGroupByOutputType[P]>
        }
      >
    >


  export type AttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    description?: boolean
    unitCode?: boolean
    attributeOnProduct?: boolean | Attribute$attributeOnProductArgs<ExtArgs>
    unit?: boolean | Attribute$unitArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectScalar = {
    code?: boolean
    name?: boolean
    description?: boolean
    unitCode?: boolean
  }

  export type AttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributeOnProduct?: boolean | Attribute$attributeOnProductArgs<ExtArgs>
    unit?: boolean | Attribute$unitArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attribute"
    objects: {
      attributeOnProduct: Prisma.$AttributeOnProductPayload<ExtArgs>[]
      unit: Prisma.$UnitPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      description: string | null
      unitCode: string | null
    }, ExtArgs["result"]["attribute"]>
    composites: {}
  }


  type AttributeGetPayload<S extends boolean | null | undefined | AttributeDefaultArgs> = $Result.GetResult<Prisma.$AttributePayload, S>

  type AttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttributeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttributeCountAggregateInputType | true
    }

  export interface AttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attribute'], meta: { name: 'Attribute' } }
    /**
     * Find zero or one Attribute that matches the filter.
     * @param {AttributeFindUniqueArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttributeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeFindUniqueArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attribute that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttributeFindUniqueOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttributeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Attribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttributeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeFindFirstArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Attribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttributeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attributes
     * const attributes = await prisma.attribute.findMany()
     * 
     * // Get first 10 Attributes
     * const attributes = await prisma.attribute.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const attributeWithCodeOnly = await prisma.attribute.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends AttributeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Attribute.
     * @param {AttributeCreateArgs} args - Arguments to create a Attribute.
     * @example
     * // Create one Attribute
     * const Attribute = await prisma.attribute.create({
     *   data: {
     *     // ... data to create a Attribute
     *   }
     * })
     * 
    **/
    create<T extends AttributeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeCreateArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Attributes.
     *     @param {AttributeCreateManyArgs} args - Arguments to create many Attributes.
     *     @example
     *     // Create many Attributes
     *     const attribute = await prisma.attribute.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttributeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attribute.
     * @param {AttributeDeleteArgs} args - Arguments to delete one Attribute.
     * @example
     * // Delete one Attribute
     * const Attribute = await prisma.attribute.delete({
     *   where: {
     *     // ... filter to delete one Attribute
     *   }
     * })
     * 
    **/
    delete<T extends AttributeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeDeleteArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Attribute.
     * @param {AttributeUpdateArgs} args - Arguments to update one Attribute.
     * @example
     * // Update one Attribute
     * const attribute = await prisma.attribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttributeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeUpdateArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Attributes.
     * @param {AttributeDeleteManyArgs} args - Arguments to filter Attributes to delete.
     * @example
     * // Delete a few Attributes
     * const { count } = await prisma.attribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttributeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttributeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attribute.
     * @param {AttributeUpsertArgs} args - Arguments to update or create a Attribute.
     * @example
     * // Update or create a Attribute
     * const attribute = await prisma.attribute.upsert({
     *   create: {
     *     // ... data to create a Attribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attribute we want to update
     *   }
     * })
    **/
    upsert<T extends AttributeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeUpsertArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeCountArgs} args - Arguments to filter Attributes to count.
     * @example
     * // Count the number of Attributes
     * const count = await prisma.attribute.count({
     *   where: {
     *     // ... the filter for the Attributes we want to count
     *   }
     * })
    **/
    count<T extends AttributeCountArgs>(
      args?: Subset<T, AttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttributeAggregateArgs>(args: Subset<T, AttributeAggregateArgs>): Prisma.PrismaPromise<GetAttributeAggregateType<T>>

    /**
     * Group by Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeGroupByArgs['orderBy'] }
        : { orderBy?: AttributeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attribute model
   */
  readonly fields: AttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attributeOnProduct<T extends Attribute$attributeOnProductArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$attributeOnProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    unit<T extends Attribute$unitArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attribute model
   */ 
  interface AttributeFieldRefs {
    readonly code: FieldRef<"Attribute", 'String'>
    readonly name: FieldRef<"Attribute", 'String'>
    readonly description: FieldRef<"Attribute", 'String'>
    readonly unitCode: FieldRef<"Attribute", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Attribute findUnique
   */
  export type AttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute findUniqueOrThrow
   */
  export type AttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute findFirst
   */
  export type AttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }


  /**
   * Attribute findFirstOrThrow
   */
  export type AttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }


  /**
   * Attribute findMany
   */
  export type AttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }


  /**
   * Attribute create
   */
  export type AttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attribute.
     */
    data: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
  }


  /**
   * Attribute createMany
   */
  export type AttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Attribute update
   */
  export type AttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attribute.
     */
    data: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
    /**
     * Choose, which Attribute to update.
     */
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute updateMany
   */
  export type AttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
  }


  /**
   * Attribute upsert
   */
  export type AttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attribute to update in case it exists.
     */
    where: AttributeWhereUniqueInput
    /**
     * In case the Attribute found by the `where` argument doesn't exist, create a new Attribute with this data.
     */
    create: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
    /**
     * In case the Attribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
  }


  /**
   * Attribute delete
   */
  export type AttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter which Attribute to delete.
     */
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute deleteMany
   */
  export type AttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attributes to delete
     */
    where?: AttributeWhereInput
  }


  /**
   * Attribute.attributeOnProduct
   */
  export type Attribute$attributeOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    where?: AttributeOnProductWhereInput
    orderBy?: AttributeOnProductOrderByWithRelationInput | AttributeOnProductOrderByWithRelationInput[]
    cursor?: AttributeOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeOnProductScalarFieldEnum | AttributeOnProductScalarFieldEnum[]
  }


  /**
   * Attribute.unit
   */
  export type Attribute$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }


  /**
   * Attribute without action
   */
  export type AttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
  }



  /**
   * Model AttributeValue
   */

  export type AggregateAttributeValue = {
    _count: AttributeValueCountAggregateOutputType | null
    _min: AttributeValueMinAggregateOutputType | null
    _max: AttributeValueMaxAggregateOutputType | null
  }

  export type AttributeValueMinAggregateOutputType = {
    uuid: string | null
    value: string | null
  }

  export type AttributeValueMaxAggregateOutputType = {
    uuid: string | null
    value: string | null
  }

  export type AttributeValueCountAggregateOutputType = {
    uuid: number
    value: number
    _all: number
  }


  export type AttributeValueMinAggregateInputType = {
    uuid?: true
    value?: true
  }

  export type AttributeValueMaxAggregateInputType = {
    uuid?: true
    value?: true
  }

  export type AttributeValueCountAggregateInputType = {
    uuid?: true
    value?: true
    _all?: true
  }

  export type AttributeValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeValue to aggregate.
     */
    where?: AttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeValues to fetch.
     */
    orderBy?: AttributeValueOrderByWithRelationInput | AttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributeValues
    **/
    _count?: true | AttributeValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeValueMaxAggregateInputType
  }

  export type GetAttributeValueAggregateType<T extends AttributeValueAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributeValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributeValue[P]>
      : GetScalarType<T[P], AggregateAttributeValue[P]>
  }




  export type AttributeValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeValueWhereInput
    orderBy?: AttributeValueOrderByWithAggregationInput | AttributeValueOrderByWithAggregationInput[]
    by: AttributeValueScalarFieldEnum[] | AttributeValueScalarFieldEnum
    having?: AttributeValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeValueCountAggregateInputType | true
    _min?: AttributeValueMinAggregateInputType
    _max?: AttributeValueMaxAggregateInputType
  }

  export type AttributeValueGroupByOutputType = {
    uuid: string
    value: string
    _count: AttributeValueCountAggregateOutputType | null
    _min: AttributeValueMinAggregateOutputType | null
    _max: AttributeValueMaxAggregateOutputType | null
  }

  type GetAttributeValueGroupByPayload<T extends AttributeValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeValueGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeValueGroupByOutputType[P]>
        }
      >
    >


  export type AttributeValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    value?: boolean
    attributeOnProduct?: boolean | AttributeValue$attributeOnProductArgs<ExtArgs>
    _count?: boolean | AttributeValueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeValue"]>

  export type AttributeValueSelectScalar = {
    uuid?: boolean
    value?: boolean
  }

  export type AttributeValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributeOnProduct?: boolean | AttributeValue$attributeOnProductArgs<ExtArgs>
    _count?: boolean | AttributeValueCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AttributeValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributeValue"
    objects: {
      attributeOnProduct: Prisma.$AttributeOnProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      value: string
    }, ExtArgs["result"]["attributeValue"]>
    composites: {}
  }


  type AttributeValueGetPayload<S extends boolean | null | undefined | AttributeValueDefaultArgs> = $Result.GetResult<Prisma.$AttributeValuePayload, S>

  type AttributeValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttributeValueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttributeValueCountAggregateInputType | true
    }

  export interface AttributeValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributeValue'], meta: { name: 'AttributeValue' } }
    /**
     * Find zero or one AttributeValue that matches the filter.
     * @param {AttributeValueFindUniqueArgs} args - Arguments to find a AttributeValue
     * @example
     * // Get one AttributeValue
     * const attributeValue = await prisma.attributeValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttributeValueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeValueFindUniqueArgs<ExtArgs>>
    ): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AttributeValue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttributeValueFindUniqueOrThrowArgs} args - Arguments to find a AttributeValue
     * @example
     * // Get one AttributeValue
     * const attributeValue = await prisma.attributeValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttributeValueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeValueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AttributeValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueFindFirstArgs} args - Arguments to find a AttributeValue
     * @example
     * // Get one AttributeValue
     * const attributeValue = await prisma.attributeValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttributeValueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeValueFindFirstArgs<ExtArgs>>
    ): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AttributeValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueFindFirstOrThrowArgs} args - Arguments to find a AttributeValue
     * @example
     * // Get one AttributeValue
     * const attributeValue = await prisma.attributeValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttributeValueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeValueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AttributeValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributeValues
     * const attributeValues = await prisma.attributeValue.findMany()
     * 
     * // Get first 10 AttributeValues
     * const attributeValues = await prisma.attributeValue.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const attributeValueWithUuidOnly = await prisma.attributeValue.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends AttributeValueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeValueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AttributeValue.
     * @param {AttributeValueCreateArgs} args - Arguments to create a AttributeValue.
     * @example
     * // Create one AttributeValue
     * const AttributeValue = await prisma.attributeValue.create({
     *   data: {
     *     // ... data to create a AttributeValue
     *   }
     * })
     * 
    **/
    create<T extends AttributeValueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeValueCreateArgs<ExtArgs>>
    ): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AttributeValues.
     *     @param {AttributeValueCreateManyArgs} args - Arguments to create many AttributeValues.
     *     @example
     *     // Create many AttributeValues
     *     const attributeValue = await prisma.attributeValue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttributeValueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeValueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AttributeValue.
     * @param {AttributeValueDeleteArgs} args - Arguments to delete one AttributeValue.
     * @example
     * // Delete one AttributeValue
     * const AttributeValue = await prisma.attributeValue.delete({
     *   where: {
     *     // ... filter to delete one AttributeValue
     *   }
     * })
     * 
    **/
    delete<T extends AttributeValueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeValueDeleteArgs<ExtArgs>>
    ): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AttributeValue.
     * @param {AttributeValueUpdateArgs} args - Arguments to update one AttributeValue.
     * @example
     * // Update one AttributeValue
     * const attributeValue = await prisma.attributeValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttributeValueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeValueUpdateArgs<ExtArgs>>
    ): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AttributeValues.
     * @param {AttributeValueDeleteManyArgs} args - Arguments to filter AttributeValues to delete.
     * @example
     * // Delete a few AttributeValues
     * const { count } = await prisma.attributeValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttributeValueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeValueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributeValues
     * const attributeValue = await prisma.attributeValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttributeValueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeValueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttributeValue.
     * @param {AttributeValueUpsertArgs} args - Arguments to update or create a AttributeValue.
     * @example
     * // Update or create a AttributeValue
     * const attributeValue = await prisma.attributeValue.upsert({
     *   create: {
     *     // ... data to create a AttributeValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributeValue we want to update
     *   }
     * })
    **/
    upsert<T extends AttributeValueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeValueUpsertArgs<ExtArgs>>
    ): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AttributeValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueCountArgs} args - Arguments to filter AttributeValues to count.
     * @example
     * // Count the number of AttributeValues
     * const count = await prisma.attributeValue.count({
     *   where: {
     *     // ... the filter for the AttributeValues we want to count
     *   }
     * })
    **/
    count<T extends AttributeValueCountArgs>(
      args?: Subset<T, AttributeValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributeValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttributeValueAggregateArgs>(args: Subset<T, AttributeValueAggregateArgs>): Prisma.PrismaPromise<GetAttributeValueAggregateType<T>>

    /**
     * Group by AttributeValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeValueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttributeValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeValueGroupByArgs['orderBy'] }
        : { orderBy?: AttributeValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttributeValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributeValue model
   */
  readonly fields: AttributeValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributeValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attributeOnProduct<T extends AttributeValue$attributeOnProductArgs<ExtArgs> = {}>(args?: Subset<T, AttributeValue$attributeOnProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AttributeValue model
   */ 
  interface AttributeValueFieldRefs {
    readonly uuid: FieldRef<"AttributeValue", 'String'>
    readonly value: FieldRef<"AttributeValue", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AttributeValue findUnique
   */
  export type AttributeValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValue to fetch.
     */
    where: AttributeValueWhereUniqueInput
  }


  /**
   * AttributeValue findUniqueOrThrow
   */
  export type AttributeValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValue to fetch.
     */
    where: AttributeValueWhereUniqueInput
  }


  /**
   * AttributeValue findFirst
   */
  export type AttributeValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValue to fetch.
     */
    where?: AttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeValues to fetch.
     */
    orderBy?: AttributeValueOrderByWithRelationInput | AttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeValues.
     */
    cursor?: AttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeValues.
     */
    distinct?: AttributeValueScalarFieldEnum | AttributeValueScalarFieldEnum[]
  }


  /**
   * AttributeValue findFirstOrThrow
   */
  export type AttributeValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValue to fetch.
     */
    where?: AttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeValues to fetch.
     */
    orderBy?: AttributeValueOrderByWithRelationInput | AttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeValues.
     */
    cursor?: AttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeValues.
     */
    distinct?: AttributeValueScalarFieldEnum | AttributeValueScalarFieldEnum[]
  }


  /**
   * AttributeValue findMany
   */
  export type AttributeValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter, which AttributeValues to fetch.
     */
    where?: AttributeValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeValues to fetch.
     */
    orderBy?: AttributeValueOrderByWithRelationInput | AttributeValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributeValues.
     */
    cursor?: AttributeValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeValues.
     */
    skip?: number
    distinct?: AttributeValueScalarFieldEnum | AttributeValueScalarFieldEnum[]
  }


  /**
   * AttributeValue create
   */
  export type AttributeValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributeValue.
     */
    data: XOR<AttributeValueCreateInput, AttributeValueUncheckedCreateInput>
  }


  /**
   * AttributeValue createMany
   */
  export type AttributeValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributeValues.
     */
    data: AttributeValueCreateManyInput | AttributeValueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AttributeValue update
   */
  export type AttributeValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributeValue.
     */
    data: XOR<AttributeValueUpdateInput, AttributeValueUncheckedUpdateInput>
    /**
     * Choose, which AttributeValue to update.
     */
    where: AttributeValueWhereUniqueInput
  }


  /**
   * AttributeValue updateMany
   */
  export type AttributeValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributeValues.
     */
    data: XOR<AttributeValueUpdateManyMutationInput, AttributeValueUncheckedUpdateManyInput>
    /**
     * Filter which AttributeValues to update
     */
    where?: AttributeValueWhereInput
  }


  /**
   * AttributeValue upsert
   */
  export type AttributeValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributeValue to update in case it exists.
     */
    where: AttributeValueWhereUniqueInput
    /**
     * In case the AttributeValue found by the `where` argument doesn't exist, create a new AttributeValue with this data.
     */
    create: XOR<AttributeValueCreateInput, AttributeValueUncheckedCreateInput>
    /**
     * In case the AttributeValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeValueUpdateInput, AttributeValueUncheckedUpdateInput>
  }


  /**
   * AttributeValue delete
   */
  export type AttributeValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    /**
     * Filter which AttributeValue to delete.
     */
    where: AttributeValueWhereUniqueInput
  }


  /**
   * AttributeValue deleteMany
   */
  export type AttributeValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeValues to delete
     */
    where?: AttributeValueWhereInput
  }


  /**
   * AttributeValue.attributeOnProduct
   */
  export type AttributeValue$attributeOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    where?: AttributeOnProductWhereInput
    orderBy?: AttributeOnProductOrderByWithRelationInput | AttributeOnProductOrderByWithRelationInput[]
    cursor?: AttributeOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeOnProductScalarFieldEnum | AttributeOnProductScalarFieldEnum[]
  }


  /**
   * AttributeValue without action
   */
  export type AttributeValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
  }



  /**
   * Model AttributeOnProduct
   */

  export type AggregateAttributeOnProduct = {
    _count: AttributeOnProductCountAggregateOutputType | null
    _min: AttributeOnProductMinAggregateOutputType | null
    _max: AttributeOnProductMaxAggregateOutputType | null
  }

  export type AttributeOnProductMinAggregateOutputType = {
    uuid: string | null
    productUuid: string | null
    attributeCode: string | null
    valueUuid: string | null
  }

  export type AttributeOnProductMaxAggregateOutputType = {
    uuid: string | null
    productUuid: string | null
    attributeCode: string | null
    valueUuid: string | null
  }

  export type AttributeOnProductCountAggregateOutputType = {
    uuid: number
    productUuid: number
    attributeCode: number
    valueUuid: number
    _all: number
  }


  export type AttributeOnProductMinAggregateInputType = {
    uuid?: true
    productUuid?: true
    attributeCode?: true
    valueUuid?: true
  }

  export type AttributeOnProductMaxAggregateInputType = {
    uuid?: true
    productUuid?: true
    attributeCode?: true
    valueUuid?: true
  }

  export type AttributeOnProductCountAggregateInputType = {
    uuid?: true
    productUuid?: true
    attributeCode?: true
    valueUuid?: true
    _all?: true
  }

  export type AttributeOnProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeOnProduct to aggregate.
     */
    where?: AttributeOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOnProducts to fetch.
     */
    orderBy?: AttributeOnProductOrderByWithRelationInput | AttributeOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributeOnProducts
    **/
    _count?: true | AttributeOnProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeOnProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeOnProductMaxAggregateInputType
  }

  export type GetAttributeOnProductAggregateType<T extends AttributeOnProductAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributeOnProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributeOnProduct[P]>
      : GetScalarType<T[P], AggregateAttributeOnProduct[P]>
  }




  export type AttributeOnProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeOnProductWhereInput
    orderBy?: AttributeOnProductOrderByWithAggregationInput | AttributeOnProductOrderByWithAggregationInput[]
    by: AttributeOnProductScalarFieldEnum[] | AttributeOnProductScalarFieldEnum
    having?: AttributeOnProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeOnProductCountAggregateInputType | true
    _min?: AttributeOnProductMinAggregateInputType
    _max?: AttributeOnProductMaxAggregateInputType
  }

  export type AttributeOnProductGroupByOutputType = {
    uuid: string
    productUuid: string
    attributeCode: string
    valueUuid: string | null
    _count: AttributeOnProductCountAggregateOutputType | null
    _min: AttributeOnProductMinAggregateOutputType | null
    _max: AttributeOnProductMaxAggregateOutputType | null
  }

  type GetAttributeOnProductGroupByPayload<T extends AttributeOnProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeOnProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeOnProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeOnProductGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeOnProductGroupByOutputType[P]>
        }
      >
    >


  export type AttributeOnProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    productUuid?: boolean
    attributeCode?: boolean
    valueUuid?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    value?: boolean | AttributeOnProduct$valueArgs<ExtArgs>
  }, ExtArgs["result"]["attributeOnProduct"]>

  export type AttributeOnProductSelectScalar = {
    uuid?: boolean
    productUuid?: boolean
    attributeCode?: boolean
    valueUuid?: boolean
  }

  export type AttributeOnProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
    value?: boolean | AttributeOnProduct$valueArgs<ExtArgs>
  }


  export type $AttributeOnProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributeOnProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      attribute: Prisma.$AttributePayload<ExtArgs>
      value: Prisma.$AttributeValuePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      productUuid: string
      attributeCode: string
      valueUuid: string | null
    }, ExtArgs["result"]["attributeOnProduct"]>
    composites: {}
  }


  type AttributeOnProductGetPayload<S extends boolean | null | undefined | AttributeOnProductDefaultArgs> = $Result.GetResult<Prisma.$AttributeOnProductPayload, S>

  type AttributeOnProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttributeOnProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttributeOnProductCountAggregateInputType | true
    }

  export interface AttributeOnProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributeOnProduct'], meta: { name: 'AttributeOnProduct' } }
    /**
     * Find zero or one AttributeOnProduct that matches the filter.
     * @param {AttributeOnProductFindUniqueArgs} args - Arguments to find a AttributeOnProduct
     * @example
     * // Get one AttributeOnProduct
     * const attributeOnProduct = await prisma.attributeOnProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttributeOnProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeOnProductFindUniqueArgs<ExtArgs>>
    ): Prisma__AttributeOnProductClient<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AttributeOnProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttributeOnProductFindUniqueOrThrowArgs} args - Arguments to find a AttributeOnProduct
     * @example
     * // Get one AttributeOnProduct
     * const attributeOnProduct = await prisma.attributeOnProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttributeOnProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeOnProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttributeOnProductClient<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AttributeOnProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOnProductFindFirstArgs} args - Arguments to find a AttributeOnProduct
     * @example
     * // Get one AttributeOnProduct
     * const attributeOnProduct = await prisma.attributeOnProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttributeOnProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeOnProductFindFirstArgs<ExtArgs>>
    ): Prisma__AttributeOnProductClient<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AttributeOnProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOnProductFindFirstOrThrowArgs} args - Arguments to find a AttributeOnProduct
     * @example
     * // Get one AttributeOnProduct
     * const attributeOnProduct = await prisma.attributeOnProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttributeOnProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeOnProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttributeOnProductClient<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AttributeOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOnProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributeOnProducts
     * const attributeOnProducts = await prisma.attributeOnProduct.findMany()
     * 
     * // Get first 10 AttributeOnProducts
     * const attributeOnProducts = await prisma.attributeOnProduct.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const attributeOnProductWithUuidOnly = await prisma.attributeOnProduct.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends AttributeOnProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeOnProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AttributeOnProduct.
     * @param {AttributeOnProductCreateArgs} args - Arguments to create a AttributeOnProduct.
     * @example
     * // Create one AttributeOnProduct
     * const AttributeOnProduct = await prisma.attributeOnProduct.create({
     *   data: {
     *     // ... data to create a AttributeOnProduct
     *   }
     * })
     * 
    **/
    create<T extends AttributeOnProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeOnProductCreateArgs<ExtArgs>>
    ): Prisma__AttributeOnProductClient<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AttributeOnProducts.
     *     @param {AttributeOnProductCreateManyArgs} args - Arguments to create many AttributeOnProducts.
     *     @example
     *     // Create many AttributeOnProducts
     *     const attributeOnProduct = await prisma.attributeOnProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttributeOnProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeOnProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AttributeOnProduct.
     * @param {AttributeOnProductDeleteArgs} args - Arguments to delete one AttributeOnProduct.
     * @example
     * // Delete one AttributeOnProduct
     * const AttributeOnProduct = await prisma.attributeOnProduct.delete({
     *   where: {
     *     // ... filter to delete one AttributeOnProduct
     *   }
     * })
     * 
    **/
    delete<T extends AttributeOnProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeOnProductDeleteArgs<ExtArgs>>
    ): Prisma__AttributeOnProductClient<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AttributeOnProduct.
     * @param {AttributeOnProductUpdateArgs} args - Arguments to update one AttributeOnProduct.
     * @example
     * // Update one AttributeOnProduct
     * const attributeOnProduct = await prisma.attributeOnProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttributeOnProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeOnProductUpdateArgs<ExtArgs>>
    ): Prisma__AttributeOnProductClient<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AttributeOnProducts.
     * @param {AttributeOnProductDeleteManyArgs} args - Arguments to filter AttributeOnProducts to delete.
     * @example
     * // Delete a few AttributeOnProducts
     * const { count } = await prisma.attributeOnProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttributeOnProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeOnProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOnProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributeOnProducts
     * const attributeOnProduct = await prisma.attributeOnProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttributeOnProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeOnProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttributeOnProduct.
     * @param {AttributeOnProductUpsertArgs} args - Arguments to update or create a AttributeOnProduct.
     * @example
     * // Update or create a AttributeOnProduct
     * const attributeOnProduct = await prisma.attributeOnProduct.upsert({
     *   create: {
     *     // ... data to create a AttributeOnProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributeOnProduct we want to update
     *   }
     * })
    **/
    upsert<T extends AttributeOnProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeOnProductUpsertArgs<ExtArgs>>
    ): Prisma__AttributeOnProductClient<$Result.GetResult<Prisma.$AttributeOnProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AttributeOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOnProductCountArgs} args - Arguments to filter AttributeOnProducts to count.
     * @example
     * // Count the number of AttributeOnProducts
     * const count = await prisma.attributeOnProduct.count({
     *   where: {
     *     // ... the filter for the AttributeOnProducts we want to count
     *   }
     * })
    **/
    count<T extends AttributeOnProductCountArgs>(
      args?: Subset<T, AttributeOnProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeOnProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributeOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOnProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttributeOnProductAggregateArgs>(args: Subset<T, AttributeOnProductAggregateArgs>): Prisma.PrismaPromise<GetAttributeOnProductAggregateType<T>>

    /**
     * Group by AttributeOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOnProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttributeOnProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeOnProductGroupByArgs['orderBy'] }
        : { orderBy?: AttributeOnProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttributeOnProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeOnProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributeOnProduct model
   */
  readonly fields: AttributeOnProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributeOnProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeOnProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    attribute<T extends AttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeDefaultArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    value<T extends AttributeOnProduct$valueArgs<ExtArgs> = {}>(args?: Subset<T, AttributeOnProduct$valueArgs<ExtArgs>>): Prisma__AttributeValueClient<$Result.GetResult<Prisma.$AttributeValuePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AttributeOnProduct model
   */ 
  interface AttributeOnProductFieldRefs {
    readonly uuid: FieldRef<"AttributeOnProduct", 'String'>
    readonly productUuid: FieldRef<"AttributeOnProduct", 'String'>
    readonly attributeCode: FieldRef<"AttributeOnProduct", 'String'>
    readonly valueUuid: FieldRef<"AttributeOnProduct", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AttributeOnProduct findUnique
   */
  export type AttributeOnProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOnProduct to fetch.
     */
    where: AttributeOnProductWhereUniqueInput
  }


  /**
   * AttributeOnProduct findUniqueOrThrow
   */
  export type AttributeOnProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOnProduct to fetch.
     */
    where: AttributeOnProductWhereUniqueInput
  }


  /**
   * AttributeOnProduct findFirst
   */
  export type AttributeOnProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOnProduct to fetch.
     */
    where?: AttributeOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOnProducts to fetch.
     */
    orderBy?: AttributeOnProductOrderByWithRelationInput | AttributeOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeOnProducts.
     */
    cursor?: AttributeOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeOnProducts.
     */
    distinct?: AttributeOnProductScalarFieldEnum | AttributeOnProductScalarFieldEnum[]
  }


  /**
   * AttributeOnProduct findFirstOrThrow
   */
  export type AttributeOnProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOnProduct to fetch.
     */
    where?: AttributeOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOnProducts to fetch.
     */
    orderBy?: AttributeOnProductOrderByWithRelationInput | AttributeOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeOnProducts.
     */
    cursor?: AttributeOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeOnProducts.
     */
    distinct?: AttributeOnProductScalarFieldEnum | AttributeOnProductScalarFieldEnum[]
  }


  /**
   * AttributeOnProduct findMany
   */
  export type AttributeOnProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOnProducts to fetch.
     */
    where?: AttributeOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOnProducts to fetch.
     */
    orderBy?: AttributeOnProductOrderByWithRelationInput | AttributeOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributeOnProducts.
     */
    cursor?: AttributeOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOnProducts.
     */
    skip?: number
    distinct?: AttributeOnProductScalarFieldEnum | AttributeOnProductScalarFieldEnum[]
  }


  /**
   * AttributeOnProduct create
   */
  export type AttributeOnProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributeOnProduct.
     */
    data: XOR<AttributeOnProductCreateInput, AttributeOnProductUncheckedCreateInput>
  }


  /**
   * AttributeOnProduct createMany
   */
  export type AttributeOnProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributeOnProducts.
     */
    data: AttributeOnProductCreateManyInput | AttributeOnProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AttributeOnProduct update
   */
  export type AttributeOnProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributeOnProduct.
     */
    data: XOR<AttributeOnProductUpdateInput, AttributeOnProductUncheckedUpdateInput>
    /**
     * Choose, which AttributeOnProduct to update.
     */
    where: AttributeOnProductWhereUniqueInput
  }


  /**
   * AttributeOnProduct updateMany
   */
  export type AttributeOnProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributeOnProducts.
     */
    data: XOR<AttributeOnProductUpdateManyMutationInput, AttributeOnProductUncheckedUpdateManyInput>
    /**
     * Filter which AttributeOnProducts to update
     */
    where?: AttributeOnProductWhereInput
  }


  /**
   * AttributeOnProduct upsert
   */
  export type AttributeOnProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributeOnProduct to update in case it exists.
     */
    where: AttributeOnProductWhereUniqueInput
    /**
     * In case the AttributeOnProduct found by the `where` argument doesn't exist, create a new AttributeOnProduct with this data.
     */
    create: XOR<AttributeOnProductCreateInput, AttributeOnProductUncheckedCreateInput>
    /**
     * In case the AttributeOnProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeOnProductUpdateInput, AttributeOnProductUncheckedUpdateInput>
  }


  /**
   * AttributeOnProduct delete
   */
  export type AttributeOnProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
    /**
     * Filter which AttributeOnProduct to delete.
     */
    where: AttributeOnProductWhereUniqueInput
  }


  /**
   * AttributeOnProduct deleteMany
   */
  export type AttributeOnProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeOnProducts to delete
     */
    where?: AttributeOnProductWhereInput
  }


  /**
   * AttributeOnProduct.value
   */
  export type AttributeOnProduct$valueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeValue
     */
    select?: AttributeValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeValueInclude<ExtArgs> | null
    where?: AttributeValueWhereInput
  }


  /**
   * AttributeOnProduct without action
   */
  export type AttributeOnProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOnProduct
     */
    select?: AttributeOnProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeOnProductInclude<ExtArgs> | null
  }



  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyMinAggregateOutputType = {
    code: string | null
    value: string | null
    description: string | null
  }

  export type CurrencyMaxAggregateOutputType = {
    code: string | null
    value: string | null
    description: string | null
  }

  export type CurrencyCountAggregateOutputType = {
    code: number
    value: number
    description: number
    _all: number
  }


  export type CurrencyMinAggregateInputType = {
    code?: true
    value?: true
    description?: true
  }

  export type CurrencyMaxAggregateInputType = {
    code?: true
    value?: true
    description?: true
  }

  export type CurrencyCountAggregateInputType = {
    code?: true
    value?: true
    description?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    code: string
    value: string
    description: string
    _count: CurrencyCountAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    value?: boolean
    description?: boolean
    price?: boolean | Currency$priceArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    code?: boolean
    value?: boolean
    description?: boolean
  }

  export type CurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    price?: boolean | Currency$priceArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {
      price: Prisma.$PricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      value: string
      description: string
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }


  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CurrencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Currency that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CurrencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const currencyWithCodeOnly = await prisma.currency.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends CurrencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
    **/
    create<T extends CurrencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Currencies.
     *     @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     *     @example
     *     // Create many Currencies
     *     const currency = await prisma.currency.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CurrencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
    **/
    delete<T extends CurrencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CurrencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CurrencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CurrencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
    **/
    upsert<T extends CurrencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    price<T extends Currency$priceArgs<ExtArgs> = {}>(args?: Subset<T, Currency$priceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Currency model
   */ 
  interface CurrencyFieldRefs {
    readonly code: FieldRef<"Currency", 'String'>
    readonly value: FieldRef<"Currency", 'String'>
    readonly description: FieldRef<"Currency", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }


  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
  }


  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }


  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
  }


  /**
   * Currency.price
   */
  export type Currency$priceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }


  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
  }



  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    code: string | null
    name: string | null
    description: string | null
  }

  export type BrandMaxAggregateOutputType = {
    code: string | null
    name: string | null
    description: string | null
  }

  export type BrandCountAggregateOutputType = {
    code: number
    name: number
    description: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    code?: true
    name?: true
    description?: true
  }

  export type BrandMaxAggregateInputType = {
    code?: true
    name?: true
    description?: true
  }

  export type BrandCountAggregateInputType = {
    code?: true
    name?: true
    description?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    code: string
    name: string
    description: string | null
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    description?: boolean
    product?: boolean | Brand$productArgs<ExtArgs>
    brandOnCategory?: boolean | Brand$brandOnCategoryArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    code?: boolean
    name?: boolean
    description?: boolean
  }

  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Brand$productArgs<ExtArgs>
    brandOnCategory?: boolean | Brand$brandOnCategoryArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
      brandOnCategory: Prisma.$BrandOnCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      description: string | null
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }


  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Brand that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const brandWithCodeOnly = await prisma.brand.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends BrandFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
    **/
    create<T extends BrandCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandCreateArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Brands.
     *     @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     *     @example
     *     // Create many Brands
     *     const brand = await prisma.brand.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
    **/
    delete<T extends BrandDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
    **/
    upsert<T extends BrandUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>
    ): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends Brand$productArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    brandOnCategory<T extends Brand$brandOnCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Brand$brandOnCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandOnCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Brand model
   */ 
  interface BrandFieldRefs {
    readonly code: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly description: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }


  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }


  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
  }


  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }


  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
  }


  /**
   * Brand.product
   */
  export type Brand$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Brand.brandOnCategory
   */
  export type Brand$brandOnCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandOnCategory
     */
    select?: BrandOnCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandOnCategoryInclude<ExtArgs> | null
    where?: BrandOnCategoryWhereInput
    orderBy?: BrandOnCategoryOrderByWithRelationInput | BrandOnCategoryOrderByWithRelationInput[]
    cursor?: BrandOnCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandOnCategoryScalarFieldEnum | BrandOnCategoryScalarFieldEnum[]
  }


  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    address: 'address',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyUuid: 'companyUuid'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    uuid: 'uuid',
    title: 'title',
    description: 'description',
    brandCode: 'brandCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PriceScalarFieldEnum: {
    uuid: 'uuid',
    prevPrice: 'prevPrice',
    price: 'price',
    description: 'description',
    phase: 'phase',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    productUuid: 'productUuid',
    currencyCode: 'currencyCode'
  };

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    code: 'code',
    title: 'title',
    description: 'description',
    parentCode: 'parentCode'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CategoryOnProductScalarFieldEnum: {
    productUuid: 'productUuid',
    categoryCode: 'categoryCode'
  };

  export type CategoryOnProductScalarFieldEnum = (typeof CategoryOnProductScalarFieldEnum)[keyof typeof CategoryOnProductScalarFieldEnum]


  export const BrandOnCategoryScalarFieldEnum: {
    brandCode: 'brandCode',
    categoryCode: 'categoryCode'
  };

  export type BrandOnCategoryScalarFieldEnum = (typeof BrandOnCategoryScalarFieldEnum)[keyof typeof BrandOnCategoryScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    code: 'code',
    value: 'value',
    description: 'description'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    uuid: 'uuid',
    title: 'title'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ImageOnProductScalarFieldEnum: {
    productUuid: 'productUuid',
    imageUuid: 'imageUuid',
    order: 'order'
  };

  export type ImageOnProductScalarFieldEnum = (typeof ImageOnProductScalarFieldEnum)[keyof typeof ImageOnProductScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    uuid: 'uuid',
    title: 'title',
    code: 'code',
    description: 'description',
    type: 'type',
    isShowInProductTab: 'isShowInProductTab',
    isShowInProductList: 'isShowInProductList',
    isShowInProductHeader: 'isShowInProductHeader',
    status: 'status',
    groupUuid: 'groupUuid',
    unitCode: 'unitCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const FeatureGroupScalarFieldEnum: {
    uuid: 'uuid',
    title: 'title',
    description: 'description',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeatureGroupScalarFieldEnum = (typeof FeatureGroupScalarFieldEnum)[keyof typeof FeatureGroupScalarFieldEnum]


  export const FeatureOnCategoryScalarFieldEnum: {
    featureUuid: 'featureUuid',
    categoryCode: 'categoryCode'
  };

  export type FeatureOnCategoryScalarFieldEnum = (typeof FeatureOnCategoryScalarFieldEnum)[keyof typeof FeatureOnCategoryScalarFieldEnum]


  export const AttributeScalarFieldEnum: {
    code: 'code',
    name: 'name',
    description: 'description',
    unitCode: 'unitCode'
  };

  export type AttributeScalarFieldEnum = (typeof AttributeScalarFieldEnum)[keyof typeof AttributeScalarFieldEnum]


  export const AttributeValueScalarFieldEnum: {
    uuid: 'uuid',
    value: 'value'
  };

  export type AttributeValueScalarFieldEnum = (typeof AttributeValueScalarFieldEnum)[keyof typeof AttributeValueScalarFieldEnum]


  export const AttributeOnProductScalarFieldEnum: {
    uuid: 'uuid',
    productUuid: 'productUuid',
    attributeCode: 'attributeCode',
    valueUuid: 'valueUuid'
  };

  export type AttributeOnProductScalarFieldEnum = (typeof AttributeOnProductScalarFieldEnum)[keyof typeof AttributeOnProductScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    code: 'code',
    value: 'value',
    description: 'description'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    code: 'code',
    name: 'name',
    description: 'description'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PricePhaseEnum'
   */
  export type EnumPricePhaseEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricePhaseEnum'>
    


  /**
   * Reference to a field of type 'PricePhaseEnum[]'
   */
  export type ListEnumPricePhaseEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricePhaseEnum[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'FeatureTypeEnum'
   */
  export type EnumFeatureTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureTypeEnum'>
    


  /**
   * Reference to a field of type 'FeatureTypeEnum[]'
   */
  export type ListEnumFeatureTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureTypeEnum[]'>
    


  /**
   * Reference to a field of type 'FeatureStatusEnum'
   */
  export type EnumFeatureStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureStatusEnum'>
    


  /**
   * Reference to a field of type 'FeatureStatusEnum[]'
   */
  export type ListEnumFeatureStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureStatusEnum[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    uuid?: UuidFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    shops?: ShopListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shops?: ShopOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    name?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    shops?: ShopListRelationFilter
  }, "uuid" | "name">

  export type CompanyOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    uuid?: UuidFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    address?: StringNullableFilter<"Shop"> | string | null
    isActive?: BoolFilter<"Shop"> | boolean
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    companyUuid?: UuidFilter<"Shop"> | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }

  export type ShopOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyUuid?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    name?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    address?: StringNullableFilter<"Shop"> | string | null
    isActive?: BoolFilter<"Shop"> | boolean
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    companyUuid?: UuidFilter<"Shop"> | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput>
  }, "uuid" | "name">

  export type ShopOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyUuid?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    address?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    isActive?: BoolWithAggregatesFilter<"Shop"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    companyUuid?: UuidWithAggregatesFilter<"Shop"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    uuid?: UuidFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    brandCode?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    brand?: XOR<BrandNullableRelationFilter, BrandWhereInput> | null
    prices?: PriceListRelationFilter
    images?: ImageOnProductListRelationFilter
    categoryOnProduct?: CategoryOnProductListRelationFilter
    attributeOnProduct?: AttributeOnProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brandCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
    prices?: PriceOrderByRelationAggregateInput
    images?: ImageOnProductOrderByRelationAggregateInput
    categoryOnProduct?: CategoryOnProductOrderByRelationAggregateInput
    attributeOnProduct?: AttributeOnProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    brandCode?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    brand?: XOR<BrandNullableRelationFilter, BrandWhereInput> | null
    prices?: PriceListRelationFilter
    images?: ImageOnProductListRelationFilter
    categoryOnProduct?: CategoryOnProductListRelationFilter
    attributeOnProduct?: AttributeOnProductListRelationFilter
  }, "uuid">

  export type ProductOrderByWithAggregationInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brandCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    brandCode?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type PriceWhereInput = {
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    uuid?: UuidFilter<"Price"> | string
    prevPrice?: FloatNullableFilter<"Price"> | number | null
    price?: FloatFilter<"Price"> | number
    description?: StringFilter<"Price"> | string
    phase?: EnumPricePhaseEnumFilter<"Price"> | $Enums.PricePhaseEnum
    createdAt?: DateTimeFilter<"Price"> | Date | string
    updatedAt?: DateTimeFilter<"Price"> | Date | string
    productUuid?: UuidFilter<"Price"> | string
    currencyCode?: StringFilter<"Price"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    currency?: XOR<CurrencyRelationFilter, CurrencyWhereInput>
  }

  export type PriceOrderByWithRelationInput = {
    uuid?: SortOrder
    prevPrice?: SortOrderInput | SortOrder
    price?: SortOrder
    description?: SortOrder
    phase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productUuid?: SortOrder
    currencyCode?: SortOrder
    product?: ProductOrderByWithRelationInput
    currency?: CurrencyOrderByWithRelationInput
  }

  export type PriceWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    prevPrice?: FloatNullableFilter<"Price"> | number | null
    price?: FloatFilter<"Price"> | number
    description?: StringFilter<"Price"> | string
    phase?: EnumPricePhaseEnumFilter<"Price"> | $Enums.PricePhaseEnum
    createdAt?: DateTimeFilter<"Price"> | Date | string
    updatedAt?: DateTimeFilter<"Price"> | Date | string
    productUuid?: UuidFilter<"Price"> | string
    currencyCode?: StringFilter<"Price"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    currency?: XOR<CurrencyRelationFilter, CurrencyWhereInput>
  }, "uuid">

  export type PriceOrderByWithAggregationInput = {
    uuid?: SortOrder
    prevPrice?: SortOrderInput | SortOrder
    price?: SortOrder
    description?: SortOrder
    phase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productUuid?: SortOrder
    currencyCode?: SortOrder
    _count?: PriceCountOrderByAggregateInput
    _avg?: PriceAvgOrderByAggregateInput
    _max?: PriceMaxOrderByAggregateInput
    _min?: PriceMinOrderByAggregateInput
    _sum?: PriceSumOrderByAggregateInput
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    OR?: PriceScalarWhereWithAggregatesInput[]
    NOT?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Price"> | string
    prevPrice?: FloatNullableWithAggregatesFilter<"Price"> | number | null
    price?: FloatWithAggregatesFilter<"Price"> | number
    description?: StringWithAggregatesFilter<"Price"> | string
    phase?: EnumPricePhaseEnumWithAggregatesFilter<"Price"> | $Enums.PricePhaseEnum
    createdAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
    productUuid?: UuidWithAggregatesFilter<"Price"> | string
    currencyCode?: StringWithAggregatesFilter<"Price"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    code?: StringFilter<"Category"> | string
    title?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    parentCode?: StringNullableFilter<"Category"> | string | null
    children?: CategoryListRelationFilter
    parent?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    features?: FeatureOnCategoryListRelationFilter
    products?: CategoryOnProductListRelationFilter
    brandOnCategory?: BrandOnCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    parentCode?: SortOrderInput | SortOrder
    children?: CategoryOrderByRelationAggregateInput
    parent?: CategoryOrderByWithRelationInput
    features?: FeatureOnCategoryOrderByRelationAggregateInput
    products?: CategoryOnProductOrderByRelationAggregateInput
    brandOnCategory?: BrandOnCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    title?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    parentCode?: StringNullableFilter<"Category"> | string | null
    children?: CategoryListRelationFilter
    parent?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    features?: FeatureOnCategoryListRelationFilter
    products?: CategoryOnProductListRelationFilter
    brandOnCategory?: BrandOnCategoryListRelationFilter
  }, "code">

  export type CategoryOrderByWithAggregationInput = {
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    parentCode?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Category"> | string
    title?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
    parentCode?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type CategoryOnProductWhereInput = {
    AND?: CategoryOnProductWhereInput | CategoryOnProductWhereInput[]
    OR?: CategoryOnProductWhereInput[]
    NOT?: CategoryOnProductWhereInput | CategoryOnProductWhereInput[]
    productUuid?: UuidFilter<"CategoryOnProduct"> | string
    categoryCode?: StringFilter<"CategoryOnProduct"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type CategoryOnProductOrderByWithRelationInput = {
    productUuid?: SortOrder
    categoryCode?: SortOrder
    product?: ProductOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type CategoryOnProductWhereUniqueInput = Prisma.AtLeast<{
    productUuid_categoryCode?: CategoryOnProductProductUuidCategoryCodeCompoundUniqueInput
    AND?: CategoryOnProductWhereInput | CategoryOnProductWhereInput[]
    OR?: CategoryOnProductWhereInput[]
    NOT?: CategoryOnProductWhereInput | CategoryOnProductWhereInput[]
    productUuid?: UuidFilter<"CategoryOnProduct"> | string
    categoryCode?: StringFilter<"CategoryOnProduct"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "productUuid_categoryCode">

  export type CategoryOnProductOrderByWithAggregationInput = {
    productUuid?: SortOrder
    categoryCode?: SortOrder
    _count?: CategoryOnProductCountOrderByAggregateInput
    _max?: CategoryOnProductMaxOrderByAggregateInput
    _min?: CategoryOnProductMinOrderByAggregateInput
  }

  export type CategoryOnProductScalarWhereWithAggregatesInput = {
    AND?: CategoryOnProductScalarWhereWithAggregatesInput | CategoryOnProductScalarWhereWithAggregatesInput[]
    OR?: CategoryOnProductScalarWhereWithAggregatesInput[]
    NOT?: CategoryOnProductScalarWhereWithAggregatesInput | CategoryOnProductScalarWhereWithAggregatesInput[]
    productUuid?: UuidWithAggregatesFilter<"CategoryOnProduct"> | string
    categoryCode?: StringWithAggregatesFilter<"CategoryOnProduct"> | string
  }

  export type BrandOnCategoryWhereInput = {
    AND?: BrandOnCategoryWhereInput | BrandOnCategoryWhereInput[]
    OR?: BrandOnCategoryWhereInput[]
    NOT?: BrandOnCategoryWhereInput | BrandOnCategoryWhereInput[]
    brandCode?: StringFilter<"BrandOnCategory"> | string
    categoryCode?: StringFilter<"BrandOnCategory"> | string
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type BrandOnCategoryOrderByWithRelationInput = {
    brandCode?: SortOrder
    categoryCode?: SortOrder
    brand?: BrandOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type BrandOnCategoryWhereUniqueInput = Prisma.AtLeast<{
    brandCode_categoryCode?: BrandOnCategoryBrandCodeCategoryCodeCompoundUniqueInput
    AND?: BrandOnCategoryWhereInput | BrandOnCategoryWhereInput[]
    OR?: BrandOnCategoryWhereInput[]
    NOT?: BrandOnCategoryWhereInput | BrandOnCategoryWhereInput[]
    brandCode?: StringFilter<"BrandOnCategory"> | string
    categoryCode?: StringFilter<"BrandOnCategory"> | string
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "brandCode_categoryCode">

  export type BrandOnCategoryOrderByWithAggregationInput = {
    brandCode?: SortOrder
    categoryCode?: SortOrder
    _count?: BrandOnCategoryCountOrderByAggregateInput
    _max?: BrandOnCategoryMaxOrderByAggregateInput
    _min?: BrandOnCategoryMinOrderByAggregateInput
  }

  export type BrandOnCategoryScalarWhereWithAggregatesInput = {
    AND?: BrandOnCategoryScalarWhereWithAggregatesInput | BrandOnCategoryScalarWhereWithAggregatesInput[]
    OR?: BrandOnCategoryScalarWhereWithAggregatesInput[]
    NOT?: BrandOnCategoryScalarWhereWithAggregatesInput | BrandOnCategoryScalarWhereWithAggregatesInput[]
    brandCode?: StringWithAggregatesFilter<"BrandOnCategory"> | string
    categoryCode?: StringWithAggregatesFilter<"BrandOnCategory"> | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    code?: StringFilter<"Unit"> | string
    value?: StringFilter<"Unit"> | string
    description?: StringNullableFilter<"Unit"> | string | null
    features?: FeatureListRelationFilter
    attribute?: AttributeListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    features?: FeatureOrderByRelationAggregateInput
    attribute?: AttributeOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    value?: StringFilter<"Unit"> | string
    description?: StringNullableFilter<"Unit"> | string | null
    features?: FeatureListRelationFilter
    attribute?: AttributeListRelationFilter
  }, "code">

  export type UnitOrderByWithAggregationInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: UnitCountOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Unit"> | string
    value?: StringWithAggregatesFilter<"Unit"> | string
    description?: StringNullableWithAggregatesFilter<"Unit"> | string | null
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    uuid?: UuidFilter<"Image"> | string
    title?: StringFilter<"Image"> | string
    products?: ImageOnProductListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    uuid?: SortOrder
    title?: SortOrder
    products?: ImageOnProductOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    title?: StringFilter<"Image"> | string
    products?: ImageOnProductListRelationFilter
  }, "uuid">

  export type ImageOrderByWithAggregationInput = {
    uuid?: SortOrder
    title?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Image"> | string
    title?: StringWithAggregatesFilter<"Image"> | string
  }

  export type ImageOnProductWhereInput = {
    AND?: ImageOnProductWhereInput | ImageOnProductWhereInput[]
    OR?: ImageOnProductWhereInput[]
    NOT?: ImageOnProductWhereInput | ImageOnProductWhereInput[]
    productUuid?: UuidFilter<"ImageOnProduct"> | string
    imageUuid?: UuidFilter<"ImageOnProduct"> | string
    order?: IntFilter<"ImageOnProduct"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    image?: XOR<ImageRelationFilter, ImageWhereInput>
  }

  export type ImageOnProductOrderByWithRelationInput = {
    productUuid?: SortOrder
    imageUuid?: SortOrder
    order?: SortOrder
    product?: ProductOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type ImageOnProductWhereUniqueInput = Prisma.AtLeast<{
    productUuid_imageUuid?: ImageOnProductProductUuidImageUuidCompoundUniqueInput
    AND?: ImageOnProductWhereInput | ImageOnProductWhereInput[]
    OR?: ImageOnProductWhereInput[]
    NOT?: ImageOnProductWhereInput | ImageOnProductWhereInput[]
    productUuid?: UuidFilter<"ImageOnProduct"> | string
    imageUuid?: UuidFilter<"ImageOnProduct"> | string
    order?: IntFilter<"ImageOnProduct"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    image?: XOR<ImageRelationFilter, ImageWhereInput>
  }, "productUuid_imageUuid">

  export type ImageOnProductOrderByWithAggregationInput = {
    productUuid?: SortOrder
    imageUuid?: SortOrder
    order?: SortOrder
    _count?: ImageOnProductCountOrderByAggregateInput
    _avg?: ImageOnProductAvgOrderByAggregateInput
    _max?: ImageOnProductMaxOrderByAggregateInput
    _min?: ImageOnProductMinOrderByAggregateInput
    _sum?: ImageOnProductSumOrderByAggregateInput
  }

  export type ImageOnProductScalarWhereWithAggregatesInput = {
    AND?: ImageOnProductScalarWhereWithAggregatesInput | ImageOnProductScalarWhereWithAggregatesInput[]
    OR?: ImageOnProductScalarWhereWithAggregatesInput[]
    NOT?: ImageOnProductScalarWhereWithAggregatesInput | ImageOnProductScalarWhereWithAggregatesInput[]
    productUuid?: UuidWithAggregatesFilter<"ImageOnProduct"> | string
    imageUuid?: UuidWithAggregatesFilter<"ImageOnProduct"> | string
    order?: IntWithAggregatesFilter<"ImageOnProduct"> | number
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    uuid?: UuidFilter<"Feature"> | string
    title?: StringFilter<"Feature"> | string
    code?: StringFilter<"Feature"> | string
    description?: StringFilter<"Feature"> | string
    type?: EnumFeatureTypeEnumFilter<"Feature"> | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFilter<"Feature"> | boolean
    isShowInProductList?: BoolFilter<"Feature"> | boolean
    isShowInProductHeader?: BoolFilter<"Feature"> | boolean
    status?: EnumFeatureStatusEnumFilter<"Feature"> | $Enums.FeatureStatusEnum
    groupUuid?: UuidNullableFilter<"Feature"> | string | null
    unitCode?: StringNullableFilter<"Feature"> | string | null
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
    group?: XOR<FeatureGroupNullableRelationFilter, FeatureGroupWhereInput> | null
    unit?: XOR<UnitNullableRelationFilter, UnitWhereInput> | null
    categories?: FeatureOnCategoryListRelationFilter
  }

  export type FeatureOrderByWithRelationInput = {
    uuid?: SortOrder
    title?: SortOrder
    code?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isShowInProductTab?: SortOrder
    isShowInProductList?: SortOrder
    isShowInProductHeader?: SortOrder
    status?: SortOrder
    groupUuid?: SortOrderInput | SortOrder
    unitCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: FeatureGroupOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    categories?: FeatureOnCategoryOrderByRelationAggregateInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    title?: StringFilter<"Feature"> | string
    code?: StringFilter<"Feature"> | string
    description?: StringFilter<"Feature"> | string
    type?: EnumFeatureTypeEnumFilter<"Feature"> | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFilter<"Feature"> | boolean
    isShowInProductList?: BoolFilter<"Feature"> | boolean
    isShowInProductHeader?: BoolFilter<"Feature"> | boolean
    status?: EnumFeatureStatusEnumFilter<"Feature"> | $Enums.FeatureStatusEnum
    groupUuid?: UuidNullableFilter<"Feature"> | string | null
    unitCode?: StringNullableFilter<"Feature"> | string | null
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
    group?: XOR<FeatureGroupNullableRelationFilter, FeatureGroupWhereInput> | null
    unit?: XOR<UnitNullableRelationFilter, UnitWhereInput> | null
    categories?: FeatureOnCategoryListRelationFilter
  }, "uuid">

  export type FeatureOrderByWithAggregationInput = {
    uuid?: SortOrder
    title?: SortOrder
    code?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isShowInProductTab?: SortOrder
    isShowInProductList?: SortOrder
    isShowInProductHeader?: SortOrder
    status?: SortOrder
    groupUuid?: SortOrderInput | SortOrder
    unitCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Feature"> | string
    title?: StringWithAggregatesFilter<"Feature"> | string
    code?: StringWithAggregatesFilter<"Feature"> | string
    description?: StringWithAggregatesFilter<"Feature"> | string
    type?: EnumFeatureTypeEnumWithAggregatesFilter<"Feature"> | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolWithAggregatesFilter<"Feature"> | boolean
    isShowInProductList?: BoolWithAggregatesFilter<"Feature"> | boolean
    isShowInProductHeader?: BoolWithAggregatesFilter<"Feature"> | boolean
    status?: EnumFeatureStatusEnumWithAggregatesFilter<"Feature"> | $Enums.FeatureStatusEnum
    groupUuid?: UuidNullableWithAggregatesFilter<"Feature"> | string | null
    unitCode?: StringNullableWithAggregatesFilter<"Feature"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
  }

  export type FeatureGroupWhereInput = {
    AND?: FeatureGroupWhereInput | FeatureGroupWhereInput[]
    OR?: FeatureGroupWhereInput[]
    NOT?: FeatureGroupWhereInput | FeatureGroupWhereInput[]
    uuid?: UuidFilter<"FeatureGroup"> | string
    title?: StringFilter<"FeatureGroup"> | string
    description?: StringFilter<"FeatureGroup"> | string
    order?: IntFilter<"FeatureGroup"> | number
    createdAt?: DateTimeFilter<"FeatureGroup"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureGroup"> | Date | string
    feature?: FeatureListRelationFilter
  }

  export type FeatureGroupOrderByWithRelationInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    feature?: FeatureOrderByRelationAggregateInput
  }

  export type FeatureGroupWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: FeatureGroupWhereInput | FeatureGroupWhereInput[]
    OR?: FeatureGroupWhereInput[]
    NOT?: FeatureGroupWhereInput | FeatureGroupWhereInput[]
    title?: StringFilter<"FeatureGroup"> | string
    description?: StringFilter<"FeatureGroup"> | string
    order?: IntFilter<"FeatureGroup"> | number
    createdAt?: DateTimeFilter<"FeatureGroup"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureGroup"> | Date | string
    feature?: FeatureListRelationFilter
  }, "uuid">

  export type FeatureGroupOrderByWithAggregationInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeatureGroupCountOrderByAggregateInput
    _avg?: FeatureGroupAvgOrderByAggregateInput
    _max?: FeatureGroupMaxOrderByAggregateInput
    _min?: FeatureGroupMinOrderByAggregateInput
    _sum?: FeatureGroupSumOrderByAggregateInput
  }

  export type FeatureGroupScalarWhereWithAggregatesInput = {
    AND?: FeatureGroupScalarWhereWithAggregatesInput | FeatureGroupScalarWhereWithAggregatesInput[]
    OR?: FeatureGroupScalarWhereWithAggregatesInput[]
    NOT?: FeatureGroupScalarWhereWithAggregatesInput | FeatureGroupScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"FeatureGroup"> | string
    title?: StringWithAggregatesFilter<"FeatureGroup"> | string
    description?: StringWithAggregatesFilter<"FeatureGroup"> | string
    order?: IntWithAggregatesFilter<"FeatureGroup"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FeatureGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeatureGroup"> | Date | string
  }

  export type FeatureOnCategoryWhereInput = {
    AND?: FeatureOnCategoryWhereInput | FeatureOnCategoryWhereInput[]
    OR?: FeatureOnCategoryWhereInput[]
    NOT?: FeatureOnCategoryWhereInput | FeatureOnCategoryWhereInput[]
    featureUuid?: UuidFilter<"FeatureOnCategory"> | string
    categoryCode?: StringFilter<"FeatureOnCategory"> | string
    feature?: XOR<FeatureRelationFilter, FeatureWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type FeatureOnCategoryOrderByWithRelationInput = {
    featureUuid?: SortOrder
    categoryCode?: SortOrder
    feature?: FeatureOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type FeatureOnCategoryWhereUniqueInput = Prisma.AtLeast<{
    featureUuid_categoryCode?: FeatureOnCategoryFeatureUuidCategoryCodeCompoundUniqueInput
    AND?: FeatureOnCategoryWhereInput | FeatureOnCategoryWhereInput[]
    OR?: FeatureOnCategoryWhereInput[]
    NOT?: FeatureOnCategoryWhereInput | FeatureOnCategoryWhereInput[]
    featureUuid?: UuidFilter<"FeatureOnCategory"> | string
    categoryCode?: StringFilter<"FeatureOnCategory"> | string
    feature?: XOR<FeatureRelationFilter, FeatureWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "featureUuid_categoryCode">

  export type FeatureOnCategoryOrderByWithAggregationInput = {
    featureUuid?: SortOrder
    categoryCode?: SortOrder
    _count?: FeatureOnCategoryCountOrderByAggregateInput
    _max?: FeatureOnCategoryMaxOrderByAggregateInput
    _min?: FeatureOnCategoryMinOrderByAggregateInput
  }

  export type FeatureOnCategoryScalarWhereWithAggregatesInput = {
    AND?: FeatureOnCategoryScalarWhereWithAggregatesInput | FeatureOnCategoryScalarWhereWithAggregatesInput[]
    OR?: FeatureOnCategoryScalarWhereWithAggregatesInput[]
    NOT?: FeatureOnCategoryScalarWhereWithAggregatesInput | FeatureOnCategoryScalarWhereWithAggregatesInput[]
    featureUuid?: UuidWithAggregatesFilter<"FeatureOnCategory"> | string
    categoryCode?: StringWithAggregatesFilter<"FeatureOnCategory"> | string
  }

  export type AttributeWhereInput = {
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    code?: StringFilter<"Attribute"> | string
    name?: StringFilter<"Attribute"> | string
    description?: StringNullableFilter<"Attribute"> | string | null
    unitCode?: StringNullableFilter<"Attribute"> | string | null
    attributeOnProduct?: AttributeOnProductListRelationFilter
    unit?: XOR<UnitNullableRelationFilter, UnitWhereInput> | null
  }

  export type AttributeOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unitCode?: SortOrderInput | SortOrder
    attributeOnProduct?: AttributeOnProductOrderByRelationAggregateInput
    unit?: UnitOrderByWithRelationInput
  }

  export type AttributeWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    name?: StringFilter<"Attribute"> | string
    description?: StringNullableFilter<"Attribute"> | string | null
    unitCode?: StringNullableFilter<"Attribute"> | string | null
    attributeOnProduct?: AttributeOnProductListRelationFilter
    unit?: XOR<UnitNullableRelationFilter, UnitWhereInput> | null
  }, "code">

  export type AttributeOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unitCode?: SortOrderInput | SortOrder
    _count?: AttributeCountOrderByAggregateInput
    _max?: AttributeMaxOrderByAggregateInput
    _min?: AttributeMinOrderByAggregateInput
  }

  export type AttributeScalarWhereWithAggregatesInput = {
    AND?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    OR?: AttributeScalarWhereWithAggregatesInput[]
    NOT?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Attribute"> | string
    name?: StringWithAggregatesFilter<"Attribute"> | string
    description?: StringNullableWithAggregatesFilter<"Attribute"> | string | null
    unitCode?: StringNullableWithAggregatesFilter<"Attribute"> | string | null
  }

  export type AttributeValueWhereInput = {
    AND?: AttributeValueWhereInput | AttributeValueWhereInput[]
    OR?: AttributeValueWhereInput[]
    NOT?: AttributeValueWhereInput | AttributeValueWhereInput[]
    uuid?: UuidFilter<"AttributeValue"> | string
    value?: StringFilter<"AttributeValue"> | string
    attributeOnProduct?: AttributeOnProductListRelationFilter
  }

  export type AttributeValueOrderByWithRelationInput = {
    uuid?: SortOrder
    value?: SortOrder
    attributeOnProduct?: AttributeOnProductOrderByRelationAggregateInput
  }

  export type AttributeValueWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: AttributeValueWhereInput | AttributeValueWhereInput[]
    OR?: AttributeValueWhereInput[]
    NOT?: AttributeValueWhereInput | AttributeValueWhereInput[]
    value?: StringFilter<"AttributeValue"> | string
    attributeOnProduct?: AttributeOnProductListRelationFilter
  }, "uuid">

  export type AttributeValueOrderByWithAggregationInput = {
    uuid?: SortOrder
    value?: SortOrder
    _count?: AttributeValueCountOrderByAggregateInput
    _max?: AttributeValueMaxOrderByAggregateInput
    _min?: AttributeValueMinOrderByAggregateInput
  }

  export type AttributeValueScalarWhereWithAggregatesInput = {
    AND?: AttributeValueScalarWhereWithAggregatesInput | AttributeValueScalarWhereWithAggregatesInput[]
    OR?: AttributeValueScalarWhereWithAggregatesInput[]
    NOT?: AttributeValueScalarWhereWithAggregatesInput | AttributeValueScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"AttributeValue"> | string
    value?: StringWithAggregatesFilter<"AttributeValue"> | string
  }

  export type AttributeOnProductWhereInput = {
    AND?: AttributeOnProductWhereInput | AttributeOnProductWhereInput[]
    OR?: AttributeOnProductWhereInput[]
    NOT?: AttributeOnProductWhereInput | AttributeOnProductWhereInput[]
    uuid?: UuidFilter<"AttributeOnProduct"> | string
    productUuid?: UuidFilter<"AttributeOnProduct"> | string
    attributeCode?: StringFilter<"AttributeOnProduct"> | string
    valueUuid?: UuidNullableFilter<"AttributeOnProduct"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    attribute?: XOR<AttributeRelationFilter, AttributeWhereInput>
    value?: XOR<AttributeValueNullableRelationFilter, AttributeValueWhereInput> | null
  }

  export type AttributeOnProductOrderByWithRelationInput = {
    uuid?: SortOrder
    productUuid?: SortOrder
    attributeCode?: SortOrder
    valueUuid?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    attribute?: AttributeOrderByWithRelationInput
    value?: AttributeValueOrderByWithRelationInput
  }

  export type AttributeOnProductWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: AttributeOnProductWhereInput | AttributeOnProductWhereInput[]
    OR?: AttributeOnProductWhereInput[]
    NOT?: AttributeOnProductWhereInput | AttributeOnProductWhereInput[]
    productUuid?: UuidFilter<"AttributeOnProduct"> | string
    attributeCode?: StringFilter<"AttributeOnProduct"> | string
    valueUuid?: UuidNullableFilter<"AttributeOnProduct"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    attribute?: XOR<AttributeRelationFilter, AttributeWhereInput>
    value?: XOR<AttributeValueNullableRelationFilter, AttributeValueWhereInput> | null
  }, "uuid">

  export type AttributeOnProductOrderByWithAggregationInput = {
    uuid?: SortOrder
    productUuid?: SortOrder
    attributeCode?: SortOrder
    valueUuid?: SortOrderInput | SortOrder
    _count?: AttributeOnProductCountOrderByAggregateInput
    _max?: AttributeOnProductMaxOrderByAggregateInput
    _min?: AttributeOnProductMinOrderByAggregateInput
  }

  export type AttributeOnProductScalarWhereWithAggregatesInput = {
    AND?: AttributeOnProductScalarWhereWithAggregatesInput | AttributeOnProductScalarWhereWithAggregatesInput[]
    OR?: AttributeOnProductScalarWhereWithAggregatesInput[]
    NOT?: AttributeOnProductScalarWhereWithAggregatesInput | AttributeOnProductScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"AttributeOnProduct"> | string
    productUuid?: UuidWithAggregatesFilter<"AttributeOnProduct"> | string
    attributeCode?: StringWithAggregatesFilter<"AttributeOnProduct"> | string
    valueUuid?: UuidNullableWithAggregatesFilter<"AttributeOnProduct"> | string | null
  }

  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    code?: StringFilter<"Currency"> | string
    value?: StringFilter<"Currency"> | string
    description?: StringFilter<"Currency"> | string
    price?: PriceListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrder
    price?: PriceOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    value?: StringFilter<"Currency"> | string
    description?: StringFilter<"Currency"> | string
    price?: PriceListRelationFilter
  }, "code">

  export type CurrencyOrderByWithAggregationInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Currency"> | string
    value?: StringWithAggregatesFilter<"Currency"> | string
    description?: StringWithAggregatesFilter<"Currency"> | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    code?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    description?: StringNullableFilter<"Brand"> | string | null
    product?: ProductListRelationFilter
    brandOnCategory?: BrandOnCategoryListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    product?: ProductOrderByRelationAggregateInput
    brandOnCategory?: BrandOnCategoryOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    name?: StringFilter<"Brand"> | string
    description?: StringNullableFilter<"Brand"> | string | null
    product?: ProductListRelationFilter
    brandOnCategory?: BrandOnCategoryListRelationFilter
  }, "code">

  export type BrandOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
    description?: StringNullableWithAggregatesFilter<"Brand"> | string | null
  }

  export type CompanyCreateInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shops?: ShopCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shops?: ShopUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shops?: ShopUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shops?: ShopUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateInput = {
    uuid?: string
    name: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutShopsInput
  }

  export type ShopUncheckedCreateInput = {
    uuid?: string
    name: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companyUuid: string
  }

  export type ShopUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutShopsNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyUuid?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCreateManyInput = {
    uuid?: string
    name: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companyUuid: string
  }

  export type ShopUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyUuid?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    uuid?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductInput
    prices?: PriceCreateNestedManyWithoutProductInput
    images?: ImageOnProductCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    uuid?: string
    title: string
    description: string
    brandCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: PriceUncheckedCreateNestedManyWithoutProductInput
    images?: ImageOnProductUncheckedCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductNestedInput
    prices?: PriceUpdateManyWithoutProductNestedInput
    images?: ImageOnProductUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: PriceUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageOnProductUncheckedUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    uuid?: string
    title: string
    description: string
    brandCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateInput = {
    uuid?: string
    prevPrice?: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutPricesInput
    currency: CurrencyCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateInput = {
    uuid?: string
    prevPrice?: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    productUuid: string
    currencyCode: string
  }

  export type PriceUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPricesNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productUuid?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateManyInput = {
    uuid?: string
    prevPrice?: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    productUuid: string
    currencyCode: string
  }

  export type PriceUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productUuid?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    code: string
    title: string
    description: string
    children?: CategoryCreateNestedManyWithoutParentInput
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    features?: FeatureOnCategoryCreateNestedManyWithoutCategoryInput
    products?: CategoryOnProductCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    code: string
    title: string
    description: string
    parentCode?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    features?: FeatureOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
    products?: CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    features?: FeatureOnCategoryUpdateManyWithoutCategoryNestedInput
    products?: CategoryOnProductUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parentCode?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    features?: FeatureOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    products?: CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    code: string
    title: string
    description: string
    parentCode?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parentCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryOnProductCreateInput = {
    product: ProductCreateNestedOneWithoutCategoryOnProductInput
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type CategoryOnProductUncheckedCreateInput = {
    productUuid: string
    categoryCode: string
  }

  export type CategoryOnProductUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutCategoryOnProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type CategoryOnProductUncheckedUpdateInput = {
    productUuid?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryOnProductCreateManyInput = {
    productUuid: string
    categoryCode: string
  }

  export type CategoryOnProductUpdateManyMutationInput = {

  }

  export type CategoryOnProductUncheckedUpdateManyInput = {
    productUuid?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type BrandOnCategoryCreateInput = {
    brand: BrandCreateNestedOneWithoutBrandOnCategoryInput
    category: CategoryCreateNestedOneWithoutBrandOnCategoryInput
  }

  export type BrandOnCategoryUncheckedCreateInput = {
    brandCode: string
    categoryCode: string
  }

  export type BrandOnCategoryUpdateInput = {
    brand?: BrandUpdateOneRequiredWithoutBrandOnCategoryNestedInput
    category?: CategoryUpdateOneRequiredWithoutBrandOnCategoryNestedInput
  }

  export type BrandOnCategoryUncheckedUpdateInput = {
    brandCode?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type BrandOnCategoryCreateManyInput = {
    brandCode: string
    categoryCode: string
  }

  export type BrandOnCategoryUpdateManyMutationInput = {

  }

  export type BrandOnCategoryUncheckedUpdateManyInput = {
    brandCode?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type UnitCreateInput = {
    code: string
    value: string
    description?: string | null
    features?: FeatureCreateNestedManyWithoutUnitInput
    attribute?: AttributeCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    code: string
    value: string
    description?: string | null
    features?: FeatureUncheckedCreateNestedManyWithoutUnitInput
    attribute?: AttributeUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: FeatureUpdateManyWithoutUnitNestedInput
    attribute?: AttributeUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: FeatureUncheckedUpdateManyWithoutUnitNestedInput
    attribute?: AttributeUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    code: string
    value: string
    description?: string | null
  }

  export type UnitUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateInput = {
    uuid?: string
    title: string
    products?: ImageOnProductCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    uuid?: string
    title: string
    products?: ImageOnProductUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    products?: ImageOnProductUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    products?: ImageOnProductUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    uuid?: string
    title: string
  }

  export type ImageUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ImageOnProductCreateInput = {
    order: number
    product: ProductCreateNestedOneWithoutImagesInput
    image: ImageCreateNestedOneWithoutProductsInput
  }

  export type ImageOnProductUncheckedCreateInput = {
    productUuid: string
    imageUuid: string
    order: number
  }

  export type ImageOnProductUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
    image?: ImageUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ImageOnProductUncheckedUpdateInput = {
    productUuid?: StringFieldUpdateOperationsInput | string
    imageUuid?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ImageOnProductCreateManyInput = {
    productUuid: string
    imageUuid: string
    order: number
  }

  export type ImageOnProductUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ImageOnProductUncheckedUpdateManyInput = {
    productUuid?: StringFieldUpdateOperationsInput | string
    imageUuid?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type FeatureCreateInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: FeatureGroupCreateNestedOneWithoutFeatureInput
    unit?: UnitCreateNestedOneWithoutFeaturesInput
    categories?: FeatureOnCategoryCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    groupUuid?: string | null
    unitCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: FeatureOnCategoryUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: FeatureGroupUpdateOneWithoutFeatureNestedInput
    unit?: UnitUpdateOneWithoutFeaturesNestedInput
    categories?: FeatureOnCategoryUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    groupUuid?: NullableStringFieldUpdateOperationsInput | string | null
    unitCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: FeatureOnCategoryUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureCreateManyInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    groupUuid?: string | null
    unitCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    groupUuid?: NullableStringFieldUpdateOperationsInput | string | null
    unitCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureGroupCreateInput = {
    uuid?: string
    title: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    feature?: FeatureCreateNestedManyWithoutGroupInput
  }

  export type FeatureGroupUncheckedCreateInput = {
    uuid?: string
    title: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    feature?: FeatureUncheckedCreateNestedManyWithoutGroupInput
  }

  export type FeatureGroupUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUpdateManyWithoutGroupNestedInput
  }

  export type FeatureGroupUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type FeatureGroupCreateManyInput = {
    uuid?: string
    title: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureGroupUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureGroupUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureOnCategoryCreateInput = {
    feature: FeatureCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutFeaturesInput
  }

  export type FeatureOnCategoryUncheckedCreateInput = {
    featureUuid: string
    categoryCode: string
  }

  export type FeatureOnCategoryUpdateInput = {
    feature?: FeatureUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type FeatureOnCategoryUncheckedUpdateInput = {
    featureUuid?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureOnCategoryCreateManyInput = {
    featureUuid: string
    categoryCode: string
  }

  export type FeatureOnCategoryUpdateManyMutationInput = {

  }

  export type FeatureOnCategoryUncheckedUpdateManyInput = {
    featureUuid?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeCreateInput = {
    code: string
    name: string
    description?: string | null
    attributeOnProduct?: AttributeOnProductCreateNestedManyWithoutAttributeInput
    unit?: UnitCreateNestedOneWithoutAttributeInput
  }

  export type AttributeUncheckedCreateInput = {
    code: string
    name: string
    description?: string | null
    unitCode?: string | null
    attributeOnProduct?: AttributeOnProductUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributeOnProduct?: AttributeOnProductUpdateManyWithoutAttributeNestedInput
    unit?: UnitUpdateOneWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitCode?: NullableStringFieldUpdateOperationsInput | string | null
    attributeOnProduct?: AttributeOnProductUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeCreateManyInput = {
    code: string
    name: string
    description?: string | null
    unitCode?: string | null
  }

  export type AttributeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeValueCreateInput = {
    uuid?: string
    value: string
    attributeOnProduct?: AttributeOnProductCreateNestedManyWithoutValueInput
  }

  export type AttributeValueUncheckedCreateInput = {
    uuid?: string
    value: string
    attributeOnProduct?: AttributeOnProductUncheckedCreateNestedManyWithoutValueInput
  }

  export type AttributeValueUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    attributeOnProduct?: AttributeOnProductUpdateManyWithoutValueNestedInput
  }

  export type AttributeValueUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    attributeOnProduct?: AttributeOnProductUncheckedUpdateManyWithoutValueNestedInput
  }

  export type AttributeValueCreateManyInput = {
    uuid?: string
    value: string
  }

  export type AttributeValueUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeValueUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeOnProductCreateInput = {
    uuid?: string
    product: ProductCreateNestedOneWithoutAttributeOnProductInput
    attribute: AttributeCreateNestedOneWithoutAttributeOnProductInput
    value?: AttributeValueCreateNestedOneWithoutAttributeOnProductInput
  }

  export type AttributeOnProductUncheckedCreateInput = {
    uuid?: string
    productUuid: string
    attributeCode: string
    valueUuid?: string | null
  }

  export type AttributeOnProductUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutAttributeOnProductNestedInput
    attribute?: AttributeUpdateOneRequiredWithoutAttributeOnProductNestedInput
    value?: AttributeValueUpdateOneWithoutAttributeOnProductNestedInput
  }

  export type AttributeOnProductUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    productUuid?: StringFieldUpdateOperationsInput | string
    attributeCode?: StringFieldUpdateOperationsInput | string
    valueUuid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeOnProductCreateManyInput = {
    uuid?: string
    productUuid: string
    attributeCode: string
    valueUuid?: string | null
  }

  export type AttributeOnProductUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeOnProductUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    productUuid?: StringFieldUpdateOperationsInput | string
    attributeCode?: StringFieldUpdateOperationsInput | string
    valueUuid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurrencyCreateInput = {
    code: string
    value: string
    description: string
    price?: PriceCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateInput = {
    code: string
    value: string
    description: string
    price?: PriceUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: PriceUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: PriceUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyCreateManyInput = {
    code: string
    value: string
    description: string
  }

  export type CurrencyUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BrandCreateInput = {
    code: string
    name: string
    description?: string | null
    product?: ProductCreateNestedManyWithoutBrandInput
    brandOnCategory?: BrandOnCategoryCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    code: string
    name: string
    description?: string | null
    product?: ProductUncheckedCreateNestedManyWithoutBrandInput
    brandOnCategory?: BrandOnCategoryUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateManyWithoutBrandNestedInput
    brandOnCategory?: BrandOnCategoryUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUncheckedUpdateManyWithoutBrandNestedInput
    brandOnCategory?: BrandOnCategoryUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    code: string
    name: string
    description?: string | null
  }

  export type BrandUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShopListRelationFilter = {
    every?: ShopWhereInput
    some?: ShopWhereInput
    none?: ShopWhereInput
  }

  export type ShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShopCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyUuid?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyUuid?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyUuid?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BrandNullableRelationFilter = {
    is?: BrandWhereInput | null
    isNot?: BrandWhereInput | null
  }

  export type PriceListRelationFilter = {
    every?: PriceWhereInput
    some?: PriceWhereInput
    none?: PriceWhereInput
  }

  export type ImageOnProductListRelationFilter = {
    every?: ImageOnProductWhereInput
    some?: ImageOnProductWhereInput
    none?: ImageOnProductWhereInput
  }

  export type CategoryOnProductListRelationFilter = {
    every?: CategoryOnProductWhereInput
    some?: CategoryOnProductWhereInput
    none?: CategoryOnProductWhereInput
  }

  export type AttributeOnProductListRelationFilter = {
    every?: AttributeOnProductWhereInput
    some?: AttributeOnProductWhereInput
    none?: AttributeOnProductWhereInput
  }

  export type PriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOnProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOnProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeOnProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brandCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brandCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brandCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPricePhaseEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PricePhaseEnum | EnumPricePhaseEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PricePhaseEnum[] | ListEnumPricePhaseEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricePhaseEnum[] | ListEnumPricePhaseEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPricePhaseEnumFilter<$PrismaModel> | $Enums.PricePhaseEnum
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CurrencyRelationFilter = {
    is?: CurrencyWhereInput
    isNot?: CurrencyWhereInput
  }

  export type PriceCountOrderByAggregateInput = {
    uuid?: SortOrder
    prevPrice?: SortOrder
    price?: SortOrder
    description?: SortOrder
    phase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productUuid?: SortOrder
    currencyCode?: SortOrder
  }

  export type PriceAvgOrderByAggregateInput = {
    prevPrice?: SortOrder
    price?: SortOrder
  }

  export type PriceMaxOrderByAggregateInput = {
    uuid?: SortOrder
    prevPrice?: SortOrder
    price?: SortOrder
    description?: SortOrder
    phase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productUuid?: SortOrder
    currencyCode?: SortOrder
  }

  export type PriceMinOrderByAggregateInput = {
    uuid?: SortOrder
    prevPrice?: SortOrder
    price?: SortOrder
    description?: SortOrder
    phase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productUuid?: SortOrder
    currencyCode?: SortOrder
  }

  export type PriceSumOrderByAggregateInput = {
    prevPrice?: SortOrder
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPricePhaseEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricePhaseEnum | EnumPricePhaseEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PricePhaseEnum[] | ListEnumPricePhaseEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricePhaseEnum[] | ListEnumPricePhaseEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPricePhaseEnumWithAggregatesFilter<$PrismaModel> | $Enums.PricePhaseEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricePhaseEnumFilter<$PrismaModel>
    _max?: NestedEnumPricePhaseEnumFilter<$PrismaModel>
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type FeatureOnCategoryListRelationFilter = {
    every?: FeatureOnCategoryWhereInput
    some?: FeatureOnCategoryWhereInput
    none?: FeatureOnCategoryWhereInput
  }

  export type BrandOnCategoryListRelationFilter = {
    every?: BrandOnCategoryWhereInput
    some?: BrandOnCategoryWhereInput
    none?: BrandOnCategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureOnCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandOnCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    parentCode?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    parentCode?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    parentCode?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CategoryOnProductProductUuidCategoryCodeCompoundUniqueInput = {
    productUuid: string
    categoryCode: string
  }

  export type CategoryOnProductCountOrderByAggregateInput = {
    productUuid?: SortOrder
    categoryCode?: SortOrder
  }

  export type CategoryOnProductMaxOrderByAggregateInput = {
    productUuid?: SortOrder
    categoryCode?: SortOrder
  }

  export type CategoryOnProductMinOrderByAggregateInput = {
    productUuid?: SortOrder
    categoryCode?: SortOrder
  }

  export type BrandRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type BrandOnCategoryBrandCodeCategoryCodeCompoundUniqueInput = {
    brandCode: string
    categoryCode: string
  }

  export type BrandOnCategoryCountOrderByAggregateInput = {
    brandCode?: SortOrder
    categoryCode?: SortOrder
  }

  export type BrandOnCategoryMaxOrderByAggregateInput = {
    brandCode?: SortOrder
    categoryCode?: SortOrder
  }

  export type BrandOnCategoryMinOrderByAggregateInput = {
    brandCode?: SortOrder
    categoryCode?: SortOrder
  }

  export type FeatureListRelationFilter = {
    every?: FeatureWhereInput
    some?: FeatureWhereInput
    none?: FeatureWhereInput
  }

  export type AttributeListRelationFilter = {
    every?: AttributeWhereInput
    some?: AttributeWhereInput
    none?: AttributeWhereInput
  }

  export type FeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ImageRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type ImageOnProductProductUuidImageUuidCompoundUniqueInput = {
    productUuid: string
    imageUuid: string
  }

  export type ImageOnProductCountOrderByAggregateInput = {
    productUuid?: SortOrder
    imageUuid?: SortOrder
    order?: SortOrder
  }

  export type ImageOnProductAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ImageOnProductMaxOrderByAggregateInput = {
    productUuid?: SortOrder
    imageUuid?: SortOrder
    order?: SortOrder
  }

  export type ImageOnProductMinOrderByAggregateInput = {
    productUuid?: SortOrder
    imageUuid?: SortOrder
    order?: SortOrder
  }

  export type ImageOnProductSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumFeatureTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureTypeEnum | EnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureTypeEnum[] | ListEnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureTypeEnum[] | ListEnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTypeEnumFilter<$PrismaModel> | $Enums.FeatureTypeEnum
  }

  export type EnumFeatureStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureStatusEnum | EnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureStatusEnum[] | ListEnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureStatusEnum[] | ListEnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureStatusEnumFilter<$PrismaModel> | $Enums.FeatureStatusEnum
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type FeatureGroupNullableRelationFilter = {
    is?: FeatureGroupWhereInput | null
    isNot?: FeatureGroupWhereInput | null
  }

  export type UnitNullableRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type FeatureCountOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    code?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isShowInProductTab?: SortOrder
    isShowInProductList?: SortOrder
    isShowInProductHeader?: SortOrder
    status?: SortOrder
    groupUuid?: SortOrder
    unitCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    code?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isShowInProductTab?: SortOrder
    isShowInProductList?: SortOrder
    isShowInProductHeader?: SortOrder
    status?: SortOrder
    groupUuid?: SortOrder
    unitCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    code?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isShowInProductTab?: SortOrder
    isShowInProductList?: SortOrder
    isShowInProductHeader?: SortOrder
    status?: SortOrder
    groupUuid?: SortOrder
    unitCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFeatureTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureTypeEnum | EnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureTypeEnum[] | ListEnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureTypeEnum[] | ListEnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.FeatureTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumFeatureTypeEnumFilter<$PrismaModel>
  }

  export type EnumFeatureStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureStatusEnum | EnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureStatusEnum[] | ListEnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureStatusEnum[] | ListEnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.FeatureStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumFeatureStatusEnumFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FeatureGroupCountOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureGroupAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FeatureGroupMaxOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureGroupMinOrderByAggregateInput = {
    uuid?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureGroupSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FeatureRelationFilter = {
    is?: FeatureWhereInput
    isNot?: FeatureWhereInput
  }

  export type FeatureOnCategoryFeatureUuidCategoryCodeCompoundUniqueInput = {
    featureUuid: string
    categoryCode: string
  }

  export type FeatureOnCategoryCountOrderByAggregateInput = {
    featureUuid?: SortOrder
    categoryCode?: SortOrder
  }

  export type FeatureOnCategoryMaxOrderByAggregateInput = {
    featureUuid?: SortOrder
    categoryCode?: SortOrder
  }

  export type FeatureOnCategoryMinOrderByAggregateInput = {
    featureUuid?: SortOrder
    categoryCode?: SortOrder
  }

  export type AttributeCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unitCode?: SortOrder
  }

  export type AttributeMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unitCode?: SortOrder
  }

  export type AttributeMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unitCode?: SortOrder
  }

  export type AttributeValueCountOrderByAggregateInput = {
    uuid?: SortOrder
    value?: SortOrder
  }

  export type AttributeValueMaxOrderByAggregateInput = {
    uuid?: SortOrder
    value?: SortOrder
  }

  export type AttributeValueMinOrderByAggregateInput = {
    uuid?: SortOrder
    value?: SortOrder
  }

  export type AttributeRelationFilter = {
    is?: AttributeWhereInput
    isNot?: AttributeWhereInput
  }

  export type AttributeValueNullableRelationFilter = {
    is?: AttributeValueWhereInput | null
    isNot?: AttributeValueWhereInput | null
  }

  export type AttributeOnProductCountOrderByAggregateInput = {
    uuid?: SortOrder
    productUuid?: SortOrder
    attributeCode?: SortOrder
    valueUuid?: SortOrder
  }

  export type AttributeOnProductMaxOrderByAggregateInput = {
    uuid?: SortOrder
    productUuid?: SortOrder
    attributeCode?: SortOrder
    valueUuid?: SortOrder
  }

  export type AttributeOnProductMinOrderByAggregateInput = {
    uuid?: SortOrder
    productUuid?: SortOrder
    attributeCode?: SortOrder
    valueUuid?: SortOrder
  }

  export type CurrencyCountOrderByAggregateInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    code?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ShopCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ShopCreateWithoutCompanyInput, ShopUncheckedCreateWithoutCompanyInput> | ShopCreateWithoutCompanyInput[] | ShopUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutCompanyInput | ShopCreateOrConnectWithoutCompanyInput[]
    createMany?: ShopCreateManyCompanyInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type ShopUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ShopCreateWithoutCompanyInput, ShopUncheckedCreateWithoutCompanyInput> | ShopCreateWithoutCompanyInput[] | ShopUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutCompanyInput | ShopCreateOrConnectWithoutCompanyInput[]
    createMany?: ShopCreateManyCompanyInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShopUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ShopCreateWithoutCompanyInput, ShopUncheckedCreateWithoutCompanyInput> | ShopCreateWithoutCompanyInput[] | ShopUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutCompanyInput | ShopCreateOrConnectWithoutCompanyInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutCompanyInput | ShopUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ShopCreateManyCompanyInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutCompanyInput | ShopUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutCompanyInput | ShopUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type ShopUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ShopCreateWithoutCompanyInput, ShopUncheckedCreateWithoutCompanyInput> | ShopCreateWithoutCompanyInput[] | ShopUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutCompanyInput | ShopCreateOrConnectWithoutCompanyInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutCompanyInput | ShopUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ShopCreateManyCompanyInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutCompanyInput | ShopUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutCompanyInput | ShopUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutShopsInput = {
    create?: XOR<CompanyCreateWithoutShopsInput, CompanyUncheckedCreateWithoutShopsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutShopsInput
    connect?: CompanyWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneRequiredWithoutShopsNestedInput = {
    create?: XOR<CompanyCreateWithoutShopsInput, CompanyUncheckedCreateWithoutShopsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutShopsInput
    upsert?: CompanyUpsertWithoutShopsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutShopsInput, CompanyUpdateWithoutShopsInput>, CompanyUncheckedUpdateWithoutShopsInput>
  }

  export type BrandCreateNestedOneWithoutProductInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    connect?: BrandWhereUniqueInput
  }

  export type PriceCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type ImageOnProductCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageOnProductCreateWithoutProductInput, ImageOnProductUncheckedCreateWithoutProductInput> | ImageOnProductCreateWithoutProductInput[] | ImageOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageOnProductCreateOrConnectWithoutProductInput | ImageOnProductCreateOrConnectWithoutProductInput[]
    createMany?: ImageOnProductCreateManyProductInputEnvelope
    connect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
  }

  export type CategoryOnProductCreateNestedManyWithoutProductInput = {
    create?: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput> | CategoryOnProductCreateWithoutProductInput[] | CategoryOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutProductInput | CategoryOnProductCreateOrConnectWithoutProductInput[]
    createMany?: CategoryOnProductCreateManyProductInputEnvelope
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
  }

  export type AttributeOnProductCreateNestedManyWithoutProductInput = {
    create?: XOR<AttributeOnProductCreateWithoutProductInput, AttributeOnProductUncheckedCreateWithoutProductInput> | AttributeOnProductCreateWithoutProductInput[] | AttributeOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutProductInput | AttributeOnProductCreateOrConnectWithoutProductInput[]
    createMany?: AttributeOnProductCreateManyProductInputEnvelope
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type ImageOnProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageOnProductCreateWithoutProductInput, ImageOnProductUncheckedCreateWithoutProductInput> | ImageOnProductCreateWithoutProductInput[] | ImageOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageOnProductCreateOrConnectWithoutProductInput | ImageOnProductCreateOrConnectWithoutProductInput[]
    createMany?: ImageOnProductCreateManyProductInputEnvelope
    connect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
  }

  export type CategoryOnProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput> | CategoryOnProductCreateWithoutProductInput[] | CategoryOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutProductInput | CategoryOnProductCreateOrConnectWithoutProductInput[]
    createMany?: CategoryOnProductCreateManyProductInputEnvelope
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
  }

  export type AttributeOnProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<AttributeOnProductCreateWithoutProductInput, AttributeOnProductUncheckedCreateWithoutProductInput> | AttributeOnProductCreateWithoutProductInput[] | AttributeOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutProductInput | AttributeOnProductCreateOrConnectWithoutProductInput[]
    createMany?: AttributeOnProductCreateManyProductInputEnvelope
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
  }

  export type BrandUpdateOneWithoutProductNestedInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    upsert?: BrandUpsertWithoutProductInput
    disconnect?: BrandWhereInput | boolean
    delete?: BrandWhereInput | boolean
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductInput, BrandUpdateWithoutProductInput>, BrandUncheckedUpdateWithoutProductInput>
  }

  export type PriceUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProductInput | PriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProductInput | PriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProductInput | PriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type ImageOnProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageOnProductCreateWithoutProductInput, ImageOnProductUncheckedCreateWithoutProductInput> | ImageOnProductCreateWithoutProductInput[] | ImageOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageOnProductCreateOrConnectWithoutProductInput | ImageOnProductCreateOrConnectWithoutProductInput[]
    upsert?: ImageOnProductUpsertWithWhereUniqueWithoutProductInput | ImageOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageOnProductCreateManyProductInputEnvelope
    set?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    disconnect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    delete?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    connect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    update?: ImageOnProductUpdateWithWhereUniqueWithoutProductInput | ImageOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageOnProductUpdateManyWithWhereWithoutProductInput | ImageOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageOnProductScalarWhereInput | ImageOnProductScalarWhereInput[]
  }

  export type CategoryOnProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput> | CategoryOnProductCreateWithoutProductInput[] | CategoryOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutProductInput | CategoryOnProductCreateOrConnectWithoutProductInput[]
    upsert?: CategoryOnProductUpsertWithWhereUniqueWithoutProductInput | CategoryOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CategoryOnProductCreateManyProductInputEnvelope
    set?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    disconnect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    delete?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    update?: CategoryOnProductUpdateWithWhereUniqueWithoutProductInput | CategoryOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CategoryOnProductUpdateManyWithWhereWithoutProductInput | CategoryOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
  }

  export type AttributeOnProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<AttributeOnProductCreateWithoutProductInput, AttributeOnProductUncheckedCreateWithoutProductInput> | AttributeOnProductCreateWithoutProductInput[] | AttributeOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutProductInput | AttributeOnProductCreateOrConnectWithoutProductInput[]
    upsert?: AttributeOnProductUpsertWithWhereUniqueWithoutProductInput | AttributeOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: AttributeOnProductCreateManyProductInputEnvelope
    set?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    disconnect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    delete?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    update?: AttributeOnProductUpdateWithWhereUniqueWithoutProductInput | AttributeOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: AttributeOnProductUpdateManyWithWhereWithoutProductInput | AttributeOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: AttributeOnProductScalarWhereInput | AttributeOnProductScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProductInput | PriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProductInput | PriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProductInput | PriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type ImageOnProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageOnProductCreateWithoutProductInput, ImageOnProductUncheckedCreateWithoutProductInput> | ImageOnProductCreateWithoutProductInput[] | ImageOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageOnProductCreateOrConnectWithoutProductInput | ImageOnProductCreateOrConnectWithoutProductInput[]
    upsert?: ImageOnProductUpsertWithWhereUniqueWithoutProductInput | ImageOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageOnProductCreateManyProductInputEnvelope
    set?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    disconnect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    delete?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    connect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    update?: ImageOnProductUpdateWithWhereUniqueWithoutProductInput | ImageOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageOnProductUpdateManyWithWhereWithoutProductInput | ImageOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageOnProductScalarWhereInput | ImageOnProductScalarWhereInput[]
  }

  export type CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput> | CategoryOnProductCreateWithoutProductInput[] | CategoryOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutProductInput | CategoryOnProductCreateOrConnectWithoutProductInput[]
    upsert?: CategoryOnProductUpsertWithWhereUniqueWithoutProductInput | CategoryOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CategoryOnProductCreateManyProductInputEnvelope
    set?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    disconnect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    delete?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    update?: CategoryOnProductUpdateWithWhereUniqueWithoutProductInput | CategoryOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CategoryOnProductUpdateManyWithWhereWithoutProductInput | CategoryOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
  }

  export type AttributeOnProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<AttributeOnProductCreateWithoutProductInput, AttributeOnProductUncheckedCreateWithoutProductInput> | AttributeOnProductCreateWithoutProductInput[] | AttributeOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutProductInput | AttributeOnProductCreateOrConnectWithoutProductInput[]
    upsert?: AttributeOnProductUpsertWithWhereUniqueWithoutProductInput | AttributeOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: AttributeOnProductCreateManyProductInputEnvelope
    set?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    disconnect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    delete?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    update?: AttributeOnProductUpdateWithWhereUniqueWithoutProductInput | AttributeOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: AttributeOnProductUpdateManyWithWhereWithoutProductInput | AttributeOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: AttributeOnProductScalarWhereInput | AttributeOnProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPricesInput = {
    create?: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricesInput
    connect?: ProductWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutPriceInput = {
    create?: XOR<CurrencyCreateWithoutPriceInput, CurrencyUncheckedCreateWithoutPriceInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutPriceInput
    connect?: CurrencyWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPricePhaseEnumFieldUpdateOperationsInput = {
    set?: $Enums.PricePhaseEnum
  }

  export type ProductUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricesInput
    upsert?: ProductUpsertWithoutPricesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPricesInput, ProductUpdateWithoutPricesInput>, ProductUncheckedUpdateWithoutPricesInput>
  }

  export type CurrencyUpdateOneRequiredWithoutPriceNestedInput = {
    create?: XOR<CurrencyCreateWithoutPriceInput, CurrencyUncheckedCreateWithoutPriceInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutPriceInput
    upsert?: CurrencyUpsertWithoutPriceInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutPriceInput, CurrencyUpdateWithoutPriceInput>, CurrencyUncheckedUpdateWithoutPriceInput>
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type FeatureOnCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FeatureOnCategoryCreateWithoutCategoryInput, FeatureOnCategoryUncheckedCreateWithoutCategoryInput> | FeatureOnCategoryCreateWithoutCategoryInput[] | FeatureOnCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FeatureOnCategoryCreateOrConnectWithoutCategoryInput | FeatureOnCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: FeatureOnCategoryCreateManyCategoryInputEnvelope
    connect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
  }

  export type CategoryOnProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput> | CategoryOnProductCreateWithoutCategoryInput[] | CategoryOnProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutCategoryInput | CategoryOnProductCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryOnProductCreateManyCategoryInputEnvelope
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
  }

  export type BrandOnCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BrandOnCategoryCreateWithoutCategoryInput, BrandOnCategoryUncheckedCreateWithoutCategoryInput> | BrandOnCategoryCreateWithoutCategoryInput[] | BrandOnCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandOnCategoryCreateOrConnectWithoutCategoryInput | BrandOnCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BrandOnCategoryCreateManyCategoryInputEnvelope
    connect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type FeatureOnCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FeatureOnCategoryCreateWithoutCategoryInput, FeatureOnCategoryUncheckedCreateWithoutCategoryInput> | FeatureOnCategoryCreateWithoutCategoryInput[] | FeatureOnCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FeatureOnCategoryCreateOrConnectWithoutCategoryInput | FeatureOnCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: FeatureOnCategoryCreateManyCategoryInputEnvelope
    connect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
  }

  export type CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput> | CategoryOnProductCreateWithoutCategoryInput[] | CategoryOnProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutCategoryInput | CategoryOnProductCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryOnProductCreateManyCategoryInputEnvelope
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
  }

  export type BrandOnCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BrandOnCategoryCreateWithoutCategoryInput, BrandOnCategoryUncheckedCreateWithoutCategoryInput> | BrandOnCategoryCreateWithoutCategoryInput[] | BrandOnCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandOnCategoryCreateOrConnectWithoutCategoryInput | BrandOnCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: BrandOnCategoryCreateManyCategoryInputEnvelope
    connect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type FeatureOnCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FeatureOnCategoryCreateWithoutCategoryInput, FeatureOnCategoryUncheckedCreateWithoutCategoryInput> | FeatureOnCategoryCreateWithoutCategoryInput[] | FeatureOnCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FeatureOnCategoryCreateOrConnectWithoutCategoryInput | FeatureOnCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: FeatureOnCategoryUpsertWithWhereUniqueWithoutCategoryInput | FeatureOnCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FeatureOnCategoryCreateManyCategoryInputEnvelope
    set?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    disconnect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    delete?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    connect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    update?: FeatureOnCategoryUpdateWithWhereUniqueWithoutCategoryInput | FeatureOnCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FeatureOnCategoryUpdateManyWithWhereWithoutCategoryInput | FeatureOnCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FeatureOnCategoryScalarWhereInput | FeatureOnCategoryScalarWhereInput[]
  }

  export type CategoryOnProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput> | CategoryOnProductCreateWithoutCategoryInput[] | CategoryOnProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutCategoryInput | CategoryOnProductCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput | CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryOnProductCreateManyCategoryInputEnvelope
    set?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    disconnect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    delete?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    update?: CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput | CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryOnProductUpdateManyWithWhereWithoutCategoryInput | CategoryOnProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
  }

  export type BrandOnCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BrandOnCategoryCreateWithoutCategoryInput, BrandOnCategoryUncheckedCreateWithoutCategoryInput> | BrandOnCategoryCreateWithoutCategoryInput[] | BrandOnCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandOnCategoryCreateOrConnectWithoutCategoryInput | BrandOnCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BrandOnCategoryUpsertWithWhereUniqueWithoutCategoryInput | BrandOnCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BrandOnCategoryCreateManyCategoryInputEnvelope
    set?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    disconnect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    delete?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    connect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    update?: BrandOnCategoryUpdateWithWhereUniqueWithoutCategoryInput | BrandOnCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BrandOnCategoryUpdateManyWithWhereWithoutCategoryInput | BrandOnCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BrandOnCategoryScalarWhereInput | BrandOnCategoryScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type FeatureOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FeatureOnCategoryCreateWithoutCategoryInput, FeatureOnCategoryUncheckedCreateWithoutCategoryInput> | FeatureOnCategoryCreateWithoutCategoryInput[] | FeatureOnCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FeatureOnCategoryCreateOrConnectWithoutCategoryInput | FeatureOnCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: FeatureOnCategoryUpsertWithWhereUniqueWithoutCategoryInput | FeatureOnCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FeatureOnCategoryCreateManyCategoryInputEnvelope
    set?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    disconnect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    delete?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    connect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    update?: FeatureOnCategoryUpdateWithWhereUniqueWithoutCategoryInput | FeatureOnCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FeatureOnCategoryUpdateManyWithWhereWithoutCategoryInput | FeatureOnCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FeatureOnCategoryScalarWhereInput | FeatureOnCategoryScalarWhereInput[]
  }

  export type CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput> | CategoryOnProductCreateWithoutCategoryInput[] | CategoryOnProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutCategoryInput | CategoryOnProductCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput | CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryOnProductCreateManyCategoryInputEnvelope
    set?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    disconnect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    delete?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    update?: CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput | CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryOnProductUpdateManyWithWhereWithoutCategoryInput | CategoryOnProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
  }

  export type BrandOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BrandOnCategoryCreateWithoutCategoryInput, BrandOnCategoryUncheckedCreateWithoutCategoryInput> | BrandOnCategoryCreateWithoutCategoryInput[] | BrandOnCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandOnCategoryCreateOrConnectWithoutCategoryInput | BrandOnCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: BrandOnCategoryUpsertWithWhereUniqueWithoutCategoryInput | BrandOnCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BrandOnCategoryCreateManyCategoryInputEnvelope
    set?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    disconnect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    delete?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    connect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    update?: BrandOnCategoryUpdateWithWhereUniqueWithoutCategoryInput | BrandOnCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BrandOnCategoryUpdateManyWithWhereWithoutCategoryInput | BrandOnCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BrandOnCategoryScalarWhereInput | BrandOnCategoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutCategoryOnProductInput = {
    create?: XOR<ProductCreateWithoutCategoryOnProductInput, ProductUncheckedCreateWithoutCategoryOnProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryOnProductInput
    connect?: ProductWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutCategoryOnProductNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryOnProductInput, ProductUncheckedCreateWithoutCategoryOnProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryOnProductInput
    upsert?: ProductUpsertWithoutCategoryOnProductInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCategoryOnProductInput, ProductUpdateWithoutCategoryOnProductInput>, ProductUncheckedUpdateWithoutCategoryOnProductInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type BrandCreateNestedOneWithoutBrandOnCategoryInput = {
    create?: XOR<BrandCreateWithoutBrandOnCategoryInput, BrandUncheckedCreateWithoutBrandOnCategoryInput>
    connectOrCreate?: BrandCreateOrConnectWithoutBrandOnCategoryInput
    connect?: BrandWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBrandOnCategoryInput = {
    create?: XOR<CategoryCreateWithoutBrandOnCategoryInput, CategoryUncheckedCreateWithoutBrandOnCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBrandOnCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type BrandUpdateOneRequiredWithoutBrandOnCategoryNestedInput = {
    create?: XOR<BrandCreateWithoutBrandOnCategoryInput, BrandUncheckedCreateWithoutBrandOnCategoryInput>
    connectOrCreate?: BrandCreateOrConnectWithoutBrandOnCategoryInput
    upsert?: BrandUpsertWithoutBrandOnCategoryInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutBrandOnCategoryInput, BrandUpdateWithoutBrandOnCategoryInput>, BrandUncheckedUpdateWithoutBrandOnCategoryInput>
  }

  export type CategoryUpdateOneRequiredWithoutBrandOnCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutBrandOnCategoryInput, CategoryUncheckedCreateWithoutBrandOnCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBrandOnCategoryInput
    upsert?: CategoryUpsertWithoutBrandOnCategoryInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBrandOnCategoryInput, CategoryUpdateWithoutBrandOnCategoryInput>, CategoryUncheckedUpdateWithoutBrandOnCategoryInput>
  }

  export type FeatureCreateNestedManyWithoutUnitInput = {
    create?: XOR<FeatureCreateWithoutUnitInput, FeatureUncheckedCreateWithoutUnitInput> | FeatureCreateWithoutUnitInput[] | FeatureUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutUnitInput | FeatureCreateOrConnectWithoutUnitInput[]
    createMany?: FeatureCreateManyUnitInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type AttributeCreateNestedManyWithoutUnitInput = {
    create?: XOR<AttributeCreateWithoutUnitInput, AttributeUncheckedCreateWithoutUnitInput> | AttributeCreateWithoutUnitInput[] | AttributeUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutUnitInput | AttributeCreateOrConnectWithoutUnitInput[]
    createMany?: AttributeCreateManyUnitInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<FeatureCreateWithoutUnitInput, FeatureUncheckedCreateWithoutUnitInput> | FeatureCreateWithoutUnitInput[] | FeatureUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutUnitInput | FeatureCreateOrConnectWithoutUnitInput[]
    createMany?: FeatureCreateManyUnitInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type AttributeUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<AttributeCreateWithoutUnitInput, AttributeUncheckedCreateWithoutUnitInput> | AttributeCreateWithoutUnitInput[] | AttributeUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutUnitInput | AttributeCreateOrConnectWithoutUnitInput[]
    createMany?: AttributeCreateManyUnitInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type FeatureUpdateManyWithoutUnitNestedInput = {
    create?: XOR<FeatureCreateWithoutUnitInput, FeatureUncheckedCreateWithoutUnitInput> | FeatureCreateWithoutUnitInput[] | FeatureUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutUnitInput | FeatureCreateOrConnectWithoutUnitInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutUnitInput | FeatureUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: FeatureCreateManyUnitInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutUnitInput | FeatureUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutUnitInput | FeatureUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type AttributeUpdateManyWithoutUnitNestedInput = {
    create?: XOR<AttributeCreateWithoutUnitInput, AttributeUncheckedCreateWithoutUnitInput> | AttributeCreateWithoutUnitInput[] | AttributeUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutUnitInput | AttributeCreateOrConnectWithoutUnitInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutUnitInput | AttributeUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: AttributeCreateManyUnitInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutUnitInput | AttributeUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutUnitInput | AttributeUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<FeatureCreateWithoutUnitInput, FeatureUncheckedCreateWithoutUnitInput> | FeatureCreateWithoutUnitInput[] | FeatureUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutUnitInput | FeatureCreateOrConnectWithoutUnitInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutUnitInput | FeatureUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: FeatureCreateManyUnitInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutUnitInput | FeatureUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutUnitInput | FeatureUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type AttributeUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<AttributeCreateWithoutUnitInput, AttributeUncheckedCreateWithoutUnitInput> | AttributeCreateWithoutUnitInput[] | AttributeUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutUnitInput | AttributeCreateOrConnectWithoutUnitInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutUnitInput | AttributeUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: AttributeCreateManyUnitInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutUnitInput | AttributeUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutUnitInput | AttributeUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type ImageOnProductCreateNestedManyWithoutImageInput = {
    create?: XOR<ImageOnProductCreateWithoutImageInput, ImageOnProductUncheckedCreateWithoutImageInput> | ImageOnProductCreateWithoutImageInput[] | ImageOnProductUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImageOnProductCreateOrConnectWithoutImageInput | ImageOnProductCreateOrConnectWithoutImageInput[]
    createMany?: ImageOnProductCreateManyImageInputEnvelope
    connect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
  }

  export type ImageOnProductUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<ImageOnProductCreateWithoutImageInput, ImageOnProductUncheckedCreateWithoutImageInput> | ImageOnProductCreateWithoutImageInput[] | ImageOnProductUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImageOnProductCreateOrConnectWithoutImageInput | ImageOnProductCreateOrConnectWithoutImageInput[]
    createMany?: ImageOnProductCreateManyImageInputEnvelope
    connect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
  }

  export type ImageOnProductUpdateManyWithoutImageNestedInput = {
    create?: XOR<ImageOnProductCreateWithoutImageInput, ImageOnProductUncheckedCreateWithoutImageInput> | ImageOnProductCreateWithoutImageInput[] | ImageOnProductUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImageOnProductCreateOrConnectWithoutImageInput | ImageOnProductCreateOrConnectWithoutImageInput[]
    upsert?: ImageOnProductUpsertWithWhereUniqueWithoutImageInput | ImageOnProductUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ImageOnProductCreateManyImageInputEnvelope
    set?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    disconnect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    delete?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    connect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    update?: ImageOnProductUpdateWithWhereUniqueWithoutImageInput | ImageOnProductUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ImageOnProductUpdateManyWithWhereWithoutImageInput | ImageOnProductUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ImageOnProductScalarWhereInput | ImageOnProductScalarWhereInput[]
  }

  export type ImageOnProductUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<ImageOnProductCreateWithoutImageInput, ImageOnProductUncheckedCreateWithoutImageInput> | ImageOnProductCreateWithoutImageInput[] | ImageOnProductUncheckedCreateWithoutImageInput[]
    connectOrCreate?: ImageOnProductCreateOrConnectWithoutImageInput | ImageOnProductCreateOrConnectWithoutImageInput[]
    upsert?: ImageOnProductUpsertWithWhereUniqueWithoutImageInput | ImageOnProductUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: ImageOnProductCreateManyImageInputEnvelope
    set?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    disconnect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    delete?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    connect?: ImageOnProductWhereUniqueInput | ImageOnProductWhereUniqueInput[]
    update?: ImageOnProductUpdateWithWhereUniqueWithoutImageInput | ImageOnProductUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: ImageOnProductUpdateManyWithWhereWithoutImageInput | ImageOnProductUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: ImageOnProductScalarWhereInput | ImageOnProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutProductsInput = {
    create?: XOR<ImageCreateWithoutProductsInput, ImageUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProductsInput
    connect?: ImageWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ImageUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ImageCreateWithoutProductsInput, ImageUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutProductsInput
    upsert?: ImageUpsertWithoutProductsInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutProductsInput, ImageUpdateWithoutProductsInput>, ImageUncheckedUpdateWithoutProductsInput>
  }

  export type FeatureGroupCreateNestedOneWithoutFeatureInput = {
    create?: XOR<FeatureGroupCreateWithoutFeatureInput, FeatureGroupUncheckedCreateWithoutFeatureInput>
    connectOrCreate?: FeatureGroupCreateOrConnectWithoutFeatureInput
    connect?: FeatureGroupWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<UnitCreateWithoutFeaturesInput, UnitUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutFeaturesInput
    connect?: UnitWhereUniqueInput
  }

  export type FeatureOnCategoryCreateNestedManyWithoutFeatureInput = {
    create?: XOR<FeatureOnCategoryCreateWithoutFeatureInput, FeatureOnCategoryUncheckedCreateWithoutFeatureInput> | FeatureOnCategoryCreateWithoutFeatureInput[] | FeatureOnCategoryUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureOnCategoryCreateOrConnectWithoutFeatureInput | FeatureOnCategoryCreateOrConnectWithoutFeatureInput[]
    createMany?: FeatureOnCategoryCreateManyFeatureInputEnvelope
    connect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
  }

  export type FeatureOnCategoryUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<FeatureOnCategoryCreateWithoutFeatureInput, FeatureOnCategoryUncheckedCreateWithoutFeatureInput> | FeatureOnCategoryCreateWithoutFeatureInput[] | FeatureOnCategoryUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureOnCategoryCreateOrConnectWithoutFeatureInput | FeatureOnCategoryCreateOrConnectWithoutFeatureInput[]
    createMany?: FeatureOnCategoryCreateManyFeatureInputEnvelope
    connect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
  }

  export type EnumFeatureTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.FeatureTypeEnum
  }

  export type EnumFeatureStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.FeatureStatusEnum
  }

  export type FeatureGroupUpdateOneWithoutFeatureNestedInput = {
    create?: XOR<FeatureGroupCreateWithoutFeatureInput, FeatureGroupUncheckedCreateWithoutFeatureInput>
    connectOrCreate?: FeatureGroupCreateOrConnectWithoutFeatureInput
    upsert?: FeatureGroupUpsertWithoutFeatureInput
    disconnect?: FeatureGroupWhereInput | boolean
    delete?: FeatureGroupWhereInput | boolean
    connect?: FeatureGroupWhereUniqueInput
    update?: XOR<XOR<FeatureGroupUpdateToOneWithWhereWithoutFeatureInput, FeatureGroupUpdateWithoutFeatureInput>, FeatureGroupUncheckedUpdateWithoutFeatureInput>
  }

  export type UnitUpdateOneWithoutFeaturesNestedInput = {
    create?: XOR<UnitCreateWithoutFeaturesInput, UnitUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutFeaturesInput
    upsert?: UnitUpsertWithoutFeaturesInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutFeaturesInput, UnitUpdateWithoutFeaturesInput>, UnitUncheckedUpdateWithoutFeaturesInput>
  }

  export type FeatureOnCategoryUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<FeatureOnCategoryCreateWithoutFeatureInput, FeatureOnCategoryUncheckedCreateWithoutFeatureInput> | FeatureOnCategoryCreateWithoutFeatureInput[] | FeatureOnCategoryUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureOnCategoryCreateOrConnectWithoutFeatureInput | FeatureOnCategoryCreateOrConnectWithoutFeatureInput[]
    upsert?: FeatureOnCategoryUpsertWithWhereUniqueWithoutFeatureInput | FeatureOnCategoryUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: FeatureOnCategoryCreateManyFeatureInputEnvelope
    set?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    disconnect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    delete?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    connect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    update?: FeatureOnCategoryUpdateWithWhereUniqueWithoutFeatureInput | FeatureOnCategoryUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: FeatureOnCategoryUpdateManyWithWhereWithoutFeatureInput | FeatureOnCategoryUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: FeatureOnCategoryScalarWhereInput | FeatureOnCategoryScalarWhereInput[]
  }

  export type FeatureOnCategoryUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<FeatureOnCategoryCreateWithoutFeatureInput, FeatureOnCategoryUncheckedCreateWithoutFeatureInput> | FeatureOnCategoryCreateWithoutFeatureInput[] | FeatureOnCategoryUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureOnCategoryCreateOrConnectWithoutFeatureInput | FeatureOnCategoryCreateOrConnectWithoutFeatureInput[]
    upsert?: FeatureOnCategoryUpsertWithWhereUniqueWithoutFeatureInput | FeatureOnCategoryUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: FeatureOnCategoryCreateManyFeatureInputEnvelope
    set?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    disconnect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    delete?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    connect?: FeatureOnCategoryWhereUniqueInput | FeatureOnCategoryWhereUniqueInput[]
    update?: FeatureOnCategoryUpdateWithWhereUniqueWithoutFeatureInput | FeatureOnCategoryUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: FeatureOnCategoryUpdateManyWithWhereWithoutFeatureInput | FeatureOnCategoryUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: FeatureOnCategoryScalarWhereInput | FeatureOnCategoryScalarWhereInput[]
  }

  export type FeatureCreateNestedManyWithoutGroupInput = {
    create?: XOR<FeatureCreateWithoutGroupInput, FeatureUncheckedCreateWithoutGroupInput> | FeatureCreateWithoutGroupInput[] | FeatureUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutGroupInput | FeatureCreateOrConnectWithoutGroupInput[]
    createMany?: FeatureCreateManyGroupInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<FeatureCreateWithoutGroupInput, FeatureUncheckedCreateWithoutGroupInput> | FeatureCreateWithoutGroupInput[] | FeatureUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutGroupInput | FeatureCreateOrConnectWithoutGroupInput[]
    createMany?: FeatureCreateManyGroupInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type FeatureUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FeatureCreateWithoutGroupInput, FeatureUncheckedCreateWithoutGroupInput> | FeatureCreateWithoutGroupInput[] | FeatureUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutGroupInput | FeatureCreateOrConnectWithoutGroupInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutGroupInput | FeatureUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FeatureCreateManyGroupInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutGroupInput | FeatureUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutGroupInput | FeatureUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FeatureCreateWithoutGroupInput, FeatureUncheckedCreateWithoutGroupInput> | FeatureCreateWithoutGroupInput[] | FeatureUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutGroupInput | FeatureCreateOrConnectWithoutGroupInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutGroupInput | FeatureUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FeatureCreateManyGroupInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutGroupInput | FeatureUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutGroupInput | FeatureUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type FeatureCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutCategoriesInput
    connect?: FeatureWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFeaturesInput
    connect?: CategoryWhereUniqueInput
  }

  export type FeatureUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutCategoriesInput
    upsert?: FeatureUpsertWithoutCategoriesInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutCategoriesInput, FeatureUpdateWithoutCategoriesInput>, FeatureUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFeaturesInput
    upsert?: CategoryUpsertWithoutFeaturesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFeaturesInput, CategoryUpdateWithoutFeaturesInput>, CategoryUncheckedUpdateWithoutFeaturesInput>
  }

  export type AttributeOnProductCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributeOnProductCreateWithoutAttributeInput, AttributeOnProductUncheckedCreateWithoutAttributeInput> | AttributeOnProductCreateWithoutAttributeInput[] | AttributeOnProductUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutAttributeInput | AttributeOnProductCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributeOnProductCreateManyAttributeInputEnvelope
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
  }

  export type UnitCreateNestedOneWithoutAttributeInput = {
    create?: XOR<UnitCreateWithoutAttributeInput, UnitUncheckedCreateWithoutAttributeInput>
    connectOrCreate?: UnitCreateOrConnectWithoutAttributeInput
    connect?: UnitWhereUniqueInput
  }

  export type AttributeOnProductUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributeOnProductCreateWithoutAttributeInput, AttributeOnProductUncheckedCreateWithoutAttributeInput> | AttributeOnProductCreateWithoutAttributeInput[] | AttributeOnProductUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutAttributeInput | AttributeOnProductCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributeOnProductCreateManyAttributeInputEnvelope
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
  }

  export type AttributeOnProductUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributeOnProductCreateWithoutAttributeInput, AttributeOnProductUncheckedCreateWithoutAttributeInput> | AttributeOnProductCreateWithoutAttributeInput[] | AttributeOnProductUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutAttributeInput | AttributeOnProductCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributeOnProductUpsertWithWhereUniqueWithoutAttributeInput | AttributeOnProductUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributeOnProductCreateManyAttributeInputEnvelope
    set?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    disconnect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    delete?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    update?: AttributeOnProductUpdateWithWhereUniqueWithoutAttributeInput | AttributeOnProductUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributeOnProductUpdateManyWithWhereWithoutAttributeInput | AttributeOnProductUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributeOnProductScalarWhereInput | AttributeOnProductScalarWhereInput[]
  }

  export type UnitUpdateOneWithoutAttributeNestedInput = {
    create?: XOR<UnitCreateWithoutAttributeInput, UnitUncheckedCreateWithoutAttributeInput>
    connectOrCreate?: UnitCreateOrConnectWithoutAttributeInput
    upsert?: UnitUpsertWithoutAttributeInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutAttributeInput, UnitUpdateWithoutAttributeInput>, UnitUncheckedUpdateWithoutAttributeInput>
  }

  export type AttributeOnProductUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributeOnProductCreateWithoutAttributeInput, AttributeOnProductUncheckedCreateWithoutAttributeInput> | AttributeOnProductCreateWithoutAttributeInput[] | AttributeOnProductUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutAttributeInput | AttributeOnProductCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributeOnProductUpsertWithWhereUniqueWithoutAttributeInput | AttributeOnProductUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributeOnProductCreateManyAttributeInputEnvelope
    set?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    disconnect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    delete?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    update?: AttributeOnProductUpdateWithWhereUniqueWithoutAttributeInput | AttributeOnProductUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributeOnProductUpdateManyWithWhereWithoutAttributeInput | AttributeOnProductUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributeOnProductScalarWhereInput | AttributeOnProductScalarWhereInput[]
  }

  export type AttributeOnProductCreateNestedManyWithoutValueInput = {
    create?: XOR<AttributeOnProductCreateWithoutValueInput, AttributeOnProductUncheckedCreateWithoutValueInput> | AttributeOnProductCreateWithoutValueInput[] | AttributeOnProductUncheckedCreateWithoutValueInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutValueInput | AttributeOnProductCreateOrConnectWithoutValueInput[]
    createMany?: AttributeOnProductCreateManyValueInputEnvelope
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
  }

  export type AttributeOnProductUncheckedCreateNestedManyWithoutValueInput = {
    create?: XOR<AttributeOnProductCreateWithoutValueInput, AttributeOnProductUncheckedCreateWithoutValueInput> | AttributeOnProductCreateWithoutValueInput[] | AttributeOnProductUncheckedCreateWithoutValueInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutValueInput | AttributeOnProductCreateOrConnectWithoutValueInput[]
    createMany?: AttributeOnProductCreateManyValueInputEnvelope
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
  }

  export type AttributeOnProductUpdateManyWithoutValueNestedInput = {
    create?: XOR<AttributeOnProductCreateWithoutValueInput, AttributeOnProductUncheckedCreateWithoutValueInput> | AttributeOnProductCreateWithoutValueInput[] | AttributeOnProductUncheckedCreateWithoutValueInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutValueInput | AttributeOnProductCreateOrConnectWithoutValueInput[]
    upsert?: AttributeOnProductUpsertWithWhereUniqueWithoutValueInput | AttributeOnProductUpsertWithWhereUniqueWithoutValueInput[]
    createMany?: AttributeOnProductCreateManyValueInputEnvelope
    set?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    disconnect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    delete?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    update?: AttributeOnProductUpdateWithWhereUniqueWithoutValueInput | AttributeOnProductUpdateWithWhereUniqueWithoutValueInput[]
    updateMany?: AttributeOnProductUpdateManyWithWhereWithoutValueInput | AttributeOnProductUpdateManyWithWhereWithoutValueInput[]
    deleteMany?: AttributeOnProductScalarWhereInput | AttributeOnProductScalarWhereInput[]
  }

  export type AttributeOnProductUncheckedUpdateManyWithoutValueNestedInput = {
    create?: XOR<AttributeOnProductCreateWithoutValueInput, AttributeOnProductUncheckedCreateWithoutValueInput> | AttributeOnProductCreateWithoutValueInput[] | AttributeOnProductUncheckedCreateWithoutValueInput[]
    connectOrCreate?: AttributeOnProductCreateOrConnectWithoutValueInput | AttributeOnProductCreateOrConnectWithoutValueInput[]
    upsert?: AttributeOnProductUpsertWithWhereUniqueWithoutValueInput | AttributeOnProductUpsertWithWhereUniqueWithoutValueInput[]
    createMany?: AttributeOnProductCreateManyValueInputEnvelope
    set?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    disconnect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    delete?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    connect?: AttributeOnProductWhereUniqueInput | AttributeOnProductWhereUniqueInput[]
    update?: AttributeOnProductUpdateWithWhereUniqueWithoutValueInput | AttributeOnProductUpdateWithWhereUniqueWithoutValueInput[]
    updateMany?: AttributeOnProductUpdateManyWithWhereWithoutValueInput | AttributeOnProductUpdateManyWithWhereWithoutValueInput[]
    deleteMany?: AttributeOnProductScalarWhereInput | AttributeOnProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutAttributeOnProductInput = {
    create?: XOR<ProductCreateWithoutAttributeOnProductInput, ProductUncheckedCreateWithoutAttributeOnProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAttributeOnProductInput
    connect?: ProductWhereUniqueInput
  }

  export type AttributeCreateNestedOneWithoutAttributeOnProductInput = {
    create?: XOR<AttributeCreateWithoutAttributeOnProductInput, AttributeUncheckedCreateWithoutAttributeOnProductInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutAttributeOnProductInput
    connect?: AttributeWhereUniqueInput
  }

  export type AttributeValueCreateNestedOneWithoutAttributeOnProductInput = {
    create?: XOR<AttributeValueCreateWithoutAttributeOnProductInput, AttributeValueUncheckedCreateWithoutAttributeOnProductInput>
    connectOrCreate?: AttributeValueCreateOrConnectWithoutAttributeOnProductInput
    connect?: AttributeValueWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutAttributeOnProductNestedInput = {
    create?: XOR<ProductCreateWithoutAttributeOnProductInput, ProductUncheckedCreateWithoutAttributeOnProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAttributeOnProductInput
    upsert?: ProductUpsertWithoutAttributeOnProductInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAttributeOnProductInput, ProductUpdateWithoutAttributeOnProductInput>, ProductUncheckedUpdateWithoutAttributeOnProductInput>
  }

  export type AttributeUpdateOneRequiredWithoutAttributeOnProductNestedInput = {
    create?: XOR<AttributeCreateWithoutAttributeOnProductInput, AttributeUncheckedCreateWithoutAttributeOnProductInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutAttributeOnProductInput
    upsert?: AttributeUpsertWithoutAttributeOnProductInput
    connect?: AttributeWhereUniqueInput
    update?: XOR<XOR<AttributeUpdateToOneWithWhereWithoutAttributeOnProductInput, AttributeUpdateWithoutAttributeOnProductInput>, AttributeUncheckedUpdateWithoutAttributeOnProductInput>
  }

  export type AttributeValueUpdateOneWithoutAttributeOnProductNestedInput = {
    create?: XOR<AttributeValueCreateWithoutAttributeOnProductInput, AttributeValueUncheckedCreateWithoutAttributeOnProductInput>
    connectOrCreate?: AttributeValueCreateOrConnectWithoutAttributeOnProductInput
    upsert?: AttributeValueUpsertWithoutAttributeOnProductInput
    disconnect?: AttributeValueWhereInput | boolean
    delete?: AttributeValueWhereInput | boolean
    connect?: AttributeValueWhereUniqueInput
    update?: XOR<XOR<AttributeValueUpdateToOneWithWhereWithoutAttributeOnProductInput, AttributeValueUpdateWithoutAttributeOnProductInput>, AttributeValueUncheckedUpdateWithoutAttributeOnProductInput>
  }

  export type PriceCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput> | PriceCreateWithoutCurrencyInput[] | PriceUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput | PriceCreateOrConnectWithoutCurrencyInput[]
    createMany?: PriceCreateManyCurrencyInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput> | PriceCreateWithoutCurrencyInput[] | PriceUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput | PriceCreateOrConnectWithoutCurrencyInput[]
    createMany?: PriceCreateManyCurrencyInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput> | PriceCreateWithoutCurrencyInput[] | PriceUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput | PriceCreateOrConnectWithoutCurrencyInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutCurrencyInput | PriceUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: PriceCreateManyCurrencyInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutCurrencyInput | PriceUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutCurrencyInput | PriceUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput> | PriceCreateWithoutCurrencyInput[] | PriceUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput | PriceCreateOrConnectWithoutCurrencyInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutCurrencyInput | PriceUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: PriceCreateManyCurrencyInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutCurrencyInput | PriceUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutCurrencyInput | PriceUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandOnCategoryCreateNestedManyWithoutBrandInput = {
    create?: XOR<BrandOnCategoryCreateWithoutBrandInput, BrandOnCategoryUncheckedCreateWithoutBrandInput> | BrandOnCategoryCreateWithoutBrandInput[] | BrandOnCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BrandOnCategoryCreateOrConnectWithoutBrandInput | BrandOnCategoryCreateOrConnectWithoutBrandInput[]
    createMany?: BrandOnCategoryCreateManyBrandInputEnvelope
    connect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandOnCategoryUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<BrandOnCategoryCreateWithoutBrandInput, BrandOnCategoryUncheckedCreateWithoutBrandInput> | BrandOnCategoryCreateWithoutBrandInput[] | BrandOnCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BrandOnCategoryCreateOrConnectWithoutBrandInput | BrandOnCategoryCreateOrConnectWithoutBrandInput[]
    createMany?: BrandOnCategoryCreateManyBrandInputEnvelope
    connect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandOnCategoryUpdateManyWithoutBrandNestedInput = {
    create?: XOR<BrandOnCategoryCreateWithoutBrandInput, BrandOnCategoryUncheckedCreateWithoutBrandInput> | BrandOnCategoryCreateWithoutBrandInput[] | BrandOnCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BrandOnCategoryCreateOrConnectWithoutBrandInput | BrandOnCategoryCreateOrConnectWithoutBrandInput[]
    upsert?: BrandOnCategoryUpsertWithWhereUniqueWithoutBrandInput | BrandOnCategoryUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: BrandOnCategoryCreateManyBrandInputEnvelope
    set?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    disconnect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    delete?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    connect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    update?: BrandOnCategoryUpdateWithWhereUniqueWithoutBrandInput | BrandOnCategoryUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: BrandOnCategoryUpdateManyWithWhereWithoutBrandInput | BrandOnCategoryUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: BrandOnCategoryScalarWhereInput | BrandOnCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandOnCategoryUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<BrandOnCategoryCreateWithoutBrandInput, BrandOnCategoryUncheckedCreateWithoutBrandInput> | BrandOnCategoryCreateWithoutBrandInput[] | BrandOnCategoryUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BrandOnCategoryCreateOrConnectWithoutBrandInput | BrandOnCategoryCreateOrConnectWithoutBrandInput[]
    upsert?: BrandOnCategoryUpsertWithWhereUniqueWithoutBrandInput | BrandOnCategoryUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: BrandOnCategoryCreateManyBrandInputEnvelope
    set?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    disconnect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    delete?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    connect?: BrandOnCategoryWhereUniqueInput | BrandOnCategoryWhereUniqueInput[]
    update?: BrandOnCategoryUpdateWithWhereUniqueWithoutBrandInput | BrandOnCategoryUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: BrandOnCategoryUpdateManyWithWhereWithoutBrandInput | BrandOnCategoryUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: BrandOnCategoryScalarWhereInput | BrandOnCategoryScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPricePhaseEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PricePhaseEnum | EnumPricePhaseEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PricePhaseEnum[] | ListEnumPricePhaseEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricePhaseEnum[] | ListEnumPricePhaseEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPricePhaseEnumFilter<$PrismaModel> | $Enums.PricePhaseEnum
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPricePhaseEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricePhaseEnum | EnumPricePhaseEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PricePhaseEnum[] | ListEnumPricePhaseEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricePhaseEnum[] | ListEnumPricePhaseEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPricePhaseEnumWithAggregatesFilter<$PrismaModel> | $Enums.PricePhaseEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricePhaseEnumFilter<$PrismaModel>
    _max?: NestedEnumPricePhaseEnumFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumFeatureTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureTypeEnum | EnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureTypeEnum[] | ListEnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureTypeEnum[] | ListEnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTypeEnumFilter<$PrismaModel> | $Enums.FeatureTypeEnum
  }

  export type NestedEnumFeatureStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureStatusEnum | EnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureStatusEnum[] | ListEnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureStatusEnum[] | ListEnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureStatusEnumFilter<$PrismaModel> | $Enums.FeatureStatusEnum
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumFeatureTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureTypeEnum | EnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureTypeEnum[] | ListEnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureTypeEnum[] | ListEnumFeatureTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.FeatureTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumFeatureTypeEnumFilter<$PrismaModel>
  }

  export type NestedEnumFeatureStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureStatusEnum | EnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureStatusEnum[] | ListEnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureStatusEnum[] | ListEnumFeatureStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.FeatureStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumFeatureStatusEnumFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ShopCreateWithoutCompanyInput = {
    uuid?: string
    name: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUncheckedCreateWithoutCompanyInput = {
    uuid?: string
    name: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopCreateOrConnectWithoutCompanyInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutCompanyInput, ShopUncheckedCreateWithoutCompanyInput>
  }

  export type ShopCreateManyCompanyInputEnvelope = {
    data: ShopCreateManyCompanyInput | ShopCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ShopWhereUniqueInput
    update: XOR<ShopUpdateWithoutCompanyInput, ShopUncheckedUpdateWithoutCompanyInput>
    create: XOR<ShopCreateWithoutCompanyInput, ShopUncheckedCreateWithoutCompanyInput>
  }

  export type ShopUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ShopWhereUniqueInput
    data: XOR<ShopUpdateWithoutCompanyInput, ShopUncheckedUpdateWithoutCompanyInput>
  }

  export type ShopUpdateManyWithWhereWithoutCompanyInput = {
    where: ShopScalarWhereInput
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ShopScalarWhereInput = {
    AND?: ShopScalarWhereInput | ShopScalarWhereInput[]
    OR?: ShopScalarWhereInput[]
    NOT?: ShopScalarWhereInput | ShopScalarWhereInput[]
    uuid?: UuidFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    address?: StringNullableFilter<"Shop"> | string | null
    isActive?: BoolFilter<"Shop"> | boolean
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    companyUuid?: UuidFilter<"Shop"> | string
  }

  export type CompanyCreateWithoutShopsInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutShopsInput = {
    uuid?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutShopsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutShopsInput, CompanyUncheckedCreateWithoutShopsInput>
  }

  export type CompanyUpsertWithoutShopsInput = {
    update: XOR<CompanyUpdateWithoutShopsInput, CompanyUncheckedUpdateWithoutShopsInput>
    create: XOR<CompanyCreateWithoutShopsInput, CompanyUncheckedCreateWithoutShopsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutShopsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutShopsInput, CompanyUncheckedUpdateWithoutShopsInput>
  }

  export type CompanyUpdateWithoutShopsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutShopsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateWithoutProductInput = {
    code: string
    name: string
    description?: string | null
    brandOnCategory?: BrandOnCategoryCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutProductInput = {
    code: string
    name: string
    description?: string | null
    brandOnCategory?: BrandOnCategoryUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutProductInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
  }

  export type PriceCreateWithoutProductInput = {
    uuid?: string
    prevPrice?: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    currency: CurrencyCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateWithoutProductInput = {
    uuid?: string
    prevPrice?: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    currencyCode: string
  }

  export type PriceCreateOrConnectWithoutProductInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
  }

  export type PriceCreateManyProductInputEnvelope = {
    data: PriceCreateManyProductInput | PriceCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ImageOnProductCreateWithoutProductInput = {
    order: number
    image: ImageCreateNestedOneWithoutProductsInput
  }

  export type ImageOnProductUncheckedCreateWithoutProductInput = {
    imageUuid: string
    order: number
  }

  export type ImageOnProductCreateOrConnectWithoutProductInput = {
    where: ImageOnProductWhereUniqueInput
    create: XOR<ImageOnProductCreateWithoutProductInput, ImageOnProductUncheckedCreateWithoutProductInput>
  }

  export type ImageOnProductCreateManyProductInputEnvelope = {
    data: ImageOnProductCreateManyProductInput | ImageOnProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryOnProductCreateWithoutProductInput = {
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type CategoryOnProductUncheckedCreateWithoutProductInput = {
    categoryCode: string
  }

  export type CategoryOnProductCreateOrConnectWithoutProductInput = {
    where: CategoryOnProductWhereUniqueInput
    create: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput>
  }

  export type CategoryOnProductCreateManyProductInputEnvelope = {
    data: CategoryOnProductCreateManyProductInput | CategoryOnProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type AttributeOnProductCreateWithoutProductInput = {
    uuid?: string
    attribute: AttributeCreateNestedOneWithoutAttributeOnProductInput
    value?: AttributeValueCreateNestedOneWithoutAttributeOnProductInput
  }

  export type AttributeOnProductUncheckedCreateWithoutProductInput = {
    uuid?: string
    attributeCode: string
    valueUuid?: string | null
  }

  export type AttributeOnProductCreateOrConnectWithoutProductInput = {
    where: AttributeOnProductWhereUniqueInput
    create: XOR<AttributeOnProductCreateWithoutProductInput, AttributeOnProductUncheckedCreateWithoutProductInput>
  }

  export type AttributeOnProductCreateManyProductInputEnvelope = {
    data: AttributeOnProductCreateManyProductInput | AttributeOnProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutProductInput = {
    update: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
  }

  export type BrandUpdateWithoutProductInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brandOnCategory?: BrandOnCategoryUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutProductInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brandOnCategory?: BrandOnCategoryUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type PriceUpsertWithWhereUniqueWithoutProductInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutProductInput, PriceUncheckedUpdateWithoutProductInput>
    create: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutProductInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutProductInput, PriceUncheckedUpdateWithoutProductInput>
  }

  export type PriceUpdateManyWithWhereWithoutProductInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutProductInput>
  }

  export type PriceScalarWhereInput = {
    AND?: PriceScalarWhereInput | PriceScalarWhereInput[]
    OR?: PriceScalarWhereInput[]
    NOT?: PriceScalarWhereInput | PriceScalarWhereInput[]
    uuid?: UuidFilter<"Price"> | string
    prevPrice?: FloatNullableFilter<"Price"> | number | null
    price?: FloatFilter<"Price"> | number
    description?: StringFilter<"Price"> | string
    phase?: EnumPricePhaseEnumFilter<"Price"> | $Enums.PricePhaseEnum
    createdAt?: DateTimeFilter<"Price"> | Date | string
    updatedAt?: DateTimeFilter<"Price"> | Date | string
    productUuid?: UuidFilter<"Price"> | string
    currencyCode?: StringFilter<"Price"> | string
  }

  export type ImageOnProductUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageOnProductWhereUniqueInput
    update: XOR<ImageOnProductUpdateWithoutProductInput, ImageOnProductUncheckedUpdateWithoutProductInput>
    create: XOR<ImageOnProductCreateWithoutProductInput, ImageOnProductUncheckedCreateWithoutProductInput>
  }

  export type ImageOnProductUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageOnProductWhereUniqueInput
    data: XOR<ImageOnProductUpdateWithoutProductInput, ImageOnProductUncheckedUpdateWithoutProductInput>
  }

  export type ImageOnProductUpdateManyWithWhereWithoutProductInput = {
    where: ImageOnProductScalarWhereInput
    data: XOR<ImageOnProductUpdateManyMutationInput, ImageOnProductUncheckedUpdateManyWithoutProductInput>
  }

  export type ImageOnProductScalarWhereInput = {
    AND?: ImageOnProductScalarWhereInput | ImageOnProductScalarWhereInput[]
    OR?: ImageOnProductScalarWhereInput[]
    NOT?: ImageOnProductScalarWhereInput | ImageOnProductScalarWhereInput[]
    productUuid?: UuidFilter<"ImageOnProduct"> | string
    imageUuid?: UuidFilter<"ImageOnProduct"> | string
    order?: IntFilter<"ImageOnProduct"> | number
  }

  export type CategoryOnProductUpsertWithWhereUniqueWithoutProductInput = {
    where: CategoryOnProductWhereUniqueInput
    update: XOR<CategoryOnProductUpdateWithoutProductInput, CategoryOnProductUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput>
  }

  export type CategoryOnProductUpdateWithWhereUniqueWithoutProductInput = {
    where: CategoryOnProductWhereUniqueInput
    data: XOR<CategoryOnProductUpdateWithoutProductInput, CategoryOnProductUncheckedUpdateWithoutProductInput>
  }

  export type CategoryOnProductUpdateManyWithWhereWithoutProductInput = {
    where: CategoryOnProductScalarWhereInput
    data: XOR<CategoryOnProductUpdateManyMutationInput, CategoryOnProductUncheckedUpdateManyWithoutProductInput>
  }

  export type CategoryOnProductScalarWhereInput = {
    AND?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
    OR?: CategoryOnProductScalarWhereInput[]
    NOT?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
    productUuid?: UuidFilter<"CategoryOnProduct"> | string
    categoryCode?: StringFilter<"CategoryOnProduct"> | string
  }

  export type AttributeOnProductUpsertWithWhereUniqueWithoutProductInput = {
    where: AttributeOnProductWhereUniqueInput
    update: XOR<AttributeOnProductUpdateWithoutProductInput, AttributeOnProductUncheckedUpdateWithoutProductInput>
    create: XOR<AttributeOnProductCreateWithoutProductInput, AttributeOnProductUncheckedCreateWithoutProductInput>
  }

  export type AttributeOnProductUpdateWithWhereUniqueWithoutProductInput = {
    where: AttributeOnProductWhereUniqueInput
    data: XOR<AttributeOnProductUpdateWithoutProductInput, AttributeOnProductUncheckedUpdateWithoutProductInput>
  }

  export type AttributeOnProductUpdateManyWithWhereWithoutProductInput = {
    where: AttributeOnProductScalarWhereInput
    data: XOR<AttributeOnProductUpdateManyMutationInput, AttributeOnProductUncheckedUpdateManyWithoutProductInput>
  }

  export type AttributeOnProductScalarWhereInput = {
    AND?: AttributeOnProductScalarWhereInput | AttributeOnProductScalarWhereInput[]
    OR?: AttributeOnProductScalarWhereInput[]
    NOT?: AttributeOnProductScalarWhereInput | AttributeOnProductScalarWhereInput[]
    uuid?: UuidFilter<"AttributeOnProduct"> | string
    productUuid?: UuidFilter<"AttributeOnProduct"> | string
    attributeCode?: StringFilter<"AttributeOnProduct"> | string
    valueUuid?: UuidNullableFilter<"AttributeOnProduct"> | string | null
  }

  export type ProductCreateWithoutPricesInput = {
    uuid?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductInput
    images?: ImageOnProductCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPricesInput = {
    uuid?: string
    title: string
    description: string
    brandCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageOnProductUncheckedCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPricesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
  }

  export type CurrencyCreateWithoutPriceInput = {
    code: string
    value: string
    description: string
  }

  export type CurrencyUncheckedCreateWithoutPriceInput = {
    code: string
    value: string
    description: string
  }

  export type CurrencyCreateOrConnectWithoutPriceInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutPriceInput, CurrencyUncheckedCreateWithoutPriceInput>
  }

  export type ProductUpsertWithoutPricesInput = {
    update: XOR<ProductUpdateWithoutPricesInput, ProductUncheckedUpdateWithoutPricesInput>
    create: XOR<ProductCreateWithoutPricesInput, ProductUncheckedCreateWithoutPricesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPricesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPricesInput, ProductUncheckedUpdateWithoutPricesInput>
  }

  export type ProductUpdateWithoutPricesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductNestedInput
    images?: ImageOnProductUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPricesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageOnProductUncheckedUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CurrencyUpsertWithoutPriceInput = {
    update: XOR<CurrencyUpdateWithoutPriceInput, CurrencyUncheckedUpdateWithoutPriceInput>
    create: XOR<CurrencyCreateWithoutPriceInput, CurrencyUncheckedCreateWithoutPriceInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutPriceInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutPriceInput, CurrencyUncheckedUpdateWithoutPriceInput>
  }

  export type CurrencyUpdateWithoutPriceInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateWithoutPriceInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateWithoutParentInput = {
    code: string
    title: string
    description: string
    children?: CategoryCreateNestedManyWithoutParentInput
    features?: FeatureOnCategoryCreateNestedManyWithoutCategoryInput
    products?: CategoryOnProductCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    code: string
    title: string
    description: string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    features?: FeatureOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
    products?: CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutChildrenInput = {
    code: string
    title: string
    description: string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    features?: FeatureOnCategoryCreateNestedManyWithoutCategoryInput
    products?: CategoryOnProductCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    code: string
    title: string
    description: string
    parentCode?: string | null
    features?: FeatureOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
    products?: CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type FeatureOnCategoryCreateWithoutCategoryInput = {
    feature: FeatureCreateNestedOneWithoutCategoriesInput
  }

  export type FeatureOnCategoryUncheckedCreateWithoutCategoryInput = {
    featureUuid: string
  }

  export type FeatureOnCategoryCreateOrConnectWithoutCategoryInput = {
    where: FeatureOnCategoryWhereUniqueInput
    create: XOR<FeatureOnCategoryCreateWithoutCategoryInput, FeatureOnCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type FeatureOnCategoryCreateManyCategoryInputEnvelope = {
    data: FeatureOnCategoryCreateManyCategoryInput | FeatureOnCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryOnProductCreateWithoutCategoryInput = {
    product: ProductCreateNestedOneWithoutCategoryOnProductInput
  }

  export type CategoryOnProductUncheckedCreateWithoutCategoryInput = {
    productUuid: string
  }

  export type CategoryOnProductCreateOrConnectWithoutCategoryInput = {
    where: CategoryOnProductWhereUniqueInput
    create: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryOnProductCreateManyCategoryInputEnvelope = {
    data: CategoryOnProductCreateManyCategoryInput | CategoryOnProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BrandOnCategoryCreateWithoutCategoryInput = {
    brand: BrandCreateNestedOneWithoutBrandOnCategoryInput
  }

  export type BrandOnCategoryUncheckedCreateWithoutCategoryInput = {
    brandCode: string
  }

  export type BrandOnCategoryCreateOrConnectWithoutCategoryInput = {
    where: BrandOnCategoryWhereUniqueInput
    create: XOR<BrandOnCategoryCreateWithoutCategoryInput, BrandOnCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BrandOnCategoryCreateManyCategoryInputEnvelope = {
    data: BrandOnCategoryCreateManyCategoryInput | BrandOnCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    code?: StringFilter<"Category"> | string
    title?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    parentCode?: StringNullableFilter<"Category"> | string | null
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    features?: FeatureOnCategoryUpdateManyWithoutCategoryNestedInput
    products?: CategoryOnProductUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parentCode?: NullableStringFieldUpdateOperationsInput | string | null
    features?: FeatureOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    products?: CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FeatureOnCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FeatureOnCategoryWhereUniqueInput
    update: XOR<FeatureOnCategoryUpdateWithoutCategoryInput, FeatureOnCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<FeatureOnCategoryCreateWithoutCategoryInput, FeatureOnCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type FeatureOnCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FeatureOnCategoryWhereUniqueInput
    data: XOR<FeatureOnCategoryUpdateWithoutCategoryInput, FeatureOnCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type FeatureOnCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: FeatureOnCategoryScalarWhereInput
    data: XOR<FeatureOnCategoryUpdateManyMutationInput, FeatureOnCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FeatureOnCategoryScalarWhereInput = {
    AND?: FeatureOnCategoryScalarWhereInput | FeatureOnCategoryScalarWhereInput[]
    OR?: FeatureOnCategoryScalarWhereInput[]
    NOT?: FeatureOnCategoryScalarWhereInput | FeatureOnCategoryScalarWhereInput[]
    featureUuid?: UuidFilter<"FeatureOnCategory"> | string
    categoryCode?: StringFilter<"FeatureOnCategory"> | string
  }

  export type CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryOnProductWhereUniqueInput
    update: XOR<CategoryOnProductUpdateWithoutCategoryInput, CategoryOnProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryOnProductWhereUniqueInput
    data: XOR<CategoryOnProductUpdateWithoutCategoryInput, CategoryOnProductUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryOnProductUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryOnProductScalarWhereInput
    data: XOR<CategoryOnProductUpdateManyMutationInput, CategoryOnProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BrandOnCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BrandOnCategoryWhereUniqueInput
    update: XOR<BrandOnCategoryUpdateWithoutCategoryInput, BrandOnCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<BrandOnCategoryCreateWithoutCategoryInput, BrandOnCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type BrandOnCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BrandOnCategoryWhereUniqueInput
    data: XOR<BrandOnCategoryUpdateWithoutCategoryInput, BrandOnCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type BrandOnCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: BrandOnCategoryScalarWhereInput
    data: XOR<BrandOnCategoryUpdateManyMutationInput, BrandOnCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BrandOnCategoryScalarWhereInput = {
    AND?: BrandOnCategoryScalarWhereInput | BrandOnCategoryScalarWhereInput[]
    OR?: BrandOnCategoryScalarWhereInput[]
    NOT?: BrandOnCategoryScalarWhereInput | BrandOnCategoryScalarWhereInput[]
    brandCode?: StringFilter<"BrandOnCategory"> | string
    categoryCode?: StringFilter<"BrandOnCategory"> | string
  }

  export type ProductCreateWithoutCategoryOnProductInput = {
    uuid?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductInput
    prices?: PriceCreateNestedManyWithoutProductInput
    images?: ImageOnProductCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryOnProductInput = {
    uuid?: string
    title: string
    description: string
    brandCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: PriceUncheckedCreateNestedManyWithoutProductInput
    images?: ImageOnProductUncheckedCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryOnProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryOnProductInput, ProductUncheckedCreateWithoutCategoryOnProductInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    code: string
    title: string
    description: string
    children?: CategoryCreateNestedManyWithoutParentInput
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    features?: FeatureOnCategoryCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    code: string
    title: string
    description: string
    parentCode?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    features?: FeatureOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutCategoryOnProductInput = {
    update: XOR<ProductUpdateWithoutCategoryOnProductInput, ProductUncheckedUpdateWithoutCategoryOnProductInput>
    create: XOR<ProductCreateWithoutCategoryOnProductInput, ProductUncheckedCreateWithoutCategoryOnProductInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCategoryOnProductInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCategoryOnProductInput, ProductUncheckedUpdateWithoutCategoryOnProductInput>
  }

  export type ProductUpdateWithoutCategoryOnProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductNestedInput
    prices?: PriceUpdateManyWithoutProductNestedInput
    images?: ImageOnProductUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryOnProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: PriceUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageOnProductUncheckedUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    features?: FeatureOnCategoryUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parentCode?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    features?: FeatureOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BrandCreateWithoutBrandOnCategoryInput = {
    code: string
    name: string
    description?: string | null
    product?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutBrandOnCategoryInput = {
    code: string
    name: string
    description?: string | null
    product?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutBrandOnCategoryInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutBrandOnCategoryInput, BrandUncheckedCreateWithoutBrandOnCategoryInput>
  }

  export type CategoryCreateWithoutBrandOnCategoryInput = {
    code: string
    title: string
    description: string
    children?: CategoryCreateNestedManyWithoutParentInput
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    features?: FeatureOnCategoryCreateNestedManyWithoutCategoryInput
    products?: CategoryOnProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBrandOnCategoryInput = {
    code: string
    title: string
    description: string
    parentCode?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    features?: FeatureOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
    products?: CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBrandOnCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBrandOnCategoryInput, CategoryUncheckedCreateWithoutBrandOnCategoryInput>
  }

  export type BrandUpsertWithoutBrandOnCategoryInput = {
    update: XOR<BrandUpdateWithoutBrandOnCategoryInput, BrandUncheckedUpdateWithoutBrandOnCategoryInput>
    create: XOR<BrandCreateWithoutBrandOnCategoryInput, BrandUncheckedCreateWithoutBrandOnCategoryInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutBrandOnCategoryInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutBrandOnCategoryInput, BrandUncheckedUpdateWithoutBrandOnCategoryInput>
  }

  export type BrandUpdateWithoutBrandOnCategoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutBrandOnCategoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type CategoryUpsertWithoutBrandOnCategoryInput = {
    update: XOR<CategoryUpdateWithoutBrandOnCategoryInput, CategoryUncheckedUpdateWithoutBrandOnCategoryInput>
    create: XOR<CategoryCreateWithoutBrandOnCategoryInput, CategoryUncheckedCreateWithoutBrandOnCategoryInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBrandOnCategoryInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBrandOnCategoryInput, CategoryUncheckedUpdateWithoutBrandOnCategoryInput>
  }

  export type CategoryUpdateWithoutBrandOnCategoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    features?: FeatureOnCategoryUpdateManyWithoutCategoryNestedInput
    products?: CategoryOnProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBrandOnCategoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parentCode?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    features?: FeatureOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    products?: CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type FeatureCreateWithoutUnitInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: FeatureGroupCreateNestedOneWithoutFeatureInput
    categories?: FeatureOnCategoryCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutUnitInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    groupUuid?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: FeatureOnCategoryUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutUnitInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutUnitInput, FeatureUncheckedCreateWithoutUnitInput>
  }

  export type FeatureCreateManyUnitInputEnvelope = {
    data: FeatureCreateManyUnitInput | FeatureCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type AttributeCreateWithoutUnitInput = {
    code: string
    name: string
    description?: string | null
    attributeOnProduct?: AttributeOnProductCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutUnitInput = {
    code: string
    name: string
    description?: string | null
    attributeOnProduct?: AttributeOnProductUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutUnitInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutUnitInput, AttributeUncheckedCreateWithoutUnitInput>
  }

  export type AttributeCreateManyUnitInputEnvelope = {
    data: AttributeCreateManyUnitInput | AttributeCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type FeatureUpsertWithWhereUniqueWithoutUnitInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutUnitInput, FeatureUncheckedUpdateWithoutUnitInput>
    create: XOR<FeatureCreateWithoutUnitInput, FeatureUncheckedCreateWithoutUnitInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutUnitInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutUnitInput, FeatureUncheckedUpdateWithoutUnitInput>
  }

  export type FeatureUpdateManyWithWhereWithoutUnitInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutUnitInput>
  }

  export type FeatureScalarWhereInput = {
    AND?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    OR?: FeatureScalarWhereInput[]
    NOT?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    uuid?: UuidFilter<"Feature"> | string
    title?: StringFilter<"Feature"> | string
    code?: StringFilter<"Feature"> | string
    description?: StringFilter<"Feature"> | string
    type?: EnumFeatureTypeEnumFilter<"Feature"> | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFilter<"Feature"> | boolean
    isShowInProductList?: BoolFilter<"Feature"> | boolean
    isShowInProductHeader?: BoolFilter<"Feature"> | boolean
    status?: EnumFeatureStatusEnumFilter<"Feature"> | $Enums.FeatureStatusEnum
    groupUuid?: UuidNullableFilter<"Feature"> | string | null
    unitCode?: StringNullableFilter<"Feature"> | string | null
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
  }

  export type AttributeUpsertWithWhereUniqueWithoutUnitInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutUnitInput, AttributeUncheckedUpdateWithoutUnitInput>
    create: XOR<AttributeCreateWithoutUnitInput, AttributeUncheckedCreateWithoutUnitInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutUnitInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutUnitInput, AttributeUncheckedUpdateWithoutUnitInput>
  }

  export type AttributeUpdateManyWithWhereWithoutUnitInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutUnitInput>
  }

  export type AttributeScalarWhereInput = {
    AND?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    OR?: AttributeScalarWhereInput[]
    NOT?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    code?: StringFilter<"Attribute"> | string
    name?: StringFilter<"Attribute"> | string
    description?: StringNullableFilter<"Attribute"> | string | null
    unitCode?: StringNullableFilter<"Attribute"> | string | null
  }

  export type ImageOnProductCreateWithoutImageInput = {
    order: number
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ImageOnProductUncheckedCreateWithoutImageInput = {
    productUuid: string
    order: number
  }

  export type ImageOnProductCreateOrConnectWithoutImageInput = {
    where: ImageOnProductWhereUniqueInput
    create: XOR<ImageOnProductCreateWithoutImageInput, ImageOnProductUncheckedCreateWithoutImageInput>
  }

  export type ImageOnProductCreateManyImageInputEnvelope = {
    data: ImageOnProductCreateManyImageInput | ImageOnProductCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type ImageOnProductUpsertWithWhereUniqueWithoutImageInput = {
    where: ImageOnProductWhereUniqueInput
    update: XOR<ImageOnProductUpdateWithoutImageInput, ImageOnProductUncheckedUpdateWithoutImageInput>
    create: XOR<ImageOnProductCreateWithoutImageInput, ImageOnProductUncheckedCreateWithoutImageInput>
  }

  export type ImageOnProductUpdateWithWhereUniqueWithoutImageInput = {
    where: ImageOnProductWhereUniqueInput
    data: XOR<ImageOnProductUpdateWithoutImageInput, ImageOnProductUncheckedUpdateWithoutImageInput>
  }

  export type ImageOnProductUpdateManyWithWhereWithoutImageInput = {
    where: ImageOnProductScalarWhereInput
    data: XOR<ImageOnProductUpdateManyMutationInput, ImageOnProductUncheckedUpdateManyWithoutImageInput>
  }

  export type ProductCreateWithoutImagesInput = {
    uuid?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductInput
    prices?: PriceCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    uuid?: string
    title: string
    description: string
    brandCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: PriceUncheckedCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ImageCreateWithoutProductsInput = {
    uuid?: string
    title: string
  }

  export type ImageUncheckedCreateWithoutProductsInput = {
    uuid?: string
    title: string
  }

  export type ImageCreateOrConnectWithoutProductsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductsInput, ImageUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductNestedInput
    prices?: PriceUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: PriceUncheckedUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ImageUpsertWithoutProductsInput = {
    update: XOR<ImageUpdateWithoutProductsInput, ImageUncheckedUpdateWithoutProductsInput>
    create: XOR<ImageCreateWithoutProductsInput, ImageUncheckedCreateWithoutProductsInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutProductsInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutProductsInput, ImageUncheckedUpdateWithoutProductsInput>
  }

  export type ImageUpdateWithoutProductsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateWithoutProductsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureGroupCreateWithoutFeatureInput = {
    uuid?: string
    title: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureGroupUncheckedCreateWithoutFeatureInput = {
    uuid?: string
    title: string
    description: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureGroupCreateOrConnectWithoutFeatureInput = {
    where: FeatureGroupWhereUniqueInput
    create: XOR<FeatureGroupCreateWithoutFeatureInput, FeatureGroupUncheckedCreateWithoutFeatureInput>
  }

  export type UnitCreateWithoutFeaturesInput = {
    code: string
    value: string
    description?: string | null
    attribute?: AttributeCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutFeaturesInput = {
    code: string
    value: string
    description?: string | null
    attribute?: AttributeUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutFeaturesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutFeaturesInput, UnitUncheckedCreateWithoutFeaturesInput>
  }

  export type FeatureOnCategoryCreateWithoutFeatureInput = {
    category: CategoryCreateNestedOneWithoutFeaturesInput
  }

  export type FeatureOnCategoryUncheckedCreateWithoutFeatureInput = {
    categoryCode: string
  }

  export type FeatureOnCategoryCreateOrConnectWithoutFeatureInput = {
    where: FeatureOnCategoryWhereUniqueInput
    create: XOR<FeatureOnCategoryCreateWithoutFeatureInput, FeatureOnCategoryUncheckedCreateWithoutFeatureInput>
  }

  export type FeatureOnCategoryCreateManyFeatureInputEnvelope = {
    data: FeatureOnCategoryCreateManyFeatureInput | FeatureOnCategoryCreateManyFeatureInput[]
    skipDuplicates?: boolean
  }

  export type FeatureGroupUpsertWithoutFeatureInput = {
    update: XOR<FeatureGroupUpdateWithoutFeatureInput, FeatureGroupUncheckedUpdateWithoutFeatureInput>
    create: XOR<FeatureGroupCreateWithoutFeatureInput, FeatureGroupUncheckedCreateWithoutFeatureInput>
    where?: FeatureGroupWhereInput
  }

  export type FeatureGroupUpdateToOneWithWhereWithoutFeatureInput = {
    where?: FeatureGroupWhereInput
    data: XOR<FeatureGroupUpdateWithoutFeatureInput, FeatureGroupUncheckedUpdateWithoutFeatureInput>
  }

  export type FeatureGroupUpdateWithoutFeatureInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureGroupUncheckedUpdateWithoutFeatureInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUpsertWithoutFeaturesInput = {
    update: XOR<UnitUpdateWithoutFeaturesInput, UnitUncheckedUpdateWithoutFeaturesInput>
    create: XOR<UnitCreateWithoutFeaturesInput, UnitUncheckedCreateWithoutFeaturesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutFeaturesInput, UnitUncheckedUpdateWithoutFeaturesInput>
  }

  export type UnitUpdateWithoutFeaturesInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attribute?: AttributeUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutFeaturesInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attribute?: AttributeUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type FeatureOnCategoryUpsertWithWhereUniqueWithoutFeatureInput = {
    where: FeatureOnCategoryWhereUniqueInput
    update: XOR<FeatureOnCategoryUpdateWithoutFeatureInput, FeatureOnCategoryUncheckedUpdateWithoutFeatureInput>
    create: XOR<FeatureOnCategoryCreateWithoutFeatureInput, FeatureOnCategoryUncheckedCreateWithoutFeatureInput>
  }

  export type FeatureOnCategoryUpdateWithWhereUniqueWithoutFeatureInput = {
    where: FeatureOnCategoryWhereUniqueInput
    data: XOR<FeatureOnCategoryUpdateWithoutFeatureInput, FeatureOnCategoryUncheckedUpdateWithoutFeatureInput>
  }

  export type FeatureOnCategoryUpdateManyWithWhereWithoutFeatureInput = {
    where: FeatureOnCategoryScalarWhereInput
    data: XOR<FeatureOnCategoryUpdateManyMutationInput, FeatureOnCategoryUncheckedUpdateManyWithoutFeatureInput>
  }

  export type FeatureCreateWithoutGroupInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutFeaturesInput
    categories?: FeatureOnCategoryCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutGroupInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    unitCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: FeatureOnCategoryUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutGroupInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutGroupInput, FeatureUncheckedCreateWithoutGroupInput>
  }

  export type FeatureCreateManyGroupInputEnvelope = {
    data: FeatureCreateManyGroupInput | FeatureCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type FeatureUpsertWithWhereUniqueWithoutGroupInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutGroupInput, FeatureUncheckedUpdateWithoutGroupInput>
    create: XOR<FeatureCreateWithoutGroupInput, FeatureUncheckedCreateWithoutGroupInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutGroupInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutGroupInput, FeatureUncheckedUpdateWithoutGroupInput>
  }

  export type FeatureUpdateManyWithWhereWithoutGroupInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutGroupInput>
  }

  export type FeatureCreateWithoutCategoriesInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: FeatureGroupCreateNestedOneWithoutFeatureInput
    unit?: UnitCreateNestedOneWithoutFeaturesInput
  }

  export type FeatureUncheckedCreateWithoutCategoriesInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    groupUuid?: string | null
    unitCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureCreateOrConnectWithoutCategoriesInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutFeaturesInput = {
    code: string
    title: string
    description: string
    children?: CategoryCreateNestedManyWithoutParentInput
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    products?: CategoryOnProductCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutFeaturesInput = {
    code: string
    title: string
    description: string
    parentCode?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput
    brandOnCategory?: BrandOnCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutFeaturesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput>
  }

  export type FeatureUpsertWithoutCategoriesInput = {
    update: XOR<FeatureUpdateWithoutCategoriesInput, FeatureUncheckedUpdateWithoutCategoriesInput>
    create: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutCategoriesInput, FeatureUncheckedUpdateWithoutCategoriesInput>
  }

  export type FeatureUpdateWithoutCategoriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: FeatureGroupUpdateOneWithoutFeatureNestedInput
    unit?: UnitUpdateOneWithoutFeaturesNestedInput
  }

  export type FeatureUncheckedUpdateWithoutCategoriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    groupUuid?: NullableStringFieldUpdateOperationsInput | string | null
    unitCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutFeaturesInput = {
    update: XOR<CategoryUpdateWithoutFeaturesInput, CategoryUncheckedUpdateWithoutFeaturesInput>
    create: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFeaturesInput, CategoryUncheckedUpdateWithoutFeaturesInput>
  }

  export type CategoryUpdateWithoutFeaturesInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    products?: CategoryOnProductUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFeaturesInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parentCode?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type AttributeOnProductCreateWithoutAttributeInput = {
    uuid?: string
    product: ProductCreateNestedOneWithoutAttributeOnProductInput
    value?: AttributeValueCreateNestedOneWithoutAttributeOnProductInput
  }

  export type AttributeOnProductUncheckedCreateWithoutAttributeInput = {
    uuid?: string
    productUuid: string
    valueUuid?: string | null
  }

  export type AttributeOnProductCreateOrConnectWithoutAttributeInput = {
    where: AttributeOnProductWhereUniqueInput
    create: XOR<AttributeOnProductCreateWithoutAttributeInput, AttributeOnProductUncheckedCreateWithoutAttributeInput>
  }

  export type AttributeOnProductCreateManyAttributeInputEnvelope = {
    data: AttributeOnProductCreateManyAttributeInput | AttributeOnProductCreateManyAttributeInput[]
    skipDuplicates?: boolean
  }

  export type UnitCreateWithoutAttributeInput = {
    code: string
    value: string
    description?: string | null
    features?: FeatureCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutAttributeInput = {
    code: string
    value: string
    description?: string | null
    features?: FeatureUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutAttributeInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutAttributeInput, UnitUncheckedCreateWithoutAttributeInput>
  }

  export type AttributeOnProductUpsertWithWhereUniqueWithoutAttributeInput = {
    where: AttributeOnProductWhereUniqueInput
    update: XOR<AttributeOnProductUpdateWithoutAttributeInput, AttributeOnProductUncheckedUpdateWithoutAttributeInput>
    create: XOR<AttributeOnProductCreateWithoutAttributeInput, AttributeOnProductUncheckedCreateWithoutAttributeInput>
  }

  export type AttributeOnProductUpdateWithWhereUniqueWithoutAttributeInput = {
    where: AttributeOnProductWhereUniqueInput
    data: XOR<AttributeOnProductUpdateWithoutAttributeInput, AttributeOnProductUncheckedUpdateWithoutAttributeInput>
  }

  export type AttributeOnProductUpdateManyWithWhereWithoutAttributeInput = {
    where: AttributeOnProductScalarWhereInput
    data: XOR<AttributeOnProductUpdateManyMutationInput, AttributeOnProductUncheckedUpdateManyWithoutAttributeInput>
  }

  export type UnitUpsertWithoutAttributeInput = {
    update: XOR<UnitUpdateWithoutAttributeInput, UnitUncheckedUpdateWithoutAttributeInput>
    create: XOR<UnitCreateWithoutAttributeInput, UnitUncheckedCreateWithoutAttributeInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutAttributeInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutAttributeInput, UnitUncheckedUpdateWithoutAttributeInput>
  }

  export type UnitUpdateWithoutAttributeInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: FeatureUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutAttributeInput = {
    code?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: FeatureUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type AttributeOnProductCreateWithoutValueInput = {
    uuid?: string
    product: ProductCreateNestedOneWithoutAttributeOnProductInput
    attribute: AttributeCreateNestedOneWithoutAttributeOnProductInput
  }

  export type AttributeOnProductUncheckedCreateWithoutValueInput = {
    uuid?: string
    productUuid: string
    attributeCode: string
  }

  export type AttributeOnProductCreateOrConnectWithoutValueInput = {
    where: AttributeOnProductWhereUniqueInput
    create: XOR<AttributeOnProductCreateWithoutValueInput, AttributeOnProductUncheckedCreateWithoutValueInput>
  }

  export type AttributeOnProductCreateManyValueInputEnvelope = {
    data: AttributeOnProductCreateManyValueInput | AttributeOnProductCreateManyValueInput[]
    skipDuplicates?: boolean
  }

  export type AttributeOnProductUpsertWithWhereUniqueWithoutValueInput = {
    where: AttributeOnProductWhereUniqueInput
    update: XOR<AttributeOnProductUpdateWithoutValueInput, AttributeOnProductUncheckedUpdateWithoutValueInput>
    create: XOR<AttributeOnProductCreateWithoutValueInput, AttributeOnProductUncheckedCreateWithoutValueInput>
  }

  export type AttributeOnProductUpdateWithWhereUniqueWithoutValueInput = {
    where: AttributeOnProductWhereUniqueInput
    data: XOR<AttributeOnProductUpdateWithoutValueInput, AttributeOnProductUncheckedUpdateWithoutValueInput>
  }

  export type AttributeOnProductUpdateManyWithWhereWithoutValueInput = {
    where: AttributeOnProductScalarWhereInput
    data: XOR<AttributeOnProductUpdateManyMutationInput, AttributeOnProductUncheckedUpdateManyWithoutValueInput>
  }

  export type ProductCreateWithoutAttributeOnProductInput = {
    uuid?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductInput
    prices?: PriceCreateNestedManyWithoutProductInput
    images?: ImageOnProductCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAttributeOnProductInput = {
    uuid?: string
    title: string
    description: string
    brandCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: PriceUncheckedCreateNestedManyWithoutProductInput
    images?: ImageOnProductUncheckedCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAttributeOnProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAttributeOnProductInput, ProductUncheckedCreateWithoutAttributeOnProductInput>
  }

  export type AttributeCreateWithoutAttributeOnProductInput = {
    code: string
    name: string
    description?: string | null
    unit?: UnitCreateNestedOneWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutAttributeOnProductInput = {
    code: string
    name: string
    description?: string | null
    unitCode?: string | null
  }

  export type AttributeCreateOrConnectWithoutAttributeOnProductInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutAttributeOnProductInput, AttributeUncheckedCreateWithoutAttributeOnProductInput>
  }

  export type AttributeValueCreateWithoutAttributeOnProductInput = {
    uuid?: string
    value: string
  }

  export type AttributeValueUncheckedCreateWithoutAttributeOnProductInput = {
    uuid?: string
    value: string
  }

  export type AttributeValueCreateOrConnectWithoutAttributeOnProductInput = {
    where: AttributeValueWhereUniqueInput
    create: XOR<AttributeValueCreateWithoutAttributeOnProductInput, AttributeValueUncheckedCreateWithoutAttributeOnProductInput>
  }

  export type ProductUpsertWithoutAttributeOnProductInput = {
    update: XOR<ProductUpdateWithoutAttributeOnProductInput, ProductUncheckedUpdateWithoutAttributeOnProductInput>
    create: XOR<ProductCreateWithoutAttributeOnProductInput, ProductUncheckedCreateWithoutAttributeOnProductInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAttributeOnProductInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAttributeOnProductInput, ProductUncheckedUpdateWithoutAttributeOnProductInput>
  }

  export type ProductUpdateWithoutAttributeOnProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductNestedInput
    prices?: PriceUpdateManyWithoutProductNestedInput
    images?: ImageOnProductUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAttributeOnProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: PriceUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageOnProductUncheckedUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type AttributeUpsertWithoutAttributeOnProductInput = {
    update: XOR<AttributeUpdateWithoutAttributeOnProductInput, AttributeUncheckedUpdateWithoutAttributeOnProductInput>
    create: XOR<AttributeCreateWithoutAttributeOnProductInput, AttributeUncheckedCreateWithoutAttributeOnProductInput>
    where?: AttributeWhereInput
  }

  export type AttributeUpdateToOneWithWhereWithoutAttributeOnProductInput = {
    where?: AttributeWhereInput
    data: XOR<AttributeUpdateWithoutAttributeOnProductInput, AttributeUncheckedUpdateWithoutAttributeOnProductInput>
  }

  export type AttributeUpdateWithoutAttributeOnProductInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: UnitUpdateOneWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutAttributeOnProductInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unitCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeValueUpsertWithoutAttributeOnProductInput = {
    update: XOR<AttributeValueUpdateWithoutAttributeOnProductInput, AttributeValueUncheckedUpdateWithoutAttributeOnProductInput>
    create: XOR<AttributeValueCreateWithoutAttributeOnProductInput, AttributeValueUncheckedCreateWithoutAttributeOnProductInput>
    where?: AttributeValueWhereInput
  }

  export type AttributeValueUpdateToOneWithWhereWithoutAttributeOnProductInput = {
    where?: AttributeValueWhereInput
    data: XOR<AttributeValueUpdateWithoutAttributeOnProductInput, AttributeValueUncheckedUpdateWithoutAttributeOnProductInput>
  }

  export type AttributeValueUpdateWithoutAttributeOnProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeValueUncheckedUpdateWithoutAttributeOnProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateWithoutCurrencyInput = {
    uuid?: string
    prevPrice?: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutPricesInput
  }

  export type PriceUncheckedCreateWithoutCurrencyInput = {
    uuid?: string
    prevPrice?: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    productUuid: string
  }

  export type PriceCreateOrConnectWithoutCurrencyInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput>
  }

  export type PriceCreateManyCurrencyInputEnvelope = {
    data: PriceCreateManyCurrencyInput | PriceCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type PriceUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutCurrencyInput, PriceUncheckedUpdateWithoutCurrencyInput>
    create: XOR<PriceCreateWithoutCurrencyInput, PriceUncheckedCreateWithoutCurrencyInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutCurrencyInput, PriceUncheckedUpdateWithoutCurrencyInput>
  }

  export type PriceUpdateManyWithWhereWithoutCurrencyInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type ProductCreateWithoutBrandInput = {
    uuid?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: PriceCreateNestedManyWithoutProductInput
    images?: ImageOnProductCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    uuid?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prices?: PriceUncheckedCreateNestedManyWithoutProductInput
    images?: ImageOnProductUncheckedCreateNestedManyWithoutProductInput
    categoryOnProduct?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    attributeOnProduct?: AttributeOnProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type BrandOnCategoryCreateWithoutBrandInput = {
    category: CategoryCreateNestedOneWithoutBrandOnCategoryInput
  }

  export type BrandOnCategoryUncheckedCreateWithoutBrandInput = {
    categoryCode: string
  }

  export type BrandOnCategoryCreateOrConnectWithoutBrandInput = {
    where: BrandOnCategoryWhereUniqueInput
    create: XOR<BrandOnCategoryCreateWithoutBrandInput, BrandOnCategoryUncheckedCreateWithoutBrandInput>
  }

  export type BrandOnCategoryCreateManyBrandInputEnvelope = {
    data: BrandOnCategoryCreateManyBrandInput | BrandOnCategoryCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    uuid?: UuidFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    brandCode?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type BrandOnCategoryUpsertWithWhereUniqueWithoutBrandInput = {
    where: BrandOnCategoryWhereUniqueInput
    update: XOR<BrandOnCategoryUpdateWithoutBrandInput, BrandOnCategoryUncheckedUpdateWithoutBrandInput>
    create: XOR<BrandOnCategoryCreateWithoutBrandInput, BrandOnCategoryUncheckedCreateWithoutBrandInput>
  }

  export type BrandOnCategoryUpdateWithWhereUniqueWithoutBrandInput = {
    where: BrandOnCategoryWhereUniqueInput
    data: XOR<BrandOnCategoryUpdateWithoutBrandInput, BrandOnCategoryUncheckedUpdateWithoutBrandInput>
  }

  export type BrandOnCategoryUpdateManyWithWhereWithoutBrandInput = {
    where: BrandOnCategoryScalarWhereInput
    data: XOR<BrandOnCategoryUpdateManyMutationInput, BrandOnCategoryUncheckedUpdateManyWithoutBrandInput>
  }

  export type ShopCreateManyCompanyInput = {
    uuid?: string
    name: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateWithoutCompanyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateWithoutCompanyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyWithoutCompanyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateManyProductInput = {
    uuid?: string
    prevPrice?: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    currencyCode: string
  }

  export type ImageOnProductCreateManyProductInput = {
    imageUuid: string
    order: number
  }

  export type CategoryOnProductCreateManyProductInput = {
    categoryCode: string
  }

  export type AttributeOnProductCreateManyProductInput = {
    uuid?: string
    attributeCode: string
    valueUuid?: string | null
  }

  export type PriceUpdateWithoutProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: CurrencyUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateWithoutProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currencyCode?: StringFieldUpdateOperationsInput | string
  }

  export type PriceUncheckedUpdateManyWithoutProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currencyCode?: StringFieldUpdateOperationsInput | string
  }

  export type ImageOnProductUpdateWithoutProductInput = {
    order?: IntFieldUpdateOperationsInput | number
    image?: ImageUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ImageOnProductUncheckedUpdateWithoutProductInput = {
    imageUuid?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ImageOnProductUncheckedUpdateManyWithoutProductInput = {
    imageUuid?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryOnProductUpdateWithoutProductInput = {
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type CategoryOnProductUncheckedUpdateWithoutProductInput = {
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryOnProductUncheckedUpdateManyWithoutProductInput = {
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeOnProductUpdateWithoutProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    attribute?: AttributeUpdateOneRequiredWithoutAttributeOnProductNestedInput
    value?: AttributeValueUpdateOneWithoutAttributeOnProductNestedInput
  }

  export type AttributeOnProductUncheckedUpdateWithoutProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    attributeCode?: StringFieldUpdateOperationsInput | string
    valueUuid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeOnProductUncheckedUpdateManyWithoutProductInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    attributeCode?: StringFieldUpdateOperationsInput | string
    valueUuid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateManyParentInput = {
    code: string
    title: string
    description: string
  }

  export type FeatureOnCategoryCreateManyCategoryInput = {
    featureUuid: string
  }

  export type CategoryOnProductCreateManyCategoryInput = {
    productUuid: string
  }

  export type BrandOnCategoryCreateManyCategoryInput = {
    brandCode: string
  }

  export type CategoryUpdateWithoutParentInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    features?: FeatureOnCategoryUpdateManyWithoutCategoryNestedInput
    products?: CategoryOnProductUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    features?: FeatureOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    products?: CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput
    brandOnCategory?: BrandOnCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureOnCategoryUpdateWithoutCategoryInput = {
    feature?: FeatureUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type FeatureOnCategoryUncheckedUpdateWithoutCategoryInput = {
    featureUuid?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureOnCategoryUncheckedUpdateManyWithoutCategoryInput = {
    featureUuid?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryOnProductUpdateWithoutCategoryInput = {
    product?: ProductUpdateOneRequiredWithoutCategoryOnProductNestedInput
  }

  export type CategoryOnProductUncheckedUpdateWithoutCategoryInput = {
    productUuid?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryOnProductUncheckedUpdateManyWithoutCategoryInput = {
    productUuid?: StringFieldUpdateOperationsInput | string
  }

  export type BrandOnCategoryUpdateWithoutCategoryInput = {
    brand?: BrandUpdateOneRequiredWithoutBrandOnCategoryNestedInput
  }

  export type BrandOnCategoryUncheckedUpdateWithoutCategoryInput = {
    brandCode?: StringFieldUpdateOperationsInput | string
  }

  export type BrandOnCategoryUncheckedUpdateManyWithoutCategoryInput = {
    brandCode?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureCreateManyUnitInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    groupUuid?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeCreateManyUnitInput = {
    code: string
    name: string
    description?: string | null
  }

  export type FeatureUpdateWithoutUnitInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: FeatureGroupUpdateOneWithoutFeatureNestedInput
    categories?: FeatureOnCategoryUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutUnitInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    groupUuid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: FeatureOnCategoryUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateManyWithoutUnitInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    groupUuid?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUpdateWithoutUnitInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributeOnProduct?: AttributeOnProductUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutUnitInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attributeOnProduct?: AttributeOnProductUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateManyWithoutUnitInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageOnProductCreateManyImageInput = {
    productUuid: string
    order: number
  }

  export type ImageOnProductUpdateWithoutImageInput = {
    order?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageOnProductUncheckedUpdateWithoutImageInput = {
    productUuid?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ImageOnProductUncheckedUpdateManyWithoutImageInput = {
    productUuid?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type FeatureOnCategoryCreateManyFeatureInput = {
    categoryCode: string
  }

  export type FeatureOnCategoryUpdateWithoutFeatureInput = {
    category?: CategoryUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type FeatureOnCategoryUncheckedUpdateWithoutFeatureInput = {
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureOnCategoryUncheckedUpdateManyWithoutFeatureInput = {
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureCreateManyGroupInput = {
    uuid?: string
    title: string
    code: string
    description: string
    type?: $Enums.FeatureTypeEnum
    isShowInProductTab?: boolean
    isShowInProductList?: boolean
    isShowInProductHeader?: boolean
    status?: $Enums.FeatureStatusEnum
    unitCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureUpdateWithoutGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutFeaturesNestedInput
    categories?: FeatureOnCategoryUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    unitCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: FeatureOnCategoryUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateManyWithoutGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeEnumFieldUpdateOperationsInput | $Enums.FeatureTypeEnum
    isShowInProductTab?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductList?: BoolFieldUpdateOperationsInput | boolean
    isShowInProductHeader?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumFeatureStatusEnumFieldUpdateOperationsInput | $Enums.FeatureStatusEnum
    unitCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeOnProductCreateManyAttributeInput = {
    uuid?: string
    productUuid: string
    valueUuid?: string | null
  }

  export type AttributeOnProductUpdateWithoutAttributeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutAttributeOnProductNestedInput
    value?: AttributeValueUpdateOneWithoutAttributeOnProductNestedInput
  }

  export type AttributeOnProductUncheckedUpdateWithoutAttributeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    productUuid?: StringFieldUpdateOperationsInput | string
    valueUuid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeOnProductUncheckedUpdateManyWithoutAttributeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    productUuid?: StringFieldUpdateOperationsInput | string
    valueUuid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeOnProductCreateManyValueInput = {
    uuid?: string
    productUuid: string
    attributeCode: string
  }

  export type AttributeOnProductUpdateWithoutValueInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutAttributeOnProductNestedInput
    attribute?: AttributeUpdateOneRequiredWithoutAttributeOnProductNestedInput
  }

  export type AttributeOnProductUncheckedUpdateWithoutValueInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    productUuid?: StringFieldUpdateOperationsInput | string
    attributeCode?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeOnProductUncheckedUpdateManyWithoutValueInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    productUuid?: StringFieldUpdateOperationsInput | string
    attributeCode?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateManyCurrencyInput = {
    uuid?: string
    prevPrice?: number | null
    price: number
    description: string
    phase: $Enums.PricePhaseEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    productUuid: string
  }

  export type PriceUpdateWithoutCurrencyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPricesNestedInput
  }

  export type PriceUncheckedUpdateWithoutCurrencyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productUuid?: StringFieldUpdateOperationsInput | string
  }

  export type PriceUncheckedUpdateManyWithoutCurrencyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phase?: EnumPricePhaseEnumFieldUpdateOperationsInput | $Enums.PricePhaseEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productUuid?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyBrandInput = {
    uuid?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandOnCategoryCreateManyBrandInput = {
    categoryCode: string
  }

  export type ProductUpdateWithoutBrandInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: PriceUpdateManyWithoutProductNestedInput
    images?: ImageOnProductUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prices?: PriceUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageOnProductUncheckedUpdateManyWithoutProductNestedInput
    categoryOnProduct?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    attributeOnProduct?: AttributeOnProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandOnCategoryUpdateWithoutBrandInput = {
    category?: CategoryUpdateOneRequiredWithoutBrandOnCategoryNestedInput
  }

  export type BrandOnCategoryUncheckedUpdateWithoutBrandInput = {
    categoryCode?: StringFieldUpdateOperationsInput | string
  }

  export type BrandOnCategoryUncheckedUpdateManyWithoutBrandInput = {
    categoryCode?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnitCountOutputTypeDefaultArgs instead
     */
    export type UnitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageCountOutputTypeDefaultArgs instead
     */
    export type ImageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureCountOutputTypeDefaultArgs instead
     */
    export type FeatureCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureGroupCountOutputTypeDefaultArgs instead
     */
    export type FeatureGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttributeCountOutputTypeDefaultArgs instead
     */
    export type AttributeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttributeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttributeValueCountOutputTypeDefaultArgs instead
     */
    export type AttributeValueCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttributeValueCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyCountOutputTypeDefaultArgs instead
     */
    export type CurrencyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandCountOutputTypeDefaultArgs instead
     */
    export type BrandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopDefaultArgs instead
     */
    export type ShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceDefaultArgs instead
     */
    export type PriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryOnProductDefaultArgs instead
     */
    export type CategoryOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryOnProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandOnCategoryDefaultArgs instead
     */
    export type BrandOnCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandOnCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnitDefaultArgs instead
     */
    export type UnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageDefaultArgs instead
     */
    export type ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageOnProductDefaultArgs instead
     */
    export type ImageOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageOnProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureDefaultArgs instead
     */
    export type FeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureGroupDefaultArgs instead
     */
    export type FeatureGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureOnCategoryDefaultArgs instead
     */
    export type FeatureOnCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureOnCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttributeDefaultArgs instead
     */
    export type AttributeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttributeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttributeValueDefaultArgs instead
     */
    export type AttributeValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttributeValueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttributeOnProductDefaultArgs instead
     */
    export type AttributeOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttributeOnProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyDefaultArgs instead
     */
    export type CurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandDefaultArgs instead
     */
    export type BrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
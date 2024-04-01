
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CompanyScalarFieldEnum = {
  uuid: 'uuid',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShopScalarFieldEnum = {
  uuid: 'uuid',
  name: 'name',
  address: 'address',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  companyUuid: 'companyUuid'
};

exports.Prisma.ProductScalarFieldEnum = {
  uuid: 'uuid',
  title: 'title',
  description: 'description',
  brandCode: 'brandCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PriceScalarFieldEnum = {
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

exports.Prisma.CategoryScalarFieldEnum = {
  code: 'code',
  title: 'title',
  description: 'description',
  parentCode: 'parentCode'
};

exports.Prisma.CategoryOnProductScalarFieldEnum = {
  productUuid: 'productUuid',
  categoryCode: 'categoryCode'
};

exports.Prisma.BrandOnCategoryScalarFieldEnum = {
  brandCode: 'brandCode',
  categoryCode: 'categoryCode'
};

exports.Prisma.UnitScalarFieldEnum = {
  code: 'code',
  value: 'value',
  description: 'description'
};

exports.Prisma.ImageScalarFieldEnum = {
  uuid: 'uuid',
  title: 'title'
};

exports.Prisma.ImageOnProductScalarFieldEnum = {
  productUuid: 'productUuid',
  imageUuid: 'imageUuid',
  order: 'order'
};

exports.Prisma.FeatureScalarFieldEnum = {
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

exports.Prisma.FeatureGroupScalarFieldEnum = {
  uuid: 'uuid',
  title: 'title',
  description: 'description',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FeatureOnCategoryScalarFieldEnum = {
  featureUuid: 'featureUuid',
  categoryCode: 'categoryCode'
};

exports.Prisma.AttributeScalarFieldEnum = {
  code: 'code',
  name: 'name',
  description: 'description',
  unitCode: 'unitCode'
};

exports.Prisma.AttributeValueScalarFieldEnum = {
  uuid: 'uuid',
  value: 'value'
};

exports.Prisma.AttributeOnProductScalarFieldEnum = {
  uuid: 'uuid',
  productUuid: 'productUuid',
  attributeCode: 'attributeCode',
  valueUuid: 'valueUuid'
};

exports.Prisma.CurrencyScalarFieldEnum = {
  code: 'code',
  value: 'value',
  description: 'description'
};

exports.Prisma.BrandScalarFieldEnum = {
  code: 'code',
  name: 'name',
  description: 'description'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.PricePhaseEnum = exports.$Enums.PricePhaseEnum = {
  NEW: 'NEW',
  CHANGE: 'CHANGE'
};

exports.FeatureTypeEnum = exports.$Enums.FeatureTypeEnum = {
  DEFAULT: 'DEFAULT',
  CHECKBOX: 'CHECKBOX',
  DATE: 'DATE',
  NUMBER: 'NUMBER',
  COLOR: 'COLOR'
};

exports.FeatureStatusEnum = exports.$Enums.FeatureStatusEnum = {
  SHOW: 'SHOW',
  HIDE: 'HIDE',
  OFF: 'OFF'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

/*
  Warnings:

  - You are about to drop the column `shopUuid` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_shopUuid_fkey";

-- DropIndex
DROP INDEX "product_uuid_shopUuid_brandCode_idx";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "shopUuid";

-- CreateIndex
CREATE INDEX "product_uuid_brandCode_idx" ON "product"("uuid", "brandCode");

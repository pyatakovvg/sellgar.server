/*
  Warnings:

  - The primary key for the `attribute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `attribute` table. All the data in the column will be lost.
  - You are about to drop the column `attributeUuid` on the `attribute_on_product` table. All the data in the column will be lost.
  - Added the required column `attributeCode` to the `attribute_on_product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "attribute_on_product" DROP CONSTRAINT "attribute_on_product_attributeUuid_fkey";

-- AlterTable
ALTER TABLE "attribute" DROP CONSTRAINT "attribute_pkey",
DROP COLUMN "uuid",
ADD CONSTRAINT "attribute_pkey" PRIMARY KEY ("code");

-- AlterTable
ALTER TABLE "attribute_on_product" DROP COLUMN "attributeUuid",
ADD COLUMN     "attributeCode" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "attribute_on_product" ADD CONSTRAINT "attribute_on_product_attributeCode_fkey" FOREIGN KEY ("attributeCode") REFERENCES "attribute"("code") ON DELETE CASCADE ON UPDATE CASCADE;

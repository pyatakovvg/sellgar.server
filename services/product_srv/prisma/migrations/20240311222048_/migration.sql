/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `parentUuid` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `category` table. All the data in the column will be lost.
  - The primary key for the `category_on_product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryUuid` on the `category_on_product` table. All the data in the column will be lost.
  - The primary key for the `feature_on_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryUuid` on the `feature_on_category` table. All the data in the column will be lost.
  - Added the required column `categoryCode` to the `category_on_product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryCode` to the `feature_on_category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_parentUuid_fkey";

-- DropForeignKey
ALTER TABLE "category_on_product" DROP CONSTRAINT "category_on_product_categoryUuid_fkey";

-- DropForeignKey
ALTER TABLE "feature_on_category" DROP CONSTRAINT "feature_on_category_categoryUuid_fkey";

-- DropIndex
DROP INDEX "category_uuid_parentUuid_code_idx";

-- AlterTable
ALTER TABLE "category" DROP CONSTRAINT "category_pkey",
DROP COLUMN "parentUuid",
DROP COLUMN "uuid",
ADD COLUMN     "parentCode" TEXT,
ADD CONSTRAINT "category_pkey" PRIMARY KEY ("code");

-- AlterTable
ALTER TABLE "category_on_product" DROP CONSTRAINT "category_on_product_pkey",
DROP COLUMN "categoryUuid",
ADD COLUMN     "categoryCode" TEXT NOT NULL,
ADD CONSTRAINT "category_on_product_pkey" PRIMARY KEY ("productUuid", "categoryCode");

-- AlterTable
ALTER TABLE "feature_on_category" DROP CONSTRAINT "feature_on_category_pkey",
DROP COLUMN "categoryUuid",
ADD COLUMN     "categoryCode" TEXT NOT NULL,
ADD CONSTRAINT "feature_on_category_pkey" PRIMARY KEY ("featureUuid", "categoryCode");

-- CreateIndex
CREATE INDEX "category_parentCode_code_idx" ON "category"("parentCode", "code");

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_parentCode_fkey" FOREIGN KEY ("parentCode") REFERENCES "category"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_on_product" ADD CONSTRAINT "category_on_product_categoryCode_fkey" FOREIGN KEY ("categoryCode") REFERENCES "category"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_on_category" ADD CONSTRAINT "feature_on_category_categoryCode_fkey" FOREIGN KEY ("categoryCode") REFERENCES "category"("code") ON DELETE CASCADE ON UPDATE CASCADE;

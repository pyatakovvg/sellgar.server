/*
  Warnings:

  - You are about to drop the column `unitUuid` on the `attribute` table. All the data in the column will be lost.
  - You are about to drop the column `unitUuid` on the `feature` table. All the data in the column will be lost.
  - The primary key for the `unit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `unit` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "attribute" DROP CONSTRAINT "attribute_unitUuid_fkey";

-- DropForeignKey
ALTER TABLE "feature" DROP CONSTRAINT "feature_unitUuid_fkey";

-- DropIndex
DROP INDEX "unit_uuid_code_idx";

-- AlterTable
ALTER TABLE "attribute" DROP COLUMN "unitUuid",
ADD COLUMN     "unitCode" TEXT;

-- AlterTable
ALTER TABLE "feature" DROP COLUMN "unitUuid",
ADD COLUMN     "unitCode" TEXT;

-- AlterTable
ALTER TABLE "unit" DROP CONSTRAINT "unit_pkey",
DROP COLUMN "uuid",
ADD CONSTRAINT "unit_pkey" PRIMARY KEY ("code");

-- CreateIndex
CREATE INDEX "unit_code_idx" ON "unit"("code");

-- AddForeignKey
ALTER TABLE "feature" ADD CONSTRAINT "feature_unitCode_fkey" FOREIGN KEY ("unitCode") REFERENCES "unit"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attribute" ADD CONSTRAINT "attribute_unitCode_fkey" FOREIGN KEY ("unitCode") REFERENCES "unit"("code") ON DELETE CASCADE ON UPDATE CASCADE;

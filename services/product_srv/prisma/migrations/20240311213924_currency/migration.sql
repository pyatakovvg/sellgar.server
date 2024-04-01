/*
  Warnings:

  - Added the required column `description` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currencyCode` to the `price` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "price" ADD COLUMN     "currencyCode" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Currency" (
    "code" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("code")
);

-- AddForeignKey
ALTER TABLE "price" ADD CONSTRAINT "price_currencyCode_fkey" FOREIGN KEY ("currencyCode") REFERENCES "Currency"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

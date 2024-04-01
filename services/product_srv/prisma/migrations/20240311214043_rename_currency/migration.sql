/*
  Warnings:

  - You are about to drop the `Currency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "price" DROP CONSTRAINT "price_currencyCode_fkey";

-- DropTable
DROP TABLE "Currency";

-- CreateTable
CREATE TABLE "currency" (
    "code" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "currency_pkey" PRIMARY KEY ("code")
);

-- AddForeignKey
ALTER TABLE "price" ADD CONSTRAINT "price_currencyCode_fkey" FOREIGN KEY ("currencyCode") REFERENCES "currency"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

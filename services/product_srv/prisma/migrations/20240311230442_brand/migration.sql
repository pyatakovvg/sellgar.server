-- AlterTable
ALTER TABLE "product" ADD COLUMN     "brandCode" TEXT;

-- CreateTable
CREATE TABLE "brand" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "brand_pkey" PRIMARY KEY ("code")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_brandCode_fkey" FOREIGN KEY ("brandCode") REFERENCES "brand"("code") ON DELETE SET NULL ON UPDATE CASCADE;

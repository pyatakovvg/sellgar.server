-- DropIndex
DROP INDEX "product_uuid_shopUuid_idx";

-- CreateTable
CREATE TABLE "brand_on_category" (
    "brandCode" TEXT NOT NULL,
    "categoryCode" TEXT NOT NULL,

    CONSTRAINT "brand_on_category_pkey" PRIMARY KEY ("brandCode","categoryCode")
);

-- CreateIndex
CREATE INDEX "product_uuid_shopUuid_brandCode_idx" ON "product"("uuid", "shopUuid", "brandCode");

-- AddForeignKey
ALTER TABLE "brand_on_category" ADD CONSTRAINT "brand_on_category_brandCode_fkey" FOREIGN KEY ("brandCode") REFERENCES "brand"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand_on_category" ADD CONSTRAINT "brand_on_category_categoryCode_fkey" FOREIGN KEY ("categoryCode") REFERENCES "category"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

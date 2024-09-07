/*
  Warnings:

  - You are about to drop the `__permission_on_role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `__role_on_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "__permission_on_role" DROP CONSTRAINT "__permission_on_role_A_fkey";

-- DropForeignKey
ALTER TABLE "__permission_on_role" DROP CONSTRAINT "__permission_on_role_B_fkey";

-- DropForeignKey
ALTER TABLE "__role_on_user" DROP CONSTRAINT "__role_on_user_A_fkey";

-- DropForeignKey
ALTER TABLE "__role_on_user" DROP CONSTRAINT "__role_on_user_B_fkey";

-- DropTable
DROP TABLE "__permission_on_role";

-- DropTable
DROP TABLE "__role_on_user";

-- CreateTable
CREATE TABLE "_role_on_user" (
    "A" VARCHAR(255) NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_permission_on_role" (
    "A" TEXT NOT NULL,
    "B" VARCHAR(255) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_role_on_user_AB_unique" ON "_role_on_user"("A", "B");

-- CreateIndex
CREATE INDEX "_role_on_user_B_index" ON "_role_on_user"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_permission_on_role_AB_unique" ON "_permission_on_role"("A", "B");

-- CreateIndex
CREATE INDEX "_permission_on_role_B_index" ON "_permission_on_role"("B");

-- AddForeignKey
ALTER TABLE "_role_on_user" ADD CONSTRAINT "_role_on_user_A_fkey" FOREIGN KEY ("A") REFERENCES "role"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_role_on_user" ADD CONSTRAINT "_role_on_user_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permission_on_role" ADD CONSTRAINT "_permission_on_role_A_fkey" FOREIGN KEY ("A") REFERENCES "permission"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permission_on_role" ADD CONSTRAINT "_permission_on_role_B_fkey" FOREIGN KEY ("B") REFERENCES "role"("code") ON DELETE CASCADE ON UPDATE CASCADE;

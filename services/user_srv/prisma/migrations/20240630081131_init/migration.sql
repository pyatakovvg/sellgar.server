/*
  Warnings:

  - The primary key for the `_permission_on_role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `permissionCode` on the `_permission_on_role` table. All the data in the column will be lost.
  - You are about to drop the column `roleCode` on the `_permission_on_role` table. All the data in the column will be lost.
  - The primary key for the `_role_on_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `roleCode` on the `_role_on_user` table. All the data in the column will be lost.
  - You are about to drop the column `userUuid` on the `_role_on_user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[A,B]` on the table `_permission_on_role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_role_on_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `A` to the `_permission_on_role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `B` to the `_permission_on_role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `A` to the `_role_on_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `B` to the `_role_on_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_permission_on_role" DROP CONSTRAINT "_permission_on_role_permissionCode_fkey";

-- DropForeignKey
ALTER TABLE "_permission_on_role" DROP CONSTRAINT "_permission_on_role_roleCode_fkey";

-- DropForeignKey
ALTER TABLE "_role_on_user" DROP CONSTRAINT "_role_on_user_roleCode_fkey";

-- DropForeignKey
ALTER TABLE "_role_on_user" DROP CONSTRAINT "_role_on_user_userUuid_fkey";

-- AlterTable
ALTER TABLE "_permission_on_role" DROP CONSTRAINT "_permission_on_role_pkey",
DROP COLUMN "permissionCode",
DROP COLUMN "roleCode",
ADD COLUMN     "A" TEXT NOT NULL,
ADD COLUMN     "B" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "_role_on_user" DROP CONSTRAINT "_role_on_user_pkey",
DROP COLUMN "roleCode",
DROP COLUMN "userUuid",
ADD COLUMN     "A" VARCHAR(255) NOT NULL,
ADD COLUMN     "B" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_permission_on_role_AB_unique" ON "_permission_on_role"("A", "B");

-- CreateIndex
CREATE INDEX "_permission_on_role_B_index" ON "_permission_on_role"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_role_on_user_AB_unique" ON "_role_on_user"("A", "B");

-- CreateIndex
CREATE INDEX "_role_on_user_B_index" ON "_role_on_user"("B");

-- AddForeignKey
ALTER TABLE "_role_on_user" ADD CONSTRAINT "_role_on_user_A_fkey" FOREIGN KEY ("A") REFERENCES "role"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_role_on_user" ADD CONSTRAINT "_role_on_user_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permission_on_role" ADD CONSTRAINT "_permission_on_role_A_fkey" FOREIGN KEY ("A") REFERENCES "permission"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permission_on_role" ADD CONSTRAINT "_permission_on_role_B_fkey" FOREIGN KEY ("B") REFERENCES "role"("code") ON DELETE CASCADE ON UPDATE CASCADE;

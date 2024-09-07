/*
  Warnings:

  - You are about to drop the column `A` on the `_permission_on_role` table. All the data in the column will be lost.
  - You are about to drop the column `B` on the `_permission_on_role` table. All the data in the column will be lost.
  - You are about to drop the column `A` on the `_role_on_user` table. All the data in the column will be lost.
  - You are about to drop the column `B` on the `_role_on_user` table. All the data in the column will be lost.
  - Added the required column `permissionCode` to the `_permission_on_role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleCode` to the `_permission_on_role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleCode` to the `_role_on_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUuid` to the `_role_on_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_permission_on_role" DROP CONSTRAINT "_permission_on_role_A_fkey";

-- DropForeignKey
ALTER TABLE "_permission_on_role" DROP CONSTRAINT "_permission_on_role_B_fkey";

-- DropForeignKey
ALTER TABLE "_role_on_user" DROP CONSTRAINT "_role_on_user_A_fkey";

-- DropForeignKey
ALTER TABLE "_role_on_user" DROP CONSTRAINT "_role_on_user_B_fkey";

-- DropIndex
DROP INDEX "_permission_on_role_AB_unique";

-- DropIndex
DROP INDEX "_permission_on_role_B_index";

-- DropIndex
DROP INDEX "_role_on_user_AB_unique";

-- DropIndex
DROP INDEX "_role_on_user_B_index";

-- AlterTable
ALTER TABLE "_permission_on_role" DROP COLUMN "A",
DROP COLUMN "B",
ADD COLUMN     "permissionCode" TEXT NOT NULL,
ADD COLUMN     "roleCode" TEXT NOT NULL,
ADD CONSTRAINT "_permission_on_role_pkey" PRIMARY KEY ("roleCode", "permissionCode");

-- AlterTable
ALTER TABLE "_role_on_user" DROP COLUMN "A",
DROP COLUMN "B",
ADD COLUMN     "roleCode" TEXT NOT NULL,
ADD COLUMN     "userUuid" UUID NOT NULL,
ADD CONSTRAINT "_role_on_user_pkey" PRIMARY KEY ("userUuid", "roleCode");

-- AddForeignKey
ALTER TABLE "_role_on_user" ADD CONSTRAINT "_role_on_user_userUuid_fkey" FOREIGN KEY ("userUuid") REFERENCES "user"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_role_on_user" ADD CONSTRAINT "_role_on_user_roleCode_fkey" FOREIGN KEY ("roleCode") REFERENCES "role"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permission_on_role" ADD CONSTRAINT "_permission_on_role_roleCode_fkey" FOREIGN KEY ("roleCode") REFERENCES "role"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permission_on_role" ADD CONSTRAINT "_permission_on_role_permissionCode_fkey" FOREIGN KEY ("permissionCode") REFERENCES "permission"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

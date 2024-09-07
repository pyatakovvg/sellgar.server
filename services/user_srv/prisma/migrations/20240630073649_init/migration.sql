-- CreateTable
CREATE TABLE "user" (
    "uuid" UUID NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "role" (
    "code" VARCHAR(255) NOT NULL,
    "displayName" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "permission" (
    "code" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,

    CONSTRAINT "permission_pkey" PRIMARY KEY ("code")
);

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
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");

-- CreateIndex
CREATE INDEX "user_uuid_login_idx" ON "user"("uuid", "login");

-- CreateIndex
CREATE UNIQUE INDEX "role_code_key" ON "role"("code");

-- CreateIndex
CREATE UNIQUE INDEX "role_displayName_key" ON "role"("displayName");

-- CreateIndex
CREATE INDEX "role_code_idx" ON "role"("code");

-- CreateIndex
CREATE UNIQUE INDEX "permission_code_key" ON "permission"("code");

-- CreateIndex
CREATE UNIQUE INDEX "permission_displayName_key" ON "permission"("displayName");

-- CreateIndex
CREATE INDEX "permission_code_idx" ON "permission"("code");

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

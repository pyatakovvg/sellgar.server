-- CreateTable
CREATE TABLE "user" (
    "uuid" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "mail" (
    "uuid" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userUuid" UUID NOT NULL,

    CONSTRAINT "mail_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "_MailToUser" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_uuid_email_isBlocked_idx" ON "user"("uuid", "email", "isBlocked");

-- CreateIndex
CREATE INDEX "mail_uuid_email_idx" ON "mail"("uuid", "email");

-- CreateIndex
CREATE UNIQUE INDEX "_MailToUser_AB_unique" ON "_MailToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MailToUser_B_index" ON "_MailToUser"("B");

-- AddForeignKey
ALTER TABLE "_MailToUser" ADD CONSTRAINT "_MailToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "mail"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MailToUser" ADD CONSTRAINT "_MailToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[telegramId]` on the table `AuthDevice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AuthDevice_telegramId_key" ON "AuthDevice"("telegramId");

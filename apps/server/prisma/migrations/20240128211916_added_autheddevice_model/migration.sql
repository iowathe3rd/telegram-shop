-- CreateTable
CREATE TABLE "AuthDevice" (
    "id" TEXT NOT NULL,
    "telegramId" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthDevice_pkey" PRIMARY KEY ("id")
);

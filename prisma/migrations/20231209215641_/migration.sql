-- CreateEnum
CREATE TYPE "ItemState" AS ENUM ('AVAILABLE', 'CHECKED_OUT', 'DUE', 'DAMAGED');

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" "ItemState" NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

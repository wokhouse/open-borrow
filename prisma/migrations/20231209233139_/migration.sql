/*
  Warnings:

  - Added the required column `department` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Department" AS ENUM ('TEX');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('SL');

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "department" "Department" NOT NULL,
ADD COLUMN     "type" "ItemType" NOT NULL;

-- CreateTable
CREATE TABLE "Screen" (
    "itemId" TEXT NOT NULL,
    "meshCount" INTEGER NOT NULL,
    "screenNumber" INTEGER NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("itemId")
);

-- AddForeignKey
ALTER TABLE "Screen" ADD CONSTRAINT "Screen_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('CHECK_OUT', 'RETURN', 'DAMAGED');

-- CreateTable
CREATE TABLE "ItemAction" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" "ActionType" NOT NULL,
    "name" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) DEFAULT NOW() + INTERVAL '30 days',
    "itemId" TEXT,

    CONSTRAINT "ItemAction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItemAction" ADD CONSTRAINT "ItemAction_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

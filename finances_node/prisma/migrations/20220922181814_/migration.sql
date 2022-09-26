/*
  Warnings:

  - You are about to alter the column `quantity` on the `Transactions` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Transactions" ALTER COLUMN "quantity" SET DATA TYPE DECIMAL(65,30);

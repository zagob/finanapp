/*
  Warnings:

  - Added the required column `type` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "typeTransaction" AS ENUM ('income', 'outcome');

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_idCategoryTransaction_fkey";

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "type",
ADD COLUMN     "type" "typeTransaction" NOT NULL,
ALTER COLUMN "idCategoryTransaction" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_idCategoryTransaction_fkey" FOREIGN KEY ("idCategoryTransaction") REFERENCES "CategoryTransaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

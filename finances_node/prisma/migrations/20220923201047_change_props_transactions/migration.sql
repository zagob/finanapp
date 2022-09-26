/*
  Warnings:

  - Added the required column `date` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `quantity` on the `Transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "automaticCredit" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
DROP COLUMN "quantity",
ADD COLUMN     "quantity" MONEY NOT NULL,
ALTER COLUMN "isPaid" SET DEFAULT false,
ALTER COLUMN "type" DROP NOT NULL;

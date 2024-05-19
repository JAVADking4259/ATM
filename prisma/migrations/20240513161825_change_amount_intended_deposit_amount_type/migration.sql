/*
  Warnings:

  - The `amountIntended` column on the `accountManagement` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `depositAmount` on the `accountManagement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "accountManagement" DROP COLUMN "amountIntended",
ADD COLUMN     "amountIntended" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "depositAmount",
ADD COLUMN     "depositAmount" INTEGER NOT NULL;

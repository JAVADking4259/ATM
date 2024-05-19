/*
  Warnings:

  - The `id` column on the `accountManagement` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "accountManagement_id_key";

-- AlterTable
ALTER TABLE "accountManagement" DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "accountManagement_pkey" PRIMARY KEY ("id");

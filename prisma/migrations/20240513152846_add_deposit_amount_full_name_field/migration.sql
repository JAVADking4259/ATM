/*
  Warnings:

  - Added the required column `depositAmount` to the `accountManagement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `accountManagement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accountManagement" ADD COLUMN     "depositAmount" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL;

/*
  Warnings:

  - Made the column `birthDay` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `depositAmount` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "birthDay" SET NOT NULL,
ALTER COLUMN "birthDay" SET DATA TYPE TEXT,
ALTER COLUMN "depositAmount" SET NOT NULL,
ALTER COLUMN "depositAmount" SET DATA TYPE TEXT;

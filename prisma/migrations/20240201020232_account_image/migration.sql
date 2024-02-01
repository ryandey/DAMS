/*
  Warnings:

  - You are about to drop the `Donor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recipient` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT;

-- DropTable
DROP TABLE "Donor";

-- DropTable
DROP TABLE "Recipient";

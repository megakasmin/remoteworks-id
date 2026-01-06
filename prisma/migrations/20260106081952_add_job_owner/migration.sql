/*
  Warnings:

  - You are about to drop the column `companyName` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `employmentType` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `isRemote` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `company` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "companyName",
DROP COLUMN "employmentType",
DROP COLUMN "isRemote",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "role",
DROP COLUMN "updatedAt";

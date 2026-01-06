/*
  Warnings:

  - Added the required column `flags` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "flags" JSONB NOT NULL,
ADD COLUMN     "tags" TEXT[],
ALTER COLUMN "status" DROP DEFAULT;

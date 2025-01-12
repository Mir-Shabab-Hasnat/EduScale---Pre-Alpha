/*
  Warnings:

  - A unique constraint covering the columns `[schoolId]` on the table `School` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `schoolId` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "School" ADD COLUMN     "schoolId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "School_schoolId_key" ON "School"("schoolId");

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

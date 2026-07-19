-- CreateEnum
CREATE TYPE "EnquiryType" AS ENUM ('GENERAL', 'CUSTOMIZED_TRAINING', 'BROCHURE');

-- CreateEnum
CREATE TYPE "TrainingMode" AS ENUM ('ONLINE', 'OFFLINE', 'ON_SITE');

-- AlterTable
ALTER TABLE "Enquiry_Form" ADD COLUMN     "enquiryType" "EnquiryType" NOT NULL DEFAULT 'GENERAL',
ADD COLUMN     "industry" TEXT,
ADD COLUMN     "organization" TEXT,
ADD COLUMN     "participants" INTEGER,
ADD COLUMN     "trainingMode" "TrainingMode",
ADD COLUMN     "trainingRequirement" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "lastname" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Enquiry_Form_email_idx" ON "Enquiry_Form"("email");

-- CreateIndex
CREATE INDEX "Enquiry_Form_phone_idx" ON "Enquiry_Form"("phone");

-- CreateIndex
CREATE INDEX "Enquiry_Form_enquiryType_idx" ON "Enquiry_Form"("enquiryType");

-- CreateIndex
CREATE INDEX "Enquiry_Form_createdAt_idx" ON "Enquiry_Form"("createdAt");

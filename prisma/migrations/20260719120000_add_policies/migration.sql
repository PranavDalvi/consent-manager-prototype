-- CreateTable
CREATE TABLE "Policy" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Policy_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "Consent" ADD COLUMN     "policyId" TEXT;
ALTER TABLE "Consent" ALTER COLUMN "policyVersion" TYPE INTEGER USING 1;
ALTER TABLE "Consent" ALTER COLUMN "policyVersion" SET NOT NULL;

-- CreateIndex
CREATE INDEX "Policy_tenantId_idx" ON "Policy"("tenantId");
CREATE INDEX "Policy_tenantId_purpose_idx" ON "Policy"("tenantId", "purpose");
CREATE INDEX "Policy_tenantId_purpose_version_idx" ON "Policy"("tenantId", "purpose", "version");
CREATE UNIQUE INDEX "Policy_tenantId_purpose_version_key" ON "Policy"("tenantId", "purpose", "version");
CREATE INDEX "Consent_policyId_idx" ON "Consent"("policyId");

-- AddForeignKey
ALTER TABLE "Policy" ADD CONSTRAINT "Policy_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Consent" ADD CONSTRAINT "Consent_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

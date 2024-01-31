-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donor" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "company" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipient" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT,
    "company" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisasterEvent" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "beginDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "contactCenterName" TEXT,
    "contactCenterPhone" TEXT,
    "contactCenterAddress" TEXT,
    "expired" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DisasterEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisasterProfile" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "slug" TEXT,
    "content" TEXT,
    "disasterId" TEXT NOT NULL,

    CONSTRAINT "DisasterProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Donor_email_key" ON "Donor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Recipient_email_key" ON "Recipient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DisasterProfile_disasterId_key" ON "DisasterProfile"("disasterId");

-- AddForeignKey
ALTER TABLE "DisasterEvent" ADD CONSTRAINT "DisasterEvent_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisasterProfile" ADD CONSTRAINT "DisasterProfile_disasterId_fkey" FOREIGN KEY ("disasterId") REFERENCES "DisasterEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

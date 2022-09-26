-- CreateTable
CREATE TABLE "AccountPerson" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AccountPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountBank" (
    "id" TEXT NOT NULL,
    "bank" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" MONEY NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idPerson" TEXT NOT NULL,

    CONSTRAINT "AccountBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryTransaction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "idPerson" TEXT NOT NULL,

    CONSTRAINT "CategoryTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" MONEY NOT NULL,
    "isPaid" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idPerson" TEXT NOT NULL,
    "idBank" TEXT NOT NULL,
    "idCategoryTransaction" TEXT NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountTokens" (
    "id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "idPerson" TEXT NOT NULL,
    "expiresDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AccountTokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AccountBank" ADD CONSTRAINT "AccountBank_idPerson_fkey" FOREIGN KEY ("idPerson") REFERENCES "AccountPerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryTransaction" ADD CONSTRAINT "CategoryTransaction_idPerson_fkey" FOREIGN KEY ("idPerson") REFERENCES "AccountPerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_idPerson_fkey" FOREIGN KEY ("idPerson") REFERENCES "AccountPerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_idBank_fkey" FOREIGN KEY ("idBank") REFERENCES "AccountBank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_idCategoryTransaction_fkey" FOREIGN KEY ("idCategoryTransaction") REFERENCES "CategoryTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountTokens" ADD CONSTRAINT "AccountTokens_idPerson_fkey" FOREIGN KEY ("idPerson") REFERENCES "AccountPerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

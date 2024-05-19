-- CreateTable
CREATE TABLE "accountManagement" (
    "id" TEXT NOT NULL,
    "amountIntended" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "accountManagement_id_key" ON "accountManagement"("id");

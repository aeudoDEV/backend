-- CreateTable
CREATE TABLE "StockProduct" (
    "id" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "typeProduct" TEXT NOT NULL,
    "amountStock" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StockProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListedProduct" (
    "id" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "typeProduct" TEXT NOT NULL,
    "amountListed" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListedProduct_pkey" PRIMARY KEY ("id")
);

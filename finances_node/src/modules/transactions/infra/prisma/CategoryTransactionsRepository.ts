import { CategoryTransaction } from "@prisma/client";
import { prisma } from "../../../../infra/database/PrismaClient";
import { ICreateCategoryTransaction } from "../../dtos/ICreateCategoryTransaction";
import { IUpdateCategoryTransctionDTO } from "../../dtos/IUpdateCategoryTransactionDTO";
import { ICategoryTransactionsRepository } from "../../repositories/ICategoryTransactionsRepository";

class CategoryTransactionsRepository
  implements ICategoryTransactionsRepository
{
  async createCategoryTransaction({
    name,
    idPerson,
    type,
  }: ICreateCategoryTransaction): Promise<CategoryTransaction> {
    const createCategory = await prisma.categoryTransaction.create({
      data: {
        name,
        idPerson,
        type,
      },
    });

    return createCategory;
  }

  async showCategoryTransactions(): Promise<CategoryTransaction[]> {
    const showCategories = await prisma.categoryTransaction.findMany({});

    return showCategories;
  }

  async findCategoryTransactionById(
    idCategoryTransaction: string
  ): Promise<CategoryTransaction | null> {
    const findCategory = await prisma.categoryTransaction.findFirst({
      where: {
        id: idCategoryTransaction,
      },
    });

    return findCategory;
  }

  async updateCategoryTransaction(
    idCategoryTransaction: string,
    { name, type }: IUpdateCategoryTransctionDTO
  ): Promise<void> {
    await prisma.categoryTransaction.updateMany({
      where: {
        id: idCategoryTransaction,
      },
      data: {
        name,
        type,
      },
    });
  }

  async deleteCategoryTransaction(
    idCategoryTransaction: string
  ): Promise<void> {
    await prisma.categoryTransaction.delete({
      where: {
        id: idCategoryTransaction,
      },
    });
  }
}

export { CategoryTransactionsRepository };

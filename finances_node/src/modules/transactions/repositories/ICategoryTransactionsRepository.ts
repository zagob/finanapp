import { CategoryTransaction } from "@prisma/client";
import { ICreateCategoryTransaction } from "../dtos/ICreateCategoryTransaction";
import { IUpdateCategoryTransctionDTO } from "../dtos/IUpdateCategoryTransactionDTO";

interface ICategoryTransactionsRepository {
  createCategoryTransaction(
    data: ICreateCategoryTransaction
  ): Promise<CategoryTransaction>;
  updateCategoryTransaction(
    idCategoryTransaction: string,
    category: IUpdateCategoryTransctionDTO
  ): Promise<void>;
  deleteCategoryTransaction(idCategoryTransaction: string): Promise<void>;
  showCategoryTransactions(): Promise<CategoryTransaction[]>;
  findCategoryTransactionById(
    idCategoryTransaction: string
  ): Promise<CategoryTransaction | null>;
}

export { ICategoryTransactionsRepository };

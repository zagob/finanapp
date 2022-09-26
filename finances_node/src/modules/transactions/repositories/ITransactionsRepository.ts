import { CategoryTransaction, Transactions } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { ICreateCategoryTransaction } from "../dtos/ICreateCategoryTransaction";
import { ICreateTransaction } from "../dtos/ICreateTransaction";
import { IShowTransactionsDTO } from "../dtos/IShowTransactionsDTO";
import { IUpdateTransactionDTO } from "../dtos/IUpdateTransactionDTO";

interface ITransactionsRepository {
  getByName(name: string): Promise<CategoryTransaction | null>;
  createTransaction(data: ICreateTransaction): Promise<Transactions>;
  showTransactions(): Promise<IShowTransactionsDTO[]>;
  findTransactionsByIdBank(idBank: string): Promise<Transactions[]>;
  findTransactionsQuantityByIdBank(
    idBank: string
  ): Promise<{ quantity: Decimal; type: string | null }[]>;
  deleteTransactionsById(idTransition: string): Promise<void>;
  deleteAllTransactions(idBank: string): Promise<void>;
  findTransactionById(idTransition: string): Promise<Transactions | null>;
  updateTransactionById(
    idTransaction: string,
    data: IUpdateTransactionDTO
  ): Promise<void>;
}

export { ITransactionsRepository };

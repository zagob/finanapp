import { CategoryTransaction, Transactions } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { prisma } from "../../../../infra/database/PrismaClient";
import { ICreateCategoryTransaction } from "../../dtos/ICreateCategoryTransaction";
import { ICreateTransaction } from "../../dtos/ICreateTransaction";
import { IShowTransactionsDTO } from "../../dtos/IShowTransactionsDTO";
import { IUpdateTransactionDTO } from "../../dtos/IUpdateTransactionDTO";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

class TransactionsRepository implements ITransactionsRepository {
  async findTransactionsQuantityByIdBank(
    idBank: string
  ): Promise<{ quantity: Decimal; type: "income" | "outcome" }[]> {
    const transactions = await prisma.transactions.findMany({
      where: {
        idBank,
        isPaid: true,
      },
      select: {
        quantity: true,
        type: true,
      },
    });

    return transactions;
  }

  async updateTransactionById(
    idTransaction: string,
    {
      idBank,
      idCategoryTransaction,
      isPaid,
      name,
      quantity,
      type,
    }: IUpdateTransactionDTO
  ): Promise<void> {
    await prisma.transactions.updateMany({
      where: {
        id: idTransaction,
      },
      data: {
        idBank,
        idCategoryTransaction,
        isPaid,
        name,
        quantity,
        type,
      },
    });

    return;
  }

  async deleteAllTransactions(idBank: string): Promise<void> {
    await prisma.transactions.deleteMany({
      where: {
        idBank,
      },
    });
  }

  async findTransactionById(
    idTransition: string
  ): Promise<Transactions | null> {
    const transaction = await prisma.transactions.findFirst({
      where: {
        id: idTransition,
      },
    });

    return transaction;
  }

  async deleteTransactionsById(idTransition: string): Promise<void> {
    await prisma.transactions.delete({
      where: {
        id: idTransition,
      },
    });
  }

  async findTransactionsByIdBank(idBank: string): Promise<Transactions[]> {
    const transactions = await prisma.transactions.findMany({
      where: {
        idBank,
      },
    });

    return transactions;
  }

  async getByName(name: string): Promise<CategoryTransaction | null> {
    const getName = await prisma.categoryTransaction.findFirst({
      where: {
        name,
      },
    });

    return getName;
  }

  async createTransaction({
    name,
    quantity,
    type,
    idPerson,
    isPaid,
    idBank,
    date,
    idCategoryTransaction,
  }: ICreateTransaction): Promise<Transactions> {
    const create = await prisma.transactions.create({
      data: {
        name,
        type,
        quantity,
        idPerson,
        isPaid,
        idBank,
        idCategoryTransaction,
        date,
      },
    });

    return create;
  }

  async showTransactions(): Promise<IShowTransactionsDTO[]> {
    const show = await prisma.transactions.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        createdAt: true,
        isPaid: true,
        quantity: true,
        categoryTransaction: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },
        accountBank: {
          select: {
            name: true,
            bank: true,
          },
        },
      },
    });

    const transitions = show.map((item) => ({
      ...item,
      quantity: Number(item.quantity),
    }));

    return transitions;
  }
}

export { TransactionsRepository };

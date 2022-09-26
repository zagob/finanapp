import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { AccountBankRepository } from "../../../accountsBank/infra/prisma/AccountBankRepository";
import { ICreateTransaction } from "../../dtos/ICreateTransaction";
import { CategoryTransactionsRepository } from "../../infra/prisma/CategoryTransactionsRepository";
import { TransactionsRepository } from "../../infra/prisma/TransactionsRepository";

@injectable()
class CreateTransactionsUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: TransactionsRepository,

    @inject("AccountBankRepository")
    private accountBankRepository: AccountBankRepository,

    @inject("CategoryTransactionsRepository")
    private categoryTransactionsRepository: CategoryTransactionsRepository
  ) {}

  async execute({
    name,
    quantity,
    type,
    isPaid,
    automaticCredit,
    date,
    idPerson,
    idBank,
    idCategoryTransaction,
  }: ICreateTransaction) {
    console.log({
      name,
      quantity,
      type,
      isPaid,
      automaticCredit,
      date,
      idPerson,
      idBank,
      idCategoryTransaction,
    });
    const findAccount = await this.accountBankRepository.findById(idBank);

    if (idCategoryTransaction) {
      const findCategoryTransaction =
        await this.categoryTransactionsRepository.findCategoryTransactionById(
          idCategoryTransaction
        );

      if (!findCategoryTransaction) {
        throw new AppError("Not exist category!");
      }
    }

    if (type !== "income" && type !== "outcome") {
      throw new AppError("Type not valid!");
    }

    if (!findAccount) {
      throw new AppError("Not exist account type");
    }

    if (findAccount.idPerson !== idPerson) {
      throw new AppError("Not exist account type");
    }

    const accountBank = await this.accountBankRepository.findById(idBank);

    const quantityAccountBank = Number(accountBank?.quantity);

    const total =
      type === "income"
        ? quantityAccountBank + quantity
        : quantityAccountBank - quantity;

    await this.accountBankRepository.updateAccountBankQuantity(
      idBank,
      String(total)
    );

    const createTransaction =
      await this.transactionsRepository.createTransaction({
        name,
        quantity,
        type,
        date,
        isPaid,
        idPerson,
        idBank,
        idCategoryTransaction,
      });

    return createTransaction;
  }
}

export { CreateTransactionsUseCase };

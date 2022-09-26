import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { reduceTransctionsValue } from "../../../../utils/reduceTransactionsValues";
import { AccountBankRepository } from "../../../accountsBank/infra/prisma/AccountBankRepository";
import { TransactionsRepository } from "../../infra/prisma/TransactionsRepository";

@injectable()
class DeleteTransactionsUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: TransactionsRepository,

    @inject("AccountBankRepository")
    private accountBankRepository: AccountBankRepository
  ) {}

  async execute(idTransaction: string) {
    const transaction = await this.transactionsRepository.findTransactionById(
      idTransaction
    );

    if (!transaction) {
      throw new AppError("Transaction not found!");
    }

    const accountBank = await this.accountBankRepository.findById(
      transaction.idBank
    );

    if (!accountBank) {
      throw new AppError("Not found Account bank!");
    }

    const quantityAccountBank = Number(accountBank.quantity);
    const quantityTransaction = Number(transaction.quantity);

    const SubtractQuantityAccountBankWithTransition =
      quantityAccountBank - quantityTransaction;

    await this.accountBankRepository.updateAccountBankQuantity(
      accountBank.id,
      String(SubtractQuantityAccountBankWithTransition)
    );

    await this.transactionsRepository.deleteTransactionsById(idTransaction);

    const transactionsQuantity =
      await this.transactionsRepository.findTransactionsQuantityByIdBank(
        accountBank.id
      );

    const totalQuantityAccountBank =
      reduceTransctionsValue(transactionsQuantity);

    await this.accountBankRepository.updateAccountBankQuantity(
      accountBank.id,
      totalQuantityAccountBank
    );
  }
}

export { DeleteTransactionsUseCase };

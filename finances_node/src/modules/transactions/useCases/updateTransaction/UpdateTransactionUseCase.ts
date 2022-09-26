import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { reduceTransctionsValue } from "../../../../utils/reduceTransactionsValues";
import { AccountBankRepository } from "../../../accountsBank/infra/prisma/AccountBankRepository";
import { IUpdateTransactionDTO } from "../../dtos/IUpdateTransactionDTO";
import { TransactionsRepository } from "../../infra/prisma/TransactionsRepository";

@injectable()
class UpdateTransactionUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: TransactionsRepository,

    @inject("AccountBankRepository")
    private accountBankRepository: AccountBankRepository
  ) {}
  async execute(
    idTransaction: string,
    {
      idBank,
      idCategoryTransaction,
      isPaid,
      name,
      quantity,
      type,
    }: IUpdateTransactionDTO
  ) {
    const transaction = await this.transactionsRepository.findTransactionById(
      idTransaction
    );

    if (!transaction) {
      throw new AppError("Transaction not Exist");
    }

    const accountBank = await this.accountBankRepository.findById(idBank);

    if (!accountBank) {
      throw new AppError("Account bank not Exist");
    }

    await this.transactionsRepository.updateTransactionById(idTransaction, {
      idBank,
      idCategoryTransaction,
      isPaid,
      name,
      quantity,
      type,
    });

    const transactionsQuantity =
      await this.transactionsRepository.findTransactionsQuantityByIdBank(
        idBank
      );

    const totalAccountBank = reduceTransctionsValue(transactionsQuantity);

    await this.accountBankRepository.updateAccountBankQuantity(
      idBank,
      totalAccountBank
    );
  }
}

export { UpdateTransactionUseCase };

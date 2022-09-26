import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { TransactionsRepository } from "../../../transactions/infra/prisma/TransactionsRepository";
import { AccountBankRepository } from "../../infra/prisma/AccountBankRepository";

@injectable()
class DeleteAccountBankUseCase {
  constructor(
    @inject("AccountBankRepository")
    private accountBankRepository: AccountBankRepository,

    @inject("TransactionsRepository")
    private transactionsRepository: TransactionsRepository
  ) {}

  async execute(idBank: string) {
    const existAccountBank = await this.accountBankRepository.findById(idBank);

    if (!existAccountBank) {
      throw new AppError("Account bank not found!");
    }

    await this.transactionsRepository.deleteAllTransactions(idBank);
    await this.accountBankRepository.deleteAccountBank(idBank);
  }
}

export { DeleteAccountBankUseCase };

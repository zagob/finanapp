import { inject, injectable } from "tsyringe";
import { TransactionsRepository } from "../../../transactions/infra/prisma/TransactionsRepository";
import { AccountBankRepository } from "../../infra/prisma/AccountBankRepository";

@injectable()
class GetAccountBankByIdPersonUseCase {
  constructor(
    @inject("AccountBankRepository")
    private accountBankRepository: AccountBankRepository,

    @inject("TransactionsRepository")
    private transactionsRepository: TransactionsRepository
  ) {}

  async execute(idAccount: string) {
    // const transactions = await this.transactionsRepository.showTransactions();

    const getAccountTypeMoney =
      this.accountBankRepository.showAccountsById(idAccount);

    return getAccountTypeMoney;
  }
}

export { GetAccountBankByIdPersonUseCase };

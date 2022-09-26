import { inject, injectable } from "tsyringe";
import { TransactionsRepository } from "../../infra/prisma/TransactionsRepository";

@injectable()
class ShowTransactionsUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: TransactionsRepository
  ) {}

  async execute() {
    const showTransactions = this.transactionsRepository.showTransactions();

    return showTransactions;
  }
}

export { ShowTransactionsUseCase };

import { inject, injectable } from "tsyringe";
import { CategoryTransactionsRepository } from "../../infra/prisma/CategoryTransactionsRepository";
import { TransactionsRepository } from "../../infra/prisma/TransactionsRepository";

@injectable()
class ShowCategoriesTransactionUseCase {
  constructor(
    @inject("CategoryTransactionsRepository")
    private categoryTransactionsRepository: CategoryTransactionsRepository
  ) {}

  async execute() {
    const showCategories =
      await this.categoryTransactionsRepository.showCategoryTransactions();

    return showCategories;
  }
}

export { ShowCategoriesTransactionUseCase };

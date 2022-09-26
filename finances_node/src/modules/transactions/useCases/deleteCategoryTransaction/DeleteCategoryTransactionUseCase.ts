import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CategoryTransactionsRepository } from "../../infra/prisma/CategoryTransactionsRepository";

@injectable()
class DeleteCategoryTransactionUseCase {
  constructor(
    @inject("CategoryTransactionsRepository")
    private categoryTransactionsRepository: CategoryTransactionsRepository
  ) {}

  async execute(idCategoryTransaction: string) {
    const existCategoryTransaction =
      this.categoryTransactionsRepository.findCategoryTransactionById(
        idCategoryTransaction
      );

    if (!existCategoryTransaction) {
      throw new AppError("Does not exist category!");
    }

    await this.categoryTransactionsRepository.deleteCategoryTransaction(
      idCategoryTransaction
    );
  }
}

export { DeleteCategoryTransactionUseCase };

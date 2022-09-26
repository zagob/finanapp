import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateCategoryTransctionDTO } from "../../dtos/IUpdateCategoryTransactionDTO";
import { CategoryTransactionsRepository } from "../../infra/prisma/CategoryTransactionsRepository";

@injectable()
class UpdateCategoryTransactionUseCase {
  constructor(
    @inject("CategoryTransactionsRepository")
    private categoryTransactionsRepository: CategoryTransactionsRepository
  ) {}

  async execute(
    idCategoryTransaction: string,
    { name, type }: IUpdateCategoryTransctionDTO
  ) {
    const category =
      await this.categoryTransactionsRepository.findCategoryTransactionById(
        idCategoryTransaction
      );

    if (!category) {
      throw new AppError("Category not exist!");
    }

    await this.categoryTransactionsRepository.updateCategoryTransaction(
      idCategoryTransaction,
      {
        name,
        type,
      }
    );
  }
}

export { UpdateCategoryTransactionUseCase };

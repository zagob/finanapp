import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateCategoryTransaction } from "../../dtos/ICreateCategoryTransaction";
import { TransactionsRepository } from "../../infra/prisma/TransactionsRepository";

@injectable()
class CreateCategoryTransactionsUseCase {
  constructor(
    @inject("TransactionsRepository")
    private transactionRepository: TransactionsRepository
  ) {}

  async execute({ name, idPerson, type }: ICreateCategoryTransaction) {
    const categoryExist = await this.transactionRepository.getByName(name);

    if (categoryExist) {
      throw new AppError("Category Already exist!");
    }

    const createCategory =
      await this.transactionRepository.createCategoryTransaction({
        name,
        idPerson,
        type,
      });

    return createCategory;
  }
}

export { CreateCategoryTransactionsUseCase };

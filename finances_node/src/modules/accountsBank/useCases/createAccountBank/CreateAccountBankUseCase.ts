import { inject, injectable } from "tsyringe";
import { ICreateAccountBankDTO } from "../../dtos/ICreateAccountBankDTO";
import { AccountBankRepository } from "../../infra/prisma/AccountBankRepository";

@injectable()
class CreateAccountBankUseCase {
  constructor(
    @inject("AccountBankRepository")
    private accountBankRepository: AccountBankRepository
  ) {}

  async execute({
    name,
    quantity,
    bank,
    idPerson,
    idCategoryBank,
  }: ICreateAccountBankDTO) {
    const createAccountType =
      await this.accountBankRepository.createAccountBank({
        name,
        quantity,
        bank,
        idPerson,
        idCategoryBank,
      });

    return createAccountType;
  }
}

export { CreateAccountBankUseCase };

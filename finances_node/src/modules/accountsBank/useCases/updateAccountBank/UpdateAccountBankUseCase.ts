import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateAccountBank } from "../../dtos/IUpdateAccountBank";
import { AccountBankRepository } from "../../infra/prisma/AccountBankRepository";

@injectable()
class UpdateAccountBankUseCase {
  constructor(
    @inject("AccountBankRepository")
    private accountBankRepository: AccountBankRepository
  ) {}

  async execute({ idAccountBank, bank, name, quantity }: IUpdateAccountBank) {
    const existAccountBank = await this.accountBankRepository.findById(
      idAccountBank
    );

    if (!existAccountBank) {
      throw new AppError("Account bank not exist!");
    }

    const updateBank = await this.accountBankRepository.updateAccountBank({
      idAccountBank,
      bank,
      name,
      quantity,
    });

    return updateBank;
  }
}

export { UpdateAccountBankUseCase };

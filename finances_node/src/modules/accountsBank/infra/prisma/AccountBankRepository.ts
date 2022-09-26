import { AccountBank } from "@prisma/client";
import { prisma } from "../../../../infra/database/PrismaClient";
import { ICreateAccountBankDTO } from "../../dtos/ICreateAccountBankDTO";
import { IUpdateAccountBank } from "../../dtos/IUpdateAccountBank";
import { IAccountBankRepository } from "../../repositories/IAccountBankRepository";

class AccountBankRepository implements IAccountBankRepository {
  async deleteAccountBank(idBank: string): Promise<void> {
    await prisma.accountBank.delete({
      where: {
        id: idBank,
      },
    });
  }

  async updateAccountBankQuantity(
    idBank: string,
    quantity: string
  ): Promise<void> {
    const updateQuantity = await prisma.accountBank.update({
      where: {
        id: idBank,
      },
      data: {
        quantity,
      },
    });
  }

  async updateAccountBank({
    idAccountBank,
    bank,
    name,
    quantity,
  }: IUpdateAccountBank): Promise<void> {
    const updateBank = await prisma.accountBank.updateMany({
      where: {
        id: idAccountBank,
      },
      data: {
        bank,
        name,
        quantity,
      },
    });

    // return updateBank;
  }

  async findById(id: string): Promise<AccountBank | null> {
    const findAccount = await prisma.accountBank.findFirst({
      where: {
        id,
      },
    });

    return findAccount;
  }

  async showAccountsById(idPerson: string): Promise<AccountBank[]> {
    const getAccountTypeMoney = await prisma.accountBank.findMany({
      where: {
        idPerson,
      },
    });

    return getAccountTypeMoney;
  }

  async createAccountBank({
    name,
    quantity,
    idPerson,
    bank,
  }: ICreateAccountBankDTO): Promise<AccountBank> {
    const createAccountType = await prisma.accountBank.create({
      data: {
        name,
        quantity,
        idPerson,
        bank,
      },
    });

    return createAccountType;
  }
}

export { AccountBankRepository };

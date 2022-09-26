import { AccountBank } from "@prisma/client";
import { ICreateAccountBankDTO } from "../dtos/ICreateAccountBankDTO";
import { IUpdateAccountBank } from "../dtos/IUpdateAccountBank";

interface IAccountBankRepository {
  createAccountBank(data: ICreateAccountBankDTO): Promise<AccountBank>;
  showAccountsById(idPerson: string): Promise<AccountBank[]>;
  findById(id: string): Promise<AccountBank | null>;
  updateAccountBank(data: IUpdateAccountBank): Promise<void>;
  updateAccountBankQuantity(idBank: string, quantity: string): Promise<void>;
  deleteAccountBank(idBank: string): Promise<void>;
}

export { IAccountBankRepository };

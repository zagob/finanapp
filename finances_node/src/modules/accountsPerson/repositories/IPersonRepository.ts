import { AccountPerson } from "@prisma/client";
import { ICreatePersonDTO } from "../dtos/ICreatePersonDTO";

interface IPersonRepository {
  create(data: ICreatePersonDTO): Promise<AccountPerson>;
  findById(idAccount: string): Promise<AccountPerson | null>;
  findByEmail(email: string): Promise<AccountPerson | null>;
}

export { IPersonRepository };

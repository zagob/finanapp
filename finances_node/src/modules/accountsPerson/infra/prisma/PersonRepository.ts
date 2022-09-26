import { AccountPerson } from "@prisma/client";
import { prisma } from "../../../../infra/database/PrismaClient";
import { ICreatePersonDTO } from "../../dtos/ICreatePersonDTO";
import { IPersonRepository } from "../../repositories/IPersonRepository";

class PersonRepository implements IPersonRepository {
  async create({
    name,
    email,
    password,
    image,
  }: ICreatePersonDTO): Promise<AccountPerson> {
    const createAccount = await prisma.accountPerson.create({
      data: {
        name,
        email,
        password,
        image,
      },
    });

    return createAccount;
  }

  async findById(idAccount: string): Promise<AccountPerson | null> {
    const findAccountById = await prisma.accountPerson.findUniqueOrThrow({
      where: {
        id: idAccount,
      },
    });

    return findAccountById;
  }

  async findByEmail(email: string): Promise<AccountPerson | null> {
    const findAccountByEmail = await prisma.accountPerson.findFirst({
      where: {
        email,
      },
    });

    return findAccountByEmail;
  }
}

export { PersonRepository };

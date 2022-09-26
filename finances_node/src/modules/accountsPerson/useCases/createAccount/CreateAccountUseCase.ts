import { AccountPerson } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreatePersonDTO } from "../../dtos/ICreatePersonDTO";
import { IPersonRepository } from "../../repositories/IPersonRepository";

@injectable()
class CreateAccountUseCase {
  constructor(
    @inject("PersonRepository")
    private personRepository: IPersonRepository
  ) {}
  async execute({
    name,
    email,
    password,
    image,
  }: ICreatePersonDTO): Promise<AccountPerson | null> {
    const userExists = await this.personRepository.findByEmail(email);

    if (userExists) {
      throw new AppError("Account already exists");
    }

    const passwordHash = await hash(password, 8);

    const createUser = await this.personRepository.create({
      name,
      email,
      password: passwordHash,
      image,
    });

    return createUser;
  }
}

export { CreateAccountUseCase };

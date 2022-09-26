import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IPersonRepository } from "../../repositories/IPersonRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticateAccountUseCase {
  constructor(
    @inject("PersonRepository")
    private personRepository: IPersonRepository
  ) {}
  async execute({ email, password }: IRequest) {
    const findAccount = await this.personRepository.findByEmail(email);

    const { secret_token, expires_in_token } = auth;

    if (!findAccount) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordHash = await compare(password, findAccount.password);

    if (!passwordHash) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, secret_token, {
      subject: findAccount.id,
      expiresIn: expires_in_token,
    });

    return token;
  }
}

export { AuthenticateAccountUseCase };

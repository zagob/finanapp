import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateAccountUseCase } from "./AuthenticateAccountUseCase";

class AuthenticateAccountController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authenticateAccountUseCase = container.resolve(
      AuthenticateAccountUseCase
    );

    const token = await authenticateAccountUseCase.execute({
      email,
      password,
    });

    return res.json(token);
  }
}

export { AuthenticateAccountController };

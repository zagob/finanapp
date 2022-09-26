import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

class CreateAccountController {
  async handle(req: Request, res: Response) {
    const { name, email, password, image } = req.body;

    const createAccountUseCase = container.resolve(CreateAccountUseCase);

    const result = await createAccountUseCase.execute({
      name,
      email,
      password,
      image,
    });

    return res.status(201).json(result);
  }
}

export { CreateAccountController };

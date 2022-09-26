import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAccountBankUseCase } from "./CreateAccountBankUseCase";

class CreateAccountBankController {
  async handle(req: Request, res: Response) {
    const { name, quantity, bank, idCategoryBank } = req.body;
    const { id } = req.person;

    const createAccountBankUseCase = container.resolve(
      CreateAccountBankUseCase
    );

    const result = await createAccountBankUseCase.execute({
      name,
      bank,
      quantity,
      idPerson: id,
      idCategoryBank,
    });

    return res.json(result);
  }
}

export { CreateAccountBankController };

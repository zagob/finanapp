import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAccountBankUseCase } from "./UpdateAccountBankUseCase";

class UpdateAccountBankController {
  async handle(req: Request, res: Response) {
    const { bank, name, quantity } = req.body;
    const { idAccountBank } = req.params;

    console.log(idAccountBank);

    const updateAccountBankUseCase = container.resolve(
      UpdateAccountBankUseCase
    );

    const result = await updateAccountBankUseCase.execute({
      bank,
      idAccountBank,
      name,
      quantity,
    });

    return res.json(result);
  }
}

export { UpdateAccountBankController };

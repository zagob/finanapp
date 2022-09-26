import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAccountBankUseCase } from "./DeleteAccountBankUseCase";

class DeleteAccountBankController {
  async handle(req: Request, res: Response) {
    const { idBank } = req.params;

    const deleteAccountBankUseCase = container.resolve(
      DeleteAccountBankUseCase
    );

    const result = await deleteAccountBankUseCase.execute(idBank);

    return res.json(result);
  }
}

export { DeleteAccountBankController };

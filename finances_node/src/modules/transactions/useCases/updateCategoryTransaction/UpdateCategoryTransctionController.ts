import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCategoryTransactionUseCase } from "./UpdateCategoryTransactionUseCase";

class UpdateCategoryTransctionController {
  async handle(req: Request, res: Response) {
    const { name, type } = req.body;
    const { idCategoryTransaction } = req.params;

    const updateCategoryTransactionUseCase = container.resolve(
      UpdateCategoryTransactionUseCase
    );

    const result = await updateCategoryTransactionUseCase.execute(
      idCategoryTransaction,
      {
        name,
        type,
      }
    );

    return res.json(result);
  }
}

export { UpdateCategoryTransctionController };

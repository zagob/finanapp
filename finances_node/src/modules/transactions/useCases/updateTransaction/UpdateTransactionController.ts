import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTransactionUseCase } from "./UpdateTransactionUseCase";

class UpdateTransactionController {
  async handle(req: Request, res: Response) {
    const { idBank, idCategoryTransaction, isPaid, name, quantity, type } =
      req.body;
    const { idTransaction } = req.params;

    const updateTransactionUseCase = container.resolve(
      UpdateTransactionUseCase
    );

    const result = await updateTransactionUseCase.execute(idTransaction, {
      idBank,
      idCategoryTransaction,
      isPaid,
      name,
      quantity,
      type,
    });

    return res.json(result);
  }
}

export { UpdateTransactionController };

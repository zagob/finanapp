import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTransactionsUseCase } from "./DeleteTransactionsUseCase";

class DeleteTransactionsController {
  async handle(req: Request, res: Response) {
    const { idTransaction } = req.params;

    const deleteTransactionUseCase = container.resolve(
      DeleteTransactionsUseCase
    );

    const result = await deleteTransactionUseCase.execute(idTransaction);

    return res.json(result);
  }
}

export { DeleteTransactionsController };

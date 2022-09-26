import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryTransactionUseCase } from "./DeleteCategoryTransactionUseCase";

class DeleteCategoryTransactionController {
  async handle(req: Request, res: Response) {
    const { idCategoryTransaction } = req.params;

    const deleteCategory = container.resolve(DeleteCategoryTransactionUseCase);

    const result = await deleteCategory.execute(idCategoryTransaction);

    res.json(result);
  }
}

export { DeleteCategoryTransactionController };

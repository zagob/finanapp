import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowCategoriesTransactionUseCase } from "./ShowCategoriesTransactionUseCase";

class ShowCategoriesTransactionController {
  async handle(req: Request, res: Response) {
    const showCategoriesTransactionsUseCase = container.resolve(
      ShowCategoriesTransactionUseCase
    );

    const result = await showCategoriesTransactionsUseCase.execute();

    return res.json(result);
  }
}

export { ShowCategoriesTransactionController };

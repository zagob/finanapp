import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowTransactionsUseCase } from "./ShowTransactionsUseCase";

class ShowTransactionsController {
  async handle(req: Request, res: Response) {
    const showTransactionsUseCase = container.resolve(ShowTransactionsUseCase);

    const result = await showTransactionsUseCase.execute();

    return res.json(result);
  }
}

export { ShowTransactionsController };

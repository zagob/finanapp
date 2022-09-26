import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryTransactionsUseCase } from "./CreateCategoryTransactionsUseCase";

class CreateCategoryTransactionsController {
  async handle(req: Request, res: Response) {
    const { name, type } = req.body;
    const { id } = req.person;

    const createCategoryTransactionUseCase = container.resolve(
      CreateCategoryTransactionsUseCase
    );

    const result = await createCategoryTransactionUseCase.execute({
      name,
      idPerson: id,
      type,
    });

    return res.status(201).json(result);
  }
}

export { CreateCategoryTransactionsController };

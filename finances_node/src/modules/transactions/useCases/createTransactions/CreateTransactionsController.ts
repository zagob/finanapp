import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTransactionsUseCase } from "./CreateTransactionsUseCase";

class CreateTransactionsController {
  async handle(req: Request, res: Response) {
    const {
      name,
      quantity,
      type,
      date,
      isPaid,
      automaticCredit,
      idBank,
      idCategoryTransaction,
    } = req.body;
    const { id } = req.person;

    const createTransactionsUseCase = container.resolve(
      CreateTransactionsUseCase
    );

    const result = await createTransactionsUseCase.execute({
      name,
      quantity,
      type,
      date,
      isPaid,
      automaticCredit,
      idPerson: id,
      idBank,
      idCategoryTransaction,
    });

    return res.status(201).json(result);
  }
}

export { CreateTransactionsController };

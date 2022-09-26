import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAccountBankByIdPersonUseCase } from "./GetAccountBankByIdPersonUseCase";

class GetAccountBankByIdPersonController {
  async handle(req: Request, res: Response) {
    const { id } = req.person;
    const getAccountBankByIdPersonUseCase = container.resolve(
      GetAccountBankByIdPersonUseCase
    );

    const result = await getAccountBankByIdPersonUseCase.execute(id);

    return res.json(result);
  }
}

export { GetAccountBankByIdPersonController };

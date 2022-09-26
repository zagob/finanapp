import { Router } from "express";
import { CreateAccountController } from "../../../../modules/accountsPerson/useCases/createAccount/CreateAccountController";

export const accountsRoutes = Router();

const createAccount = new CreateAccountController();

accountsRoutes.post("/create", createAccount.handle);

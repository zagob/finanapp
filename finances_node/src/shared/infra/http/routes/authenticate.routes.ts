import { Router } from "express";
import { AuthenticateAccountController } from "../../../../modules/accountsPerson/useCases/authenticateAccount/AuthenticateAccountController";

export const authenticateRoutes = Router();

const authenticateAccountController = new AuthenticateAccountController();

authenticateRoutes.post("/sessions", authenticateAccountController.handle);

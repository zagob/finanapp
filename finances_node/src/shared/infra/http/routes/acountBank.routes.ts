import { Router } from "express";
import { CreateAccountBankController } from "../../../../modules/accountsBank/useCases/createAccountBank/CreateAccountBankController";
import { DeleteAccountBankController } from "../../../../modules/accountsBank/useCases/deleteAccountBank/DeleteAccountBankController";
import { GetAccountBankByIdPersonController } from "../../../../modules/accountsBank/useCases/getAccountBankByIdPerson/GetAccountBankByIdPersonController";
import { UpdateAccountBankController } from "../../../../modules/accountsBank/useCases/updateAccountBank/UpdateAccountBankController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

export const accountBankRoutes = Router();

const createAccountBankController = new CreateAccountBankController();
const getAccountBankByIdPersonController =
  new GetAccountBankByIdPersonController();

const updateAccountBankController = new UpdateAccountBankController();
const deleteAccountBankController = new DeleteAccountBankController();

accountBankRoutes.post(
  "/create",
  ensureAuthenticated,
  createAccountBankController.handle
);

accountBankRoutes.get(
  "/show",
  ensureAuthenticated,
  getAccountBankByIdPersonController.handle
);

accountBankRoutes.put(
  "/update/:idAccountBank",
  updateAccountBankController.handle
);

accountBankRoutes.delete("/delete/:idBank", deleteAccountBankController.handle);

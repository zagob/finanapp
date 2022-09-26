import { Router } from "express";
import { CreateCategoryTransactionsController } from "../../../../modules/transactions/useCases/createCategoryTransactions/CreateCategoryTransactionsController";
import { CreateTransactionsController } from "../../../../modules/transactions/useCases/createTransactions/CreateTransactionsController";
import { DeleteCategoryTransactionController } from "../../../../modules/transactions/useCases/deleteCategoryTransaction/DeleteCategoryTransactionController";
import { DeleteTransactionsController } from "../../../../modules/transactions/useCases/deleteTransitions/DeleteTransactionsController";
import { ShowCategoriesTransactionController } from "../../../../modules/transactions/useCases/showCategoriesTransaction/ShowCategoriesTransactionController";
import { ShowTransactionsController } from "../../../../modules/transactions/useCases/showTransactions/ShowTransactionsController";
import { UpdateCategoryTransctionController } from "../../../../modules/transactions/useCases/updateCategoryTransaction/UpdateCategoryTransctionController";
import { UpdateTransactionController } from "../../../../modules/transactions/useCases/updateTransaction/UpdateTransactionController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

export const transactionsRoutes = Router();

const createCategoryTransactionsController =
  new CreateCategoryTransactionsController();

const createTransactionController = new CreateTransactionsController();
const showCategoriesTransactionController =
  new ShowCategoriesTransactionController();

const showTransactionsController = new ShowTransactionsController();
const deleteTransactionController = new DeleteTransactionsController();
const updateTransactionController = new UpdateTransactionController();

const updateCategoryTransactionsController =
  new UpdateCategoryTransctionController();
const deleteCategoryTransactionController =
  new DeleteCategoryTransactionController();

transactionsRoutes.post(
  "/category",
  createCategoryTransactionsController.handle
);

transactionsRoutes.post("/transaction", createTransactionController.handle);
transactionsRoutes.get(
  "/categories",
  showCategoriesTransactionController.handle
);
transactionsRoutes.get("/transactions", showTransactionsController.handle);
transactionsRoutes.delete(
  "/delete/:idTransaction",
  deleteTransactionController.handle
);
transactionsRoutes.delete(
  "/category/:idCategoryTransaction",
  deleteCategoryTransactionController.handle
);
transactionsRoutes.put(
  "/update/:idTransaction",
  updateTransactionController.handle
);

transactionsRoutes.put(
  "/category/:idCategoryTransaction",
  updateCategoryTransactionsController.handle
);

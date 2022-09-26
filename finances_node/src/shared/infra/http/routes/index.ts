import { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { accountsRoutes } from "./accountPerson.routes";
import { accountBankRoutes } from "./acountBank.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { transactionsRoutes } from "./transactions.routes";

export const router = Router();

router.use("/person", accountsRoutes);

router.use("/authenticate", authenticateRoutes);

router.use("/bank", ensureAuthenticated, accountBankRoutes);

router.use("/transactions", ensureAuthenticated, transactionsRoutes);

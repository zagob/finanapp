import { container } from "tsyringe";
import "./providers";
import { PersonRepository } from "../../modules/accountsPerson/infra/prisma/PersonRepository";
import { IPersonRepository } from "../../modules/accountsPerson/repositories/IPersonRepository";
import { IAccountBankRepository } from "../../modules/accountsBank/repositories/IAccountBankRepository";
import { AccountBankRepository } from "../../modules/accountsBank/infra/prisma/AccountBankRepository";
import { ITransactionsRepository } from "../../modules/transactions/repositories/ITransactionsRepository";
import { TransactionsRepository } from "../../modules/transactions/infra/prisma/TransactionsRepository";
import { ICategoryTransactionsRepository } from "../../modules/transactions/repositories/ICategoryTransactionsRepository";
import { CategoryTransactionsRepository } from "../../modules/transactions/infra/prisma/CategoryTransactionsRepository";

container.registerSingleton<IPersonRepository>(
  "PersonRepository",
  PersonRepository
);

container.registerSingleton<IAccountBankRepository>(
  "AccountBankRepository",
  AccountBankRepository
);

container.registerSingleton<ITransactionsRepository>(
  "TransactionsRepository",
  TransactionsRepository
);

container.registerSingleton<ICategoryTransactionsRepository>(
  "CategoryTransactionsRepository",
  CategoryTransactionsRepository
);

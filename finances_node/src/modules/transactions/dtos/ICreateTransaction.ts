interface ICreateTransaction {
  name: string;
  quantity: number;
  type: "income" | "outcome";
  idPerson: string;
  isPaid?: boolean;
  automaticCredit?: boolean;
  idBank: string;
  date: Date;
  idCategoryTransaction: string | null;
}

export { ICreateTransaction };

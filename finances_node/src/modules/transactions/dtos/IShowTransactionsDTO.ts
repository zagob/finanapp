interface IShowTransactionsDTO {
  id: string;
  name: string;
  type: "income" | "outcome";
  createdAt: Date;
  isPaid: boolean;
  quantity: number;
  categoryTransaction: {
    id: string;
    name: string;
    type: string;
  } | null;
  accountBank: {
    name: string;
    bank: string;
  };
}

export { IShowTransactionsDTO };

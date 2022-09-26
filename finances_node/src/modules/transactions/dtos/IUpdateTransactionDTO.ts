interface IUpdateTransactionDTO {
  name: string;
  quantity: number;
  isPaid: boolean;
  type: "income" | "outcome";
  idBank: string;
  idCategoryTransaction: string;
}

export { IUpdateTransactionDTO };

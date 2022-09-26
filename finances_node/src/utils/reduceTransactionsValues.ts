import { Decimal } from "@prisma/client/runtime";

interface Transaction {
  quantity: Decimal;
  type: string;
}

export function reduceTransctionsValue(transaction: Transaction[]): string {
  const totalAccountBank = transaction
    .reduce((acc, value) => {
      return value.type === "income"
        ? acc + Number(value.quantity)
        : acc - Number(value.quantity);
    }, 0)
    .toString();

  return totalAccountBank;
}

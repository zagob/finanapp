import {
  ArrowSquareDown,
  ArrowSquareUp,
  Bank,
  DotsThreeVertical,
  Money,
  TrendDown,
  TrendUp,
} from "phosphor-react";
import { formatNumberPrice } from "../utils/formatNumberPrice";

interface CardValuesProps {
  type: "TOTAL" | "INCOMES" | "OUTCOMES";
  total: number;
}

export function CardValues({ type, total }: CardValuesProps) {
  return (
    <div className="col-span-4 rounded-xl bg-blue-800 shadow-lg p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        {type === "TOTAL" && <Bank size={32} className="text-gray-200" />}
        {type === "INCOMES" && (
          <ArrowSquareUp size={32} className="text-gray-300" />
        )}
        {type === "OUTCOMES" && (
          <ArrowSquareDown size={32} className="text-gray-300" />
        )}

        <DotsThreeVertical size={32} className="text-gray-200" />
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col ">
          <span className="text-gray-400 text-sm">
            {type === "TOTAL" && "Valor total"}
            {type === "INCOMES" && "Entradas"}
            {type === "OUTCOMES" && "Saídas"}
          </span>
          <h4 className="text-gray-100 text-2xl font-bold">
            {formatNumberPrice(total)}
          </h4>
        </div>

        {type === "TOTAL" && (
          <div
            className={`${
              total < 0 ? "bg-red-500" : "bg-green-500"
            } rounded-md p-1`}
          >
            {total < 0 ? (
              <TrendDown size={26} className="text-gray-100" />
            ) : (
              <TrendUp size={26} className="text-gray-100" />
            )}
          </div>
        )}

        {type === "INCOMES" && (
          <div className="bg-green-500 rounded-md p-1">
            <TrendUp size={26} className="text-gray-100" />
          </div>
        )}

        {type === "OUTCOMES" && (
          <div className="bg-red-500 rounded-md p-1">
            <TrendDown size={26} className="text-gray-100" />
          </div>
        )}
      </div>
    </div>
  );
}

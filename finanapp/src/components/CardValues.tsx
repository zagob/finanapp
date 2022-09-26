import { Bank } from "phosphor-react";

interface CardValues {
  title: string;
  sald: string;
  color: "GREEN" | "RED" | "DEFAULT";
  accountBank?: boolean;
}

export function CardValues({
  title,
  accountBank,
  color = "DEFAULT",
  sald,
}: CardValues) {
  return (
    <div
      className={`${
        color === "DEFAULT"
          ? "bg-blue-700"
          : color === "GREEN"
          ? "bg-green-700"
          : "bg-red-800"
      } w-[200px] h-[120px] px-4 py-2 rounded-md shadow-xl flex flex-col justify-center gap-4`}
    >
      <div className="flex items-center gap-2">
        <Bank size={26} color="#fff" />
        <h2 className="text-gray-100 text-lg">{title}</h2>
      </div>

      <div className="flex flex-col">
        <span className="text-gray-100 text-xl">R${sald}</span>
        {accountBank && (
          <span className="text-sm text-gray-400">Account bank</span>
        )}
      </div>
    </div>
  );
}

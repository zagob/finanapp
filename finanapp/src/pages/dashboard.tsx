import { CardValues } from "../components/CardValues";

import dynamic from "next/dynamic";
import { SlidersHorizontal } from "phosphor-react";
import { TableTransactions } from "../components/TableTransactions";
import { options, series } from "../utils/optionsChart";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Dashboard() {
  return (
    <div className="h-screen p-6 grid grid-cols-12 gap-6">
      <div className="h-full col-span-7 flex flex-col gap-6">
        <div className="h-[150px] grid grid-cols-12 gap-6">
          {/* <CardValues type="TOTAL" total={2} />
          <CardValues type="INCOMES" total={2} />
          <CardValues type="OUTCOMES" total={2} /> */}
        </div>
        <div className="flex-1 grid grid-rows-6 gap-6">
          <div className="row-span-3 rounded-xl bg-blue-800 shadow-lg p-2">
            <div className="flex justify-between p-4">
              <h2 className="text-gray-200">Resumo</h2>
              <div></div>
              <SlidersHorizontal size={32} className="text-gray-200" />
            </div>
            {/* <ApexCharts height={190} options={options} series={series} /> */}
          </div>
          <div className="row-span-3 rounded-xl bg-blue-800 shadow-lg">
            <h2>Recent Transactions</h2>
            {/* <TableTransactions /> */}
          </div>
        </div>
      </div>
      <div className="h-full w-full col-span-5 flex flex-col gap-6">
        <div className="h-[420px] rounded-xl bg-blue-800 shadow-lg"></div>
        <div className="flex-1 rounded-xl bg-blue-800 shadow-lg">
          <div className="border rounded-full h-[200px] w-[200px]">
            <div className="bg-gray-100">asd</div>
          </div>
        </div>
      </div>
    </div>
  );
}

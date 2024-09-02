// import Charts from "@/components/charts";
import IncomeExpenceCard from "@/components/dashboard-cards";
import DashboardCashCard from "@/components/dashboard-cards/cashcard";
import Header from "@/components/header/header";
import RecordTable from "@/components/tables";
import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";

const CardInfo = [
  {
    color: "text-[#84CC16]",
    sumAmount: "1,400,000₮",
    incomeAmount: "Your Income Amount",
    arrow: <FaCircleArrowUp className="text-lime-500" />,
    change: "32% from last month",
  },
  {
    color: "text-[#0166FF]",
    sumAmount: "1,400,000₮",
    incomeAmount: "Your Expence Amount",
    arrow: <FaCircleArrowDown className="text-[#0166FF]" />,
    change: "32% from last month",
  },
];

const Dashboard = () => {
  return (
    <div className="bg-slate-200">
      <Header />
      <div className="w-[88%] m-auto border border-sky-500">
        <div className="flex justify-between">
          <DashboardCashCard />
          {CardInfo.map((inc) => (
            <IncomeExpenceCard
              color={inc.color}
              sumAmount={inc.sumAmount}
              incomeAmount={inc.incomeAmount}
              arrow={inc.arrow}
              change={inc.change}
            />
          ))}
        </div>
      </div>
      <div className="w-[88%] m-auto">
        <div className="flex gap-6">
          {/* <Charts />
          <Charts /> */}
        </div>

        <RecordTable />
      </div>
    </div>
  );
};
export default Dashboard;

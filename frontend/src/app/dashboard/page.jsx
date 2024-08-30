import Charts from "@/components/charts";
import IncomeExpenceCard from "@/components/dashboard-cards";
import DashboardCashCard from "@/components/dashboard-cards/cashcard";
import Header from "@/components/header/header";
import Tables from "@/components/tables";
import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-slate-200">
      <Header />
      <div className="w-[88%] m-auto border border-sky-500">
        <div className="flex justify-between">
          <DashboardCashCard />
          <IncomeExpenceCard />
          <IncomeExpenceCard />
        </div>
      </div>
      <div className="w-[88%] m-auto">
        <div className="flex gap-6">
          <Charts />
          <Charts />
        </div>

        <Tables />
      </div>
    </div>
  );
};
export default Dashboard;

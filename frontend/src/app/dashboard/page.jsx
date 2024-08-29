import IncomeExpenceCard from "@/components/dashboard-cards";
import DashboardCashCard from "@/components/dashboard-cards/cashcard";
import Header from "@/components/header/header";
import React from "react";

const Dashboard = () => {
  return (
    <div className="h-screen bg-slate-200">
      <Header />
      <div className="w-[88%] m-auto border border-sky-500">
        <div className="flex gap-6 justify-center">
          <DashboardCashCard />
          <IncomeExpenceCard />
          <IncomeExpenceCard />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

"use client";
import Charts from "@/app/components/dashboard/charts";
import { UserContext } from "@/app/components/context/user-context";
import DashboardCashCard from "@/app/components/dashboard/dashboard-cards/cashcard";
import RecordTable from "@/app/components/tables";
import React, { useContext, useEffect, useState } from "react";
import { RecordContext } from "@/app/components/context/userRecord-context";
import IncomeCard from "@/app/components/dashboard/dashboard-cards/incomeCard";
import ExpenceCard from "@/app/components/dashboard/dashboard-cards/expenseCard";

const Dashboard = () => {
  const { transactionData, sum, fetchSumData } = useContext(RecordContext);
  const { fetchUserData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserData(setIsLoading);
    fetchSumData();
  }, []);

  console.log("sum", sum);
  console.log("res.data", transactionData);

  return (
    <div className="bg-slate-200 pt-8">
      <div className="w-[88%] m-auto border-sky-500">
        <div className="flex justify-between">
          {isLoading ? (
            <div className="skeleton h-56 w-96"></div>
          ) : (
            <DashboardCashCard />
          )}
          {isLoading ? (
            <div className="skeleton h-56 w-96"></div>
          ) : (
            <IncomeCard sum={sum} />
          )}

          {isLoading ? (
            <div className="skeleton h-56 w-96"></div>
          ) : (
            <ExpenceCard sum={sum} />
          )}
        </div>
      </div>
      <div className="w-[88%] m-auto">
        <div className="flex gap-6">
          <Charts />
        </div>
        <RecordTable transactionData={transactionData} />
      </div>
    </div>
  );
};
export default Dashboard;

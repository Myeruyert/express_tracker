"use client";
import Charts from "@/app/components/charts";
import { UserContext } from "@/app/components/context/user-context";
import IncomeExpenceCard from "@/app/components/dashboard-cards";
import DashboardCashCard from "@/app/components/dashboard-cards/cashcard";
import RecordTable from "@/app/components/tables";
import { apiUrl } from "@/utils/util";
import React, { useContext, useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";
import { RecordContext } from "@/app/components/context/userRecord-context";

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
  const { transactionData } = useContext(RecordContext);
  // const [record, setRecord] = useState({
  //   name: "",
  //   amount: "",
  //   transaction_type: "",
  //   category_name: "",
  // });

  // const { user } = useContext(UserContext);
  // const [transactionData, setTransactionData] = useState([]);

  // const fetchTransaction = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/records/${user.id}`);
  //     if (res.status === 200) {
  //       const { record } = res.data;
  //       setRecord(record);
  //       console.log("RECORD", record);
  //     }
  //     // console.log("res.data", transactionData);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Failed to fetch transaction");
  //   }
  // };

  // useEffect(() => {
  //   if (user && user.id) {
  //     fetchTransaction();
  //   }
  // }, [user.id]);

  console.log("res.data", transactionData);

  return (
    <div className="bg-slate-200 pt-8">
      <div className="w-[88%] m-auto border-sky-500">
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
          <Charts />
        </div>
        <div></div>

        <RecordTable transactionData={transactionData} />
      </div>
    </div>
    // <div>
    //   <div>
    //     <h2>Records</h2>
    //     {transactionData?.transactions?.map((transaction, index) => {
    //       return (
    //         <div key={index} className="flex">
    //           <img src="/income.svg" alt="income" />
    //           <div>
    //             <p className="mb-1">{transaction?.name}</p>
    //             <p className="text-[#6B7280]">{transaction?.createdat}</p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};
export default Dashboard;

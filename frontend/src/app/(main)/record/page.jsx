// import Header from "@/app/components/header/header";
"use client";

import { RecordContext } from "@/app/components/context/userRecord-context";
import Aside from "@/app/components/record/aside";
import RecordHistories from "@/app/components/record/recordHistory";
import { useContext } from "react";

const RecordPage = () => {
  const { transactionData } = useContext(RecordContext);

  return (
    <div className="bg-slate-100 pt-8">
      <div className="w-[88%] m-auto flex gap-6">
        <Aside />
        <RecordHistories transactionData={transactionData} />
      </div>
    </div>
  );
};

export default RecordPage;

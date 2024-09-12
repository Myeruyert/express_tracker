// import Header from "@/app/components/header/header";
"use client";

import { UserContext } from "@/app/components/context/user-context";
import { RecordContext } from "@/app/components/context/userRecord-context";
import Aside from "@/app/components/record/aside";
import RecordHistories from "@/app/components/record/recordHistory";
import { useContext, useEffect } from "react";

const RecordPage = () => {
  const { transactionData } = useContext(RecordContext);
  const { fetchUserData } = useContext(UserContext);

  useEffect(() => {
    fetchUserData();
  }, []);

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

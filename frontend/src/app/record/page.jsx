import Header from "@/app/components/header/header";
import Aside from "@/app/components/record/aside";
import RecordHistories from "@/app/components/record/recordHistory";
import React from "react";

const RecordPage = () => {
  return (
    <div className="bg-slate-100">
      <Header />
      <div className="w-[88%] m-auto flex gap-6">
        <Aside />
        <RecordHistories />
      </div>
    </div>
  );
};

export default RecordPage;

import Header from "@/components/header/header";
import Aside from "@/components/record/aside";
import RecordHistories from "@/components/record/recordHistory";
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

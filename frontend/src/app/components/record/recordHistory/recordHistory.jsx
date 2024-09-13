import React, { useState } from "react";
import TableRow from "@/app/components/tables/tableRow";

const RecordHistory = ({ title, transactionData }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchHandleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const filteredData = transactionData.filter(() => {});
  console.log("filtered data", filteredData);
  return (
    <div>
      <input type="search" name="" id="" onChange={searchHandleChange} />
      <h6 className="font-semibold mt-4">{title}</h6>
      <table className="table">
        <tbody className="my-3">
          {transactionData?.map((record) => (
            <tr className="flex items-center justify-between border-[#E5E7EB] bg-white rounded-xl border-slate-300 my-3">
              <TableRow record={record} transactionData={transactionData} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordHistory;

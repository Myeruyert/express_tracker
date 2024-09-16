import React, { useContext, useState } from "react";
import TableRow from "@/app/components/tables/tableRow";
import { RecordContext } from "../../context/userRecord-context";
import { CategoryContext } from "../../context/category-context";

const RecordHistory = ({ title }) => {
  const { filteredData } = useContext(RecordContext);
  // console.log("sorted data", transactionData);

  return (
    <div>
      <h6 className="font-semibold mt-4">{title}</h6>
      <table className="table">
        <tbody className="my-3">
          {filteredData?.map((record) => (
            <tr className="flex items-center justify-between border-[#E5E7EB] bg-white rounded-xl border-slate-300 my-3">
              <TableRow record={record} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordHistory;

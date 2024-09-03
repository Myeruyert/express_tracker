import React from "react";
import TableRow from "@/app/components/tables/tableRow";

const RecordHistory = ({ title }) => {
  return (
    <div>
      <h6 className="font-semibold mt-4">{title}</h6>
      <table className="table">
        <tbody className="my-3">
          <tr className="flex items-center justify-between border-[#E5E7EB] bg-white rounded-xl border-slate-300 my-3">
            <TableRow />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecordHistory;

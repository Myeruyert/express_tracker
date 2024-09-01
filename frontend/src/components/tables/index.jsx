import React from "react";
import TableRow from "./tableRow";

const RecordTable = () => {
  return (
    <div className="stats text-primary-content bg-white flex flex-col mt-6">
      <div className="overflow-x-auto divide-slate-100">
        <table className="table">
          <thead>
            <tr className="border-b-0 border-slate-300">
              <th className="text-slate-900 font-semibold text-base">
                Last Records
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex items-center justify-between border-t-[1.5px] border-b-0 border-slate-300">
              <TableRow />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordTable;

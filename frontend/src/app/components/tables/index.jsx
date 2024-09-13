import React, { useState, useEffect, useContext } from "react";
import TableRow from "./tableRow";
import TableSkeleton from "../skeleton/tableSkeleton";
import { UserContext } from "../context/user-context";
import { RecordContext } from "../context/userRecord-context";

const RecordTable = () => {
  const { fetchUserData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const { transactionData } = useContext(RecordContext);

  const lists = transactionData.slice(0, 5);
  useEffect(() => {
    fetchUserData(setIsLoading);
  }, []);
  console.log("tablelists", lists);
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
            {lists?.map((record) => (
              <tr className="flex items-center justify-between border-t-[1.5px] border-b-0 border-slate-300">
                {isLoading ? <TableSkeleton /> : <TableRow record={record} />}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordTable;

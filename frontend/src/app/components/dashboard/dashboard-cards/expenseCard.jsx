import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaCircleArrowDown } from "react-icons/fa6";

const ExpenceCard = ({ sum }) => {
  return (
    <div className="stats text-primary-content w-96 h-56 bg-white flex flex-col">
      <div className="stat-title flex gap-2 items-center border-b-2 py-4 px-6">
        <GoDotFill className="text-[#0166FF]" />
        <span className="text-slate-900 text-base font-semibold">
          Total expense
        </span>
      </div>
      <div className="stat">
        <div className="stat-value text-black">{sum?.expense.sum}</div>
        <p className="text-slate-500 mt-1">Your Expence Amount</p>

        <div className="flex items-center gap-2 mt-4">
          <span>
            <FaCircleArrowDown className="text-[#0166FF]" />
          </span>
          <span className="text-black">32% from last month</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenceCard;

import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";

// const IncomeExpenceCard = ({ color, sum, incomeAmount, arrow, change }) => {
//   return (
//     <div className="stats text-primary-content w-96 h-56 bg-white flex flex-col">
//       <div className="stat-title flex gap-2 items-center border-b-2 py-4 px-6">
//         <GoDotFill className={`${color}`} />
//         <span className="text-slate-900 text-base font-semibold">
//           Your income
//         </span>
//       </div>
//       <div className="stat">
//         <div className="stat-value text-black">{sum?.income.sum}</div>
//         <p className="text-slate-500 mt-1">{incomeAmount}</p>

//         <div className="flex items-center gap-2 mt-4">
//           <span>{arrow}</span>
//           <span className="text-black">{change}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncomeExpenceCard;

const IncomeCard = ({ sum }) => {
  return (
    <div className="stats text-primary-content w-96 h-56 bg-white flex flex-col">
      <div className="stat-title flex gap-2 items-center border-b-2 py-4 px-6">
        <GoDotFill className="text-[#84CC16]" />
        <span className="text-slate-900 text-base font-semibold">
          Your income
        </span>
      </div>
      <div className="stat">
        <div className="stat-value text-black">{sum?.income.sum}</div>
        <p className="text-slate-500 mt-1">Your Income Amount</p>

        <div className="flex items-center gap-2 mt-4">
          <span>
            <FaCircleArrowUp className="text-lime-500" />
          </span>
          <span className="text-black">32% from last month</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;

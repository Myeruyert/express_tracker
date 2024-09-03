import React from "react";
import { LuNfc } from "react-icons/lu";

const DashboardCashCard = () => {
  return (
    <div className="card bg-[#0166FF] text-primary-content w-96 h-56 relative">
      <img
        src="/images/card_background.png"
        alt=""
        className="mix-blend-overlay opacity-40 rounded-2xl overflow-hidden object-cover"
      />
      <div className="card-body absolute">
        <img src="\images\geld-white-logo.png" alt="" className="w-20" />
        <div className="flex flex-col mt-14">
          <h6 className="text-base text-white opacity-50">Cash</h6>
          <div className="text-2xl font-semibold text-white flex items-center gap-32">
            <span>10,000,000</span>
            <LuNfc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCashCard;

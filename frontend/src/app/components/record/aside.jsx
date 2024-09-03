import React from "react";
import { FiPlus } from "react-icons/fi";
import Lists from "./lists/lists";

const Aside = () => {
  return (
    <aside className="card bg-white w-80 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-black text-2xl font-semibold">
          Records
        </h2>
        <button className="btn btn-sm rounded-3xl bg-[#0166FF] border-0 text-base text-white font-normal my-6">
          <FiPlus className="text-2xl" />
          <span>Add</span>
        </button>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto input-sm p-5 text-base bg-slate-100"
          />
        </div>
        <Lists />
        <button className="btn btn-sm btn-ghost rounded-full border-0 text-base font-normal justify-start">
          <FiPlus className="text-2xl text-[#0166FF] text-left" />
          <span className="text-[#1F2937] ">Add Category</span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;

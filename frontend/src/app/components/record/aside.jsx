"use client";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Lists from "./lists/lists";
import { MdOutlineRestaurant } from "react-icons/md";
import AddRecordModal from "../modals/addRecord";
import AddCategory from "../modals/addCategory";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => {
    setIsOpen(true);
    console.log("Show", isOpen);
  };
  const hide = () => {
    setIsOpen(false);
    console.log("Show", isOpen);
  };

  return (
    <aside className="card bg-white w-80 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-black text-2xl font-semibold">
          Records
        </h2>
        <button
          className="btn btn-sm rounded-3xl bg-[#0166FF] border-0 text-base text-white font-normal my-6"
          onClick={() => {
            show();
          }}>
          <FiPlus className="text-2xl" />
          <span>Add</span>
        </button>
        <AddRecordModal isOpen={isOpen} close={hide} />
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto input-sm p-5 text-base bg-slate-100"
          />
        </div>
        <Lists />
        <button
          className="btn btn-sm btn-ghost rounded-full border-0 text-base font-normal justify-start"
          onClick={() => document.getElementById("my_modal_2").showModal()}>
          <FiPlus className="text-2xl text-[#0166FF] text-left" />
          <span className="text-[#1F2937] ">Add Category</span>
        </button>
        <AddCategory />
      </div>
    </aside>
  );
};

export default Aside;

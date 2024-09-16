"use client";
import React, { useContext, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Lists from "./lists/lists";
import AddRecordModal from "../modals/addRecord";
import AddCategory from "../modals/addCategory";
import { CategoryContext } from "../context/category-context";
import { RecordContext } from "../context/userRecord-context";

const Aside = ({ search }) => {
  const { setSearchValue } = useContext(RecordContext);

  const [isOpen, setIsOpen] = useState(false);
  const show = () => {
    setIsOpen(true);
    // console.log("Show", isOpen);
  };
  const hide = () => {
    setIsOpen(false);
    // console.log("Show", isOpen);
  };

  const [isOpenCat, setIsOpenCat] = useState(false);
  const open = () => {
    setIsOpenCat(true);
    // console.log("Show", isOpenCat);
  };
  const close = () => {
    setIsOpenCat(false);
    // console.log("Show", isOpenCat);
  };

  const searchHandleCahnge = (e) => {
    setSearchValue(e.target.value);
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
          }}
        >
          <FiPlus className="text-2xl" />
          <span>Add</span>
        </button>
        <AddRecordModal isOpen={isOpen} close={hide} />
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto input-sm p-5 text-base bg-slate-100"
            onChange={searchHandleCahnge}
            value={search}
          />
        </div>
        <Lists />
        <button
          className="btn btn-sm btn-ghost rounded-full border-0 text-base font-normal justify-start"
          onClick={() => {
            open();
          }}
        >
          <FiPlus className="text-2xl text-[#0166FF] text-left" />
          <span className="text-[#1F2937] ">Add Category</span>
        </button>
        <AddCategory isOpenCat={isOpenCat} close={close} />
      </div>
    </aside>
  );
};

export default Aside;

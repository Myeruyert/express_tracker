"use client";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Lists from "./lists/lists";
import { MdOutlineRestaurant } from "react-icons/md";
import AddRecordModal from "../modals/addRecord";

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
  // const show = () => {
  //   setIsOpenModal(!isOpenModal);
  //   console.log("modal", isOpenModal);
  // };
  // useEffect(() => {
  //   setIsOpen(true);
  // }, [isOpen]);

  return (
    <aside className="card bg-white w-80 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-black text-2xl font-semibold">
          Records
        </h2>
        <button
          className="btn btn-sm rounded-3xl bg-[#0166FF] border-0 text-base text-white font-normal my-6"
          // onClick={() => document.getElementById("my_modal_3").showModal()}
          onClick={() => {
            show();
          }}>
          <FiPlus className="text-2xl" />
          <span>Add</span>
        </button>
        <AddRecordModal isOpen={isOpen} close={hide} />
        {/* {isOpenModal && <AddRecordModal />} */}
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
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <button className="btn btn-sm btn-ghost rounded-full border-b-1 text-base font-normal justify-start">
              <FiPlus className="text-2xl text-[#0166FF] text-left" />
              <span className="text-[#1F2937] ">Add Category</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="border rounded-full p-2 bg-[teal] text-white">
                <MdOutlineRestaurant />
              </div>
              <span>Food</span>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </aside>
  );
};

export default Aside;

"use client";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Lists from "./lists/lists";
import { MdOutlineRestaurant } from "react-icons/md";

const Aside = () => {
  return (
    <aside className="card bg-white w-80 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-black text-2xl font-semibold">
          Records
        </h2>
        <button
          className="btn btn-sm rounded-3xl bg-[#0166FF] border-0 text-base text-white font-normal my-6"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <FiPlus className="text-2xl" />
          <span>Add</span>
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Add record</h3>
            <div className="flex gap-5">
              <div className="flex flex-col flex-1">
                <input type="checkbox" className="toggle mb-2" defaultChecked />
                Amount
                <input
                  type="number"
                  placeholder="Amount"
                  className="input input-bordered w-full max-w-xs mb-4"
                />
                Category
                <select className="select select-bordered w-full max-w-xs mb-4">
                  <option disabled selected>
                    Choose
                  </option>
                  <option>Food & Drinks</option>
                  <option>Rent</option>
                  <option>Financial expenses</option>
                </select>
                <div className="flex gap-2">
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Date
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Time
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <button className="btn btn-sm rounded-3xl bg-[#0166FF] border-0 text-base text-white font-normal my-6">
                  <FiPlus className="text-2xl" />
                  <span>Add</span>
                </button>
              </div>
              <div className="flex-1">
                Payee
                <input
                  type="text"
                  placeholder="Payee"
                  className="input input-bordered w-full max-w-xs mb-4"
                />
                Note
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Write here"
                ></textarea>
              </div>
            </div>
          </div>
        </dialog>
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
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
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

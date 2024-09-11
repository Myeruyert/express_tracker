"use client";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

const AddRecordModal = ({ isOpen, close }) => {
  const [createRecord, setCreateRecord] = useState({
    transaction_type: "",
  });
  const [activeBtn, setActiveBtn] = useState("INC");
  const [amount, setAmount] = useState("");
  const [cid, setCid] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const addRecord = async () => {
    try {
      const res = await fetch(`${apiUrl}/records`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify({
            amount,
            // transaction_type,
            // uid,
            cid,
            // description,
            // created_at: "createdAt",
          }),
        },
      });
      if (res.status === 201) {
        console.log("addRecord", res);
        toast.success("Record added successfully");
      }
    } catch (error) {
      console.log("addRecord error", error);
      toast.error("Failed to add the record");
    }
  };
  console.log(createRecord);
  return (
    <dialog
      open={isOpen}
      // id="my_modal_3"
      className="modal"
    >
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={close}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Add record</h3>
        <div className="flex gap-5">
          <div className="flex flex-col flex-1">
            <div className="join">
              <button
                className={`btn btn-sm rounded-full w-1/2 ${
                  activeBtn === "EXP"
                    ? "bg-[#0166FF] text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() =>
                  setCreateRecord(
                    { ...createRecord, transaction_type: "EXP" },
                    setActiveBtn("EXP")
                  )
                }
              >
                Expense
              </button>
              <button
                className={`btn btn-sm rounded-full w-1/2 ${
                  activeBtn === "INC"
                    ? "bg-[#16A34A] text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() =>
                  setCreateRecord(
                    { ...createRecord, transaction_type: "INC" },
                    setActiveBtn("INC")
                  )
                }
              >
                Income
              </button>
            </div>
            Amount
            <input
              type="number"
              placeholder="Amount"
              className="input input-bordered w-full max-w-xs mb-4"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            Category
            <select
              className="select select-bordered w-full max-w-xs mb-4"
              onChange={(e) => {
                setCid(e.target.value);
              }}
              // value={(e) => {
              //   setCid(e.target.value);
              // }}
            >
              <option disabled selected>
                Choose
              </option>
              <option>Food & Drinks</option>
              <option>Rent</option>
              <option>Financial expenses</option>
            </select>
            <div className="flex gap-2">
              <input
                className="input input-bordered w-1/2"
                type="date"
                name="Date"
                placeholder="Date"
                // onChange={(e) => {
                //   setCreatedAt(e.target.value);
                // }}
              />
              <input
                className="input input-bordered w-1/2 max-w-xs"
                type="datetime"
                name="datetime"
                id=""
              />
            </div>
            <button
              className={`btn btn-sm rounded-3xl border-0 text-base text-white font-normal my-6
              ${activeBtn === "EXP" ? "bg-[#0166FF]" : "bg-[#16A34A]"}`}
              onClick={addRecord}
            >
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
  );
};

export default AddRecordModal;

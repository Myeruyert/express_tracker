"use client";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";
import { CategoryContext } from "../context/category-context";
import { UserContext } from "../context/user-context";

const AddRecordModal = ({ isOpen, close }) => {
  const { user } = useContext(UserContext);
  const { categories, getCategory } = useContext(CategoryContext);
  const [createRecord, setCreateRecord] = useState({
    transaction_type: "",
    name: "",
    amount: 0,
    cid: "",
  });

  const addRecord = async () => {
    const body = {
      uid: user.id,
      cid: createRecord.cid,
      name: createRecord.name,
      amount: createRecord.amount,
      transaction_type: createRecord.transaction_type,
      description: "description",
      // created_at: new Date(createdAt),
    };
    console.log("BODY", body);
    try {
      const res = await axios.post(`${apiUrl}/records`, body);
      if (res.status === 200) {
        // console.log("addRecord", res.data);
        toast.success("Record added successfully");
      }
    } catch (error) {
      console.log("addRecord error", error);
      toast.error("Failed to add the record");
    }
  };

  const choiceCat = (ev) => {
    // console.log("selected id", ev.target.value);
    setCreateRecord({ ...createRecord, cid: ev.target.value });
  };

  console.log(createRecord);
  console.log("uid", user.id);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <dialog open={isOpen} className="modal">
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
                  createRecord.transaction_type === "EXP"
                    ? "bg-[#0166FF] text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() =>
                  setCreateRecord({ ...createRecord, transaction_type: "EXP" })
                }
              >
                Expense
              </button>
              <button
                className={`btn btn-sm rounded-full w-1/2 ${
                  createRecord.transaction_type === "INC"
                    ? "bg-[#16A34A] text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() =>
                  setCreateRecord({ ...createRecord, transaction_type: "INC" })
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
                setCreateRecord({ ...createRecord, amount: e.target.value });
              }}
            />
            Category
            <select
              className="select select-bordered w-full max-w-xs mb-4"
              onChange={choiceCat}
            >
              <option disabled selected>
                Choose
              </option>
              {categories?.map((c) => (
                <option value={c.id}>{c.category_name}</option>
              ))}
            </select>
            <div className="flex gap-2">
              <input
                className="input input-bordered w-1/2"
                type="date"
                name="Date"
                placeholder="Date"
                onChange={(e) => {
                  setCreatedAt(e.target.value);
                }}
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
              ${
                createRecord.transaction_type === "EXP"
                  ? "bg-[#0166FF]"
                  : "bg-[#16A34A]"
              }`}
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

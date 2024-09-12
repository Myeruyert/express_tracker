"use client";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";
// import { CategoryContext } from "../context/category-context";

const AddRecordModal = ({ isOpen, close }) => {
  // const { categories, getCategory } = useContext(CategoryContext);
  const [categories, setCategories] = useState(null);
  const [createRecord, setCreateRecord] = useState({
    transaction_type: "",
    name: "",
    amount: 0,
    cid: "",
  });
  const [activeBtn, setActiveBtn] = useState("INC");
  const [amount, setAmount] = useState(0);

  const addRecord = async () => {
    const body = {
      uid: "83fd1817-47de-4dec-ba6c-dc7f68526761",
      cid: categories[0].id,
      name: createRecord.name,
      amount,
      transaction_type: createRecord.transaction_type,
      description: "description",
      // created_at: new Date(createdAt),
    };
    console.log("BODY", body);
    try {
      const res = await axios.post(`${apiUrl}/records`, body);
      if (res.status === 200) {
        console.log("addRecord", res.data);
        toast.success("Record added successfully");
      }
    } catch (error) {
      console.log("addRecord error", error);
      toast.error("Failed to add the record");
    }
  };

  const choiceCat = (ev) => {
    // setCategories(ev.target.value);
    console.log("selected id", ev.target.value);
  };

  const getCategory = async () => {
    try {
      const res = await axios.get(`${apiUrl}/categories`);
      setCategories(res.data.data);
      console.log("RECORD", res.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to get categories");
    }
  };

  console.log(createRecord);
  console.log(amount);
  console.log("cid", categories);

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

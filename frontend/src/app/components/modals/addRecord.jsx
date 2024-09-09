import React from "react";
import { FiPlus } from "react-icons/fi";

const AddRecordModal = ({ isOpen, close }) => {
  return (
    <dialog
      open={isOpen}
      // id="my_modal_3"
      className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={close}>
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Add record</h3>
        <div className="flex gap-5">
          <div className="flex flex-col flex-1">
            <div className="join">
              <input
                className=" btn btn-sm rounded-full w-1/2 visited:bg-pink-500"
                type="radio"
                name="options"
                aria-label="Expense"
                defaultChecked
              />
              <input
                className="btn btn-sm rounded-full w-1/2"
                type="radio"
                name="options"
                aria-label="Income"
              />
            </div>
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
              placeholder="Write here"></textarea>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddRecordModal;

import React from "react";
import { FiPlus } from "react-icons/fi";
import { MdOutlineRestaurant } from "react-icons/md";

const AddCategory = () => {
  return (
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
  );
};

export default AddCategory;

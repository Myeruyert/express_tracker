"use client";

import React, { useContext, useState } from "react";
import CategoryList from "./categoryList";
import { CategoryContext } from "../../context/category-context";
import { GrView } from "react-icons/gr";

const Lists = () => {
  const { categories, getCategory } = useContext(CategoryContext);
  // const [selectedBtn, setSelectedBtn] = useState(false);
  const [selected, setSelected] = useState("");
  console.log("Show", selected);
  return (
    <div className="text-[#1F2937]">
      <div className="my-6 text-base">
        <h6 className="mb-4 font-semibold ">Types </h6>
        <ul className="flex flex-col gap-2 mb-2">
          <li className="flex items-center gap-2">
            <input
              type="radio"
              name="radio-1"
              className="radio radio-xs"
              defaultChecked
            />
            <span>All</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="radio-1" className="radio radio-xs" />
            <span>Income</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="radio" name="radio-1" className="radio radio-xs" />
            <span>Expense</span>
          </li>
        </ul>
      </div>

      <div className="my-6  text-base">
        <div className="flex items-center gap-32 mb-4">
          <h6 className="font-semibold">Category</h6>
          <button className="opacity-30 btn btn-sm btn-ghost">Clear</button>
        </div>

        <ul>
          {categories?.map((cat) => (
            <li>
              <button
                // className={`border ${
                //   selectedBtn ? "font-bold" : "font-normal"
                // }`}
                // onClick={() => setSelectedBtn(true)}
                onClick={() => setSelected(cat?.category_name)}
                value={cat.id}
              >
                <div className="flex items-center gap-2 mb-2">
                  <GrView />
                  <span
                    className={`${
                      selected === cat.category_name && "font-bold"
                    }`}
                  >
                    {cat.category_name}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lists;

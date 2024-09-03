import React from "react";
import CategoryList from "./categoryList";

const typeLists = [{ type: "All" }, { type: "Income" }, { type: "Expence" }];

const categoryLists = [
  { category: "Food & Drinks" },
  { category: "Shopping" },
  { category: "Housing" },
  { category: "Transportation" },
  { category: "Vehicle" },
  { category: "Life & Entertainment" },
  { category: "Communication, PC" },
  { category: "Financial expences" },
  { category: "Investments" },
  { category: "Income" },
  { category: "Others" },
];

const Lists = () => {
  return (
    <div className="text-[#1F2937]">
      <div className="my-6 text-base">
        <h6 className="mb-4 font-semibold ">Types </h6>
        {typeLists.map((type1) => (
          <CategoryList categoryName={type1.type} />
        ))}
      </div>

      <div className="my-6  text-base">
        <div className="flex items-center gap-32 mb-4">
          <h6 className="font-semibold">Category</h6>
          <button className="opacity-30 btn btn-sm btn-ghost">Clear</button>
        </div>

        <ul>
          {categoryLists.map((cat) => (
            <CategoryList categoryName={cat.category} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lists;

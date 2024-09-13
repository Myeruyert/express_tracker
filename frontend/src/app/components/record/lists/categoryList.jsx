import React from "react";
import { GrView } from "react-icons/gr";

const CategoryList = ({ categoryName }) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <GrView />
      <span>{categoryName}</span>
    </div>
  );
};

export default CategoryList;

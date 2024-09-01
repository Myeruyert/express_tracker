import React from "react";
import { GrView } from "react-icons/gr";

const CategoryList = ({ categoryName }) => {
  return (
    <ul>
      <li className="flex items-center gap-2 mb-2">
        <GrView />
        <span>{categoryName}</span>
      </li>
    </ul>
  );
};

export default CategoryList;

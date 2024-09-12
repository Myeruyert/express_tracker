import React from "react";

const TableSkeleton = () => {
  return (
    <div className="flex w-52 flex-col gap-4 m-2">
      <div className="flex items-center gap-4">
        <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-3 w-32"></div>
          <div className="skeleton h-3 w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;

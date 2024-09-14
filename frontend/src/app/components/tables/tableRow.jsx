import React from "react";
import { format } from "date-fns";

const TableRow = ({ record }) => {
  return (
    <>
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div className="text-base text-black">
            <div className="">{record?.name}</div>
            <div className="text-xs text-gray-500">
              {format(new Date(record.created_at), "yyyy-MM-dd")}
            </div>
          </div>
        </div>
      </td>
      <td
        className={`${
          record.transaction_type === "INC" ? "text-lime-500" : "text-red-500"
        } text-semibold text-base`}
      >
        {record?.amount}₮
      </td>
    </>
  );
};

export default TableRow;

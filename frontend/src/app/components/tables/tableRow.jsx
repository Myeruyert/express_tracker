import React from "react";

const TableRow = () => {
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
            <div className="">Lending & Renting</div>
            <div className="text-xs text-gray-500">3 hours ago</div>
          </div>
        </div>
      </td>
      <td className="text-lime-500 text-semibold text-base">- 1,000₮</td>
    </>
  );
};

export default TableRow;

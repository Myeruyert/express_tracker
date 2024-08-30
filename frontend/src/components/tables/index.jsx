import React from "react";

const Tables = () => {
  return (
    <div className="stats text-primary-content bg-white flex flex-col mt-6">
      <div className="overflow-x-auto divide-slate-100">
        <table className="table">
          <thead>
            <tr className="border-b-0 border-slate-300">
              <th className="text-slate-900 font-semibold text-base">
                Last Records
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex items-center justify-between border-t-[1.5px] border-b-0 border-slate-300">
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
              <td className="text-lime-500 text-semibold text-base">
                - 1,000₮
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;

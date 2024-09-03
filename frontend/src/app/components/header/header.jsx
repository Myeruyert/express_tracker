import React from "react";
import { FiPlus } from "react-icons/fi";

const Header = () => {
  return (
    <div className="navbar bg-white m-auto mb-8">
      <div className="flex-1">
        <img src="\images\gred-logo.png" alt="" />
        <a className="btn btn-sm btn-ghost text-base text-slate-900 font-semibold">
          Dashboard
        </a>
        <a className="btn btn-sm btn-ghost text-base text-slate-900">Records</a>
      </div>
      <div className="flex-none gap-2">
        <button className="btn btn-sm rounded-3xl bg-[#0166FF] border-0 text-base text-white font-normal">
          <FiPlus className="text-2xl" />
          <span>Record</span>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;

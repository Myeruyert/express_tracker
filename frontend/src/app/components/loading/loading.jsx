import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-white justify-center items-center">
      <div>
        <img src="images\Frame 3.png" alt="" className="w-[180px]" />
      </div>

      <span className="loading loading-spinner text-[#0166FF] mt-12 mb-2"></span>
      <p className="text-slate-900 font-semibold text-base">
        Түр хүлээнэ үү...
      </p>
    </div>
  );
};

export default Loading;

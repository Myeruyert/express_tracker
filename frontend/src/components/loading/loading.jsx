import React from "react";

const Loader = () => {
    return (
        <div className="w-screen h-screen flex flex-col bg-white">
            <div><img src="images\Frame 3.png" alt="" className=""/></div>
                
                <span className="loading loading-spinner text-info text-[#0166FF]"></span>
                <p className="text-slate-900 font-semibold">Түр хүлээнэ үү...</p>
        </div>
    )
}

export default Loader; 
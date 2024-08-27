import React from "react";

const SignUp = () => {
    return (
        <>
            <div className="text-center my-8">
                <h3 className="text-slate-900 font-semibold text-2xl mb-2">Create Geld account</h3>
                <span className="text-slate-700 text-base">Sign up below to create your Wallet account</span>
            </div>
            <div className="mb-8">
                <input type="text" placeholder="Name" className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6]"/>
                <input type="email" placeholder="Email" className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6] my-4" />
                <input type="password" placeholder="Password" className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6]"/>
                <input type="password" placeholder="Re-password" className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6] my-4"/>
                <button className="w-full rounded-[20px] bg-[#0166FF] text-white p-2">Sign up</button>
            </div>
            <div className="text-center text-base">
                <span className="text-slate-900 ">Already have account? </span>
                <a href="" className="text-[#0166FF]">Log in</a>
            </div>
        </>
    )
}

export default SignUp; 
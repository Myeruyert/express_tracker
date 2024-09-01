import React from "react";
import SignUp from "@/components/signUp/signUp";

export default function SignUpPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-white flex">
        <div className="w-1/2 m-auto border justify-center items-center">
          <img src="\images\Frame 3.png" alt="" className="m-auto" />
          <SignUp />
        </div>
      </div>
      <div className="flex-1 bg-[#0166FF]"></div>
    </div>
  );
}

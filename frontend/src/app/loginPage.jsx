import React from "react";
import Login from "../../components/login/login";

export default function LoginPage () {
    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-white flex">
                <div className="w-1/2 m-auto border justify-center items-center">
                    <img src="\images\Frame 3.png" alt="" className="m-auto"/>
                    <Login/>
                </div>
            </div>
            <div className="flex-1 bg-[#0166FF]">
            </div>
        </div>
    )
}; 


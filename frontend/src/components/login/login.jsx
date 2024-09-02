"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    const res = await fetch("http://localhost:8008/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        email: email,
        password: password,
        profile_img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    console.log("res", res);
  };

  return (
    <>
      <div className="text-center my-8">
        <h3 className="text-slate-900 font-semibold text-2xl mb-2">
          Welcome Back
        </h3>
        <span className="text-slate-700 text-base">
          Welcome back, Please enter your details
        </span>
      </div>
      <div className="mb-8">
        <input
          type="email"
          placeholder="Email"
          className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6]"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6] my-4"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="w-full rounded-[20px] bg-[#0166FF] text-white p-2"
          onClick={handleSignIn}>
          Log In
        </button>
      </div>
      <div className="text-center text-base">
        <span className="text-slate-900 ">Don’t have account? </span>
        <Link href="/signUp" className="text-[#0166FF]">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Login;

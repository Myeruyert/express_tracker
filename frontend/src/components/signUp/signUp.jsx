"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    if (password === rePassword) {
      const res = await fetch("http://localhost:8008/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          profile_img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        }),
      });
      console.log("res", res);
      toast.success("Created successfully");
      router.push("/login");
    } else {
      console.log("password doesn't match");
      toast.error("Password doesn't match");
    }
  };
  // console.log("name", name);
  return (
    <>
      <div className="text-center my-8">
        <h3 className="text-slate-900 font-semibold text-2xl mb-2">
          Create Geld account
        </h3>
        <span className="text-slate-700 text-base">
          Sign up below to create your Wallet account
        </span>
      </div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Name"
          className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6]"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6] my-4"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6]"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Re-password"
          className=" input input-sm py-5 input-bordered w-full max-w-xs bg-[#F3F4F6] my-4"
          onChange={(e) => {
            setRePassword(e.target.value);
          }}
        />
        <button
          className="w-full rounded-[20px] bg-[#0166FF] text-white p-2"
          onClick={handleSignUp}
        >
          Sign up
        </button>
      </div>
      <div className="text-center text-base">
        <span className="text-slate-900 ">Already have account? </span>
        <Link href="/login" className="text-[#0166FF]">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUp;

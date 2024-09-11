"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/utils/util";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const router = useRouter();

  const handleSignUp = async () => {
    const { name, email, password, rePassword } = userData;
    if (password !== rePassword) {
      // console.log("password doesn't match");
      toast.error("Password doesn't match");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          profile_img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        }),
      });
      if (res.status === 201) {
        console.log("res", res);
        toast.success("User signed up successfully");
        setIsLoading(false);
        router.push("/login");
      }
    } catch (error) {
      // res.status(400).json({ message: "Failed to sign up. Please try again." });
      console.error("There was an error signing up:", error);
      setIsLoading(false);
      toast.error("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-white flex">
        <div className="w-1/2 m-auto justify-center items-center">
          <img src="\images\Frame 3.png" alt="" className="m-auto" />
          <div>
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
                className=" input input-sm py-5 input-bordered w-full bg-[#F3F4F6]"
                value={userData.name}
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
              />
              <input
                type="email"
                placeholder="Email"
                className=" input input-sm py-5 input-bordered w-full bg-[#F3F4F6] my-4"
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className=" input input-sm py-5 input-bordered w-full bg-[#F3F4F6]"
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Re-password"
                className=" input input-sm py-5 input-bordered w-full bg-[#F3F4F6] my-4"
                value={userData.rePassword}
                onChange={(e) => {
                  setUserData({ ...userData, rePassword: e.target.value });
                }}
              />
              <button
                className="w-full rounded-[20px] bg-[#0166FF] text-white p-2"
                onClick={handleSignUp}>
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner"></span>{" "}
                    Registering..
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </div>
            <div className="text-center text-base">
              <span className="text-slate-900 ">Already have an account? </span>
              <Link href="/login" className="text-[#0166FF]">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#0166FF]"></div>
    </div>
  );
}

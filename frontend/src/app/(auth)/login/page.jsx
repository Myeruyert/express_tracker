"use client";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/utils/util";
import Loading from "@/app/components/loading/loading";
import { UserContext } from "@/app/components/context/user-context";

export default function Login() {
  const router = useRouter();
  const { fetchUserData } = useContext(UserContext);
  const [isLogged, setIsLogged] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    const { email, password } = userData;
    try {
      setIsLoading(true);
      const res = await axios.post(`${apiUrl}/auth/signin`, {
        email,
        password,
      });

      if (res.status === 200) {
        toast.success("User signed in successfully");
        const { token } = res.data;
        localStorage.setItem("token", token);
        setIsLoading(false);
        router.push("/dashboard");
      }
      console.log("res", res);
    } catch (error) {
      console.error("There was an error signing in:", error);
      setIsLoading(false);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  if (isLoading) return <Loading />;

  // useEffect(() => {
  //   fetchUserData();
  // }, [isLogged]);

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-white flex">
        <div className="w-1/2 m-auto justify-center items-center">
          <img src="\images\Frame 3.png" alt="" className="m-auto" />
          <div>
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
                className=" input input-sm py-5 input-bordered w-full bg-[#F3F4F6]"
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className=" input input-sm py-5 input-bordered w-full bg-[#F3F4F6] my-4"
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
              <button
                className="w-full rounded-[20px] bg-[#0166FF] text-white p-2"
                onClick={handleSignIn}
              >
                Log In
              </button>
            </div>
            <div className="text-center text-base">
              <span className="text-slate-900 ">Don’t have account? </span>
              <Link href="/signUp" className="text-[#0166FF]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#0166FF]"></div>
    </div>
  );
}

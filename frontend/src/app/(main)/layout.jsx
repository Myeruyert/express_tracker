"use client";
import { Inter } from "next/font/google";
// import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header/header";
import { UserContext, UserProvider } from "../components/context/user-context";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({ children }) {
  const router = useRouter();
  const { fetchUserData } = useContext(UserContext);
  const [isLogged, setIsLogged] = useState(false);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    fetchUserData();
  }, [isLogged]);

  return (
    <>
      <Header logOut={logOut} />
      {children}
    </>
  );
}

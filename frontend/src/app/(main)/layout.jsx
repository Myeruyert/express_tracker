"use client";
import { Inter } from "next/font/google";
// import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header/header";
import { UserProvider } from "../components/context/user-context";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({ children }) {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <>
      <Header logOut={logOut} />
      {children}
    </>
  );
}

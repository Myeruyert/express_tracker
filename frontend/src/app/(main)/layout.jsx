import { Inter } from "next/font/google";
// import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header/header";
import { UserProvider } from "../components/context/user-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MainLayout({ children }) {
  return (
    <>
      <UserProvider>
        <Header />
        {children}
      </UserProvider>
    </>
  );
}
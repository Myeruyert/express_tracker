import Image from "next/image";
import LoginPage from "./loginPage";
import Loader from "../../components/loading/loading";
import Header from "../../components/header/header";
import HeaderPage from "./header";

export default function Home() {
  return (
    <main className="">
      {/* <LoginPage/> */}
      {/* <Loader/> */}
      {/* <Header/> */}
      <HeaderPage/>
    </main>
  );
}

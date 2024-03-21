import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Items from "./components/Items";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Items></Items>
    
    <Footer></Footer>
    </>
  );
}

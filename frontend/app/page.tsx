import Image from "next/image";
import Main from "./components/home/home";
import { Products } from "./components/home/product";
import { MidPage } from "./components/home/MidPage";
import { Companies } from "./components/home/Companies";
import { About } from "./components/home/about";
import { Advantages } from "./components/home/advantage";
import { Contacts } from "./components/home/contacts";
import { Footer } from "./components/cards/Footer";

export default function Home() { 
  return <div>
    <Main/>
    <Products/>
    < MidPage/>
    <Companies/>
    <About/>
    <Advantages/> 
  </div>
}

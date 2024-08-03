import Image from "next/image";
import Main from "./pages/home";
import { Products } from "./pages/product";
import { MidPage } from "./pages/MidPage";
import { Companies } from "./pages/Companies";
import { About } from "./pages/about";
import { Advantages } from "./pages/advantage";
import { Contacts } from "./pages/contacts";

export default function Home() { 
  return <div>
    <Main/>
    <Products/>
    < MidPage/>
    <Companies/>
    <About/>
    <Advantages/>
    <Contacts/>
  </div>
}

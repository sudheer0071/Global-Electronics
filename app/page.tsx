"use client"
import Image from "next/image";
import Main from "./components/home/home";
import { Products } from "./components/home/product";
import { MidPage } from "./components/home/MidPage";
import { Companies } from "./components/home/Companies";
import { About } from "./components/home/about";
import { Advantages } from "./components/home/advantage";
import { Contacts } from "./components/home/contacts";
import { Footer } from "./components/cards/Footer";
import { Loader } from "@progress/kendo-react-indicators";
import * as React from "react";
import { Cross, Crosshair, DoorClosed, FolderClosed, X } from "lucide-react";
import { Button } from "./components/ui/Button";
import { EnquiryCard } from "./components/cards/EnquiryCard";
import { EmailTemplate } from "./components/EmailTemplate";
import { useRecoilState } from "recoil";
import { responsiveNavState } from "./recoilContextProvider";
import { BACKEND_URL } from "./lib/config";
import axios from "axios";
export default function Home() {
 
  const [responseiveNav, setResponsiveNav] = useRecoilState(responsiveNavState)


  // Handle scroll event
  React.useEffect(() => {
    const handleScroll = () => {
      console.log('User scrolled the page');
      if (window.scrollY > 100) {
        setResponsiveNav(false);
      } else {
        setResponsiveNav(true);
      }
    };

    // Handle touch event
    const handleTouchMove = () => {
      console.log('User moved on touch screen');
      if (window.scrollY > 100) {
        setResponsiveNav(false);
      } else {
        setResponsiveNav(true);
      }
    };

    sendReq('NMB Technologies Corporation')
    sendReq('EBM PAPST')
    sendReq('SUNON')
    sendReq('ADDA')
    sendReq('Melco')
    sendReq('Sanyo Denki')
    sendReq('DELTA')

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const sendReq = async (name:string) => {
    try{ 
      const res = await axios.get(`${BACKEND_URL}/companies/${name}`)
      const response = res.data
      console.log("inside the send req");
      
    console.log(response); 
  }
  catch(e){
    console.log("this company is not in database");
    console.log(e); 
  }
  }



  return (
    <div className="bg-white">
      <Main />
      <Products />
      <MidPage />
      <Companies />
      <About />
      <Advantages />
      <Footer />  
    </div>
  );
}
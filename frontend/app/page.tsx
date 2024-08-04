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
import { Button } from "./components/Button";
import { EnquiryCard } from "./components/cards/EnquiryCard";
export default function Home() {
  const [showEnquiryCard, setShowEnquiryCard] = React.useState(false);

  const toggleEnquiryCard = () => {
    setShowEnquiryCard(prevState => !prevState);
  };

  return (
    <div className="bg-white">
      <Main />
      <Products />
      <MidPage />
      <Companies />
      <About />
      <Advantages />
      <Footer />
      <div className=" text-black">
      <button onClick={toggleEnquiryCard}>
        {showEnquiryCard ? 'Hide Enquiry Card' : 'Show Enquiry Card'}
      </button>
      </div>
      {showEnquiryCard && <EnquiryCard />}
    </div>
  );
}
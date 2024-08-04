import { X } from "lucide-react"
import { Button } from "../Button"
import { useState } from "react";
import { useRecoilState } from "recoil";
import { btnState } from "@/app/recoilContextProvider";

export const EnquiryCard = ()=>{

  const [showEnquiryCard, setShowEnquiryCard] = useRecoilState(btnState);

  const toggleEnquiryCard = () => {
    setShowEnquiryCard(prevState => !prevState);
  };

  if (!showEnquiryCard) {
    return <div>

    </div>
  }

  return  <div className=" text-black h-screen flex fixed z-50 left-0 right-0 bottom-0 top-0 bg-[#3d3c3c7c]">
  <div className=" flex-col flex m-auto max-w-2xl w-full py-10 bg-[#2f2c73] rounded-3xl shadow-md relative">
       <div className=" absolute right-0 top-0 font-bold flex justify-end p-3"> 
           <X className=" cursor-pointer hover:scale-125 transition-all duration-500" onClick={toggleEnquiryCard} color="white" size={35} />
       </div>
       <div className=" text-white text-center flex justify-center flex-col px-14">
          <div className=" text-4xl font-semibold ">
           Request A Quoate
          </div>
          <div className=" font-thin mt-4">
          Our product expert is standing by to give 24/7 consultation.
          </div>
          <div className="flex  gap-5 mt-9">
               <div className=" flex flex-col w-full">
                <label htmlFor="adsfasf" className=" text-left" >Name <div className=" inline text-yellow-500 text-xl">*</div>  </label>
                <input placeholder="your name" type="text" name="" id="" className=" text-black p-3 mt-3 w-full h-12 rounded-md " /> 
               </div>
               <div className=" flex flex-col w-full">
                <label htmlFor="adsfasf" className=" text-left">Phone <div className=" inline text-yellow-500 text-xl">*</div>  </label>
                <input placeholder="Phone number" type="text" name="" id="" className=" text-black p-3 mt-3 w-full h-12 rounded-md " /> 
               </div> 
          </div>
               <div className="text-left mt-7">
                 <label htmlFor="" className=" ">Email <div className=" inline text-yellow-500 text-xl">*</div> </label>
                 <input placeholder="email" type="text" name="" id="" className=" text-black p-3 mt-3 w-full h-12 rounded-md " /> 
               </div> 
               
               <div className="text-left mt-7">
                 <label htmlFor="" className=" ">Your Message </label>
                 <textarea placeholder="your name" name="" id="" className=" text-black p-3 mt-3 w-full h-[100px] rounded-md " /> 
               </div>
               <Button label={"Submit"} height={14} onclick={''} enquiry={true} />
       </div>
  </div>
</div>
}
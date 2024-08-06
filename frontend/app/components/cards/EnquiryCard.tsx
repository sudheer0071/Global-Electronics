import { X } from "lucide-react"
import { Button } from "../ui/Button"
import FileUpload from "../ui/FileUpload"

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contactState, enquiryState, quoteState } from "@/app/recoilContextProvider";
import axios from "axios";  
import { easeIn, motion } from "framer-motion";
import {toast, Toaster } from "sonner";
 
interface ProcessedFile {
  filename: string;
  content: string;
}

type EnquiryCardProp = {
  quote?:boolean,
  enquiry?:boolean,
  contact?:boolean
}

interface ResponseData {
  message: string;
}

 
export const EnquiryCard = ({quote, enquiry, contact}:EnquiryCardProp)=>{ 
  const [enquireyBtn, setEnquiryBtn] = useRecoilState(enquiryState);
  const [quoteBtn, setQuoteBtn] = useRecoilState(quoteState);
  const [contactBtn, setContactBtn] = useRecoilState(contactState);


  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [product, setProduct] = useState('')
  const [files, setFiles] =  useState<ProcessedFile[]>([]);
 
  const toggleEnquiryCard = () => {
    if (quote) {
      setQuoteBtn(prevState => !prevState);
    }
    if (enquiry) {
      setEnquiryBtn(prevState => !prevState);
    }
    if (contact) {
      setContactBtn(prevState => !prevState);
    }
  };

  const onSubmitQuote = async () =>{ 

    if (name==""||email==""||phone=="") {
      toast.warning( 
          "Please enter all the necessary feilds"
     )
    }
else{
 
  try{  
    toast.loading("sending mail....")
  const res = await axios.post("/api/send", {
    email, name, message, phone, files, isProduct:false
  })
  const msg = res.data 
  toast.success(msg.message)
  console.log(msg);
  setTimeout(() => {
    setQuoteBtn(prevState => !prevState);  
  }, 1500);   
}
 catch (error) {
  toast.error('Error sending mail please try again in some time');
} 
  }
  }
  const onSubmitEnquire = async () =>{ 
    
    if (name==""||email==""||phone==""||product=="") {
      toast.warning( 
        "Please enter all the necessary feilds"
   )
    }
    else{
      toast.loading("Sending mail...")
      const res = await axios.post("/api/send", {
       email, name, message, product , phone, files, isProduct:true
      })
      const msg = res.data
      toast.success(msg.message)
      console.log(msg);  
      setTimeout(() => {
        setEnquiryBtn(prevState => !prevState);  
      }, 1500);
    }
    }

    
  const onSubmitContact = async () =>{ 
    
    if (name==""||email==""||phone==""||product=="") {
      toast.warning( 
        "Please enter all the necessary feilds"
   )
    }
    else{
      toast.loading("Sending mail...")
      const res = await axios.post("/api/send", {
       email, name, message , phone, files, isProduct:false
      })
      const msg = res.data
      toast.success(msg.message)
      console.log(msg);  
      setTimeout(() => {
        setContactBtn(prevState => !prevState);  
      }, 1500);
    }
    }



  const handleSubmit = ()=>{
    if (enquireyBtn) {
      onSubmitEnquire()
    }
    if (quoteBtn) {
      onSubmitQuote()
    }
    if (contactBtn) {
      onSubmitContact()
    }
  }
  
  const handleFilesChange = (filesArray: { filename: string; content: string }[]) => { 
    setFiles(filesArray) 
  };

  if (enquireyBtn&&quoteBtn&&contactBtn) {
    return <div>

    </div>
  }

  // else if (!enquireyBtn) {
  //  return <div>

  //  </div> 
  // }

  return  <div className=" text-black h-screen flex fixed z-50 left-0 right-0 bottom-0 top-0 bg-[#3d3c3c7c]">
  <motion.div 
  initial = {{scale:0.5,x:quote?0:40, y:quote?-400:0, opacity:0}}
  whileInView={{scale:1,x:0, y:0, opacity:1}}
  transition={{ 
   type:"just",
   stiffness:200,
   damping:7,
   duration:0.5
  }}   
  className={`  flex-col flex m-auto max-w-2xl ${quote?' py-10':' py-6'} w-full bg-[#2f2c73] rounded-3xl shadow-md relative`}>
       <div className=" absolute right-0 top-0 font-bold flex justify-end p-3"> 
           <X className=" cursor-pointer hover:scale-125 transition-all duration-500" onClick={toggleEnquiryCard} color="white" size={35} />
       </div>
       <div className=" text-white text-center flex justify-center flex-col px-14">
        <Toaster richColors className=" bg-red-300" position="bottom-right"/>
          <div className=" text-4xl font-semibold ">
            {enquiry?'Request for Enquiry':quote?'Request A Quoate':"Contact Us"} 
           
          </div>
          <div className={` font-thin `}>
          Our product expert is standing by to give 24/7 consultation.
          </div>
          <div className={`flex  gap-5 ${quote?' mt-7':' mt-3'}`}>
               <div className=" flex flex-col w-full">
                <label htmlFor="adsfasf" className=" text-left" >Name <div className=" inline text-yellow-500 text-xl">*</div>  </label>
                <input onChange={(e)=> setName(e.target.value)} placeholder="your name" type="text" name="" id="" className=" text-black p-3 mt-3 w-full h-12 rounded-md " /> 
               </div>
               <div className=" flex flex-col w-full">
                <label htmlFor="adsfasf" className=" text-left">Phone <div className=" inline text-yellow-500 text-xl">*</div>  </label>
                <input placeholder="Phone number" onChange={e=>setPhone(e.target.value)} type="text" name="" id="" className=" text-black p-3 mt-3 w-full h-12 rounded-md " /> 
               </div> 
          </div>
               <div className={`text-left ${quote?' mt-7':' mt-3'}`}>
                 <label htmlFor="" className=" ">Email <div className=" inline text-yellow-500 text-xl">*</div> </label>
                 <input placeholder="email" onChange={e=>setEmail(e.target.value)} type="text" name="" id="" className=" text-black p-3 mt-3 w-full h-12 rounded-md " /> 
               </div>  
               {enquiry? <div className={`text-left mt-4`}>
                 <label htmlFor="" className=" ">Product Model <div className=" inline text-yellow-500 text-xl">*</div> </label>
                 <input placeholder="eg - Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J" onChange={e=>setProduct(e.target.value)} type="text" name="" id="" className=" text-black p-3 mt-3 w-full h-12 rounded-md " /> 
               </div> :''}
               
               <div className={`text-left ${quote?' mt-7':' mt-5'}`}>
                 <label htmlFor="" className=" ">Your Message </label>
                 <textarea placeholder="your name" onChange={e=>setMessage(e.target.value)} name="" id="" className=" text-black p-3 mt-3 w-full h-[100px] rounded-md " /> 
               </div>
               <div className={`text-left ${quote?' mt-7':'mt-4'}`}>
                
                 <label htmlFor="" className=" ">If you have any reference, please upload images or files here </label>
                 <div className={` ${quote?' mt-7':' mt-2'}`}>
                <FileUpload onFilesChange={handleFilesChange} />
                 </div>
               </div>
               <div className={`${quote?' mt-8':' mt-3'}`}>
               <Button label={"Submit"} height={14} onclick={handleSubmit} enquiry={true} />
               </div>
       </div>
  </motion.div>
</div>
}
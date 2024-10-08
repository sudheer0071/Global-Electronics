import { X } from "lucide-react"
import { Button } from "../ui/Button"
import FileUpload from "../ui/FileUpload"

import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { contactState, enquiryState, quoteState, sendEnquiryState, showSearchState } from "@/app/recoilContextProvider";
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
  contact?:boolean,
  sendEnq?:boolean,
  productName?:string,
  quantity?:number,
}

interface ResponseData {
  message: string;
}

 
export const EnquiryCard = ({quote, enquiry, contact, sendEnq, productName, quantity}:EnquiryCardProp)=>{ 
  const [enquireyBtn, setEnquiryBtn] = useRecoilState(enquiryState);
  const [quoteBtn, setQuoteBtn] = useRecoilState(quoteState);
  const [contactBtn, setContactBtn] = useRecoilState(contactState); 

  const [sendEnquiry, setSendEnquiry] = useRecoilState(sendEnquiryState)



  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [product, setProduct] = useState('')
  const [files, setFiles] =  useState<ProcessedFile[]>([]);
  const [showSearch, setShowSearch] = useRecoilState(showSearchState)
 

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
    if (sendEnq) {
      setSendEnquiry(prevState => !prevState);
    }
  };

  const onSubmitQuote = async () =>{ 

    if (name=="" ||phone=="") {
      toast.warning( 
          "Please enter all the necessary feildszzzzzzzzzzzzzzz"
     )
    }
else{
 
  try{  
    toast.loading("sending mail....")
  const res = await axios.post("/api/send", {
    email, name, message, phone, files, isProduct:false
  })
  const msg = res.data 
  console.log(msg);
  toast.success(msg.message)
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
    
    if (name=="" ||phone==""||product=="") {
      toast.warning( 
        "Please enter all the necessary feilds"
   )
    }
    else{
      try {
        
        toast.loading("Sending mail...")
        const res = await axios.post("/api/send", {
         email, name, message, product , phone, files, isProduct:true
        })
        const msg = res.data
        toast.success(msg.message)
        console.log(msg);  
        setShowSearch(false) 
        setTimeout(() => {
          if(sendEnq) setSendEnquiry(prevState => !prevState);
          else setEnquiryBtn(prevState => !prevState);   
        }, 1500);
      } catch (error) {
  toast.error('Error sending mail please try again in some time');
        
      }
    }
    }

    
  const onSubmitContact = async () =>{ 
    
    if (name==""||email==""||phone=="") {
      toast.warning( 
        "Please enter all the necessary feilds"
   )
    }
    else{
      try {
        
        toast.loading("Sending mail...")
        const res = await axios.post("/api/send", {
         email, name, message , phone, files, isProduct:false
        })
        const msg = res.data
        console.log(msg);  
        toast.success(msg.message)
        setTimeout(() => {
          setContactBtn(prevState => !prevState);  
        }, 1500);
      } catch (error) {
  toast.error('Error sending mail please try again in some time');
        
      }
    }
    }


  const handleSubmit = ()=>{
    if (enquireyBtn||sendEnquiry) {
      onSubmitEnquire() 
    }
    if (quoteBtn) {
      onSubmitQuote()
    }
    if (contactBtn) {
      onSubmitContact()
    }
  }
  
  useEffect(()=>{
    if (productName) {
      console.log("product name");
      console.log(productName); 
      setProduct(productName)
    }
  },[setProduct])

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

  return  <div className=" lg:px-0 md:px-0 px-6 lg:py-0 md:py-0 py-6  text-black h-screen flex fixed z-50 left-0 right-0 bottom-0 top-0 bg-[#3d3c3c7c]">
  <motion.div 
  initial = {{scale:0.5,x:quote?0:40, y:quote?-400:0, opacity:0}}
  whileInView={{scale:1,x:0, y:0, opacity:1}}
  transition={{ 
   type:"just",
   stiffness:200,
   damping:7,
   duration:0.5
  }}   
  className={` flex-col flex m-auto max-w-2xl ${quote?' py-4 md:py-8 lg:py-10':' py-3 md:py-5 lg:py-6'} w-full bg-[#2f2c73] rounded-3xl shadow-md relative`}>
       <div className=" absolute right-0 top-0 font-bold flex justify-end p-3"> 
           <X className=" cursor-pointer hover:scale-125 transition-all duration-500" onClick={toggleEnquiryCard} color="white" size={35} />
       </div>
       <div className=" text-white text-center flex justify-center flex-col px-4 md:px-12 lg:px-14">
        <div className=" hidden md:inline lg:inline ">
        <Toaster richColors className=" bg-red-300" position="bottom-right"/>
        </div>
        <div className=" md:hidden lg:hidden">
        <Toaster richColors className=" bg-red-300" position="top-center"/>
        </div>
          <div className=" text-2xl md:text-3xl lg:text-4xl font-semibold ">
            {enquiry||sendEnq?'Request for Enquiry':quote?'Request A Quoate':"Contact Us"} 
           
          </div>
          <div className={` text-sm lg:text-base font-thin `}>
          Our product expert is standing by to give 24/7 consultation.
          </div>
          <div className={`flex  gap-5 ${quote?' mt-3 md:mt-5 lg:mt-7':' mt-1 md:mt-3 lg:mt-3'}`}>
               <div className=" flex flex-col w-full">
                <label htmlFor="adsfasf" className=" text-left" >Name <div className=" inline text-yellow-500 text-xl">*</div>  </label>
                <input onChange={(e)=> setName(e.target.value)} placeholder="your name" type="text" name="" id="" className=" text-sm md:text-base lg:text-base text-black p-1 md:p-3 lg:p-3 mt-3 w-full h-10 md:h-12 lg:h-12 rounded-md " /> 
               </div>
               <div className=" flex flex-col w-full">
                <label htmlFor="adsfasf" className=" text-left">Phone <div className=" inline text-yellow-500 text-xl">*</div>  </label>
                <input placeholder="Phone number" onChange={e=>setPhone(e.target.value)} type="text" name="" id="" className="text-sm md:text-base lg:text-base text-black p-1 md:p-3 lg:p-3 mt-3 w-full h-10 md:h-12 lg:h-12 rounded-md " /> 
               </div> 
          </div>
               <div className={`text-left ${quote?'mt-3 md:mt-5 lg:mt-7':' mt-1 md:mt-3 lg:mt-3'}`}>
                 <label htmlFor="" className=" ">Email <div className=" inline text-yellow-500 text-xl"></div> </label>
                 <input placeholder="example@gmail.com" onChange={e=>setEmail(e.target.value)} type="text" name="" id="" className="text-sm md:text-base lg:text-base text-black p-1 md:p-3 lg:p-3 mt-3 w-full h-10 md:h-12 lg:h-12 rounded-md " /> 
               </div>  
               {enquiry||sendEnq? <div className={`text-left mt-1 md:mt-3 lg:mt-4`}>
                 <label htmlFor="" className=" flex justify-between">
                  <div>
                  Product Model <div className=" inline text-yellow-500 text-xl">*</div> 
                  </div>
                  <div className={` ${!productName?'hidden':''} bg-sky-300 rounded-md p-1 md:p-2 lg:p-2 text-black`}>
                    Quantity: {quantity}
                  </div>
                    </label>
                 <input value={productName?productName:product} placeholder="eg - Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J" onChange={e=>{productName?setProduct(productName):setProduct(e.target.value)}} type="text" name="" id="" className={`${productName?' text-slate-600 cursor-not-allowed':''} text-sm md:text-base lg:text-base text-black p-1 md:p-3 lg:p-3 mt-3 w-full h-10 md:h-12 lg:h-12 rounded-md `} /> 
               </div> :''}
               
               <div className={`text-left ${quote?' mt-3 md:mt-5 lg:mt-7':' mt-2 md:mt-4 lg:mt-5'}`}>
                 <label htmlFor="" className=" ">Your Message </label>
                 <textarea placeholder="Any extra detail you want to share?" onChange={e=>setMessage(e.target.value)} name="" id="" className=" text-black p-3 mt-3 w-full text-sm md:text-base lg:text-base h-[100px] rounded-md " /> 
               </div>
               <div className={`text-left ${quote?' mt-3 md:mt-5 lg:mt-7':' mt-2 md:mt-4 lg:mt-4'}`}>
                
                 <label htmlFor="" className=" text-sm lg:text-base">If you have any reference, please upload images or files here </label>
                 <div className={` ${quote?' mt-3 md:mt-5 lg:mt-7':' mt-1 md:mt-2 lg:mt-2'}`}>
                <FileUpload onFilesChange={handleFilesChange} />
                 </div>
               </div>
               <div className={`${quote?' mt-3 md:mt-6 lg:mt-8':' mt-1 md:mt-3 lg:mt-3'}`}>
               <Button label={"Submit"} height={14} onclick={handleSubmit} enquiry={true} />
               </div>
       </div>
  </motion.div>
</div>
}
import { Wrench } from "lucide-react"
import { Button } from "../ui/Button"
import { EnquiryCard } from "../cards/EnquiryCard"
import { useRecoilState } from "recoil"
import { sendEnquiryState } from "@/app/recoilContextProvider"

export const MidPage = ()=>{

  const [sendEnquiry, setSendEnquiry] = useRecoilState(sendEnquiryState)


  return  <div className=" bg-white flex">
   <div className={`w-full bg-[#ced3dc] items-center ban ner flex `}>
    {/* <Image  quality="100"
         className=" opacity-30" layout="fill" alt="" src={'/fan.jpg'}/> */} 
        <div className="   text-black w-full flex">

          <div className="w-full max-w-screen-lg mx-auto py-10 pl-5 md:pl-28 lg:py-16 lg:pl-40">
            <div className=" text-2xl md:text-3xl lg:text-4xl font-semibold">
            Still Not Finding What You Are Looking For?
            </div>
            <div className=" mt-7"> 
            <div>
          <Wrench className=" inline"/> <p className=" inline ml-3">Tell Us Your Ideal Brand</p> 
            </div>
            <div className=" mt-2">
          <Wrench className=" inline"/> <p className=" inline ml-3">Tell Us Your Ideal Product(Type, Series & Code)</p> 
            </div>
            <div className="  lg:hidden flex">
            <Button  onclick={()=>setSendEnquiry(!sendEnquiry)} label={"Talk to Experts"} height={2} />
         </div>
            </div>
        </div> 
          </div>
          <div className=" hidden right-0 w-[1000px] h-screen justify-center items-center lg:flex image-bg">
         <div>
          <Button  onclick={()=>setSendEnquiry(!sendEnquiry)} label={"Talk to Experts"} height={2} />
         </div>
        </div>
        {sendEnquiry && <EnquiryCard sendEnq={ true}  />}
  </div> 
        
  </div>
}
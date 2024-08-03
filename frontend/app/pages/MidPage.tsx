import { Wrench } from "lucide-react"
import { Button } from "../components/Button"

export const MidPage = ()=>{
  return  <div className=" bg-white flex">
   <div className={`w-full bg-[#ced3dc] items-center ban ner flex `}>
    {/* <Image  quality="100"
         className=" opacity-30" layout="fill" alt="" src={'/fan.jpg'}/> */} 
        <div className="   text-black w-full flex">

          <div className="w-full py-10 pl-20 lg:py-16 lg:pl-40">
            <div className=" text-4xl font-semibold">
            Still Not Finding What You Are Looking For?
            </div>
            <div className=" mt-7"> 
            <div>
          <Wrench className=" inline"/> <p className=" inline ml-3">Tell Us Your Ideal Brand</p> 
            </div>
            <div className=" mt-2">
          <Wrench className=" inline"/> <p className=" inline ml-3">Tell Us Your Ideal Product(Type, Series & Code)</p> 
            </div>
            </div>
        </div> 
          </div>
          <div className=" hidden right-0 w-[1000px] h-screen justify-center items-center lg:flex image-bg">
         <div>
          <Button color={true} onclick={''} label={"Talk to Experts"} height={12} />
         </div>
        </div>
  </div> 
        
  </div>
}
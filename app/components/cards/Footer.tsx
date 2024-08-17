'use client'

import { BACKEND_URL } from "@/app/lib/config"
import axios from "axios"
import { LocateIcon, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"



export const Footer = ()=>{
  
  const [list, setList] = useState([''])
  
  useEffect(()=>{
    sendReq()
  },[])
    
  const sendReq = async () => { 
    const res = await axios.get(`${BACKEND_URL}/companies/all`)
    const response = res.data 
    console.log("nav");
    const lists = response.map((comp:any)=> comp.company_name)
    console.log(lists);
    
    setList(lists)  
    // setCompany(response)
  }
  const feilds = [
    {
     name:'Home',
     subfeilds: ['About'] 
    },
    
    {
     name:'Manufacturer',
     subfeilds: [...list] 
    },
    {
     name:'Products',
     subfeilds: ['Cooling fans', 'Axial fans','Multipurpose fans',"Heating fans" ] 
    },

  ]
  
  
  return <footer className="footer ">
    <div className=" pt-16 md:pt-20 lg:pt-32 pb-20 ">
      <div className=" px-8 lg:px-4 md:mx-20 lg:mx-28">
      <div className=" flex">
   <div className="">
    <div className="  text-2xl font-bold ">
    Contact Us
    </div>
    <div className=" font-medium mt-8 flex flex-col">
      <div className=" mt-4">
    <Mail className=" inline mr-2"/> <a href="mailto:globalelectronicsggn@gmail.com">globalelectronicsggn@gmail.com</a> 
      </div>
      <div className=" mt-4">
    <Phone className=" inline mr-2"/> 08046042702
      </div>
      <div className=" max-w-lg mt-4 flex">
    <LocateIcon className=" inline mr-4"/>    
    Plot No 180-181 Village Dhankot
Global Electronic Solutions, Gurgaon - 122505, Gurugram, Haryana, India 
      </div>
      <div className=" flex justify-start">
<a className="fnt5 ml-6 mt-2 hover:text-cyan-500  " href="https://maps.google.com?q=28.47542000,76.95204000" target="_blank" >Get Directions</a>
      </div>
    </div>
   </div>

   <div className=" hidden md:flex lg:flex flex-col ml-20"> 
    {feilds.map((feild:any, idx)=><FooterContents key={idx} feilds={feild.name} names={feild.subfeilds} />)}  
   </div>
      </div>
      </div>
    </div>
      <div className=" border-t-2 border-slate-500">
        <div className="px-4 md:mx-20 lg:mx-28 md:flex lg:flex ">
        <div className=" flex py-3 md:p-0 lg:p-0  ">
          <div className=" mt cursor-pointer" >
            <Link href={"/"}>
            <img width={80} src="https://5.imimg.com/data5/SELLER/Logo/2023/8/332359348/WL/RS/SO/102816454/logo-90x90.png" alt="" />
            </Link>
          </div>

          <div className=" text-slate-100 text-xl md:text-xl lg:text-2xl text-dcenter mt:mt-4 lg:mt-2  items-center w-[500px] font-medium">
         <Link href={"/"}>
            Global Electronics Solutions
         </Link>
            <div className="  ">
              <div className=" text-xs max-w-xs md:max-w-sm lg:max-w-sm">Global Electronic Solutions, Gurgaon, Gurugram, Haryana</div>
            </div>
          </div> 
          </div>
   <div className=" text-gray-400 flex items-center lg:ml-[350px]"> 
   Copyright© 2021 Global Electronics Solutuons Co.,LTD All Rights Reserved


   </div>
        </div>
      </div>
  </footer>
}

export const FooterContents = ({feilds, names}:{feilds:string, names:string[]})=>{
  return <div className=" mb-6 flex flex-col">
<div className=" text-xl font-bold "> 
    {feilds}
   </div>
   <div className=" mt-2 grid grid-cols-7 "> 
    {names.map((name, idx) => <Names key={idx} name={name}/>)}
   </div>
  </div>
}

export const Names = ({name}:{name:string})=>{

return <div className=" mt-4">
     <Link  href={` ${name.includes('fans')?'/companies':name.includes('about')?'/':`/companies/${encodeURIComponent(name)}`} `}> 
  <div className="   text-sm font-extralight cursor-pointer hover:text-cyan-300 hover:underline">
    {name}
  </div>
  </Link>
  </div>
}
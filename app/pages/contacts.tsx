import { LocateIcon, Mail, Phone } from "lucide-react"



export const Contacts = ()=>{
  const feilds = [
    {
     name:'Home',
     subfeilds: ['About', 'Service','Blog'] 
    },
    
    {
     name:'Manufacturer',
     subfeilds: ["Pro-face","Mitsubishi", "Omron", "Fanux", "Delta", "HITECH", "Yashkawa", "Keyence", "Sick", "Panacsonic", "intek/Weinvi", "Schneider", "Siemens" ,"Hongfa"] 
    },
    {
     name:'Products',
     subfeilds: ['Measurement Instrument', 'PLC','Severmeter',"Severo drive", "HMI","VFD" ,"Sensor", "Circuit Breaker", "Relay" ] 
    },

  ]
  return <footer className="footer">
    <div className=" pt-32 pb-20 ">
      <div className=" px-4 mx-28">
      <div className=" flex">
   <div className="">
    <div className="  text-2xl font-bold ">
    Contact Us
    </div>
    <div className=" mt-8 flex flex-col font-extralight">
      <div className=" mt-4">
    <Mail className=" inline mr-2"/> abc@mailc.com1
      </div>
      <div className=" mt-4">
    <Phone className=" inline mr-2"/> abc@mailc.com1
      </div>
      <div className=" max-w-lg mt-4 flex">
    <LocateIcon className=" inline mr-4"/>    
    17th Floor, Chuangtou Building, Pioneer Park, Longchen Street, LongGan Area, Shenzhen.   
      </div>
    </div>
   </div>

   <div className=" flex flex-col ml-20"> 
    {feilds.map((feild, idx)=><FooterContents key={idx} feilds={feild.name} names={feild.subfeilds} />)}  
   </div>
      </div>
      </div>
    </div>
      <div className=" border-t-2 border-slate-500">
        <div className="px-4 mx-28 flex ">
      <div className=" mt-3" >
    <img width={100} src="https://5.imimg.com/data5/SELLER/Logo/2023/8/332359348/WL/RS/SO/102816454/logo-90x90.png" alt="" />
   </div>

   <div className=" flex items-center ml-[350px]"> 
   Copyright© 2021 United Automation Co.,LTD All Rights Reserved


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
  <div className="   text-sm font-extralight cursor-pointer hover:text-cyan-300 hover:underline">
    {name}
  </div>
  </div>
}
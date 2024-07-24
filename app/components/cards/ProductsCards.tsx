 import Image from "next/image"
import { Button } from "../Button"
import { ArrowBigDown, ExternalLink } from 'lucide-react'

type productProps = {
  heading:string, 
  image:string, 
  companies:string[]
}

export const ProducCards = ({heading, image, companies}:productProps)=>{
  return <div className=" p-7 w-full ">
     <div className=" text-2xl font-medium flex justify-center">
      {heading}
     </div>
     <div>
      <img width={470} alt="" src={`https://www.plc-sensors.com/wp-content/uploads/${image}`} />
     </div>
     <div className=" px-5 py-4 shadow-lg -mt-14 text-black grid grid-cols-2">
       {companies.map((company, idx)=><Companies key={idx} name={company}/>)}  
     </div>
     <div className=" ">
     <Button height={10} productCard={true} label={"View More >>"} onclick={''}/>
     </div>
  </div>
} 


function Companies({name}:{name:string}){
  return <div className=" mt-4 text-lg font-medium cursor-pointer hover:text-sky-700">
    <ExternalLink size={15} className=" inline"/>  {name}
  </div>
}
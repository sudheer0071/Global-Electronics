 import Image from "next/image"
import { Button } from "../ui/Button"
import { ArrowBigDown, ExternalLink } from 'lucide-react'
import { R2 } from "@/app/lib/config"
import Link from "next/link"

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
      <img className=" aspect-[4/3]  " width={470} alt="" src={`${image}`} />
     </div>
     <div className=" px-5 py-4 shadow-lg text-black grid grid-cols-2">
       {companies.map((company, idx)=><Companies key={idx} name={company}/>)}  
     </div>
     <div className=" ">
      <Link href={'/companies'} >
     <Button productCard={true} label={"View More >>"} onclick={null}/>
      </Link>
     </div>
  </div>
}  

function Companies({name}:{name:string}){
  return <div className=" mt-4 text-lg font-medium cursor-pointer hover:text-sky-700">
       <Link  href={`/companies/${encodeURIComponent(name)}`}> 
  <ExternalLink size={15} className=" inline"/>  {name}
    </Link>
  </div>
}
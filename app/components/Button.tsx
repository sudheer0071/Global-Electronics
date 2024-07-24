 
// import { Loader } from "./Loader"

import { Link } from "lucide-react"

type props = {
  onclick:any,
  label:String, 
  height:number,
  productCard?:boolean,
  color?:boolean;
}

export function Button({height=2,onclick, label, productCard, color}:props){
   
  return <div className="py-4">
    <button className={`btn loader ${color?' bg-yellow-400 hover:bg-yellow-600 hover:text-gray-100 ':'bg-[#22d9f1e0] hover:bg-[#409eaae0]'}   hover:text-white transition-colors duration-700  h-${height} text-black py-5 font-semibold px-10 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-gray-300 `} onClick={onclick}> {productCard?<Link className=" inline"/> :''} {  label} 
    </button> 
  </div>
}
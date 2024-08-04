 
// import { Loader } from "./Loader"

import { Download, Link } from "lucide-react"

type props = {
  onclick:any,
  label:String, 
  height?:number,
  productCard?:boolean,
  color?:boolean,
  download?:boolean,
  nav?:boolean,
  enquiry?:boolean,
}

export function Button({height=2,onclick, label, productCard, color, download, nav, enquiry}:props){
   
  return <div className="py-4">
    <button className={`btn ${color?' bg-yellow-400 hover:bg-yellow-600 hover:text-gray-100 ':'bg-[#22d9f1e0] hover:bg-transparent border-2 hover:border-[#22d9f1e0]'} ${download?"rounded-sm shadow-2xl":"rounded-md"} ${enquiry?' hover:bg-sky-600 hover:text-white':''} hover:text-gray-700 transition-colors duration-700  h-${height} text-black py-5 font-semibold px-10 rounded-lg ${nav?' text-base':'w-full'}  focus:outline-none focus:ring-4 focus:ring-gray-300 `} onClick={onclick}> {productCard?<Link className=" inline"/> :download? <Download className=" inline mr-4" />:''} {  label} 
    </button> 
  </div>
}


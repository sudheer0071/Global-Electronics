 
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
  contact?:boolean,
  quote?:boolean,
  sendEnq?:boolean,
  blur?:boolean,
}

export function Button({height=2,onclick, label, productCard, color, download, nav, enquiry, contact, quote, sendEnq, blur}:props){
   
  return <div className="py-4">
    <button className={`btn ${color?' bg-yellow-400 hover:bg-yellow-600 hover:text-gray-100 ':'bg-[#22d9f1e0] border-2 hover:border-[#22d9f1e0]'} ${download?"rounded-sm shadow-2xl":"rounded-md"} ${enquiry?' hover:bg-sky-700 hover:shadow-md transition-all duration-500 hover:shadow-white hover:text-white border-none':''} ${blur ? 'bg-[#8ad8e2e0] text-slate-600 cursor-not-allowed hover:bg-[#8ad8e2e0] hover:border-transparent pointer-events-auto focus:ring-transparent' : 'hover:bg-transparent'}
 ${sendEnq?" px-3 py-2 text-base":""} ${quote?' hover:shadow-lg hover:border-4 hover:shadow-gray-500 py-[5px] text-lg px-1 mr-1':''} ${contact?' hover:text-white border-2 hover:shadow-sm hover:shadow-white':''} hover:text-gray-700 transition-colors duration-700  h-${height} text-black py-5 font-semibold px-10 rounded-lg ${nav?' text-base':'w-full'}  focus:outline-none focus:ring-4 focus:ring-gray-300 `} onClick={!blur?onclick:null}>
       {/* <div className={` w-28`}> */}
       {productCard?<Link className=" inline"/> :download? <Download className=" inline mr-4" />:''} {  label} 
      {/* </div> */}
    </button> 
  </div>
}

{}
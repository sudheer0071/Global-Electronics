import Link from "next/link"
import { CompaniesCard } from "../cards/companiesCard"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "@/app/lib/config"
import axios from "axios"

export const Companies = ()=>{

  const [list, setList] = useState([])

  useEffect(()=>{
    sendReq()
  },[])
    
  const sendReq = async () => { 
    const res = await axios.get(`${BACKEND_URL}/companies/all`)
    const response = res.data 
    console.log("nav");
    const lists = response.map((comp:any)=> comp.company_name)
    setList(lists)  
    // setCompany(response)
  }

  const companies = ["pro-face", "mitsubishi", "omron", "fanux", "delta", "hITECH", "yashkawa", "keyence", "sick", "panacsonic", "intek/seinvi", "schneider", "siemens", "hongfa"]
  return <div className=" py-20 md:py-28 lg:py-32  bg-white text-black"> 
    <div className=" text-2xl md:text-3xl lg:text-4xl text-center font-semibold  flex justify-center">
    A Partial List of Manufacturers
    </div>
    <div className="flex justify-center ">
    <div className=" text-md font-light px-2 mt-6 max-w-3xl text-center">
    Global Electronics Solutions can build partnerships with any brand suppliers worldwide. If you cant find the brands you want, call us.
    </div>
    </div>
    <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 mt-16 transition-all">
      {list.map((company:any, idx)=>
      {   const formattedCompany = company.charAt(0).toUpperCase() + company.slice(1).toLowerCase();
        return (
      <Link key={idx} href={`/companies/${company}`}>
        
      <CompaniesCard key={idx} num={idx} company={formattedCompany} />
      </Link>
        )

}
      )}
     
    </div>
  </div>
}
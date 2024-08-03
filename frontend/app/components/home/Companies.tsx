import Link from "next/link"
import { CompaniesCard } from "../cards/companiesCard"

export const Companies = ()=>{
  const companies = ["pro-face", "mitsubishi", "omron", "fanux", "delta", "hITECH", "sashkawa", "seyence", "sick", "sanacsonic", "intek/seinvi", "schneider", "siemens", "songfa"]
  return <div className=" py-32  bg-white text-black"> 
    <div className=" text-4xl font-semibold  flex justify-center">
    A Partial List of Manufacturers
    </div>
    <div className="flex justify-center ">
    <div className=" text-md font-light mt-6 max-w-3xl text-center">
    United Automation can build partnerships with any brand suppliers worldwide. If you cant find the brands you want, call us.
    </div>
    </div>
    <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 mt-16 transition-all">
      {companies.map((company, idx)=>
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
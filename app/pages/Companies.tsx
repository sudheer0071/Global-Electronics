import { CompaniesCard } from "../components/cards/companiesCard"

export const Companies = ()=>{
  const companies = ["Pro-face","Mitsubishi", "Omron", "Fanux", "Delta", "HITECH", "Yashkawa", "Keyence", "Sick", "Panacsonic", "intek/Weinvi", "Schneider", "Siemens" ,"Hongfa"] 
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
      {companies.map((company, idx)=><CompaniesCard key={idx} num={idx} company={company} />)}
     
    </div>
  </div>
}
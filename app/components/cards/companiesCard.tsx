export const CompaniesCard = ({company, num}:{company:string, num:number})=>{
   
  
  return <div>
     <div className={` cursor-pointer min-h-[200px] hover:underline hover:bg-sky-400 transition-all duration-500 ${num%2==0?'bg-slate-200':' bg-slate-300'} lg:px md:px-4 sm:px-3 text-3xl md:text-4xl lg:text-5xl font-bold items-center flex justify-center text-white py `}>
       {company}
      </div> 
  </div>
}

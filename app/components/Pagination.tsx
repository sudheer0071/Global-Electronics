import { ChevronLeft, ChevronRight } from "lucide-react"
import { DOTS, usePagination } from "../hooks/usePagination"

interface paginationProps {
 onPageChange:any, 
 totalCount:number, 
 siblingCount?:number, 
 currentPage:number, 
 pageSize:number, 
}

export const Pagination =({onPageChange, totalCount, siblingCount, currentPage, pageSize}:paginationProps) =>{

  const pageinationRange = usePagination({currentPage, totalCount, siblingCount, pageSize })
  
  if (currentPage === 0 || pageinationRange && pageinationRange?.length<2) {
    return null
  }
  let lastPage = pageinationRange && pageinationRange[pageinationRange.length - 1];
  
  return <div className=" py-10 justify-center flex gap-5">
        <ChevronLeft onClick={()=> { currentPage===1?null:onPageChange(currentPage-1)}} size={42} className={` ${currentPage===1?' text-gray-300 cursor-not-allowed bg-none hover:bg-none':' hover:bg-slate-200 cursor-pointer text-gray-700 '} text-lg transition-all duration-500 p-1 rounded-full border-2`} />

        <div className="flex">

         {pageinationRange?.map((pageNumber, idx)=> {
          if (pageNumber === DOTS) {
            return <div key={idx} className=" text-black ">. . .</div>
          }
   console.log(pageNumber);
   
          return <div key={idx} className={`${pageNumber==currentPage?'bg-slate-300 ':''} transition-all duration-500 px-4 py-2 mx-4 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full text-lg`} onClick={()=> onPageChange(pageNumber)}>
            {pageNumber} 
          </div>
         } )} 
        </div>

<ChevronRight onClick={()=> { currentPage===lastPage?null:onPageChange(currentPage+1)}} size={42} className={` ${currentPage===lastPage?' text-gray-300 cursor-not-allowed bg-none hover:bg-none':'hover:bg-slate-200 cursor-pointer'} text-lg transition-all duration-500 p-1  rounded-full border-2`}/>


  </div>
}
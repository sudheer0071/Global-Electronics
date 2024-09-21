"use client";
import React, { act, useEffect, useRef, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";
import Link from "next/link";
import { EnquiryCard } from "./cards/EnquiryCard";
import { useRecoilState } from "recoil";
import {  enquiryState, productNameState, quoteState, responsiveNavState, sendEnquiryState, showSearchState } from "../recoilContextProvider";
import { Cross, ExternalLink, Link2Icon, MenuIcon, Phone, PhoneCall, Search, X } from "lucide-react";
import { countries } from "./sample";
import axios from "axios";
import { BACKEND_URL } from "../lib/config";
import { Loader } from "./Loader";
import { motion } from "framer-motion";
 
export default function Navbar() {
  
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarCheck className="top-0 left-0 right-0 w-full" />
    </div>
  );
}

function NavbarCheck({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [active2, setActive2] = useState<string | null>(null);
  const [showEnquiryCard, setShowEnquiryCard] = useRecoilState(enquiryState);
  const [showQuoteCard, setShowQuoteCard] = useRecoilState(quoteState);
  const [sendEnquiry, setSendEnquiry] = useRecoilState(sendEnquiryState)
  const[start,setStart] = useRecoilState(responsiveNavState) 
  const [showSearch, setShowSearch] = useRecoilState(showSearchState)
  const [list, setList] = useState([])
  const [responseiveNav, setResponsiveNav] = useState(false)
  const [productName, setProductName] = useRecoilState(productNameState)

  const[searchTerm, setSearchTerm] = useState('')
  const[searchResult, setSearchResult] = useState<[{company:string [], product:string[]}]>([
    {
      company:[''],
      product:[''],
    }
  ])
  const debounceTimeout = useRef<any>(null)

  const DELAY = 500


// Search Filteration
const performSearch = (query:string)=>{
  if (query.length==0) {
    // setSearchResult([])
    return;
  }
  const result = countries
  .filter((country)=> country.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  .sort();
  console.log(result);
  
  // setSearchResult(result) 
}

// test call the backend API
const getData = async (value:string)=>{
  if (value.length==0 || value==' ') {
    // setSearchResult([])
    return;
  }
   const res  = await axios.get("https://jsonplaceholder.typicode.com/users")
   const response:string[] = await res.data.map((namee:any)=> namee.name)
   const result:string[] = await response.filter((nameee)=> nameee.toLocaleUpperCase().includes(value.toLocaleUpperCase())) 
  //  setSearchResult(result)
   console.log(result);
}

// debounce function
function debounce (func:any, delay:number){
  return function(...args:[]){
    if(debounceTimeout.current) clearTimeout(debounceTimeout.current)
      debounceTimeout.current = setTimeout(() => {
         func(...args)
         debounceTimeout.current = null;
      },delay);
  }
}


// Debounce  Search function
const debounceSearch= (value:string) => debounce(getSearched(value), DELAY);

// Main call the backend API
const getSearched = async (value:string)=>{
  if ( value.length==0 || value==' ') {
    setStart(false)
    setSearchResult([{company:[''], product:[]}])
    return;
  }
  else{
    const res  = await axios.get(`${BACKEND_URL}/products/search/?query=${value}`) 
   const result = await res.data.map(({ details }:any) => details);
   const companies = res.data.map(({ manufacturer }:any)=>manufacturer);
   const company = companies.map((mfg:any)=>mfg.company_name);
   const filteredRes = result.map((name:string[]|any)=>name.map((nme:any)=>nme.value)).sort()
  
   console.log(res.data);
   console.log(result);
   console.log(company);
   console.log(filteredRes); 
  setSearchResult([{company:company, product:filteredRes}])
  }
}


 
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
  const { value } = e.target
  setSearchTerm(value)
  setShowSearch(true)
  setStart(true) 
  debounceSearch(value)
}
  
 
  const toggleQuoteCard = () => {
    console.log('inside the quote card');
    
    setShowQuoteCard(!showQuoteCard); 
  };
 
  const toggleEnquiryCard = () => {
    setShowEnquiryCard(!showEnquiryCard); 
  };
  const toggleSendEnquiryCard = () => {
    setSendEnquiry(!sendEnquiry); 
  };

  const searchResultEmpty = searchResult[0].company.length==0 || searchResult[0].product.length==0

  const searchResultList = searchResult.slice(0, 7).map((item, idx:number) => 
    <div className="" key={idx}>
  {item.company.map((companyName: string, idx2:number ) =>{
  
    if (item.product.length>=1) { 

      console.log(item.product.length);
      return <div key={idx2}>
         <Link onClick={()=>{  setProductName(companyName + " "+ item.product[idx2][1]+item.product[idx2][2] +item.product[idx2][3] ); !isLargeScreen?setResponsiveNav(!responseiveNav):setSearchTerm('')}} href={`/companies/${companyName}/${item.product[idx2][1]}`} key={idx2} >
    <div className=" hover:bg-slate-100 p-2 hover:scale-105 hover:text-slate-800 transition-all duration-500 cursor-pointer mt-2 border-b-2 "> {companyName}, {item.product[idx2]}  </div> 
     </Link>
      </div>
    }})}
  </div>
  );
  
const companies =["pro-face", "Mitsubishi", "omron", "fanux", "delta", "hITECH", "yashkawa", "keyence", "sick", "panacsonic", "intek/seinvi", "schneider", "siemens", "hongfa"]

useEffect(()=>{
  sendReq()
},[])
  
const sendReq = async () => { 
  const res = await axios.get(`${BACKEND_URL}/companies/all`)
  const response = res.data 
  console.log("nav");
  const lists = response.map((comp:any)=> comp.company_name)
  setList(lists) 
  console.log(lists);
  
  // setCompany(response)
}

const [isLargeScreen, setIsLargeScreen] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024); // Adjust the breakpoint as needed
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // Set initial value

  return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <div
      className={cn("fixed flex-none inset-x-11 mx-aukto w-full z-40", className)}
    >
      <div className="flex sm:h-20 md:h-20 lg:h-20">
          
        <div className=" bg-white shadow-md w-full"> 
          <div className=" flex p-[2px] sm:p-3 md:p-0 lg:p-0  ">
          <div className=" p-1 px-2 cursor-pointer" >
            <Link href={"/"}>
            <img width={80} src="https://5.imimg.com/data5/SELLER/Logo/2023/8/332359348/WL/RS/SO/102816454/logo-90x90.png" alt="" />
            </Link>
          </div>

          <div className=" flex text-black text-lg sm:text-xl md:text-xl lg:text-2xl text-dcenter mt:mt-4 lg:mt-4 md:w-[500px] lg:w-[500px] font-medium lg:gap-4">
         <Link className="" href={"/"}>
            Global Electronics Solutions
            <div className=" items-center  ">
              <div className=" text-xs   md:max-w-sm lg:max-w-sm">Global Electronic Solutions, Gurgaon, Gurugram, Haryana
                </div> 
                <div className=" lg:hidden flex gap-3 lg:-mt-4 items-center"> 
                  <PhoneCall/> 
                  <div className=" flex gap-5 text-xs lg:text-base lg:ml-4">
                  <div>
                    8383 23343,
                  </div>
                  <div>
                    2342 23343
                  </div>
                  </div>
                </div>
                <div className=" hidden md:hidden custom-lg:hidden lg:flex gap-3 lg:mt-3 bg-white p-1 rounded-md items-center"> 
                  <PhoneCall/> 
                  <div className=" flex gap-5 text-xs lg:text-base lg:ml-4">
                  <div>
                    8383 23343,
                  </div>
                  <div>
                    2342 23343
                  </div>
                  </div>
                </div>
            </div>
         </Link>
                <div className=" phone2 hidden md:hidden custom-lg:flex lg:hidden lg:-mt-4 items-center"> 
                  <PhoneCall/> 
                  <div className=" text-xs lg:text-base lg:ml-4">
                  <div>
                    83843 23343
                  </div>
                  <div>
                    23442 23343
                  </div>
                  </div>
                </div>
          </div>
          <div onClick={()=>{ setResponsiveNav(!responseiveNav); setShowSearch(false);setSearchTerm('') }} className=" scale-75 md:scale-100 lg:scale-100 md:hidden lg:hidden cursor-pointer text-black z-50 transition-all duration-500">
            {responseiveNav?<X size={45} className=" transition-all duration-500"/>: <MenuIcon size={45} className=" transition-all duration-500"/>}
          
        </div> 
          </div>
          <motion.div
          initial = {{scale:0.5,x:0, y:-250, opacity:0}}
          whileInView={{scale:1,x:0, y:0, opacity:1}}
          
          transition={{ 
           type:"just",
           stiffness:200,
           damping:7,
           duration:0.5
          }} 
            
           className={`${responseiveNav?'':'hidden'} text-black -mt-2 border-t-4 pt-3 justify-center bg-white w-full pb-3 shadow-md`}>
          <div className=" p-1 lg:p-3">
          <div className=" relative flex justify-center flex-col items-center -mt-2 w-full">
        <div className="flex flex-col  w-full items-center relative text-black">
  <input  
    className="border shadow-md shadow-gray-400 p-3 w-full rounded-md bg-slate-100 text-black font-medium text-md pl-5" 
    placeholder="Enter Product Number or company" 
    type="text" 
    value={searchTerm}
    onChange={handleInputChange}
  /> 
  <Search 
    className="absolute right-2 top-6 transform -translate-y-1/2 text-gray-400"
  /> 
  <div className={`${showSearch}hdidden w-full`}>
{{ searchResultEmpty } && showSearch && (
  <div className={` ${!start?' hidden':''} w-full bg-white pt-3 rounded-b-lg border-gray-400 text-black font-medium `}>
  <ul className="text-left border-2 text-md">
    {searchResultList.map((res:any, idx:number)=><div key={idx} className=" border-t p-2 text-gray-500  translate-all duration-500 ">
      {res}
    </div>)} 
  </ul>
  </div>
)}

 {/* {  debounceTimeout.current && <div>
 <Loader /> loading
 </div>} */}
{searchResultEmpty && showSearch &&
  searchTerm.length>0 && 
  !debounceTimeout.current && (
    <div className=" w-full shadow-lg border-2 rounded-b-lg flex justify-center items-center bg-white">
      <div className="h-80 p-3 text-lg text-center items-center flex  ">
      <div className=" ">No result found
        <div className=" ">
      <Button sendEnq={true} onclick={()=>{toggleSendEnquiryCard(); setResponsiveNav(!responseiveNav)}} height={2} label={"Send an Enquiry"} productCard={false} /> 
        </div>
      </div>
      </div>
    </div>
  )
} 
  </div>
</div>

          <div className=" mt-5 "> 
            <Button quote={true} nav={true} label={"Request a quote "} height={12} onclick={()=> {toggleQuoteCard(); setResponsiveNav(!responseiveNav)}} productCard={false} />
          </div>
        </div> 
          </div>
            <div className=" flex justify-center w-full">
          <Menu setActive={setActive2}> 
            {/* <MenuItem setActive={setActive} active={active} item={"Products"}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem> */} 
            <MenuItem setActive={setActive2} active={active2} item={"Companies"}>
              <div onClick={()=>{ }} className=" flex flex-col space-y-5 text-sm">
                {list.map((company, idx) => { 
                  // const formattedCompany = company.comapny_name.charAt(0).toUpperCase() + company.company_name.slice(1).toLowerCase();
                  return (
                    <HoveredLink onClick={()=>{setActive2(''); setResponsiveNav(!responseiveNav)}} key={idx} href={`/companies/${company }`}>
                      {company}
                    </HoveredLink>
                  );
                })}

              </div>
            </MenuItem>  
            <div className=" py-3">

            </div>
            <MenuItem setActive={setActive2} active={active2} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">about us  <ExternalLink size={20} className=" ml-1 inline"/>
 
                </HoveredLink> 
              </div>
            </MenuItem> 
  
          </Menu>
            </div>
     
          </motion.div>
        </div>

        <div className=" hidden lg:inline">
          <Menu setActive={setActive}>
            {/* <MenuItem setActive={setActive} active={active} item={"Products"}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem> */}
            <MenuItem setActive={setActive} active={active} item={"Companies"}>
              <div onClick={()=>{}} className=" flex flex-col space-y-4 text-sm">
                {list.map((company, idx) => { 
                  // const formattedCompany = company.comapny_name.charAt(0).toUpperCase() + company.company_name.slice(1).toLowerCase();
                  return (
                    <HoveredLink onClick={()=>setActive('')} key={idx} href={`/companies/${company }`}>
                      {company}
                    </HoveredLink>
                  );
                })}

              </div>
            </MenuItem>  
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">about us  <ExternalLink size={20} className=" ml-1 inline"/>
 
                </HoveredLink> 
              </div>
            </MenuItem> 
 
          </Menu>
        </div>
        <div className=" hidden md:flex lg:flex relative -mt-2 w-full  justify-end shadow-md bg-white">
        <div className="flex flex-col mt-5 w-full items-center mr-6 relative text-black">
  <input  
    className="border shadow-md shadow-gray-400 p-3 w-full rounded-md bg-slate-100 text-black font-medium text-md pl-5" 
    placeholder="Enter Product Number or company" 
    type="text" 
    value={searchTerm}
    onChange={handleInputChange}
  /> 
  <Search 
    className="absolute right-2 top-6 transform -translate-y-1/2 text-gray-400"
  /> 
  <div className={`${showSearch}hdidden w-full`}>
{{ searchResultEmpty } && showSearch && (
  <div className={` ${!start?' hidden':''} w-full bg-white pt-3 rounded-b-lg border-gray-400 text-black font-medium `}>
  <ul className="text-left  border-2 text-md">
    {searchResultList.map((res:any, idx:number)=><div key={idx} className=" border-t p-2 text-gray-500  translate-all duration-500 ">
      {res}
    </div>)} 
  </ul>
  </div>
)}

 {/* {  debounceTimeout.current && <div>
 <Loader /> loading
 </div>} */}
{searchResultEmpty && showSearch &&
  searchTerm.length>0 && 
  !debounceTimeout.current && (
    <div className=" w-full shadow-lg border-2 rounded-b-lg flex justify-center items-center bg-white">
      <div className="h-80 p-3 text-lg text-center items-center flex  ">
      <div className=" ">No result found
        <div className="">
      <Button sendEnq={true} onclick={()=>toggleSendEnquiryCard()} height={2} label={"Send an Enquiry"} productCard={false} /> 
        </div>
      </div>
      </div>
    </div>
  )
} 
  </div>
</div>

          <div className=" -mt-1 -ml-3">
            <Button quote={true} nav={true} label={"Request a quote "} height={2} onclick={()=>toggleQuoteCard()} productCard={false} />
          </div>
        </div> 
      </div>
      {/* {showEnquiryCard && <EnquiryCard quote={ true}  />} */}
      {showQuoteCard && <EnquiryCard quote={ true}  />}
      {sendEnquiry && <EnquiryCard sendEnq={ true}  />}

    </div>
  );
}

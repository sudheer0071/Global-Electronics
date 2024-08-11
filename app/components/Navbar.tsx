"use client";
import React, { act, useRef, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";
import Link from "next/link";
import { EnquiryCard } from "./cards/EnquiryCard";
import { useRecoilState } from "recoil";
import {  quoteState, sendEnquiryState, showSearchState } from "../recoilContextProvider";
import { Search } from "lucide-react";
import { countries } from "./sample";
import axios from "axios";
import { BACKEND_URL } from "../lib/config";
import { Loader } from "./Loader";
 
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
  const [showEnquiryCard, setShowEnquiryCard] = useRecoilState(quoteState);
  const [sendEnquiry, setSendEnquiry] = useRecoilState(sendEnquiryState)
  const[start,setStart] = useState(false) 
  const [showSearch, setShowSearch] = useRecoilState(showSearchState)

  const[searchTerm, setSearchTerm] = useState('')
  const[searchResult, setSearchResult] = useState<[{company:string [], product:string[]}]>([
    {
      company:[''],
      product:[''],
    }
  ])
  const debounceTimeout = useRef<any>(null)

  const DELAY = 2000


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

// Main call the backend API
const getSearched = async (value:string)=>{
  if (value.length==0 || value==' ') {
    setStart(false)
    setSearchResult([{company:[''], product:[]}])
    return;
  }
   const res  = await axios.get(`${BACKEND_URL}/products/search/?query=${value}`) 
  const result = res.data.map(({ details }:any) => details);
  const companies = res.data.map(({ manufacturer }:any)=>manufacturer);
  const company = companies.map((mfg:any)=>mfg.company_name);
  const filteredRes = result.map((name:string[]|any)=>name.map((nme:any)=>nme.value))
 
  console.log(res.data);
  console.log(result);
  console.log(company);
  console.log(filteredRes); 
 setSearchResult([{company:company, product:filteredRes}])
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
const debounceSearch =(value:string)=> debounce(getSearched(value),DELAY)

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
  const { value } = e.target
  setSearchTerm(value)
  setShowSearch(true)
  setStart(true)
//  getData(value)
  debounceSearch(value)
}
 
 
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
         <Link onClick={()=>setSearchTerm('')} href={`/companies/${companyName}/${item.product[idx2][1]}`} key={idx2} >
    <div className=" hover:bg-slate-100 p-2 hover:scale-105 hover:text-slate-800 transition-all duration-500 cursor-pointer mt-2 border-b-2 "> {companyName}, {item.product[idx2]}  </div> 
     </Link>
      </div>
    }})}
  </div>
  );
  
const companies =["pro-face", "Mitsubishi", "omron", "fanux", "delta", "hITECH", "yashkawa", "keyence", "sick", "panacsonic", "intek/seinvi", "schneider", "siemens", "hongfa"]

  return (
    <div
      className={cn("fixed flex-none inset-x-11 mx-aukto w-full z-50", className)}
    >
      <div className="flex h-20">
          
        <div className=" bg-white shadow-md flex "> 
          <div className=" p-1 px-2 cursor-pointer" >
            <Link href={"/"}>
            <img width={80} src="https://5.imimg.com/data5/SELLER/Logo/2023/8/332359348/WL/RS/SO/102816454/logo-90x90.png" alt="" />
            </Link>
          </div>

          <div className=" cursor-pointer text-black text-2xl text-dcenter mt-4 fldex items-center w-[500px] font-medium">
         <Link href={"/"}>
            Global Electronics Solutions
         </Link>
            <div className=" -mt-3">
              <small className=" text-xs">Global Electronic Solutions, Gurgaon, Gurugram, Haryana</small>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item={"Products"}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item={"Companies"}>
              <div onClick={()=>{}} className=" flex flex-col space-y-4 text-sm">
                {companies.map((company, idx) => {
                  const formattedCompany = company.charAt(0).toUpperCase() + company.slice(1).toLowerCase();
                  return (
                    <HoveredLink onClick={()=>setActive('')} key={idx} href={`/companies/${company}`}>
                      {formattedCompany}
                    </HoveredLink>
                  );
                })}

              </div>
            </MenuItem>  
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby
 
                </HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem> 
 
          </Menu>
        </div>
        <div className=" relative -mt-2 w-full flex justify-end shadow-md bg-white">
        <div className="flex flex-col mt-5 items-center mr-6 relative text-black">
  <input  
    className="border shadow-md shadow-gray-400 p-3 w-80 rounded-md bg-slate-100 text-black font-medium text-md pl-5" 
    placeholder="Enter Product Number" 
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

 {  debounceTimeout.current && <div>
 <Loader /> loading
 </div>}
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
            <Button quote={true} nav={true} label={"Request a quote "} height={2} onclick={toggleEnquiryCard} productCard={false} />
          </div>
        </div>
      </div>
      {showEnquiryCard && <EnquiryCard quote={ true}  />}
      {sendEnquiry && <EnquiryCard sendEnq={ true}  />}

    </div>
  );
}

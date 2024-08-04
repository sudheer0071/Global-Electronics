"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { Button } from "./Button";
import Link from "next/link";
import { EnquiryCard } from "./cards/EnquiryCard";
import { useRecoilState } from "recoil";
import { btnState } from "../recoilContextProvider";



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
  
  const [showEnquiryCard, setShowEnquiryCard] = useRecoilState(btnState);

  const toggleEnquiryCard = () => {
    setShowEnquiryCard(!showEnquiryCard);
  };


  const companies =["pro-face", "mitsubishi", "omron", "fanux", "delta", "hITECH", "yashkawa", "keyence", "sick", "panacsonic", "intek/seinvi", "schneider", "siemens", "hongfa"]

  return (
    <div
      className={cn("fixed flex-none inset-x-11 mx-aukto w-full z-50", className)}
    >
      <div className="flex h-20">
          
        <div className=" bg-white shadow-md flex "> 
          <div className=" p-1 px-5 cursor-pointer" >
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
              <div onClick={()=>{}} className="flex flex-col space-y-4 text-sm">
                {companies.map((company, idx) => {
                  const formattedCompany = company.charAt(0).toUpperCase() + company.slice(1).toLowerCase();
                  return (
                    <HoveredLink key={idx} href={`/companies/${company}`}>
                      {formattedCompany}
                    </HoveredLink>
                  );
                })}

              </div>
            </MenuItem>

            {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}

            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby

                </HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>

            {/* <MenuItem setActive={setActive} active={active} item="Companies"> */}
            {/* </MenuItem> */}


          </Menu>
        </div>
        <div className=" relative -mt-2 w-full flex justify-end shadow-md bg-white">
          <div className=" ">
            <Button nav={true} label={"Request a quote "} height={2} onclick={toggleEnquiryCard} productCard={false} />
          </div>
        </div>
      </div>
      {showEnquiryCard && <EnquiryCard />}

    </div>
  );
}

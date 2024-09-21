"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {

  const handleClick = () => {
    if (active === item) {
      setActive(''); // Reset to empty string if the item is already active
    } else {
      setActive(item); // Set the item as active
    }
  };


  return (
    <div onClick={handleClick} onMouseEnter={() => setActive(item)} className="relative ">
      <motion.div
        transition={{ duration: 0.5 }}
        className=" cursor-pointer text-black transition-all duration-500 hover:text-yellow-500 hover:opacity-[0.9] "
      > 
      <div className=" flex">
        {item} <ChevronDown className=" mt-1 ml-1 inline"/>
      </div>
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className=" absolute z-50 top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-1">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white border-t-0 z-50 backdrop-blur-sm rounded-md overflow-hidden border border-black/[0.2] text-black shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <div>
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative lg:shadow-md text-xl hover:text-yellow-500 gap-10 text-black font-semibold dark:border-white/[0.2] h-[80px] bg-white shadow-input lg:flex md:flex items-center justify-betwdeen space-x-4 pr-4 lg:py-6 "
    >
      {children} 
    </nav> 
      </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link 
       
      {...rest}
      className="text-neutral-700 text-lg text-center px-6 hover:scale-110 hover:text-yellow-500 transition-all duration-500 "
    >
      {children}
    </Link>
  );
};

import { useEffect, useState } from "react";
import { AdvantageCard } from "../cards/AdvantageCard"

export const Advantages = ()=>{

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return <div className=" max-w-screen-2xl bg-white text-black">
   <div className=" py-32 bg-white text-black"> 
    <div className=" text-center text-2xl md:text-3xl lg:text-4xl font-semibold ml-6 flex justify-center">
    Unbeatable Advantages
    </div>
    <div className=" mx-2 md:mx-5 lg:mx-10">
    <div className=" md:20 lg:my-20 lg:ml-8 w-full px-2 box-border grid grid-cols-1 md:grid-cols-2 lg:flex ">
      <div>
     <AdvantageCard title="Wide Product Selection" content="Our full product lines can provide you with the right product of the right brand, thus you can reduce a supply base, shorten the purchasing circle, and meet your business goal." image="icon01.png" right={false}/>
     <AdvantageCard title="Unbeatable Price" content="Our ever-growing distributorship network with world-class brand suppliers helps Global Electronc Solutions offer a price more discounted than the price of our competitors." image="icon02.png" right={false}/>
      </div>
      <div className=" m-auto">
         <img className=" rounded-md lg:max-w-xl lg:w-5/5 m-auto overflow-hidden" src="https://www.plc-sensors.com/wp-content/themes/mml-theme/dist/img/p01/s06-pic.jpg" alt="" />
      </div>
      <div>
        <AdvantageCard title="On-hand Inventory" content="Accessing domestic distribution bases easily, We are at your service with on-hand inventory." image="icon03.png" right={false}/>
        <AdvantageCard title="Worry-Free Service" content="Full support throughout our presale, sales and after-sales services, is available with the help of our product experts, including:

24/7 consultation
24/7 order processing
12-month warranty" image="icon04.png" right={false}/> 
      </div>
    </div> 
    </div>
  </div>
</div>
}

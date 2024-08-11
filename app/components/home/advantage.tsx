import { AdvantageCard } from "../cards/AdvantageCard"

export const Advantages = ()=>{
  return <div className=" max-w-screen-2xl bg-white text-black">
   <div className=" py-32 bg-white text-black"> 
    <div className=" text-4xl font-semibold ml-6 flex justify-center">
    A Partial List of Manufacturers
    </div>
    <div className=" mx-10">
    <div className=" my-20 ml-8 w-full px-2 box-border flex ">
      <div>
     <AdvantageCard title="Wide Product Selection" content="Our full product lines can provide you with the right product of the right brand, thus you can reduce a supply base, shorten the purchasing circle, and meet your business goal." image="icon01.png" right={true}/>
     <AdvantageCard title="Unbeatable Price" content="Our ever-growing distributorship network with world-class brand suppliers helps United Automation offer a price more discounted than the price of our competitors. We sell Mitsubishi products for around 10 percent less than what the market price is." image="icon02.png" right={true}/>
      </div>
      <div className=" m-auto">
         <img className=" rounded-md max-w-xl w-5/5 m-auto overflow-hidden" src="https://www.plc-sensors.com/wp-content/themes/mml-theme/dist/img/p01/s06-pic.jpg" alt="" />
      </div>
      <div>
        <AdvantageCard title="On-hand Inventory" content="Accessing domestic distribution bases easily, United Automation is at your service with on-hand inventory. Our product specialists backed by a decade’s worth of industry experience have served over 1,500 customers and helped them get more profitability." image="icon03.png" right={false}/>
        <AdvantageCard title="Worry-Free Service" content="Full support throughout our presale, sales and after-sales services, is available with the help of our 60+ product experts, including:

24/7 consultation
24/7 order processing
12-month warranty" image="icon04.png" right={false}/> 
      </div>
    </div> 
    </div>
  </div>
</div>
}
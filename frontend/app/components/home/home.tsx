import { Button } from "../Button";

 
export default function Main() { 
  return <div className={` banner flex h-screen items-center`}>
    {/* <Image  quality="100"
         className=" opacity-30" layout="fill" alt="" src={'/fan.jpg'}/> */}
        <div className=" mx-44 py-32 w-full h-full">
           <div className=" flex justify-start ">
           <div className="max-w-xl px-9 py-14 rounded-md bg-[rgba(57,59,59,0.7)]">
            <div className=" text-5xl font-semibold">
           Industrial Automation Products Distributor in China 
            </div>
            <div className=" py-9">
            With dozens of reputed and dependable market-leading distributorships, United Automation is your one-stop sourcing base.
            </div>
            <div className="  ">
            We supply whatever you need, with the price far lower than the market rates.
            </div>
            <div className=" flex justify-start">
            <Button label={'Contact us'} onclick={''} height={20} />
            </div>
           </div>
           </div>
        <div className="go-down absolute -bottom-20 left-[37%]">
                <a href="#anchor-blk" id="anchor-btn">
                    <img src="https://www.plc-sensors.com/wp-content/themes/mml-theme/dist/img/p01/down.png
" alt="down"/>
                </a>
            </div>
        </div> 
  </div>
}

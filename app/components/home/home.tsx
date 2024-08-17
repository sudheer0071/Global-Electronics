
import { useRecoilState } from "recoil";
import { Button } from "../ui/Button";
import { contactState } from "@/app/recoilContextProvider";
import { EnquiryCard } from "../cards/EnquiryCard";

 
export default function Main() { 

  const [contactBtn, setContactBtn] = useRecoilState(contactState);

  const toggleEnquiryCard = () => {
    setContactBtn(!contactBtn);
  };

 
  return <div className={` banner flex h-screen items-center`}>
        <div className=" mx-4 md:mx-8 lg:mx-14  max-w-screen-lg py-32 w-full h-full">
           <div className=" flex justify-star">
           <div className="max-w-xl px-4 md:px-7 lg:px-9 py-14 rounded-lg bg-[rgba(26,37,48,0.64)]">
            <div className=" text-3xl md:text-4xl lg:text-5xl font-semibold">
           Cooling Fans Distributor in India
            </div>
            <div className=" py-9">
            With dozens of reputed and dependable market-leading distributorships, Global Eletronic Solutions is your one-stop sourcing base.
            </div>
            <div className="  ">
            We supply best quality cooling fans, with the price far lower than the market rates.
            </div>
            <div className=" flex justify-start">
            <Button contact={true} label={'Contact us'} onclick={toggleEnquiryCard} height={20} />
            </div>
           </div>
           </div>
        <div className=" lg:inline md:inline hidden go-down absolute -bottom-20 left-[37%]">

            </div>
        </div> 
      {contactBtn && <EnquiryCard contact={true} />}

  </div>
}

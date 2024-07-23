import Image from "next/image";

export default function Home() {
  return <div className=" h-screen flex justify-center items-center">
    <Image  quality="100"
         className=" opacity-30" layout="fill" alt="" src={'/fan.jpg'}/>
         <div className=" text-2xl font-medium">
            Its on progress launching soon....
         </div>
  </div>
}

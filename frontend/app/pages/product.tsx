import { Button } from "../components/Button"
import { ProducCards } from "../components/cards/ProductsCards"

export const Products = ()=>{

  const compamies1 = ["Mitsubishi","Siemens","Omron","Fanuc","Delta","Panasonic"]
  const compamies2 = ["Mitsubishi","Siemens","Omron","Fanuc","Delta","Panasonic"]

  return <div>
    <div className={`  bg-white ban ner flex `}>
    {/* <Image  quality="100"
         className=" opacity-30" layout="fill" alt="" src={'/fan.jpg'}/> */}
        <div className=" text-black lg:px-28 py-20 w-full">
            <div className=" flex justify-center text-4xl font-semibold">
            Brand Products We Supply
            </div> 
         <div className=" lg:px-0 px-11 grid md:grid-cols-2 lg:grid-cols-3 mt-10">
          <ProducCards heading="Measurement Instrumentation" image="2024/07/O1CN01NcXUrp1ZcW3eWr5ji_1765723215.jpg" companies={[]}/> 
          <ProducCards heading="PLC" image="2020/03/S02-pic01.jpg" companies={compamies1}/> 
          <ProducCards heading="Severometer" image="2021/01/Servomotor.jpg" companies={compamies1}/> 
          <ProducCards heading="Severo Drive" image="2020/03/S02-pic03.jpg" companies={compamies1}/> 
          <ProducCards heading="HMI" image="2021/01/HMI.jpg" companies={compamies1}/> 
          <ProducCards heading="VFD" image="2020/03/S02-pic05.jpg" companies={compamies1}/> 
         
         </div>
        </div> 
  </div>
  </div>
}
 
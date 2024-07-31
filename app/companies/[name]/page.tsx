"use client"
import TopCard from "@/app/components/cards/TopCard"
import { useParams} from 'next/navigation' 
import { NextPage } from 'next';
import { useEffect, useState } from "react"; 
import { useRouter } from "next/navigation";
 
const Company:NextPage = ()=>{
  // const [company, setCompany] = useState<string | string[] | undefined>();
  const router = useRouter()
  const  name = useParams()
  
  // useEffect(() => {
  //   if (router.isReady) {
  //     setCompany(name);
  //   }
  // }, [router.isReady, name]);
 
    const Companies =   {
      companyName:"Mitsubishi",
      image:"2020/03/S02-pic1.jpg",
      header:"A Professional Mitsubihsi Distributor",
      about:["With decades of experience in the automation industry, Mitsubishi offers a wide range of electric and electronic equipment and support services for industrial and commercial sectors.","  Being an authorized distributor for a full product line of Mitsubishi factory automation products, United Automation is honored to help customers innovate production technologies and increase business opportunities."," Thanks to our competitive wholesale prices and full after-sales support, United Automation has successfully served a wide variety of industrial markets with a broad product portfolio that meets international standards."],
      products:[
        {
          model:"Mitsubishi PLC",
          image:"2021/02/Mitsubishi-PLC-1.jpg",
        },
        {
          model:"Mitsubishi Servomotor",
          image:"2021/02/Mitsubishi-Servo-Motor-1.jpg"
        },
        {
          model:"Mitsubishi Servo Drive",
          image: "2021/02/Mitsubishi-servo-drive-2.jpg"
        },
        {
          model:"Mitsubishi HMI",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
      ]
    } 
    // console.log(company);
    console.log(name);
     
  // if (company!='mitsubishi') {
  //   return <div> 
  //     Loding...
  //   </div>
  // }

  return <div>
    <TopCard label={Companies.companyName} />
      <div className=" bg-white pt-32 pb-20 m-auto ">
        <div className=" text-4xl text-black font-semibold flex justify-center">
          {Companies.header} 
        </div>
        <div id="comp" className=" text-black py-12 mt-12 ">
          <div className=" flex px-4 mx-28">
          <div className=" relative"> 
            <img className="shadow-2xl ml-12" src={`https://www.plc-sensors.com/wp-content/uploads/${Companies.image}}`} alt="" /> 
          </div>
          <div className=" ml-24 max-w-2xl font-light">
            {Companies.about.map((about, idx)=><p className=" mt-8" key={idx}>{about}</p>)} 
          </div>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-10 bg-white text-black">
        <div className=" flex flex-col mx-32">
          <div className=" text-4xl w-full font-semibold max-w-4xl">
          We carry the following products from {Companies.companyName} but not limited to
          </div> 
          <div className=" mt-10 grid grid-cols-4"> 
            {Companies.products.map((product,idx)=><Products key={idx} model={product.model} image={product.image} />) } 
          </div>
        </div> 
      </div>
  </div>
}


const Products = ({model, image}:{model:string, image:string})=>{
  return <div>
    <div className=" ml-6 hover:text-blue-500 cursor-pointer transition-all duration-500"> 
        <img className=" rounded-lg hover:shadow-xl transition-all duration-500" src={`https://www.plc-sensors.com/wp-content/uploads/${image}`} alt="" />
        <div className=" mt-2 text-center text-xl font-semibold">
          {model}
        </div>
    </div>
  </div>
}

export default Company;

 
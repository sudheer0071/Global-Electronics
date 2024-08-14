"use client"
import TopCard from "@/app/components/cards/TopCard"
import { useParams} from 'next/navigation' 
import { NextPage } from 'next';
import { useEffect, useMemo, useState } from "react"; 
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader } from "../../components/Loader";
import axios from 'axios'
import { BACKEND_URL, R2 } from "@/app/lib/config";
import { Pagination } from "@/app/components/Pagination";
 
const Company:NextPage = ()=>{
  // const [company, setCompany] = useState<string | string[] | undefined>();
  const router = useRouter()
  const name  = useParams() 
  const[company, setCompany] = useState<string|string[]>('')
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [companies, setCompanies] = useState({
    
manufacturer
:{
  company_name:'',
      img:[{image:''}],
      about:['',' ',' '],
    }, 
    products:[
      {
        name:'',
        image:'',
      }
    ]
  })
  let pageSize = 6;
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
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
          model:"Mitsubishi 109P0424H302",
          image:"2021/02/Mitsubishi-HMI-1.jpg"
        },
        {
          model:"VFD",
          image:"2021/02/Mitsubishi-VFD-1.jpg"
        },
      ]
    }   
  console.log(name.name);

  const currentProducts = useMemo(()=>{
    const firstPageIdx = (currentPage - 1) * pageSize;
    const lastPageIdx = pageSize + firstPageIdx;
    return companies.products.slice(firstPageIdx, lastPageIdx);
  },[currentPage])

    const sendReq = async () => {
      try{
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/companies/${name.name}`)
        const response = res.data
        console.log("inside the send req");
        setLoading(false)
      setCompany(name.name) 
      console.log(response);
      setCompanies(response)
    }
    catch(e){
      console.log("this company is not in database");
      console.log(e); 
    }
    }
  
    useEffect(()=>{ 
      
      setTimeout(() => { 
        console.log("company = "+company);
      sendReq() 
      }, 2000);
    },[])
     
  if (company!=name.name) {
    return <div className=" ">
    <Loader/>
  </div>
  } 
  return <div>
    <div> 
    </div>
    <TopCard label={companies.manufacturer.company_name} />
      <div className=" bg-white pt-32 pb-20 m-auto ">
        <div className=" text-4xl text-black font-semibold flex justify-center">
          {Companies.header} 
        </div>
        <div id="comp" className=" textblack py-12 mt-12 ">
          <div className=" px-4 max-w-7xl w-full mx-auto">
          <div className=" flex">
          <div className=" z-0 hd"> 
            <img className="shadow-2xl ml-10" src={`${R2}${companies.manufacturer.img[0].image}`} alt="" /> 
          </div>
          <div className=" ml-24 max-w-2xl font-light text-black">
            {companies.manufacturer.about.map((about, idx)=><p className=" mt-8" key={idx}>{about}</p>)} 
          </div>
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
            {currentProducts.map((product,idx)=><Products name={JSON.stringify(name)} key={idx} model={product.name} image={product.image} />) } 
          </div>
        <Pagination currentPage={currentPage} totalCount={companies.products.length} onPageChange={(page:number)=>setCurrentPage(page)} pageSize={pageSize} />

        </div> 
      </div>
  </div>
}


const Products = ({name,model, image}:{name:string, model:string, image:string})=>{
  console.log(model.split(' ')[0]);
  
  return <div>
      <Link href={`/companies/${name}/${encodeURIComponent(model).split(' ')[0]}`}> 

    <div className=" p-4 mr-8 shadow-lg hover:shadow-xl hover:scale-110 ml-6 hover:text-blue-500 cursor-pointer transition-all duration-500"> 
      <div className=" h-full">
        <img className=" rounded-lg  transition-all duration-500 " src={`${R2}${image}`} alt={model} />
      </div>
        <div className=" mt-2 text-center text-xl font-semibold">
          {model}
        </div>
    </div>
      </Link>
  </div>
}

export default Company;

 
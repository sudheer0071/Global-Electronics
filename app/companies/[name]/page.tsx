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
import { useRecoilState } from "recoil";
import { productNameState } from "@/app/recoilContextProvider";
 
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
    console.log(firstPageIdx, lastPageIdx);
    
    return companies.products.slice(firstPageIdx, lastPageIdx);
  },[currentPage, companies.products])

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
      <div className=" bg-white pt-32 pb-20 md:m-auto lg:m-auto ">
        <div className=" mx-6 md:mx-5 lg:mx-0 text-2xl md:text-3xl lg:text-4xl text-black font-semibold flex justify-center">
         A Professional {companies.manufacturer.company_name} distrubutor
        </div>
        <div id="comp" className="  textblack py-8 mt-3 md:py-10 md:mt-10 lg:py-12 lg:mt-12 ">
          <div className=" px-4 lg:max-w-7xl w-full  lg:mx-auto">
          <div className=" lg:flex">
          <div className=" z-0 hd flex justify-center"> 
            <img className="shadow-2xl lg:ml-10" src={`${R2}${companies.manufacturer.img[0].image}`} alt="" /> 
          </div>
          <div>
          <div className=" mx-2 sm:mx-5 md:mx-7 lg:mx-0 lg:ml-24 lg:max-w-2xl font-light text-black">
            {companies.manufacturer.about.map((about, idx)=><p className=" mt-8" key={idx}>{about}</p>)} 
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>

      <div className=" md:pt-14 md:pb-5 lg:pt-20 lg:pb-10 bg-white text-black">
        <div className=" flex flex-col mx-6 sm:mx-14 md:mx-24 lg:mx-32">
          <div className=" text-2xl md:text-3xl lg:text-4xl w-full font-semibold max-w-4xl">
          We carry the following products from {companies.manufacturer.company_name} but not limited to
          </div> 
          <div className=" mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4"> 
            {currentProducts.map((product,idx)=><Products name={JSON.stringify(name)} key={idx} model={product.name} image={product.image} />) } 
          </div>
        <Pagination currentPage={currentPage} totalCount={companies.products.length} onPageChange={(page:number)=>setCurrentPage(page)} pageSize={pageSize} />

        </div> 
      </div>
  </div>
}


const Products = ({name,model, image}:{name:string, model:string, image:string})=>{ 
  
  const [productName, setProductName] = useRecoilState(productNameState)

  return <div>
      <Link onClick={()=>setProductName(model)} href={`/companies/${name}/${encodeURIComponent(model.split(' ')[0])}`}> 

    <div className=" mt-2 p-2 mr-3 md:p-2 md:mr-4 lg:p-4 lg:mr-8 shadow-lg hover:shadow-xl hover:scale-110 ml-3 md:ml-4 lg:ml-6 hover:text-blue-500 cursor-pointer transition-all duration-500"> 
      <div className=" h-full">
        <img className=" rounded-lg  transition-all duration-500 " src={`${R2}${image}`} alt={model} />
      </div>
        <div className=" mt-2 text-center text-sm md:text-lg lg:text-xl font-semibold">
          {model}
        </div>
    </div>
      </Link>
  </div>
}

export default Company;

 
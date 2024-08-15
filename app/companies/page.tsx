"use client"

import TopCard from "../components/cards/TopCard"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL, R2 } from "../lib/config"
import { Loader } from "../components/Loader"

// interface companyuProps {
 
//   company_name:string,
//  img:[]
 
// }

 const AllCompanies = ()=>{
  const [loading, setLoading] = useState(false)
  const [companies, setCompanies] = useState<any>([])

  const router = useRouter()
  // const [company, setCompany] = useState([
  //   {
  //     name:'',
  //     image:''
  //   }
  // ])

  const company = [
    {
      name:"Mitsurebishi",
      image:"2020/03/S02-pic1.jpg"
    },
    {
      name:"Pro-face",
      image:"2020/03/Proface-1-1.png"
    }, 
    {
      name:"Omron",
      image:"2020/03/Omron-Supplier-2.jpg"
    },
    {
      name:"Fanuc",
      image:"2020/03/Fanuc-2.jpg"
    },
    {
      name:"Delta",
      image:"2020/03/Delta-1.jpg"
    },
    {
      name:"Yaskawa",
      image:"2020/03/Yaskawa.jpg"
    },
    {
      name:"Sick",
      image:"2020/03/SICK.jpg"
    },
    {
      name:"Panasonic",
      image:"2020/03/Panasonic.jpg"
    },
    {
      name:"Weinview",
      image:"2020/03/Weinview.jpg"
    },
    {
      name:"Siemens",
      image:"2020/03/Siemens-1.jpg"
    },
    {
      name:"Schneider",
      image:"2020/03/Schneider-1.jpg"
    },
    {
      name:"Hongfa-Relay",
      image:"2020/03/Hongfa-Relay-1.jpg"
    },
  ]
    
  const sendReq = async () => {
    setLoading(true)
    const res = await axios.get(`${BACKEND_URL}/companies/all`)
    const response = res.data
    console.log("inside the send req");
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    setCompanies(response)
    console.log(response);
    // setCompany(response)
  }

  
  useEffect(() => {
    sendReq();
    setTimeout(() => {
    }, 2000);
  }, []);

  // if (loading) {
  //   return <div>
  //   <Loader/>
  // </div>
  // }

  return <div>
      <TopCard label="Companies" />
      <div className=" bg-white py-32 m-auto ">
        <div className=" text-2xl md:text-3xl lg:text-4xl text-black font-semibold px-10 flex justify-center">
       Your Strong Servomotor Distributor
        </div>
        <div className=" grid md:grid-cols-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:px-7 px-2 sm:px-4 lg:px-10 py-11">
    {companies.map((comp:any, idx:any)=>(
      <CompaniesCard key={idx} name={comp.company_name} image={comp.img[0].image}  /> 
    ))}
    </div> 
      </div>
  </div>
}

const CompaniesCard = ({name,image}:{name:string, image:string})=>{
  return <div>
    <Link  href={`/companies/${encodeURIComponent(name)}`}>
    <div className=" mt-10 p-3 mr-5 flex flex-col hover:scale-105 hover:text-blue-500 text-black transition-all duration-500">
      <div className=" h-full w-full shadow-xl hover:shadow-2xl rounded-md transition-all duration-500 justify-center flex">
      <img width={200} className=" rounded-md p-3" src={`${R2}${image}`} alt="" />
      </div>
      <div className=" flex justify-center mt-5">
      <p className=" text-xl md:text-3xl lg:text-3xl font-medium ">{name}</p>
      </div>
    </div>
      </Link>
  </div>
}

export default AllCompanies 
 
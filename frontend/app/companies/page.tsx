"use client"

import TopCard from "../components/cards/TopCard"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

 const AllCompanies = ({label}:{label:string})=>{
  const router = useRouter()
  const company = [
    {
      name:"mitsubishi",
      image:"2020/03/S02-pic1.jpg"
    },
    {
      name:"mitsubishi",
      image:"2020/03/S02-pic1.jpg"
    },
  ]
  return <div>
      <TopCard label="Severometer" />
      <div className=" bg-white py-32 m-auto ">
        <div className=" text-4xl text-black font-semibold flex justify-center">
       Your Strong Servomotor Distributor
        </div>
    {company.map((comp)=>(
      <Link href={`/companies/${encodeURIComponent(comp.name)}`}>
      <p className=" text-black text-3xl">{comp.name}</p>
      <br />
      <img src={`https://www.plc-sensors.com/wp-content/uploads/${comp.image}`} alt="" />
      </Link>
      
    ))}
       {/* <img onClick={router.} src="https://www.plc-sensors.com/wp-content/uploads/2020/03/S02-pic1.jpg%7D" alt="" /> */}
      </div>
  </div>
}



export default AllCompanies 
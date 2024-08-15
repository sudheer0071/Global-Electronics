import { Button } from "../ui/Button"
import { ProducCards } from "../cards/ProductsCards"

export const Products = ()=>{

  const compamies1 = ["Mitsubishi","Siemens","Omron","Fanuc","Delta","Panasonic"]
  const compamies2 = ["Mitsubishi","Siemens","Omron","Fanuc","Delta","Panasonic"]

  const products = [
    {
      name:"Cooling Fan",
      companies:[ 'DELTA', 'Melco'],
      image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdwsW82Ke1eW3i6fAwlQAvVzyuCAQySg69mwsGSD3QLLG-bncJ"
    },
    {
      name:"Axial Fan",
      companies:['SUNON','EBM PAPST','NMB Technologies Corporation','ADDA','Sanyo Denki', 'Melco'],
      image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQE6xi6lXgOhprNUmwor3Ce_pRU0mxulkk5vzCG_F_A-4xofbg-"
    },
    {
      name:"MultiPurpose Fan",
      companies:[ 'NMB Technologies Corporation','ADDA','Sanyo Denki', 'Melco'],
      image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3g1gTSfEwa_Khay00qUs3fx0S2be7bxxW111nn319ReaZFc4j"
    },
    {
      name:"Heater Fan",
      companies:['SUNON','EBM PAPST','NMB Technologies Corporation','ADDA' ],
      image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKZumrR3FVF1hzMM9KbBLBcRaXKzOtFAQlR3wy9gGwvYyIovdX"
    },
  ]

  return <div>
    <div className={`  bg-white ban ner flex `}>
    {/* <Image  quality="100"
         className=" opacity-30" layout="fill" alt="" src={'/fan.jpg'}/> */}
        <div className=" text-black lg:px-28 py-20 w-full">
            <div className=" flex justify-center text-3xl md:text-3xl lg:text-4xl font-semibold">
            Brand Products We Supply
            </div> 
         <div className=" lg:px-0 px-11 grid md:grid-cols-2 lg:grid-cols-3 mt-10">
          {products.map((prod)=><ProducCards heading={prod.name} image={prod.image} companies={prod.companies} />)}
         
         
         </div>
        </div> 
  </div>
  </div>
}
 
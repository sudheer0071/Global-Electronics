"use client"

import { Button } from "@/app/components/Button"
import { ChevronsLeftIcon, ChevronsRightIcon, Minus, Plus } from "lucide-react"
import { useState } from "react"
import { motion } from 'framer-motion'
import { useParams } from "next/navigation"
import Link from "next/link"

const Products = () => {

  const { productName } = useParams()

  console.log(productName);


  const images = [
    "HG-KR73BJ-5-1.jpg",
    "HF-KP73-3-1-1.jpg",
    "HG-KR73BJ-3-1.jpg",
    "HG-KR73BJ-3-1.jpg",
    "HG-KR73BJ-3-1.jpg",
    "HG-KR73BJ-3-1.jpg",
  ]

  const related = [
    {
      name: "Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J",
      image: "HG-KR73BJ-5-1.jpg"
    },
    {
      name: "Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J",
      image: "HF-KP73-3-1-1.jpg"
    },
    {
      name: "Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J",
      image: "HG-KR73BJ-3-1.jpg"
    },
    {
      name: "Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J",
      image: "HG-KR73BJ-3-1.jpg"
    },

    {
      name: "Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J",
      image: "HG-KR73BJ-3-1.jpg"
    },
    {
      name: "Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J",
      image: "HG-KR73BJ-3-1.jpg"
    },

    {
      name: "Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J",
      image: "HG-KR73BJ-3-1.jpg"
    },
    {
      name: "Mitsubishi MELSERVO-J4 Servomotor 7.5kW HG-SR702J",
      image: "HG-KR73BJ-3-1.jpg"
    },

  ]
  const specs = [
    {
      name: "Type",
      value: "Cooling fan"
    },
    {
      name: "Voltage",
      value: "36/72 VDC"
    },
    {
      name: "Size",
      value: "172 mm x 150 mm x 50 mm"
    },
    {
      name: "Model Name/Number",
      value: "6318/2TDHHP"
    },
    {
      name: "Color",
      value: "Black"
    },
    {
      name: "Material",
      value: "Plastic"
    },
    {
      name: "Warranty",
      value: "	1 Year"
    },
    {
      name: "Current",
      value: "1.38A"
    },
    {
      name: "I Deal In",
      value: "New Only"
    },
  ]

  const services = [
    {
      image: "icon1.png",
      name: "After Hours Shipping ",
    },
    {
      image: "icon2.png",
      name: "Real Time Order Tracking",
    },
    {
      image: "icon3.png",
      name: "Flexible Delivery Options",
    },
    {
      image: "icon4.png",
      name: "Intact Technical Supports",
    },
  ]

  const [index, setIndex] = useState(0)
  const [miniIndex, setMiniIndex] = useState(0)
  const [relatedIndex, setRelatedIndex] = useState(0)


  return <div className=" bg-white">
    <div className=" pt-16 pb-24">
      <div className=" text-black max-w-7xl w-full mx-auto">
        <div className=" lg:flex">
          <div className=" flex justify-center">
            <div className="">
              <div className=" relative overflow-hidden max-w-2xl ">
                <motion.div
                  animate={{ x: `-${index * 100}%` }}
                  transition={{ duration: 2.7, ease: [0.32, 0.72, 0, 1] }}
                  className=" flex justify-items-cenfter md:gap-16 lg:gap-24">
                  {images.map((image) => (
                    <img
                      key={image}
                      src={`https://www.plc-sensors.com/wp-content/uploads/2020/05/${image}`} className="  aspect-[3/3] object-cover" alt="" />
                  ))}
                </motion.div>
                {index > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    transition={{ duration: 2.7, ease: [0.32, 0.72, 0, 1] }}
                    whileHover={{ opacity: 1 }}
                    className="absolute left-2 bg-gray-200 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full  hover:scale-125 transition-all duration-500 hover:bg-cyan-400 " onClick={() => setIndex(index - 1)}>
                    <ChevronsLeftIcon className=" h-6 w-6" />
                  </motion.button>
                )}

                {index + 1 < images.length ? (
                  <button className="absolute bg-gray-200 right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center hover:scale-125 rounded-full hover:bg-cyan-400 transition duration-500" onClick={() => setIndex(index + 1)}>
                    <ChevronsRightIcon className=" h-6 w-6" />
                  </button>
                ) : (
                  <button
                    className="absolute right-2 bg-gray-200 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full hover:bg-cyan-400 transition  hover:scale-125"
                    onClick={() => setIndex(0)}
                  >
                    <ChevronsRightIcon className="h-6 w-6" />
                  </button>
                )
                }
              </div>
              <div className=" flex justify-center my-16">
                <div className=" relative overflow-hidden">
                  <motion.div
                    animate={{ x: `-${miniIndex * 100}%` }}
                    transition={{ duration: 2.7, ease: [0.32, 0.72, 0, 1] }}
                    className=" flex max-w-lg md:gap-10 lg:gap-">
                    {images.map((image) => (
                      <img
                        key={image}
                        width={120}
                        src={`https://www.plc-sensors.com/wp-content/uploads/2020/05/${image}`} className="  object-cover" alt="" />
                    ))}
                  </motion.div>
                  {miniIndex > 0 && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      exit={{ opacity: 0, pointerEvents: "none" }}
                      transition={{ duration: 2.7, ease: [0.32, 0.72, 0, 1] }}
                      whileHover={{ opacity: 1 }}
                      className="absolute left-2 bg-gray-200 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full  hover:scale-125 transition-all duration-500 hover:bg-cyan-400 " onClick={() => setMiniIndex(miniIndex - 1)}>
                      <ChevronsLeftIcon className=" h-6 w-6" />
                    </motion.button>
                  )}

                  {miniIndex + 5 < images.length ? (
                    <button className="absolute bg-gray-200 right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center hover:scale-125 rounded-full hover:bg-cyan-400 transition duration-500" onClick={() => setMiniIndex(miniIndex + 1)}>
                      <ChevronsRightIcon className=" h-6 w-6" />
                    </button>
                  ) : (
                    <button
                      className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full hover:bg-cyan-400 transition  hover:scale-125"
                      onClick={() => setMiniIndex(0)}
                    >
                      <ChevronsRightIcon className="h-6 w-6" />
                    </button>
                  )
                  }
                </div>
              </div>
            </div>
          </div>
          <div className=" pl-6 md:flex md:justify-center">
            <div>
              <div className=" max-w-xl text-[#348ad4] text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold">
                Mitsubishi MELSERVO-J4 Servomotor With Break 750W HG-KR73BJ
              </div>
              <div className=" mt-5 text-xl font-normal">
                Series#: Mitsubishi Severometer
              </div>
              <div className=" font-semibold mt-12 text-lg">
                Product Details
              </div>
              <div className=" relative mt-8">
                <ProductDetails content={" We are First Class mitsubishi servomotors dealer and mitsubishi servomotors distributor in China."} />
                <ProductDetails content={" We are First Class mitsubishi servomotors dealer and mitsubishi servomotors distributor in China."} />
                <ProductDetails content={" We are First Class mitsubishi servomotors dealer and mitsubishi servomotors distributor in China."} />
                <ProductDetails content={" We are First Class mitsubishi servomotors dealer and mitsubishi servomotors distributor in China."} />
                <ProductDetails content={" We are First Class mitsubishi servomotors dealer and mitsubishi servomotors distributor in China."} />
              </div>

              <div className=" text-xl font-semibold mt-20">
                Qty: <Minus size={30} className="font-bold inline mx-4 rounded-full hover:bg-cyan-400 transition-all cursor-pointer duration-500" /> 1 <Plus size={30} className=" inline ml-4 font-bold hover:bg-cyan-400 rounded-full transition-all duration-500 cursor-pointer" />
              </div>

              <div className=" flex mt-5">
                <Button onclick={''} height={2} label={"Add to Enquiry Cart"} productCard={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" bg-gray-200 pt-20 pb-10">
      <div className=" text-black max-w-7xl w-full mx-auto">
        <div className=" px-6">
          <div className=" flex justify-between">
            <div className=" text-4xl font-semibold mt-9">
              Specifications
            </div>
            <div className="  ">
              <Button onclick={''} height={3} download={true} label={"Download A Manual"} />
            </div>
          </div>
          <div className=" py-10">
            {specs.map((spec, idx) => <Specifications key={idx} num={idx} name={spec.name} value={spec.value} />)}

          </div>
        </div>
      </div>
    </div>

    <div className="  relative service pt-20 pb-20">
      <div className="z-10 relative text-black max-w-7xl w-full mx-auto px-5">
        <div className=" flex">
          <div className=" text-4xl max-w-xl text-white font-semibold p-3 mr-1">
            Unmatched <div className=" inline mt-3">  customer Service</div>
            <div className=" w-32 h-1 bg-white mt-5"></div>
          </div>
          <div className="flex flex-wrap">
            {services.map((service, idx) => <Service num={idx} head={service.name} image={service.image} />)}
          </div>
        </div>
      </div>
    </div>

    <div className="">
      <div className=" text-black max-w-7xl w-full mx-auto mt-32 px-5">
        <div className=" flex py-10">
          <div className=" text-4xl font-semibold ">
            Products You May Also Like
          </div>
          <div className=" max-w-xl w-6/12 h-1 bg-[#ffd447] ml-auto mt-4"></div>
        </div>
        <div>
          <div className=" relative overflow-hidden pt-10 pb-20">
            <motion.div
              animate={{ x: `-${relatedIndex * 100}%` }}
              transition={{ duration: 2.7, ease: [0.32, 0.72, 0, 1] }}  
              className=" flex md:gap-10  lg:gap-">
              
              {related.map((images, index) => (
           <RelatedProducts key={images.image} image={images.image} company="mitshibishi" name={images.name} /> 
              ))} 
            </motion.div>
            {relatedIndex > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                transition={{ duration: 2.7, ease: [0.32, 0.72, 0, 1] }}
                whileHover={{ opacity: 1 }}
                className="absolute left-2 bg-gray-200 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full  hover:scale-125 transition-all duration-500 hover:bg-cyan-400 " onClick={() => setRelatedIndex(relatedIndex - 1)}>
                <ChevronsLeftIcon className=" h-6 w-6" />
              </motion.button>
            )}
            {relatedIndex + 4 < images.length ? (
              <button className="absolute bg-gray-200 right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center hover:scale-125 rounded-full hover:bg-cyan-400 transition duration-500" onClick={() => setRelatedIndex(relatedIndex + 1)}>
                <ChevronsRightIcon className=" h-6 w-6" />
              </button>
            ) : (
              <button
                className="absolute right-2 bg-gray-200 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full hover:bg-cyan-400 transition  hover:scale-125"
                onClick={() => setRelatedIndex(0)}
              >
                <ChevronsRightIcon className="h-6 w-6" />
              </button>
            )
            }
          </div>
        </div>
      </div>
    </div>

  </div>
}


const ProductDetails = ({ content }: { content: string }) => {
  return <div>
    <div className=" details ml-4 font-light max-w-xl flex">
      <p className=" ml-3"> {content} </p>
    </div>
  </div>
}

const Specifications = ({ name, value, num }: { name: string, value: string, num: number }) => {
  return <div>
    <div className=" grid grid-cols-2">
      <div className={` ${num % 2 == 0 ? 'bg-[#348ad4]' : 'bg-[#6da9dd]'} text-white font-medium text-lg px-5 py-3`}>
        {name}
      </div>
      <div className=" bg-white text-lg font-medium py-3 px-10">
        {value}
      </div>
    </div>
  </div>
}

const Service = ({ image, head, num }: { num: number, image: string, head: string }) => {
  return <div>
    <div className={`${num == 0 ? 'ml-60' : ' px-6'} ${num == 1 ? ' ml-4' : ''} ${num == 2 || num == 3 ? ' m-6' : ''} ${num == 2 ? ' ml-9' : ''} p-6 bg-white max-w-80  hover:shadow-2xl px-10 transition-all rounded-lg duration-500`}>
      <div className=" flex justify-center">
        <img width={100} src={`https://www.plc-sensors.com/wp-content/themes/mml-theme/dist/img/p02-1-1-1/s03-${image}`} alt="" />
      </div>
      <div className=" text-xl font-semibold w-2/ text-center text-black mt-4 pb-7">
        {head} 
      </div>
    </div>
  </div>
}

const RelatedProducts = ({ company, image, name }: { company: string, image: string, name: string }) => {
  return <div className=" shrink-0 transition-all duration-500 hover:text-blue-500  hover:scale-110 hover:shadow-2xl">
    <Link href={`/companies/${company}/${encodeURIComponent(name)}`}> 
    <div className=" flex justify-center items-center">
      <img
        key={image}
        width={220}
        src={`https://www.plc-sensors.com/wp-content/uploads/2020/05/${image}`}
        className=" aspect-[3/3] object-cover"
        alt=""
        />
        </div>
      <div className="mt-9 text-lg font-medium max-w-xs text-center cursor-pointer">
    {name}
  </div>
    </Link>
  </div>
}

export default Products
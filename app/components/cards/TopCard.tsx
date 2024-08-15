const TopCard = ({label}:{label:string})=>{
  return <div>
      <div id="cur-banner" className="">
       <div className=" flex justify-end z-10 relative mx-10 md:mx-28 lg:mx-28">
         <div className=" max-w-lg mt-32 mr-32 md:mr-32 lg:mr-32 text-2xl md:text-3xl lg:text-4xl font-semibold">
          {label}
         </div>
       </div>
    </div>
  </div>
}

export default TopCard 
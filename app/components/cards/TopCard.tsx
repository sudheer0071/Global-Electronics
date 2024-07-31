const TopCard = ({label}:{label:string})=>{
  return <div>
      <div id="cur-banner">
       <div className=" flex justify-end z-10 relative mx-32">
         <div className=" mt-32 mr-40 text-4xl font-semibold">
          {label}
         </div>
       </div>
    </div>
  </div>
}

export default TopCard 
export const AdvantageCard = ({title, content, right, image}:{title:string, content:string, right?:boolean, image:string})=>{
  return <div className=" transition-all duration-500 mt-5 hover:bg-[#ffd447] rounded-lg py-10 px-3">
    <div className=" flex">

    <div className={`${right?'hidden':''}`}>
      <div className="  "> 
        <img className=" bg-[#ffd447]  rounded-full" src={`https://www.plc-sensors.com/wp-content/themes/mml-theme/dist/img/p01/s06-${image}`} alt="" />
      </div>
      </div>

      <div className={` ${right?'text-right':'text-left'} m-auto px-5 `}>
    <div className=" text-xl font-semibold ">
   {title}
    </div>
    <div className=" mt-5 font-light w-64">
   {content}
    </div>
      </div>

      <div className={`${right?'':'hidden'}`}>
      <div className="  "> 
        <img className=" bg-[#ffd447]  rounded-full" src={`https://www.plc-sensors.com/wp-content/themes/mml-theme/dist/img/p01/s06-${image}`} alt="" />
      </div>
      </div>
 

    </div>
  </div>
}
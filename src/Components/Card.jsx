import React from 'react'

import Button from '../Assets/Buttons/Button';
import Tag from '../Assets/Tag';


const Card = ({cont , btnCont , icon , tag , color}) => {
  const hoverEff = "white";


    // console.log(color);

   
  return (
  //  <div  className={` group w-[608px] h-[297px] border-[2px]  rounded-lg border-${color}  flex flex-col  items-center text-center justify-center gap-4   hover:bg-${color}   hover:text-white   `}>
  //     <div className=" group flex flex-col gap-4 max-w-[90%] m-auto  items-center text-center hover:text-white  ">
     
  //      {/* <Tag icon={<IoIosPeople className=" w-[40px] h-[20px] " />} tag="People"/> */}
  //      <Tag className="group-hover:text-white" hov={hoverEff} icon={icon} tag={tag} color={color}/>

  //       <div className="cont font-[300] text-[12px] sm:text-[18px]   sm:w-[520px] sm:h-[81px]">
  //       {cont}

  //       </div>

  //       {/* <button></button> */}

  //       <Button className="group-hover:text-white" text={btnCont}  />
  //   </div>
  //  </div>



  <div  className={` group w-[608px] h-[257px] border-[2px]  rounded-lg border-${color}  flex flex-col    gap-4   hover:bg-${color}   hover:text-white   `}>
  <div className=" group flex flex-col gap-4 max-w-[90%]  m-auto hover:text-white  ">
 
   {/* <Tag icon={<IoIosPeople className=" w-[40px] h-[20px] " />} tag="People"/> */}
   {/* <Tag className="group-hover:text-white" hov={hoverEff} icon={icon} tag={tag} color={color}/> */}

   <div className="top flex  items-center group-hover:text-white">

            <div className={`logoitems-center flex justify-center text-${color} group-hover:text-white `} > {icon} </div>
            <div className="tag w-[83px]  h-[36px] font-[600] text-[24px]  hover:text-white    "> {tag} </div>
        </div>

    <div className="cont font-[300] text-[12px] sm:text-[18px]   sm:w-[520px] sm:h-[81px]">
    {cont}

    </div>


    {/* <Button className="group-hover:text-white" text={btnCont}  /> */}

    <div className={`sm:w-[112px] h-[40px] rounded-lg border-[1px] flex justify-center items-center border-[#8064A2]  group-hover:border-white w-[100%]  group-hover:text-white  `}>
        <span className=' text-[12px] font-[600]  text-[#8064A2]   group-hover:text-white '>  {btnCont} </span>
    </div>
</div>
</div>


  )
}

export default Card

import React from 'react'
import Button from '../Assets/Buttons/Button'
import Heading from '../Assets/Heading'
import { FaPlusCircle } from "react-icons/fa";

const LargeCard = () => {
  return (
    <div className='bg-[#F7FDFF] max-w-[90%] w-[100%]     h-[384px]  flex my-12 mx-auto   '>

        <div className="innerDiv w-[1240px] h-[284px] border-gray-600      bg-white m-auto flex flex-col justify-center gap-4  sm:p-12  ">
          <div className="flex  gap-3 justify-center md:justify-start">
          <span> <FaPlusCircle className="w-[33px] h-[33px] text-[#0096C8]" /> </span>  <Heading heading="Add your own"/> 
          </div>

            <div className="cont sm:text-[18px] font-[300] text-gray-700  text-[12px]   ">
            Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page. 
            </div> 

            <Button text="Add New"/>

        </div>

    </div>
  )
}

export default LargeCard

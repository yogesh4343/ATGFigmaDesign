import React from 'react'

const Button = ({text , hoverColor}) => {
  return (
    <div className={`sm:w-[112px] h-[40px] rounded-lg border-[1px] flex justify-center items-center border-[#8064A2] w-[100%] hover:${hoverColor}}`}>
        <span className=' text-[12px] font-[600]  text-[#8064A2]   '>  {text} </span>
    </div>
  )
}

export default Button

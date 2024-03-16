import React from 'react'
import Card from './Card'
import { IoIosPeople } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";

const Cards = () => {
    const text1 = "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
    const tag1 = "People"
    const text1Btn = "Connect"
    const text1Icon = <IoIosPeople className=" w-[45px] h-[25px] " />
    const text1Color = "[#8064A2]"

    const text2 = "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
    const tag2 = "Place"
    const text2Btn = "Meet Up"
    const text2Icon = <MdPlace className=" w-[45px] h-[25px] " />
    const text2Color = "[#77933C]"


    const text3 = "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
    const tag3 = "Product"
    const text3Btn = "Get It"
    const text3Icon = <FaShoppingBag className=" w-[45px] h-[25px] " />
    const text3Color = "[#C0504D]"

    const text4 = "Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
    const tag4 = "Program"
    const text4Btn = "Attend"
    const text4Icon = <FaCalendarCheck className=" w-[45px] h-[25px] " />
    const text4Color = "[#0096C8]"




  return (
    <div className="max-w-[90%] w-[100%]  flex flex-wrap  gap-4   justify-center  my-12 mx-auto ">

      <Card tag={tag1 } cont={text1} btnCont={text1Btn}  icon={text1Icon} color={text1Color}/>
      <Card  tag={tag2 }  cont={text2} btnCont={text2Btn}  icon={text2Icon} color={text2Color} />
      <Card  tag={tag3 }  cont={text3} btnCont={text3Btn}  icon={text3Icon}     color={text3Color} />
      <Card  tag={tag4 }  cont={text4} btnCont={text4Btn}  icon={text4Icon} color={text4Color}/>
    </div>
  )
}

export default Cards

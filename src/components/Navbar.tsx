import React from 'react'
import { GoPerson } from "react-icons/go";
import { MdOutlineNotificationAdd } from "react-icons/md";





const Navbar = () => {

    const imageUrl = "./Logo.png"

  return (
    <div className = 'flex justify-between'>
        <div className = "flex gap-2 px-10 py-[1vw]">
            <img src={imageUrl} width={"40vw"}/>
            <div className="flex justify-center items-center">
                <h1 className="font-montserrat font-bold text-2xl justify-center text-center"> Jur</h1>
            </div>
        </div>
        <div className = "flex gap-10 px-10 py-3">
            <span className= "flex items-center justify-center cursor-pointer">
                <MdOutlineNotificationAdd color = {"#2b86ff"} size="27px"  />
            </span>
            <span className= "flex items-center justify-center cursor-pointer">
                <GoPerson color = {"#2b86ff"} size="27px" />
            </span>
        </div>
    </div>
  )
}

export default Navbar
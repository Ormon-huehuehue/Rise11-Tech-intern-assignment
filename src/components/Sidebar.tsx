import React from "react";
import { TbDashboard } from "react-icons/tb";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { TbWaveSawTool } from "react-icons/tb";
import { BsCalendar3 } from "react-icons/bs";
import { LuFileSliders } from "react-icons/lu";
import { IoHandLeftOutline } from "react-icons/io5";

const SideBar= () => {

  const image= "./RandomAhhImage.png"

  return (
    <div className=" hidden sm:hidden md:flex lg-flex xl:flex 2xl:flex flex-col w-[300px]  font-montserrat font-semibold justify-between">
      <ul className=" flex flex-col justify-center items-center mt-[5vh] text-sidebarText text-sm xl:text-lg">
        <li className="w-full py-4 pl-8 cursor-pointer text-gray-500 hover:bg-gray-100 flex gap-4">
          <TbDashboard size="28px" color="#80aee2"/>
          <h1 className=  'flex items-center'> Dashboard</h1>
        </li>
        <li className="w-full py-4 pl-8 cursor-pointer text-gray-500 hover:bg-gray-100 flex gap-4">
          <PiSuitcaseSimpleBold size="28px" color="#80aee2"/>
          <h1 className=  'flex items-center'> My Cases</h1>
        </li>
        <li className="w-full py-4 pl-8 cursor-pointer text-gray-500 hover:bg-gray-100 flex gap-4">
          <TbWaveSawTool size="28px" color="#80aee2"/>
          <h1 className=  'flex items-center'> Activity</h1>
        </li>
        <li className="w-full py-4 pl-8 cursor-pointer text-gray-500 hover:bg-gray-100 flex gap-4">
          <BsCalendar3 size="28px" color="#80aee2"/>
          <h1 className=  'flex items-center'> Calendar</h1>
        </li>
        <li className="w-full py-4 pl-8 cursor-pointer text-gray-500 hover:bg-gray-100 flex gap-4">
          <LuFileSliders size="28px" color="#80aee2"/>
          <h1 className=  'flex items-center'> Files</h1>
        </li>
        <li className="w-full py-4 pl-8 cursor-pointer text-gray-500 hover:bg-gray-100 flex gap-4">
          <IoHandLeftOutline size="28px" color="#80aee2"/>
          <h1 className=  'flex items-center'> Dispute</h1>
        </li>
      
   
      </ul>
      <div className="flex justify-center py-5  rounded-lg">
        <img src={image} width={230} className="rounded-lg sm:w-[210px] xl:w-[230px]"/>
      </div>
    </div>
  );
};

export default SideBar;
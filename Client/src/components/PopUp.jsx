import React from "react";
import Button from "./Button";
import { GoChevronRight } from 'react-icons/go';
import { GrFormClose } from "react-icons/gr";
import { Link } from 'react-router-dom';

const PopUp = ({serial, iconSrc, bgSrc, name, year, mature, category, type, description, OnClose}) => {
  return (
    <div id={serial} className={`flex justify-center items-center min-h-screen fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-600 shadow-xl z-[1000]`}>
      <div className="mx-4 w-[670px] border border-1 border-gray-500 rounded-xl relative">
        <div>
          <img className="w-[670px] rounded-t-xl" src={bgSrc} alt={name} />
        </div>

        <div className="sm:w-[250px] sm:h-[150px] w-[150px] h-[150px] absolute bottom-[150px] left-5 sm:bottom-[250px] sm:left-10">
          <img className=" object-contain sm:w-[250px] sm:h-[150px]" src={iconSrc} alt={"Default Icon"} />
        </div>

        <div onClick={OnClose} className="absolute top-3 rounded-full right-3 hover:bg-red-50 transition-all cursor-pointer duration-500">
          <GrFormClose color="black" size={50} />
        </div>


          <div className="bg-bgBlack rounded-b-xl flex flex-col sm:p-10 sm:pt-4 p-4">
            

              <ul className="list-disc px-2 text-sm sm:text-base flex gap-4">
                <li className="mx-2">{year}</li>
                <li  className="mx-2">{mature}</li>
                <li  className="mx-2">{type}</li>
                <li  className="mx-2">{category}</li>
              </ul>
            <div className="pt-4 text-sm sm:text-lg h-[100px]">{description}</div>
          
          <div className="pt-4">
          <Link to={'/signup'}><button className="btn rounded-full bg-red-600 hover:bg-red-700 text-white mb-3">Get Started</button></Link>
          <p className="text-sm sm:text-lg">Create or restart your membership</p>
          </div>
      </div>
      
    </div>
    </div>
  )
}

export default PopUp;
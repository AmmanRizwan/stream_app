import React from "react";
import preview from '../assets/data/movie_image/preview/preview_06.webp';
import icon from '../assets/data/movie_image/icon/icon_06.webp';
import { GrAdd } from "react-icons/gr";
import { MdPlayArrow } from 'react-icons/md';

const Hero = () => {
  return (
    <div>
      <div className="relative select-none">
        <img className="z-[10] w-full object-cover" src={preview} alt="Image" />
        
        <div className="absolute top-[50%] sm:top-[25%] md:top-[40%] left-[4%] flex flex-col gap-2 md:gap-4">
          <div className="sm:block hidden">
            <img src={icon} alt="Icon" className="w-[200px] md:w-[364px]" />
          </div>
          <div className="flex gap-3">
            <button className="font-semibold flex items-center gap-2 bg-white text-black md:py-2 md:px-10 rounded py-1 px-5"> <MdPlayArrow size={24} /> Play</button>
            <button className="font-semibold flex items-center gap-2 bg-slate-700 md:py-2 md:px-10 rounded py-1 px-5"><GrAdd size={20} /> My List</button>
          </div>
          <p className="sm:flex hidden text-2xl font-semibold">Watch Now</p>
          <p className="sm:flex hidden text-sm md:text-sm lg:text-base w-[500px]">With millions of euros and their lives on the line, nine robbers attempts to pull off the greatrest heist of all time.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
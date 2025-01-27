import React from "react";
import Hero from "../components/Hero";
import prev from '../assets/data/movie_image/preview/preview_03.webp';

const RecentlyAdded = () =>{ 
  return (
    <div>
      <Hero />

      <div className="flex justify-center">
        <div className="w-5/6">
          <div className="flex flex-col justify-center">
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4">
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
              <img className="w-[350px]" src={prev} alt="" />
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default RecentlyAdded;
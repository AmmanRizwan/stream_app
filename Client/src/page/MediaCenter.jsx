import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

const MediaCenter = () => {

  const { movieData } = useContext(MovieContext);

  return (
    <div>
      <div className="flex justify-center py-4 items-center text-2xl font-bold md:font-semibold underline decoration-red-600 md:text-4xl">
        <h1>Media Center</h1>
      </div>

      <div className="flex justify-center">

      <div className="w-5/6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-4">
          
          {
            movieData.map((data, i) => {
              return (
                <div key={i} className="bg-faqBlack px-3 py-5 rounded-md flex flex-col gap-2 cursor-pointer">
                  <img className="rounded-md" src={data.image} alt="null" />
                  <p>{data.title}</p>
                  <p>Year: {data.year}</p>
                  <Link to={'/signin'}>
                  <button className="btn text-white bg-red-600 hover:bg-red-700 border-none rounded-lg">Watch Now</button>
                  </Link>
                </div>
                
              )
            })
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default MediaCenter;
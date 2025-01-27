import React, { useContext } from "react";
import { CgArrowLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";


const WaystoWatch = () => {
  const { waystowatch_data } = useContext(MovieContext);

  return (
    <div className="text-black bg-white px-4">

      <h1 className="text-3xl md:text-4xl decoration-red-600 underline font-bold py-4">Ways to Watch on IAStream: Your Ultimate Streaming Experience
      </h1>

      {
        waystowatch_data.map((data, i) => {
          return (
            <div key={i} className="py-4 gap-4 flex flex-col">
              <h1 className="text-2xl font-bold md:text-4xl">{data.title}</h1>
              <p className="text-base md:text-lg">{data.description}</p>
              <ul>
                {
                  data.point.map((item, i) => {
                    return (
                      <li key={i} className="list-disc marker:text-lg marker:text-black text-red-600 ml-7 py-1 font-semibold">{item}</li>
                    )
                  })
                }
              </ul>
              <hr className="border-t-2" />
            </div>
          )
        })
      }


    </div>
  )
}

export default WaystoWatch;
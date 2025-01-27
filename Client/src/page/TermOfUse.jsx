import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";
import { MovieContext } from "../context/MovieContext";

const TermOfUse = () => {

  const { termofuse_data, termofuse_point } = useContext(MovieContext);

  return (
    <div className="px-4 bg-white text-black select-none">

      <h1 className="text-3xl md:text-4xl font-bold underline decoration-red-600 py-4">TERMS OF SERVICE FOR IASTREAM</h1>

      {
        termofuse_data.map((data, i) => {
          return (
          <div key={i} className="py-4 flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl font-semibold">{data.title}</h1>
            <p className="text-base md:text-lg">{data.description}</p>

            <hr className="border "/>
          </div> 
          )
        })
      }

      {
        termofuse_point.map((data, i) => {
          return (
          <div key={i} className="py-4 flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl font-semibold">{data.title}</h1>
            <p className="text-base md:text-lg">{data.description}</p>
            <ul>
              {
                data.point.map((item, i) => {
                  return(
                    <li key={i} className="list-disc marker:text-black text-red-600 font-semibold marker:text-lg ml-7 py-1">{item}</li>
                  )
                })
              }
            </ul>
            <hr className="border "/>
          </div> 
          )
        })
      }

    </div>
  )
}

export default TermOfUse;
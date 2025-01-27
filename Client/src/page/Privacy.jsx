import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Privacy = () => {

  const { privacy_info } = useContext(MovieContext);

  return (
    <div className="text-black px-3 bg-white select-none">
      <div className="pt-5">
        <h1 className="text-2xl md:text-4xl font-bold">IAStream Privacy Policy</h1>
      </div>

      <div className="flex justify-center">
        <div className="py-6 w-5/6">
        {
          privacy_info.map((data, i) => {
            return (
                  <div key={i} className="flex flex-col gap-4 rounded-lg border border-2 md:border-3 shadow-md px-8 py-8 my-6">
                    <h1 className="text-xl md:text-3xl font-bold md:font-semibold underline decoration-red-600">{data.title}</h1>
                    <p className="text-base md:text-lg">{data.description}</p>
                    <ul className="list-disc marker:text-red-600 ml-10">
                        {
                          data.points.map((point, i) => {
                            return (
                              <li key={i}>{point}</li>
                            )
                          })
                        }
                    </ul>
                  </div>
            )
          })
        }
        </div>
      </div>


    </div>
  )
}

export default Privacy;
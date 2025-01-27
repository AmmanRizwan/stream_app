import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const SpeedTest = () => {

  const { loading, value, startSpeedTest } = useContext(MovieContext);

  return (
    <div className="min-h-screen flex justify-center py-10 items-center">

      <div className="mx-4 bg-faqBlack p-5 md:p-5 md:px-16 rounded-lg justify-center items-center flex flex-col gap-10">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold sm:font-semibold">IAStream Internet Speed Testing</h1>

        <div className="w-[200px] h-[200px] text-sm md:text-2xl font-semibold md:w-96 md:h-96 bg-hoverBlack rounded-full flex flex-col justify-center items-center gap-2">
          {loading ? value.map((data, i) => {
            return (
              <p key={i}>{data}</p>
            )
          }) 
          
          : "Click Start to Test"}
        </div>

        <button onClick={() => startSpeedTest()} className="btn border-none bg-red-600 hover:bg-red-700 text-white">Start Speed Test</button>
      </div>

    </div>
  )
}

export default SpeedTest;
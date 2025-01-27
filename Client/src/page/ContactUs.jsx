import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const ContactUs = () => {

  const { contact_info } = useContext(MovieContext);

  return (
    <div className="bg-white text-black py-8 select-none">

      <div className="flex flex-col justify-center items-center gap-8 py-4">
        <h1 className="text-4xl font-bold underline decoration-red-600">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          contact_info.map((data, i) => {
            return (
              <div key={i} className="sm:w-5/6 items-center flex text-5xl justify-start gap-4">
                <div>
                  <p className="bg-red-500 text-white p-1 sm:p-3 rounded sm:rounded-lg ">{data.icon}</p>
                </div>
                <div className="flex flex-col gap-2">
                <p className="text-base sm:text-2xl decoration-red-600 underline ">{data.title}</p>
                <p className="text-base sm:text-2xl">{data.description}</p>
                </div>
              </div>
            )
          })  
        }
        </div>
        </div>

      

      <div></div>

    </div>
  )
}

export default ContactUs;
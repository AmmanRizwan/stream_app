import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";


const FAQ = () => {
  const {faqpage_data} = useContext(MovieContext);

  return (
    <div className="bg-white px-3 text-black">
      <div>
          {
            faqpage_data.map((data, i) => {
              return (
                <div key={i} className="py-6">
                
                  <h1 className="text-2xl sm:text-4xl font-bold">
                    {data.title}
                  </h1>

                  <img src={data.image} alt="" />

                  <p className="py-4">
                    {
                      data.description.map((item, i) => {
                        return (
                          <p key={i} className="my-3">{item}</p>
                        )
                      })
                    }
                  </p>
                      <hr className="border-t-2 w-[95%] text-center mx-auto"/>
                </div>
              )
            })
          }

      </div>


    </div>
  )
}

export default FAQ;
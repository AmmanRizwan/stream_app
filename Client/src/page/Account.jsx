import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Account = () => {

  const { account_info } = useContext(MovieContext);

  return (
    <div className="flex justify-center">
      <div className="w-5/6">

      <div className="p-4 my-4 bg-faqBlack rounded-lg flex items-center gap-8">
        <div>
          <div className="w-32 h-32 bg-red-600 text-bgBlack text-4xl font-bold items-center flex justify-center rounded-full">
              AS
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-2 justify-center">
            <h1 className="font-bold text-2xl">Example Name</h1>
            <p><span className="font-semibold">Email:</span> example@gmail.com</p>
            <p>Member Since: Year {new Date().getFullYear()}</p>
            <button className="btn rounded-full bg-red-600 border-none text-white hover:bg-red-700">Edit Profile</button>
          </div>
        </div>
      </div>

      <div className="bg-faqBlack rounded-md p-4">
        <div className="font-bold text-3xl">Account Settings</div>
        <hr className="my-4 " />
      
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">

        {
          account_info.map((data, i) => {
            return (
              <div key={i} className="bg-hoverBlack rounded-lg p-4">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="my-4">{data.detail}</p>
                <button className="btn bg-red-600 hover:bg-red-700 border-none rounded text-white md:px-10 text-semibold">{data.setting}</button>
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

export default Account;
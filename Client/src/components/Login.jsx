import React from "react";
import LoginImage from '../assets/icons/LoginImage.jpg';
import { Link } from "react-router-dom";
import IA from "../assets/icons/IA";
import IASTREAM from "../assets/icons/IASTREAM";

const Login = () => {
  return (
    <div>
      <div className="relative">
        <div className="hidden sm:block absolute top-5 left-10">
        <div>
        <div className="w-12 md:hidden"><IA /></div>
        <div className="hidden md:block w-32"><IASTREAM /></div>
      </div>
        </div>

        <img className="hidden sm:block sm:min-h-screen sm:object-cover sm:bg-center sm:bg-black sm:inset-0" src={LoginImage} alt={"Login Page Image"} />
        <div className="sm:object-contain sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2">
        <div className="overflow-x-hidden px-10 p-12 sm:px-15 sm:p-12 sm:pb-20 bg-black bg-opacity-90 flex flex-col justify-center items-center">
          {/* Container */}
          <div className="w-[280px] sm:w-[350px] flex flex-col gap-2">
            <h1 className="text-4xl font-bold mb-6">Sign In</h1>
            
            <input type="text" placeholder="Email or Username" className="input input-bordered bg-faqBlack placeholder-white" required={true} />

            <input type="password" placeholder="Password" className="input input-bordered bg-faqBlack placeholder-white" required={true} />

            <button className="rounded-md bg-red-600 text-lg font-semibold py-2 hover:bg-red-700 transition-all duration-500">Sign In</button>
            <div className="flex gap-2 mt-5">
              <input type="checkbox" className="w-4" /> <p className="text-sm">Remeber me</p>
            </div>

            <p className="text-sm opacity-90 my-5">New to IAStream? <Link to={'/signup'}><span className="font-semibold opacity-100 cursor-pointer">Sign up now.</span></Link></p>

            <p className="text-l_sm">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-500">Learn more.</span></p>
          </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Login;
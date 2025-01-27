import React from "react";
import IA from "../assets/icons/IA";
import IASTREAM from "../assets/icons/IASTREAM";
import signUpImage from '../assets/icons/LoginImage.jpg';
import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <div>
    <div className="relative">
      <div className="hidden sm:block absolute top-5 left-10">
      <div>
      <div className="w-12 md:hidden"><IA /></div>
      <div className="hidden md:block w-32"><IASTREAM /></div>
    </div>
      </div>

      <img className="hidden sm:block sm:min-h-screen sm:object-cover sm:bg-center sm:bg-black sm:inset-0" src={signUpImage} alt={"signUp Page Image"} />
      <div className="sm:object-contain sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2">
      <div className="overflow-x-hidden px-10 p-12 sm:px-15 sm:p-12 sm:pb-20 bg-black bg-opacity-90 flex flex-col justify-center items-center">
        {/* Container */}
        <div className="w-[280px] sm:w-[350px] flex flex-col gap-2">
          <h1 className="text-4xl font-bold mb-6">Sign Up</h1>

          <input type="email" placeholder="Enter Your Email" className="input input-bordered bg-faqBlack placeholder-white" required={true} />

          <input type="text" placeholder="Enter Your Username" className="input input-bordered bg-faqBlack placeholder-white" required={true} />

          <input type="password" placeholder="Password" className="input input-bordered bg-faqBlack placeholder-white" required={true} />

          <input type="password" placeholder="Confirm Password" className="input input-bordered bg-faqBlack placeholder-white" required={true} />

          <button className="rounded-md bg-red-600 text-lg font-semibold py-2 hover:bg-red-700 transition-all duration-500">Sign Up</button>

          <p className="text-sm opacity-90 my-5">Have an account in IAStream? <Link to={'/signin'}><span className="font-semibold opacity-100 cursor-pointer">Sign in.</span></Link></p>

          <p className="text-l_sm">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-500">Learn more.</span></p>
        </div>
        </div>
      </div>
      
    </div>
    
  </div>
  )
}

export default SignIn;
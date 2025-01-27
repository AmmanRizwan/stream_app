import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const Footer = () => {
  const { footer_data } = useContext(MovieContext);

  return (
    <footer className="flex justify-center pb-20">

    <div className="flex flex-col w-5/6">
      <p className="py-10">Questions? Call <span className="underline cursor-pointer">000-800-919-1694</span></p>
      <div className="sm:grid-cols-2 sm:grid md:grid-cols-3 md:grid lg:grid lg:grid-cols-4 gap-4 pb-12">
        {
          footer_data.map((data, i) => {
            return (
              <ul className="mb-4 sm:mb-0" key={i}>
                <Link to={data.link} className="underline hover:cursor-pointer active:text-red-600 active:decoration-white text-sm w-fit-content">{data.name}</Link>
              </ul>
            )
          })
        }
      </div>
      <div className="pb-10">
        <select className="rounded-full px-4 py-1 border border-slate-700 border-2 font-semibold bg-bgBlack">
          <option value="English">English</option>
          <option value="Global">Global</option>
        </select>
        </div>
      <div className="text-sm pb-10">IAStream Global</div>
    </div>

    </footer>
  )
}

export default Footer;
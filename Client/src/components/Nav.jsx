import React from "react";
import IA from "../assets/icons/IA";
import IASTREAM from "../assets/icons/IASTREAM";
import { GrNotification } from "react-icons/gr";
import { CgProfile } from 'react-icons/cg';
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const Nav = () => {
  const location = useLocation();
  return (
    <div className="relative backdrop-blur top-0 z-[101] w-full sm:p-6 px-8 flex justify-between items-center sm:gap-4">
          {
            location.pathname === '/' ?
            <div className="my-4 sm:my-0">
              <div className="w-10 md:hidden"><IA /></div>
              <div className="hidden md:flex w-32"><IASTREAM /></div>
            </div>
            : 
            <>
          <div>
            <ul className="flex justify-between gap-3 items-center hidden md:text-base text-sm sm:flex">
              <li className="mr-2 md:mr-4">
                <div className="w-10 block md:hidden"><IA /></div>
                <div className="w-32 hidden md:block"><IASTREAM /></div>
              </li>
              <Link to={'/home'}><li>Home</li></Link>
              <Link to={'/tvshows'}><li>TV Shows</li></Link>
              <Link to={'/movies'}><li>Movies</li></Link>
              <Link to={'/recentlyadded'}><li>Recently Added</li></Link>
              <Link to={'/mylist'}><li>My List</li></Link>
            </ul>
          </div>
            {/* Mobile Nav Bar */}
          <div className="navbar sm:hidden">
            <div className="flex-1">
              <div className="text-xl">
              <div>
              <div className="w-10 md:hidden"><IA /></div>
              <div className="hidden md:block w-32"><IASTREAM /></div>
            </div>
              </div>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary>Menu</summary>
                    <ul className="p-2 bg-black backdrop-blur">
                      <li><Link to={'/home'}>Home</Link></li>
                      <li><Link to={'/tvshows'}>TV Shows</Link></li>
                      <li><Link to={'/movies'}>Movies</Link></li>
                      <li><Link to={'/recentlyadded'}>Recently Added</Link></li>
                      <li><Link to={'/mylist'}>My List</Link></li>
                      <li><Link to={'/notification'}>Notification</Link></li>
                      <li><Link to={'/profile'}>Profile</Link></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </>
        }
      
        {
          location.pathname === '/' ? 
          <div className="flex gap-3 justify-center items-center">
          <div>
          <select className="rounded-full px-4 py-1 border border-slate-700 border-2 font-semibold bg-bgBlack">
            <option value="English">English</option>
            <option value="Global">Global</option>
          </select>
          </div>
          <div>
         <Link to={'/signin'}><Button title="Sign In" classBtn={'px-4 py-1 bg-white text-black font-semibold text-sm hover:bg-gray-300 transition-all duraiton-500'} /></Link> 
          </div>
        </div>
          :
      <div>
        <ul className="flex gap-6 items-center hidden sm:flex">
         <Link to={'/notification'}><li><GrNotification size={22} /></li></Link>
          <li><CgProfile size={24}/></li>
        </ul>
      </div>
        }

    </div>
  )
}

export default Nav;
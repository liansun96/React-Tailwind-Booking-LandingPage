import React, { useState } from "react";
import Logo from "../images/booking-logo.svg";
import navProfile from "../images/nav-profile.jpg"
import Button from "./Button";
import {FiChevronDown} from "react-icons/fi"
import { FaHotel } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import {BsBell} from "react-icons/bs"
import {HiSquares2X2} from "react-icons/hi2"
import {BsThreeDots} from 'react-icons/bs'
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((pre) => !pre);
  
  return (
    <div className="w-[90%] lg:w-[1100px] mx-auto my-4 lg:mt-7 flex justify-between items-center">
      <div className="w-[50%] flex justify-start items-center space-x-10">
        <img src={Logo} className="h-[30px] lg:h-[40px] text-secondary-300" alt="" />
        <div className="space-x-4 font-DmSans hidden lg:block">
          <div className="group relative inline-flex">
            <div className="flex items-center cursor-pointer text-base font-medium" href="">
              Listings
              <FiChevronDown className="ml-1"/>            
            </div> 
            <span className="group-hover:block hidden cursor-pointer w-[222px] p-2 py-3 bg-white custom-shadow rounded-lg z-10 absolute top-6">
              <ul className="text-slate-600 font-medium space-y-[3px]">
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Hotel <BsThreeDots/></li>
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Flight <BsThreeDots/></li>
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Tour <BsThreeDots/></li>
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Cab <BsThreeDots/></li>
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Add Listing <BsThreeDots/></li>
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Hero <BsThreeDots/></li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Booking Confirmed</li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Copmare Listing</li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Offer Detail</li>
              </ul>
            </span>  
          </div>
          <div className="group relative inline-flex">
            <div className="flex items-center cursor-pointer text-base font-medium" href="">
              Pages
              <FiChevronDown className="ml-1"/>            
            </div> 
            <span className="group-hover:block hidden cursor-pointer w-[222px] p-2 py-3 bg-white custom-shadow rounded-lg z-10 absolute top-6">
              <ul className="text-slate-600 font-medium space-y-[3px]">
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">About</li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Contact</li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Contact 2</li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Our Team</li>
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Authentation<BsThreeDots/></li>
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Blog<BsThreeDots/></li>
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Help<BsThreeDots/></li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Pricing</li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">FAQs</li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Error 404</li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Coming Soon</li>
              </ul>
            </span>  
          </div>
          <div className="group relative inline-flex">
            <div className="flex items-center cursor-pointer text-base font-medium" href="">
              Accounts
              <FiChevronDown className="ml-1"/>            
            </div> 
            <span className="group-hover:block hidden cursor-pointer w-[260px] p-2 py-3 bg-white custom-shadow rounded-lg z-10 absolute top-6">
              <ul className="text-slate-600 font-medium space-y-[3px]">                
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">User Profile<BsThreeDots/></li>
                <li className="flex items-center justify-between hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Agent Dashboard <BsThreeDots/></li>
                <li className="hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">Master Admin <span className="text-sm font-light">(Coming Soom)</span></li>                
              </ul>
            </span>  
          </div>                             
        </div>
      </div>
      <div className="w-[50%] space-x-3 font-DmSans text-right">
        <div className="flex justify-end space-x-2">
          <div className="space-x-2 hidden lg:block">
            <div className="inline-flex space-x-2 items-center text-primary bg-secondary-100 px-4 py-2 rounded-lg">
              <FaHotel />
              <a href="" className="font-semibold">
                Hotel
              </a>
            </div>
            <div className="inline-flex space-x-2 items-center hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">
              <IoAirplaneSharp />
              <a href="" className="font-semibold">
                Flight
              </a>
            </div>
            <div className="inline-flex space-x-2 items-center hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">
              <IoEarth />
              <a href="" className="font-semibold">
                Tour
              </a>
            </div>
            <div className="inline-flex space-x-2 items-center hover:text-primary hover:bg-secondary-100 px-4 py-2 rounded-lg">
              <FaCarAlt />
              <a href="" className="font-semibold">
                Cab
              </a>
            </div>
          </div>
          <button className="relative z-10 block lg:hidden" onClick={handleToggle}>
            <HiSquares2X2 className="text-3xl text-black" />
            <MobileMenu toggle={show} />
          </button>
          <div className="flex items-center space-x-4 !ml-4">
            <div className="relative flex space-x-2 items-center bg-secondary-400 hover:text-primary hover:bg-secondary-100 p-[13px] rounded-lg">
              <a href="" className="font-semibold">
                <BsBell />
              </a>
              <span className="absolute -top-[2px] -right-[2px] w-[10px] h-[10px] rounded-full bg-[#d6293e]"></span>
            </div>
            <img src={navProfile} className="w-[40px] rounded-lg" alt="" />
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Nav;

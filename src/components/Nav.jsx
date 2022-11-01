import React, { useState } from "react";
import Logo from "../images/booking-logo.svg";
import navProfile from "../images/nav-profile.jpg"
import Button from "./Button";
import {FiChevronDown} from "react-icons/fi"
import { BiMenuAltRight } from "react-icons/bi";
import { FaHotel } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import {BsBell} from "react-icons/bs"
import {HiSquares2X2} from "react-icons/hi2"
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((pre) => !pre);
  
  return (
    <div className="w-[90%] lg:w-[77%] mx-auto my-4 lg:mt-7 flex justify-between items-center">
      <div className="w-[50%] flex justify-start items-center space-x-10">
        <img src={Logo} className="h-[30px] lg:h-[40px] text-secondary-300" alt="" />
        <div className="space-x-4 font-DmSans hidden lg:block">
          <a className="inline-flex items-center text-base font-medium" href="">
            Listings
            <FiChevronDown className="ml-1"/>
          </a>          
          <a className="inline-flex items-center text-base font-medium" href="">
            Pages
            <FiChevronDown className="ml-1"/>
          </a>
          <a className="inline-flex items-center text-base font-medium " href="">
            Accounts
            <FiChevronDown className="ml-1"/>
          </a>                    
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
            <div className="flex space-x-2 items-center bg-secondary-400 hover:text-primary hover:bg-secondary-100 p-[13px] rounded-lg">
              <a href="" className="font-semibold">
                <BsBell />
              </a>
            </div>
            <img src={navProfile} className="w-[40px] rounded-lg" alt="" />
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Nav;

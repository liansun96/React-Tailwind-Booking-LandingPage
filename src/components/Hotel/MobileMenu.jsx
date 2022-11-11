import React from "react";
import Button from "../Button";
import { FaHotel } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";

const MobileMenu = ({ toggle }) => {
  return (
    <div className={toggle ? "menu scale-y-1" : "menu scale-y-0"}>
      <div className="flex flex-col justify-center items-center my-3 space-y-5">
        <div className="w-[90%] flex space-x-2 justify-center items-center text-primary bg-secondary-100 py-2 rounded">
          <FaHotel />
          <a href="" className="font-semibold">
            Hotel
          </a>
        </div>
        <div className="w-[90%] flex space-x-2 justify-center items-center text-primary bg-secondary-100 py-2 rounded">
          <IoAirplaneSharp />
          <a href="" className="font-semibold">
            Flight
          </a>
        </div>
        <div className="w-[90%] flex space-x-2 justify-center items-center text-primary bg-secondary-100 py-2 rounded">
          <IoEarth />
          <a href="" className="font-semibold">
            Tour
          </a>
        </div>
        <div className="w-[90%] flex space-x-2 justify-center items-center text-primary bg-secondary-100 py-2 rounded">
          <FaCarAlt />
          <a href="" className="font-semibold">
            Cabs
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

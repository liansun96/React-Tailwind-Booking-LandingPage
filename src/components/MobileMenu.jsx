import React from "react";
import Button from "./Button";
import { FaHotel } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ toggle }) => {
  return (
    <div className={toggle ? "menu scale-y-1" : "menu scale-y-0"}>
      <div className="flex flex-col justify-center items-center my-3 space-y-5">
        <div className="w-[90%] flex space-x-2 justify-center items-center  py-2 rounded">
          <NavLink to="/" className="no-underline">
            <div className="inline-flex space-x-2 items-center">
              <FaHotel />
              <p href="" className="font-semibold">
                Hotel
              </p>
            </div>
          </NavLink>
        </div>
        <div className="w-[90%] flex space-x-2 justify-center items-center  py-2 rounded">
          <NavLink to="/flight" className="no-underline">
            <div className="inline-flex space-x-2 items-center">
              <IoAirplaneSharp />
              <p href="" className="font-semibold">
                Flight
              </p>
            </div>
          </NavLink>
        </div>
        <div className="w-[90%] flex space-x-2 justify-center items-center  py-2 rounded">
          <NavLink to="/tour" className="no-underline">
            <div className="inline-flex space-x-2 items-center">
              <IoEarth />
              <p href="" className="font-semibold">
                Tour
              </p>
            </div>
          </NavLink>
        </div>
        <div className="w-[90%] flex space-x-2 justify-center items-center  py-2 rounded">
          <NavLink to="/cabs" className="no-underline">
            <div className="inline-flex space-x-2 items-center">
              <FaCarAlt />
              <p href="" className="font-semibold">
                Cabs
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

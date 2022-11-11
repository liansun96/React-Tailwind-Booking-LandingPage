import React from "react";
import "./flight.css";
import { FiChevronDown } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import {TbSend} from 'react-icons/tb'
import {BsCalendar} from 'react-icons/bs'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Button from "../Button";

const Hero = () => {
  return (
    <div className="relative mt-10">
      <div className="hero flex flex-col justify-around items-center w-[90%] lg:w-[1100px] bg-black rounded-3xl xl:min-h-[80vh] 2xl:min-h-[80vh]  3xl:min-h-[55vh] mx-auto">
        <div className="py-5"></div>
        <h1 className="text-4xl lg:text-[65px] leading-tight font-bold">
          Ready to take off?
        </h1>
        <div className="relative w-[85%] h-[32vh] 3xl:h-[22vh] mx-auto bg-white rounded-lg p-5">
          <div className="flex justify-between items-center">
            <div className="w-[25%] flex px-[1px] py-[1px] rounded-xl border-2 border-black">
              <div className="w-[50%] p-2  bg-black rounded-xl text-white text-center">
                <h6>One Way</h6>
              </div>
              <div className="w-[50%] p-2 text-center">
                <h6>Rount Trip</h6>
              </div>
            </div>
            <div className="w-[50%] flex justify-between text-secondary-300">
              <div className="w-[45%] h-10 p-2 px-4 flex justify-between items-center rounded-lg bg-secondary-400">
                <p>Select Class</p>
                <FiChevronDown />
              </div>
              <div className="w-[45%] h-10 p-2 px-4 flex justify-between items-center rounded-lg bg-secondary-400">
                <p>Select Travelers</p>
                <FiChevronDown />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="w-[30%] h-24 flex flex-col justify-center items-center bg-secondary-400 text-secondary-300 rounded-2xl">
              <div className="w-[90%] mx-auto flex items-center space-x-2 mb-2">
                <SlLocationPin />
                <p>From</p>
              </div>
              <div className="w-[90%] mx-auto h-10 p-2 px-4  flex justify-between items-center bg-white rounded-lg">
                <p className="font-medium">Select Location</p>
                <FiChevronDown />
              </div>
            </div>
            <div className="w-[30%] h-24 flex flex-col justify-center items-center bg-secondary-400 text-secondary-300 rounded-2xl">
              <div className="w-[90%] mx-auto flex items-center space-x-2 mb-2">
                <TbSend />
                <p>To</p>
              </div>
              <div className="w-[90%] mx-auto h-10 p-2 px-4  flex justify-between items-center bg-white rounded-lg">
                <p className="font-medium">Select Location</p>
                <FiChevronDown />
              </div>
            </div>
            <div className="w-[30%] h-24 flex flex-col justify-center items-center bg-secondary-400 text-secondary-300 rounded-2xl">
              <div className="w-[90%] mx-auto flex items-center space-x-2 mb-2">
                <BsCalendar />
                <p>Departure</p>
              </div>
              <div className="w-[90%] mx-auto h-10 p-2 px-4  flex justify-between items-center bg-white rounded-lg">
                <p className="font-medium">Select date</p>
                <FiChevronDown />
              </div>
            </div>
          </div>
          <div className="absolute right-5 -bottom-4">
            <Button className="bg-primary py-2 px-8 flex space-x-4 items-center">
              <p>Find ticket</p>
              <HiArrowNarrowRight/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

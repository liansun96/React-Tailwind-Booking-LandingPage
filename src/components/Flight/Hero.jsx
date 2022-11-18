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
    <div className="relative mt-0 2xl:mt-10">
      <div className="hero flex flex-col space-y-4 justify-around  items-center w-[90%] lg:w-[1100px] bg-black rounded-3xl min-h-[120vh]  xl:min-h-[70vh] 2xl:min-h-[70vh]  3xl:min-h-[45vh] mx-auto">
        <div className="py-5 hidden lg:block"></div>
        <div className="text-center">
          <h1 data-aos="zoom-in-up" data-aos-duration="300" className="text-4xl lg:text-[65px]  leading-tight font-bold">
            Ready to take <br className="blcok lg:hidden" /> off?
          </h1>
        </div>
        <div className="relative w-[85%] mi-h-[23vh] 2xl:h-[35vh] 3xl:h-[23vh] 4xl:h-[18vh] mx-auto bg-white bg-opacity-60 rounded-lg p-5 py-8">
          <div className="flex flex-col xl:flex-row 2xl:flex-row justify-between items-center">
            <div data-aos="zoom-in-up" data-aos-duration="600" className="w-full xl:w-[25%] 2xl:w-[25%] flex px-[2px] py-[2px] rounded-xl border-2 border-black mb-6 lg:mb-0">
              <div className="w-[50%] p-2  bg-black rounded-xl text-white text-center">
                <h6>One Way</h6>
              </div>
              <div className="w-[50%] p-2 text-center">
                <h6>Rount Trip</h6>
              </div>
            </div>
            <div className="w-full xl:w-[50%] 2xl:w-[50%] flex flex-col space-y-6 lg:space-y-0 xl:flex-row 2xl:flex-row justify-between text-secondary-300">
              <div data-aos="zoom-in-up" data-aos-duration="900" className="w-full xl:w-[45%] 2xl:w-[45%] h-10 p-2 px-4 flex justify-between items-center rounded-lg bg-secondary-400 custom-shadow-sm">
                <p>Select Class</p>
                <FiChevronDown />
              </div>
              <div data-aos="zoom-in-up" data-aos-duration="1200" className="w-full xl:w-[45%] 2xl:w-[45%] h-10 p-2 px-4 flex justify-between items-center rounded-lg bg-secondary-400 custom-shadow-sm">
                <p>Select Travelers</p>
                <FiChevronDown />
              </div>
            </div>
          </div>
          <div className="flex flex-col  space-y-6 lg:space-y-0 xl:flex-row 2xl:flex-row justify-between items-center mt-8">
            <div data-aos="zoom-in-up" data-aos-duration="600" className="w-full xl:w-[30%] 2xl:w-[30%] h-24 flex flex-col justify-center items-center bg-secondary-400 custom-shadow-sm text-secondary-300 rounded-2xl">
              <div className="w-[90%] mx-auto flex items-center space-x-2 mb-2">
                <SlLocationPin />
                <p>From</p>
              </div>
              <div className="w-[90%] mx-auto h-10 p-2 px-4  flex justify-between items-center bg-white rounded-lg">
                <p className="font-medium">Select Location</p>
                <FiChevronDown />
              </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="900" className="w-full xl:w-[30%] 2xl:w-[30%] h-24 flex flex-col justify-center items-center bg-secondary-400 custom-shadow-sm text-secondary-300 rounded-2xl">
              <div className="w-[90%] mx-auto flex items-center space-x-2 mb-2">
                <TbSend />
                <p>To</p>
              </div>
              <div className="w-[90%] mx-auto h-10 p-2 px-4  flex justify-between items-center bg-white rounded-lg">
                <p className="font-medium">Select Location</p>
                <FiChevronDown />
              </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1200" className="w-full xl:w-[30%] 2xl:w-[30%] h-24 flex flex-col justify-center items-center bg-secondary-400 custom-shadow-sm text-secondary-300 rounded-2xl">
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
          <div data-aos="zoom-in-up" data-aos-duration="1200" className="absolute right-5 -bottom-4">
            <Button className="bg-primary py-2 px-8 flex space-x-4 items-center">
              <p>Find ticket</p>
              <HiArrowNarrowRight/>
            </Button>
          </div>
        </div>
        <div className="py-5"></div>
      </div>
    </div>
  );
};

export default Hero;

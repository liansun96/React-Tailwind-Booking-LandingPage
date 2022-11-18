import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsCalendar } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

const InputForm = () => {
  return (
    <div>
      <h6  data-aos="fade-up" data-aos-duration="300" className="text-base font-bold mb-4 hidden lg:block">
        Check Availability
      </h6>
      <div data-aos="fade-up" data-aos-duration="300" className="bg-white rounded-2xl custom-shadow">
        <div className="flex flex-col lg:flex-row justify-between 2xl:space-x-4 space-y-4 py-8 lg:py-5 lg:pl-6 lg:pr-14 relative">
          <div data-aos="fade-up" data-aos-duration="600" className=" flex justify-center !items-center space-x-2 py-2 mt-4">
            <SlLocationPin className="text-slate-500 text-4xl" />
            <div class="p-4 border border-slate-200 rounded-lg relative">
              <h2 class="absolute -top-5 translate-x-2 translate-y-1/2 bg-white text-sm text-slate-500 px-1">
                Location
              </h2>
              <input
                type="text"
                placeholder="Select location"
                className="focus:outline-none text-black  w-[200px] 2xl:w-[180px]"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="600" className=" flex justify-center !items-center space-x-2 py-2">
            <BsCalendar className="text-slate-500 text-4xl" />
            <div class="p-4 border border-slate-200 rounded-lg relative">
              <h2 class="absolute -top-5 translate-x-2 translate-y-1/2 bg-white text-sm text-slate-500 px-1">
                Check in - out
              </h2>
              <input
                type="date"
                placeholder="Select location"
                className="focus:outline-none w-[200px] 2xl:w-[180px]"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="900" className=" flex justify-center !items-center space-x-2 py-2">
            <TbUsers className="text-slate-500 text-4xl" />
            <div class="p-4 border border-slate-200 rounded-lg relative">
              <h2 class="absolute -top-5 translate-x-2 translate-y-1/2 bg-white text-sm text-slate-500 px-1">
                Gurests & rooms
              </h2>
              <input
                type="text"
                placeholder="2 Guests 1 Room"
                className="focus:outline-none  w-[200px] 2xl:w-[180px]"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" className="flex justify-center items-center absolute w-[60px] h-[60px] -bottom-[30px] right-[40%] lg:top-7 lg:-right-[30px] bg-primary rounded-full">
            <IoSearch className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;

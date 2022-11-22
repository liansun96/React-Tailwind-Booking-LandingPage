import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import Button from "../../Button";
import btnImg from "../images/btnImg.jpg";
import InputForm from "./InputForm";

const TextContainer = () => {
  return (
    <div className="w-[98%] lg:w-[50%] lg:mb-40 space-y-4 lg:space-y-8">
      <h1 data-aos="fade-up" data-aos-duration="300" className="text-4xl lg:text-[65px] leading-tight font-bold">
        Find the top <br className="hidden lg:block" />
        Hotels nearby.
      </h1>
      <p data-aos="fade-up" data-aos-duration="600" className="text-secondary-300 lg:text-base font-DmSans !mb-5 relative">
        We bring you not only a stay option, but an experience in your budget to{" "}
        <br />
        enjoy the luxury.
        <span data-aos="fade-right" data-aos-duration="1200" className="absolute top-[-53px] lg:right-[110px] -z-10 hidden lg:block">
          <svg width="400px" height="21.5px" viewBox="0 0 445.5 21.5">
            <path
              fill="#867ce4"
              d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z"
            ></path>
          </svg>
        </span>
      </p>

      <div data-aos="fade-up" data-aos-duration="900" className="flex justify-start items-center space-x-4 relative">
        <Button
          className={
            "bg-secondary-100 hover:bg-primary text-primary hover:text-white text-sm tracking-wider font-semibold duration-300"
          }
        >
          Discover Now
        </Button>
        <div className="rounded-full flex items-center space-x-2 absolute left-40">
          <div className="relative">
            <img src={btnImg} className="rounded-full w-[50px]" alt="" />
            <span className="duration-500 absolute top-0 rounded-2xl w-full h-full">
              <div className="w-full h-full flex justify-center items-center">
                <div className="w-8 h-8 text-center bg-white bg-opacity-80 rounded-full flex justify-center items-center">
                  <BsPlayFill className="text-secondary-300 text-xl" />
                </div>
              </div>
            </span>
          </div>
          <p>watch our story</p>
        </div>
      </div>
    </div>
  );
};

export default TextContainer;

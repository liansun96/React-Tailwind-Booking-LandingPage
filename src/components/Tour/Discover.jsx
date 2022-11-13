import React from "react";
import { ImFire } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GrMicrofocus } from "react-icons/gr";
import { BsPlayFill } from "react-icons/bs";
import miniProfile1 from "./images/miniProfile1.jpg";
import miniProfile2 from "./images/miniProfile2.jpg";
import miniProfile3 from "./images/miniProfile3.jpg";
import miniProfile4 from "./images/miniProfile4.jpg";
import discoverImg1 from "./images/discoverImg1.jpg";
import discoverImg2 from "./images/discoverImg2.jpg";
import discoverImg3 from "./images/discoverImg3.jpg";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper";
import miniCarImg1 from "./images/miniCarImg1.jpg";
import miniCarImg2 from "./images/miniCarImg2.jpg";
import './tour.css'

const Discover = () => {
  return (
    <div className="w-[90%] xl:w-[1100px] 2xl:w-[1100px] mx-auto">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:space-x-8">
        <div className="w-full xl:w-[33%] space-y-6 mb-8">
          <h1
            style={{ 'lineHeight': 1.2 }}
            className="text-3xl 2xl:text-5xl tracking-wide  text-start font-bold"
          >
            Discover the best places to visit 🔥
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex">
              <img
                src={miniProfile1}
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <img
                src={miniProfile2}
                className="w-12 h-12 rounded-full -translate-x-2"
                alt=""
              />
              <img
                src={miniProfile3}
                className="w-12 h-12 rounded-full -translate-x-4"
                alt=""
              />
              <img
                src={miniProfile4}
                className="w-12 h-12 rounded-full -translate-x-6"
                alt=""
              />
              <div className="w-12 h-12 rounded-full -translate-x-8 flex justify-center items-center bg-black">
                <p className="text-white">16+</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-xl space-x-2 py-[2px]">
              <AiFillStar className="text-green-500" />
              <p className="font-bold">4.5</p>
            </div>
          </div>
          <Button className="bg-[#d7e4f5] text-primary duration-500 hover:bg-primary hover:text-white py-3 space-x-8 rounded-xl flex justify-between items-center">
            <p>Explore places</p>
            <HiArrowNarrowRight />
          </Button>
        </div>
        <div className="w-full xl:w-[31%] space-y-8">
          <div className="relative group ">
            <img src={discoverImg1} className="rounded-2xl" alt="" />
            <span className="hidden group-hover:block duration-500 absolute top-0 rounded-2xl w-full h-full bg-opacity-20 bg-black">
              <div className="w-full h-full flex justify-center items-center">
                <div className="w-8 h-8 text-center bg-black rounded flex justify-center items-center">
                  <GrMicrofocus className="text-white" />
                </div>
              </div>
            </span>
          </div>
          <div className="discoverSwiper">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, FreeMode, Navigation]}
              className="mySwiper hidden lg:block"
            >
              <SwiperSlide>
                <div className="flex justify-between items-center gap-0 rounded-2xl">
                  <div className="w-[30%]">
                    <img
                      src={miniCarImg1}
                      className="rounded-2xl custom-shadow"
                      alt=""
                    />
                  </div>
                  <div className="w-[65%]">
                    <div className="px-2 py-4 space-y-2">
                      <h6 className="text-sm text-secondary-300 font-medium">
                        Farther-related bed and passage comfort civilly.
                      </h6>
                      <p className=" text-sm font-DmSans">Louis Ferguson</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-between items-center gap-0 rounded-2xl">
                  <div className="w-[30%]">
                    <img
                      src={miniCarImg2}
                      className="rounded-2xl custom-shadow"
                      alt=""
                    />
                  </div>
                  <div className="w-[65%]">
                    <div className="px-2 py-4 space-y-2">
                      <h6 className="text-sm text-secondary-300 font-medium">
                        Farther-related bed and passage comfort civilly.
                      </h6>
                      <p className=" text-sm font-DmSans">Lori Stevens</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="w-full xl:w-[31%] self-start">
          <div className="flex-col space-y-8">
            <div className="relative group">
              <img src={discoverImg2} className="rounded-2xl" alt="" />
              <span className="hidden group-hover:block duration-500 absolute top-0 rounded-2xl w-full h-full bg-opacity-20 bg-black">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-8 h-8 text-center bg-white rounded-full flex justify-center items-center">
                    <BsPlayFill className="text-secondary-300 text-xl" />
                  </div>
                </div>
              </span>
            </div>
            <div className="relative group ">
              <img src={discoverImg3} className="rounded-2xl" alt="" />
              <span className="hidden group-hover:block duration-500 absolute top-0 rounded-2xl w-full h-full bg-opacity-20 bg-black">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-8 h-8 text-center bg-black rounded flex justify-center items-center">
                    <GrMicrofocus className="text-white" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

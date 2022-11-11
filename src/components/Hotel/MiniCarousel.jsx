// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MiniCarImg1 from './images/miniCarImg1.jpg'
import MiniCarImg2 from './images/miniCarImg2.jpg'
import MiniCarImg3 from './images/miniCarImg3.jpg'
import MiniCarImg4 from './images/miniCarImg4.jpg'
// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper";

import './hotel.css'


const MiniCarousel = () => {
    
  return (
    <div className="w-[90%] lg:w-[1100px] mx-auto">    
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}        
        loop={true} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}     
        navigation={true}
        modules={[Autoplay , FreeMode , Navigation]}
        className="mySwiper hidden lg:block"
      >
        <SwiperSlide>
            <div className="flex items-center gap-0 border border-slate-300 rounded-2xl hover:text-primary">
                <div className="w-[50%]">
                    <img src={MiniCarImg1} className='rounded-l-2xl' alt="" />
                </div>
                <div className="w-[50%]">
                    <div className="px-2 py-4 space-y-2">
                        <h6 className="text-base font-bold">Daily 50 Lucky Winner get a <br /> free stay</h6>
                        <p className="text-slate-500 text-sm font-DmSans">Valid till : 15 Nov</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex items-center gap-0 border border-slate-300 rounded-2xl hover:text-primary">
                <div className="w-[50%]">
                    <img src={MiniCarImg2} className='rounded-l-2xl' alt="" />
                </div>
                <div className="w-[50%]">
                    <div className="px-2 py-4 space-y-2">
                        <h6 className="text-base font-bold">Up to 60% OFf</h6>
                        <p className="text-slate-500 text-sm font-DmSans">On Hotel Bookings Online</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex items-center border border-slate-300 rounded-2xl hover:text-primary">
                <div className="flex-1">
                    <img src={MiniCarImg3} className='rounded-l-2xl' alt="" />
                </div>
                <div className="flex-1">
                    <div className="p-2 space-y-2">
                        <h6 className="text-base font-bold">Book & Enjoy</h6>
                        <p className="text-slate-500 text-sm font-DmSans">20% Off on the best available room rate</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex items-center border border-slate-300 rounded-2xl hover:text-primary">
                <div className="flex-1">
                    <img src={MiniCarImg4} className='rounded-l-2xl' alt="" />
                </div>
                <div className="flex-1">
                    <div className="p-2 space-y-2">
                        <h6 className="text-base font-bold">Hot Summer Nights</h6>
                        <p className="text-slate-500 text-sm font-DmSans">Up to 3 nights free!</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>        
      </Swiper> 

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={3}        
        loop={true} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}     
        navigation={true}
        modules={[Autoplay , FreeMode , Navigation]}
        className="mySwiper block lg:hidden"
      >
        <SwiperSlide>
            <div className="flex flex-col items-center gap-0 border border-slate-300 rounded-2xl hover:text-primary">
                <div className="w-[100%]">
                    <img src={MiniCarImg1} className='rounded-t-2xl' alt="" />
                </div>
                <div className="w-[100%]">
                    <div className="px-2 py-4 space-y-2">
                        <h6 className="text-base font-bold">Daily 50 Lucky Winner get a free stay</h6>
                        <p className="text-slate-500 text-sm font-DmSans">Valid till : 15 Nov</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center gap-0 border border-slate-300 rounded-2xl hover:text-primary">
                <div className="w-[100%]">
                    <img src={MiniCarImg2} className='rounded-t-2xl' alt="" />
                </div>
                <div className="w-[100%]">
                    <div className="px-2 py-4 space-y-2">
                        <h6 className="text-base font-bold">Up to 60% OFf</h6>
                        <p className="text-slate-500 text-sm font-DmSans">On Hotel Bookings Online</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center border border-slate-300 rounded-2xl hover:text-primary">
                <div className="flex-1">
                    <img src={MiniCarImg3} className='rounded-t-2xl' alt="" />
                </div>
                <div className="flex-1">
                    <div className="px-2 py-4 space-y-2">
                        <h6 className="text-base font-bold">Book & Enjoy</h6>
                        <p className="text-slate-500 text-sm font-DmSans">20% Off on the best available room rate</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center border border-slate-300 rounded-2xl hover:text-primary">
                <div className="flex-1">
                    <img src={MiniCarImg4} className='rounded-t-2xl' alt="" />
                </div>
                <div className="flex-1">
                    <div className="px-2 py-4 space-y-2">
                        <h6 className="text-base font-bold">Hot Summer Nights</h6>
                        <p className="text-slate-500 text-sm font-DmSans">Up to 3 nights free!</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>        
      </Swiper>   
    </div>
  )
}

export default MiniCarousel
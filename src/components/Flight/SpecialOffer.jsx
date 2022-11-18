import React from 'react'
import Offer1 from './images/offer1.svg'
import Offer2 from './images/offer2.svg'
import Offer3 from './images/offer3.svg'
import {HiArrowNarrowRight} from 'react-icons/hi'


const SpecialOffer = () => {
  return (
    <div className='w-[90%] mx-auto lg:w-[1100px] min-h-[40vh] 3xl:min-h-[20vh]'>
        <h4 className='text-3xl font-bold mb-1'>Special Offers</h4>
        <div className="flex flex-col xl:flex-row 2xl:flex-row justify-start space-y-6 xl:space-x-6 2xl:space-x-6">
            <div data-aos="zoom-in-up" data-aos-duration="300" className="w-full xl:w-[25%] 2xl:w-[25%] bg-[#e6f8f3] space-y-6 p-5 rounded-2xl mt-6">
                <img src={Offer1} className='w-[70%]' alt="" />
                <div className="">
                    <p>Flat</p>
                    <h4 className='text-3xl font-bold mb-1'>$899 off</h4>
                    <p className='font-semibold'>On Domestic Flights</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-[50%]">
                        <div className="border-2 p-2 border-dashed rounded-lg border-primary bg-[#d7e4f5]">
                            <h4 className='text-xl text-center'>LOG125F</h4>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full">
                            <HiArrowNarrowRight/>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="600" className="w-full xl:w-[25%] 2xl:w-[25%] bg-[#fbe9eb] space-y-6 p-5 rounded-2xl">
                <img src={Offer2} className='w-[70%]' alt="" />
                <div className="">
                    <p>Flat</p>
                    <h4 className='text-3xl font-bold mb-1'>13% off</h4>
                    <p className='font-semibold'>On Domestic Flights</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-[50%]">
                        <div className="border-2 p-2 border-dashed rounded-lg border-primary bg-[#d7e4f5]">
                            <h4 className='text-xl text-center'>LOG125F</h4>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full">
                            <HiArrowNarrowRight/>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="900" className="w-full xl:w-[25%] 2xl:w-[25%] bg-[#e7f6f8] space-y-6 p-5 rounded-2xl">
                <img src={Offer3} className='w-[70%]' alt="" />
                <div className="">
                    <p>Flat</p>
                    <h4 className='text-3xl font-bold mb-1'>$2,400 off</h4>
                    <p className='font-semibold'>On International Flights</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-[50%]">
                        <div className="border-2 p-2 border-dashed rounded-lg border-primary bg-[#d7e4f5]">
                            <h4 className='text-xl text-center'>LOG125F</h4>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-full">
                            <HiArrowNarrowRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialOffer
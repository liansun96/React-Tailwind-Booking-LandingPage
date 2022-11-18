import React from 'react'
import {BsFillLightningFill} from 'react-icons/bs'
import {FaLeaf} from 'react-icons/fa'
import {BsLifePreserver} from 'react-icons/bs'
import {FaCar} from 'react-icons/fa'
import {TiWiFi} from 'react-icons/ti'
import {FaWheelchair} from 'react-icons/fa'

const ChooseUs = () => {
  return (
    <div className='w-[90%] lg:w-[1100px] mx-auto 2xl:h-[70vh] 3xl:h-[50vh]'>
        <h1 data-aos="fade-right" data-aos-duration="300" className="text-3xl 2xl:text-5xl my-8 leading-tight text-center font-bold">
            Why Choose Us         
        </h1>
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 justify-between">
            <div data-aos="fade-right" data-aos-duration="600" className="w-full xl:w-[31.5%] group">
                <div className="custom-shadow-sm group-hover:custom-shadow duration-300 rounded-xl space-y-4 p-5">
                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#dddbf7]">
                        <BsFillLightningFill className='text-primary text-2xl'/>
                    </div>   
                    <h6 className='text-xl font-bold'>Advance Booking</h6>                 
                    <p className='text-sm tracking-wide text-secondary-300'>
                        Happiness prosperous impression had conviction For every delay in they Extremity now.
                    </p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="900" className="w-full xl:w-[31.5%] group">
                <div className="custom-shadow-sm group-hover:custom-shadow duration-300 rounded-xl space-y-4 p-5">
                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#e6f8f3]">
                        <FaLeaf className='text-[#0cbc87] text-2xl'/>
                    </div>   
                    <h6 className='text-xl font-bold'>Economical Trip</h6>                 
                    <p className='text-sm tracking-wide text-secondary-300'>
                        Extremity now strangers contained breakfast him discourse additions <br /> Sincerity.
                    </p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1200" className="w-full xl:w-[31.5%] group">
                <div className="custom-shadow-sm group-hover:custom-shadow duration-300 rounded-xl space-y-4 p-5">
                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#fef6e0]">
                        <BsLifePreserver className='text-[#f7c32e] text-2xl'/>
                    </div>   
                    <h6 className='text-xl font-bold'>Secure and Safer</h6>                 
                    <p className='text-sm tracking-wide text-secondary-300'>
                        Perpetual extremity now strangers contained breakfast him discourse additions.
                    </p>
                </div>
            </div>
        </div>
        <div className="py-2 xl:py-3"></div>
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 justify-between">
            <div data-aos="fade-right" data-aos-duration="1500" className="w-full xl:w-[31.5%] group">
                <div className="custom-shadow-sm group-hover:custom-shadow duration-300 rounded-xl space-y-4 p-5">
                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#fbe9eb]">
                        <FaCar className='text-[#d6293e] text-2xl'/>
                    </div>   
                    <h6 className='text-xl font-bold'>Vehicle Options</h6>                 
                    <p className='text-sm tracking-wide text-secondary-300'>
                        he Prosperous impression had conviction For every delay in they Extremity now.
                        <br /><br />
                    </p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1800" className="w-full xl:w-[31.5%] group">
                <div className="custom-shadow-sm group-hover:custom-shadow duration-300 rounded-xl space-y-4 p-5">
                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#fff2e7]">
                        <TiWiFi className='text-[#fd7e14] text-2xl'/>
                    </div>   
                    <h6 className='text-xl font-bold'>Cab Entertainment</h6>                 
                    <p className='text-sm tracking-wide text-secondary-300'>
                    Extremity now strangers contained breakfast him discourse additions <br /> Sincerity.
                    </p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2100" className="w-full xl:w-[31.5%] group">
                <div className="custom-shadow-sm group-hover:custom-shadow duration-300 rounded-xl space-y-4 p-5">
                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#e7f6f8]">
                        <FaWheelchair className='text-[#17a7cb] text-2xl'/>
                    </div>   
                    <h6 className='text-xl font-bold'>Polite Driver</h6>                 
                    <p className='text-sm tracking-wide text-secondary-300'>
                        Perpetual extremity now strangers contained breakfast him discourse additions.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs
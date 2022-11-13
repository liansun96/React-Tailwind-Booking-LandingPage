import React from 'react'
import './tour.css'
import heroCardImg from './images/heroCardImg.jpg'
import discountBg from './images/discountBg.svg'
import {AiFillStar} from 'react-icons/ai'
import { FiChevronDown } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import {BsCalendar} from 'react-icons/bs'
import {MdDirectionsRun} from 'react-icons/md'
import Button from '../Button'


const Hero = () => {
  return (
    <div>
        <div className="tourHero w-[90%] lg:w-[1100px] mx-auto min-h-[50vh] 2xl:min-h-[40vh] 3xl:min-h-[30vh] rounded-3xl mt-10">
            <div className="flex flex-col xl:flex-row space-y-16 xl:space-y-0 xl:justify-between p-6 xl:p-10">
                <div className="w-full xl:w-[65%] text-white space-y-4">
                    <h1 className="text-3xl  lg:text-[65px] leading-tight font-bold">
                        Life Is Adventure Make The Best <br className='block xl:hidden'/> Of It
                    </h1>
                    <p className='text-sm tracking-wide xl:tracking-wider'>
                        Planning for a trip? we will organize your best trip with the best destination and <br className='hidden xl:block' /> within the best budgets!
                    </p>
                </div>
                <div className="w-full xl:w-[25%]">
                    <div className="group relative rounded-2xl bg-white p-2">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={heroCardImg} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                        </div>
                        <div className='absolute -top-5 -left-5 text-white'>
                            <div className="relative">
                                <img src={discountBg} className='w-[25%] xl:w-[30%]' alt="" />
                                <h4 className='absolute top-6 left-4 font-bold text-xl xl:text-2xl'>40%</h4>
                            </div>
                        </div>
                        <div className="space-y-2 mt-4 px-1 py-2">
                            <div className="flex justify-between">
                                <div className="bg-[#d7e4f5] p-1 text-primary text-sm rounded">
                                    <p>Adventure</p>
                                </div>
                                <div className="flex justify-between items-center space-x-1">
                                    <p className='font-bold'>4.5</p>
                                    <AiFillStar className='text-green-500'/>
                                </div>
                            </div>
                            <h6 className='group-hover:text-primary duration-150 text-lg font-bold'>
                                Maldives Sightseeing & Adventure Tour
                            </h6>
                            <div className="flex justify-between">
                                <p className='text-green-500 font-light'>
                                    <span className="font-bold">$385</span>
                                    /parson 
                                </p>
                                <div className="flex justify-between items-center space-x-1">
                                    <p className='font-medium text-secondary-300 line-through'>$682</p>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative -bottom-16 w-[90%]  mx-auto bg-white rounded-2xl p-5 shadow">         
                <div className="flex flex-col xl:flex-row justify-between items-center xl:space-x-5">
                    <div className="w-full xl:w-[25%] h-24 flex flex-col justify-center items-center text-secondary-300 rounded-2xl">
                        <div className="w-[90%] mx-auto flex items-center space-x-2 mb-2">
                            <SlLocationPin className='text-black' />
                            <p>From</p>
                        </div>
                        <div className="w-[90%] mx-auto h-10 p-2 px-2 border-b border-secondary-300 flex justify-between items-center bg-white">
                            <p className="font-medium">Select Location</p>
                            <FiChevronDown />
                        </div>
                    </div>
                    <div className="w-full xl:w-[25%] h-24 flex flex-col justify-center items-center text-secondary-300 rounded-2xl">
                        <div className="w-[90%] mx-auto flex items-center space-x-2 mb-2">
                            <BsCalendar className='text-black'/>
                            <p>Date</p>
                        </div>
                        <div className="w-[90%] mx-auto h-10 p-2 px-2 border-b border-secondary-300  flex justify-between items-center bg-white">
                            <p className="font-medium">Select Date</p>
                            <FiChevronDown />
                        </div>
                    </div>
                    <div className="w-full xl:w-[25%] h-24 flex flex-col justify-center items-center  text-secondary-300 rounded-2xl">
                        <div className="w-[90%] mx-auto flex items-center space-x-2 mb-2">
                            <MdDirectionsRun className='text-black'/>
                            <p>Tour type</p>
                        </div>
                        <div className="w-[90%] mx-auto h-10 p-2 px-2 border-b border-secondary-300  flex justify-between items-center bg-white">
                            <p className="font-medium">Select type</p>
                            <FiChevronDown />
                        </div>
                    </div>
                    <div className="w-full xl:w-[20%] h-24 flex flex-col justify-center items-center rounded-3xl">
                        <Button className="bg-black text-white">
                            Take a Tour
                        </Button>
                    </div>
                </div>          
            </div>
        </div>
    </div>
  )
}

export default Hero
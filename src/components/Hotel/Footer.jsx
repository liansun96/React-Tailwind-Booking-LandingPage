import React from 'react'
import LightLogo from "./images/logo-light.svg";
import {BsTelephone} from 'react-icons/bs'
import {BsEnvelope} from 'react-icons/bs'
import { FaHotel } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import {RiFacebookFill} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import Paypal from './images/paypal.svg'
import Visa from './images/visa.svg'
import Master from './images/mastercard.svg'
import Express from './images/expresscard.svg'

const Footer = () => {
  return (
    <div className='bg-[#0b0a12] 2xl:h-[87vh] 3xl:h-[60vh] 4xl:h-[45vh]'>
        <div className="w-[90%] lg:w-[1100px] mx-auto space-y-8">
            <div className="flex flex-wrap justify-between pt-10">                
                <div className="lg:w-[25%] space-y-3 font-DmSans text-secondary-500">
                    <img src={LightLogo} className='w-32' alt="" />
                    <p className='text-base'>
                        Departure defective arranging <br /> rapturous did believe him all had supported.
                    </p>
                    <div className="flex activeLink items-center space-x-3">
                        <BsTelephone/>
                        <p>+1234 568 963</p>
                    </div>
                    <div className="flex activeLink items-center space-x-3">
                        <BsEnvelope/>
                        <p>example@gmail.com</p>
                    </div>
                </div>
                <div className="lg:w-[65%]">
                    <div className="flex flex-wrap space-y-6 lg:space-y-0">
                        <div className="w-[50%] lg:w-[25%] mt-6 lg:mt-0">
                            <div className='text-start text-secondary-500'>
                                <h5 className='font-bold text-xl text-white !mb-7'>Page</h5>
                                <ul className='space-y-3 font-DmSans'>
                                    <li className='activeLink'>About us</li>
                                    <li className='activeLink'>Contact us</li>
                                    <li className='activeLink'>News and Blog</li>
                                    <li className='activeLink'>Meet a Team</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%] lg:w-[25%]">
                            <div className='text-start text-secondary-500'>
                                <h5 className='font-bold text-xl text-white !mb-7'>Link</h5>
                                <ul className='space-y-3 font-DmSans'>
                                    <li className='activeLink'>Sing up</li>
                                    <li className='activeLink'>Sing in</li>
                                    <li className='activeLink'>Privacy and Policy</li>
                                    <li className='activeLink'>Terms</li>
                                    <li className='activeLink'>Cookie</li>
                                    <li className='activeLink'>Support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%] lg:w-[25%]">
                            <div className='text-start text-secondary-500'>
                                <h5 className='font-bold text-xl text-white !mb-7'>Global Site</h5>
                                <ul className='space-y-3 font-DmSans'>
                                    <li className='activeLink'>India</li>
                                    <li className='activeLink'>California</li>
                                    <li className='activeLink'>Indonesia</li>
                                    <li className='activeLink'>Canada</li>
                                    <li className='activeLink'>Malaysia</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%] lg:w-[25%]">
                            <div className='text-start text-secondary-500'>
                                <h5 className='font-bold text-xl text-white !mb-7'>Booking</h5>
                                <ul className='space-y-3 font-DmSans'>
                                    <li className='activeLink flex items-center space-x-2'>
                                        <FaHotel />
                                        <a href="" className="font-semibold">
                                            Hotel
                                        </a>
                                    </li>
                                    <li className='activeLink flex items-center space-x-2'>
                                        <IoAirplaneSharp />
                                        <a href="" className="font-semibold">
                                        Flight
                                        </a>
                                    </li>
                                    <li className='activeLink flex items-center space-x-2'>
                                        <IoEarth />
                                        <a href="" className="font-semibold">
                                            Tour
                                        </a>
                                    </li>
                                    <li className='activeLink flex items-center space-x-2'>
                                        <FaCarAlt />
                                        <a href="" className="font-semibold">
                                            Cabs
                                        </a>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="lg:w-[95%] space-y-3">
                <h5 className='font-bold text-xl text-white'>Top Links</h5>
                <ul class=" text-secondary-500 font-DmSans flex flex-wrap justify-start !text-left">
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Flights</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Hotels</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Tours</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Cabs</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">About</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Contact us</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Blogs</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Services</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Detail page</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Services</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Policy</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Testimonials</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Newsletters</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Podcasts</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Protests</a></li> 
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">NewsCyber</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Education</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Sports</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Tech and Auto</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Opinion</a></li>
                    <li className="activeLink mr-2 lg:mr-3"><a href="#">Share Market</a></li>                                        
                </ul>                
            </div>
            <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center">
                <div className="lg:w-[25%] space-y-3 mb-6 lg:mb-0">
                    <h5 className='font-bold text-xl text-white'>Paymanet & Security</h5> 
                    <div className="flex space-x-4">
                        <img src={Paypal} className='h-8' alt="" />
                        <img src={Visa} className='h-8' alt="" />
                        <img src={Master} className='h-8' alt="" />
                        <img src={Express} className='h-8' alt="" />
                    </div>                                      
                </div>
                <div className="lg:w-[25%] space-y-3 lg:text-right">
                    <h5 className='font-bold text-xl text-white'>Follow uo on</h5>
                    <div className="flex justify-end space-x-4">
                        <div className="flex justify-center items-center w-[35px] h-[35px] rounded text-white bg-[#5d82d0] hover:bg-[#7190d2]">
                            <RiFacebookFill/>
                        </div>
                        <div className="flex justify-center items-center w-[35px] h-[35px] rounded text-white bg-[#902b5c] hover:bg-[#933f68]">
                            <RiInstagramLine/>
                        </div>
                        <div className="flex justify-center items-center w-[35px] h-[35px] rounded text-white bg-[#40bef4] hover:bg-[#60c6f2]">
                            <FaTwitter/>
                        </div>
                        <div className="flex justify-center items-center w-[35px] h-[35px] rounded text-white bg-[#238cc8] hover:bg-[#3d95c8]">
                            <BsLinkedin/> 
                        </div>             
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-800"></div>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                <div className="lg:w-[50%] space-y-3 text-secondary-500">
                    <h6 className='font-DmSans tracking-tight text-base mb-4'>
                        Copyrights ©2022 Booking. All rights reserved.
                    </h6>                                                         
                </div>
                <div className="lg:w-[50%] space-y-3 text-right text-secondary-500">                    
                    <ul className="flex flex-wrap justify-center lg:justify-end space-x-4 font-DmSans">
                        <li className="activeLink"><a href="#">Privacy policy</a></li>
                        <li className="activeLink"><a href="#">Terms and conditions</a></li>
                        <li className="activeLink"><a href="#">Refund policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer                        
                        

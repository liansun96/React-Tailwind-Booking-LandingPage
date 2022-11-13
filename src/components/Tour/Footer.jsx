import React from 'react'
import Button from '../Button'
import logo from '../Hotel/images/booking-logo.svg'
import {TbSend} from 'react-icons/tb'
import {RiFacebookFill} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='w-[90%] lg:w-[1100px] mx-auto'>
        <div className="bg-secondary-400 2xl:min-h-[45vh] 3xl:min-h-[35vh] 4xl:min-h-[25vh] rounded-lg p-6">
            <div className="flex flex-col xl:flex-row space-y-8 justify-between">
                <div className="w-full xl:w-[35%] space-y-8">
                    <img src={logo} className="w-[40%]" alt="" />
                    <div className="space-y-2">
                        <p className='text-secondary-300 tracking-wider text-sm font-medium'>
                            Subscribe to Our Newsletter
                        </p>
                        <div className="w-full h-[60px] mx-auto p-2 flex justify-between space-x-2 bg-white rounded-lg ">
                            <input type="email" placeholder='Enter your email' className='w-[80%] outline-none px-2' />
                            <Button className="text-white bg-black px-4">
                                <TbSend className='text-xl'/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[35%]">
                    <div className="flex">
                        <div className="w-[50%] lg:mt-0">
                            <div className='text-start text-secondary-300'>
                                <h5 className='font-bold text-xl text-black !mb-7'>Page</h5>
                                <ul className='space-y-3 font-DmSans'>
                                    <li className='activeLink'>About us</li>
                                    <li className='activeLink'>Contact us</li>
                                    <li className='activeLink'>News and Blog</li>
                                    <li className='activeLink'>Meet a Team</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className='text-start text-secondary-300'>
                                <h5 className='font-bold text-xl text-black !mb-7'>Link</h5>
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
                    </div>
                </div>
            </div>   
            <div className="border-t-[1px] border-secondary-500 my-6"></div>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                <div className="lg:w-[50%] space-y-3 text-center xl:text-start text-secondary-300">
                    <h6 className='font-DmSans tracking-tight text-base mb-4'>
                        Copyrights ©2022 Booking. All rights reserved.
                    </h6>                                                         
                </div>
                <div className="lg:w-[50%] space-y-3  text-secondary-500">                    
                    <div className="flex justify-end space-x-6">
                        <div className="text-secondary-300 text-xl duration-200 hover:text-primary">
                            <RiFacebookFill />
                        </div>
                        <div className="text-secondary-300 text-xl duration-200 hover:text-primary">
                            <FaTwitter />
                        </div>
                        <div className="text-secondary-300 text-xl duration-200 hover:text-primary">
                            <RiInstagramLine />
                        </div>
                        <div className="text-secondary-300 text-xl duration-200 hover:text-primary">
                            <BsLinkedin />
                        </div>
                        <div className="text-secondary-300 text-xl duration-200 hover:text-primary">
                            <BsGithub />
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    </div>
  )
}

export default Footer
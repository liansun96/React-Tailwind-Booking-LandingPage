import React from 'react'
import LightLogo from "./images/logo-light.svg";
import {RiFacebookFill} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='w-[90%] lg:w-[1100px] mx-auto rounded-t-lg bg-[#0b0a12]'>
        <div className="flex flex-col xl:flex-row 2xl:flex-row justify-between items-center py-8">
            <div className="w-full 2xl:w-[30%]  text-secondary-500">
                <ul className="flex flex-wrap justify-center  space-x-4 font-DmSans">
                    <li className="activeLink"><a href="#">About</a></li>
                    <li className="activeLink"><a href="#">Policy</a></li>
                    <li className="activeLink"><a href="#">Terms and conditions</a></li>
                </ul>
            </div>
            <div className="w-full 2xl:w-[30%] text-secondary-500 text-center">
                <img src={LightLogo} className="scale-50" alt="" />
                <p>
                    Copyrights ©2022 Booking. All <br className='hidden xl:block 2xl:block' /> rights reserved.
                </p>
            </div>
            <div className="w-full 2xl:w-[30%] mt-10 xl:mt-0 2xl:mt-0">
                <div className="flex justify-center items-center space-x-8">
                    <div className="text-secondary-500 text-2xl duration-200 hover:text-primary">
                        <RiFacebookFill />
                    </div>
                    <div className="text-secondary-500 text-2xl duration-200 hover:text-primary">
                        <FaTwitter />
                    </div>
                    <div className="text-secondary-500 text-2xl duration-200 hover:text-primary">
                        <RiInstagramLine />
                    </div>
                    <div className="text-secondary-500 text-2xl duration-200 hover:text-primary">
                        <BsLinkedin />
                    </div>
                    <div className="text-secondary-500 text-2xl duration-200 hover:text-primary">
                        <BsGithub />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
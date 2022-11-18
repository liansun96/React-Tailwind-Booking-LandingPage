import React from 'react'
import sponsorImg1 from './images/sponsorImg1.svg'
import sponsorImg2 from './images/sponsorImg2.svg'
import sponsorImg3 from './images/sponsorImg3.svg'
import sponsorImg4 from './images/sponsorImg4.svg'
import sponsorImg5 from './images/sponsorImg5.svg'
import sponsorImg6 from './images/sponsorImg6.svg'

const Sponsor = () => {
  return (
    <div className="w-[90%] lg:w-[1100px] mx-auto">
        <div className="flex flex-wrap justify-around lg:justify-between items-center space-y-6 my-6">
            <div data-aos="fade-right" data-aos-duration="300" className="w-[40%] lg:w-[14%] mt-6">
                <img src={sponsorImg1} className='grayscale duration-300 hover:grayscale-0' alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="600" className="w-[40%] lg:w-[14%]">
                <img src={sponsorImg2} className='grayscale duration-300 hover:grayscale-0' alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="900" className="w-[40%] lg:w-[14%]">
                <img src={sponsorImg3} className='grayscale duration-300 hover:grayscale-0 w-[90%] lg:ml-3' alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="1200" className="w-[40%] lg:w-[14%]">
                <img src={sponsorImg4} className='grayscale duration-300 hover:grayscale-0 w-[85%] lg:ml-2' alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="1800" className="w-[40%] lg:w-[14%]">
                <img src={sponsorImg5} className='grayscale duration-300 hover:grayscale-0' alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="2100" className="w-[40%] lg:w-[14%]">
                <img src={sponsorImg6} className='grayscale duration-300 hover:grayscale-0' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Sponsor
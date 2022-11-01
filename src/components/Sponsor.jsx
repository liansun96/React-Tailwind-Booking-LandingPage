import React from 'react'
import sponsorImg1 from '../images/sponsorImg1.svg'
import sponsorImg2 from '../images/sponsorImg2.svg'
import sponsorImg3 from '../images/sponsorImg3.svg'
import sponsorImg4 from '../images/sponsorImg4.svg'
import sponsorImg5 from '../images/sponsorImg5.svg'
import sponsorImg6 from '../images/sponsorImg6.svg'

const Sponsor = () => {
  return (
    <div className="w-[77%] mx-auto">
        <div className="flex justify-between items-center my-6">
            <div className="w-[14%]">
                <img src={sponsorImg1} className='grayscale duration-300 hover:grayscale-0' alt="" />
            </div>
            <div className="w-[14%]">
                <img src={sponsorImg2} className='grayscale duration-300 hover:grayscale-0' alt="" />
            </div>
            <div className="w-[14%]">
                <img src={sponsorImg3} className='grayscale duration-300 hover:grayscale-0 w-[90%] ml-3' alt="" />
            </div>
            <div className="w-[14%]">
                <img src={sponsorImg4} className='grayscale duration-300 hover:grayscale-0 w-[85%] ml-2' alt="" />
            </div>
            <div className="w-[14%]">
                <img src={sponsorImg5} className='grayscale duration-300 hover:grayscale-0' alt="" />
            </div>
            <div className="w-[14%]">
                <img src={sponsorImg6} className='grayscale duration-300 hover:grayscale-0' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Sponsor
import React  from 'react'
import {FaUtensils} from 'react-icons/fa'
import {BsFillStopwatchFill} from 'react-icons/bs'
import {BsShieldFillCheck} from 'react-icons/bs'
import {BsLightningFill} from 'react-icons/bs'

const TextContainer2 = () => {    

  return (
    <div className="w-[98%] lg:w-[50%] space-y-6 lg:space-y-10 lg:my-10 lg:pl-6">
        <h1 
            className="text-3xl lg:text-[47px] leading-tight font-bold"
            data-aos="fade-up"      
        >
            The Best Holidays Start Here!
        </h1>
        <p data-aos="fade-up" className="text-secondary-300 lg:text-base font-DmSans">
            Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.
        </p>
        <div data-aos="fade-up" className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-x-4">
            <div className="lg:w-[50%] space-y-2 mt-4">
                <div className="flex justify-center items-center bg-[#e6f8f3] w-[60px] h-[60px] rounded-full">
                    <FaUtensils className='text-[#0cbc87] text-xl'/>                
                </div>
                <h5 className='text-2xl font-bold'>Quality Food</h5>
                <p className='text-secondary-300 lg:text-base font-DmSans'>
                    Departure defective arranging rapturous did. Conduct denied adding worthy little.
                </p>
            </div>
            <div className="lg:w-[50%] space-y-2">
                <div className="flex justify-center items-center bg-[#fbe9eb] w-[60px] h-[60px] rounded-full">
                    <BsFillStopwatchFill className='text-[#d6293e] text-xl'/>                
                </div>
                <h5 className='text-2xl font-bold'>Quick Services</h5>
                <p className='text-secondary-300 lg:text-base font-DmSans'>
                    Supposing so be resolving breakfast am or perfectly.
                </p>
            </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-x-4">
            <div className="lg:w-[50%] space-y-2 mt-4">
                <div className="flex justify-center items-center bg-[#e6f8f3] w-[60px] h-[60px] rounded-full">
                    <BsShieldFillCheck className='text-[#fd7e14] text-xl'/>                
                </div>
                <h5 className='text-2xl font-bold'>High Security</h5>
                <p className='text-secondary-300 lg:text-base font-DmSans'>
                    Arranging rapturous did believe him all had supported.
                </p>
            </div>
            <div className="lg:w-[50%] space-y-2">
                <div className="flex justify-center items-center bg-[#e7f6f8] w-[60px] h-[60px] rounded-full">
                    <BsLightningFill className='text-[#17a2b8] text-xl'/>                
                </div>
                <h5 className='text-2xl font-bold'>24 Hours Alert</h5>
                <p className='text-secondary-300 lg:text-base font-DmSans'>
                    Rapturous did believe him all had supported.
                </p>
            </div>
        </div>
    </div>
  )
}

export default TextContainer2
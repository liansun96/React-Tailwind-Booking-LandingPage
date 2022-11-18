import React from 'react'
import featuredImg1 from './images/featuredImg1.jpg'
import featuredImg2 from './images/featuredImg2.jpg'
import featuredImg3 from './images/featuredImg3.jpg'
import featuredImg4 from './images/featuredImg4.jpg'
import {SlLocationPin} from 'react-icons/sl'
import {AiFillStar} from 'react-icons/ai'
import {HiOutlineInformationCircle} from 'react-icons/hi'


const Featured = () => {
  return (
    <div className="w-[90%] lg:w-[1100px] mx-auto">
        <h1 className="text-3xl lg:text-[55px] leading-tight text-center font-bold">
            Popular Destinations         
        </h1>
        <div className="flex flex-col lg:flex-row space-y-8 justify-between items-center">
            <div data-aos="zoom-in-up" data-aos-duration="300"  className="lg:w-[23.5%] overflow-hidden mt-8">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={featuredImg1} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute top-4 right-4 w-[40px] h-[40px] bg-white hover:bg-secondary-100 text-secondary-300  rounded-full flex justify-center items-center'>
                        <HiOutlineInformationCircle className='text-xl'/>                        
                    </div>
                    <div className="space-y-2 my-4">                       
                        <div className="flex justify-between">
                            <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Thailand</h6>
                            <div className="flex justify-between items-center space-x-1">
                                <p className='font-bold'>4.3</p>
                                <AiFillStar className='text-green-500'/>
                            </div>
                        </div>
                        <p className='text-secondary-300 text-sm'>
                            The next flight is on 26th Dec
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="600"  className="lg:w-[23.5%] overflow-hidden">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={featuredImg2} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>                    
                    <div className="space-y-2 my-4">                       
                        <div className="flex justify-between">
                            <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Hong Kong</h6>
                            <div className="flex justify-between items-center space-x-1">
                                <p className='font-bold'>4.6</p>
                                <AiFillStar className='text-green-500'/>
                            </div>
                        </div>
                        <p className='text-secondary-300 text-sm'>
                            Daily 1 flight
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="900"  className="lg:w-[23.5%] overflow-hidden">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={featuredImg3} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute top-4 right-4 w-[40px] h-[40px] bg-white hover:bg-secondary-100 text-secondary-300  rounded-full flex justify-center items-center'>
                        <HiOutlineInformationCircle className='text-xl'/>                        
                    </div>
                    <div className="space-y-2 my-4">                       
                        <div className="flex justify-between">
                            <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Maldives</h6>
                            <div className="flex justify-between items-center space-x-1">
                                <p className='font-bold'>4.3</p>
                                <AiFillStar className='text-green-500'/>
                            </div>
                        </div>
                        <p className='text-secondary-300 text-sm'>
                            2 fligths every week
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1200"  className="lg:w-[23.5%] overflow-hidden">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={featuredImg4} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>                    
                    <div className="space-y-2 my-4">                       
                        <div className="flex justify-between">
                            <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Switzerland</h6>
                            <div className="flex justify-between items-center space-x-1">
                                <p className='font-bold'>4.3</p>
                                <AiFillStar className='text-green-500'/>
                            </div>
                        </div>
                        <p className='text-secondary-300 text-sm'>
                            The next flight is on 26th Dec
                        </p>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Featured
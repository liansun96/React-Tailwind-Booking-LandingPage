import React from 'react'
import featuredImg1 from '../images/featuredImg1.jpg'
import featuredImg2 from '../images/featuredImg2.jpg'
import featuredImg3 from '../images/featuredImg3.jpg'
import featuredImg4 from '../images/featuredImg4.jpg'
import {SlLocationPin} from 'react-icons/sl'
import {AiFillStar} from 'react-icons/ai'


const Featured = () => {
  return (
    <div className="w-[77%] mx-auto">
        <h1 className="text-4xl lg:text-[55px] lg:my-8 leading-tight text-center font-bold">
            Featured Hotels         
        </h1>
        <div className="flex justify-between items-center">
            <div className="w-[23.5%] overflow-hidden">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={featuredImg1} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute bottom-24 left-3 bg-black text-white px-2 rounded-2xl space-x-2 flex justify-around items-center'>
                        <SlLocationPin/>
                        <p>New York</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Baga Comfort</h6>
                        <div className="flex justify-between">
                            <p className='text-green-500 font-light'>
                                <span className="font-bold">$445</span>
                                /starting at 
                            </p>
                            <div className="flex justify-between items-center space-x-1">
                                <p className='font-bold'>4.5</p>
                                <AiFillStar className='text-green-500'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[23.5%] overflow-hidden">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={featuredImg2} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute bottom-24 left-3 bg-black text-white px-2 rounded-2xl space-x-2 flex justify-around items-center'>
                        <SlLocationPin/>
                        <p>California</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <h6 className='featuredCardTitle duration-150 text-xl font-bold'>New Apollo Hotel</h6>
                        <div className="flex justify-between">
                            <p className='text-green-500 font-light'>
                                <span className="font-bold">$585</span>
                                /starting at 
                            </p>
                            <div className="flex justify-between items-center space-x-1">
                                <p className='font-bold'>4.8</p>
                                <AiFillStar className='text-green-500'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[23.5%] overflow-hidden">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={featuredImg3} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute bottom-24 left-3 bg-black text-white px-2 rounded-2xl space-x-2 flex justify-around items-center'>
                        <SlLocationPin/>
                        <p>Los Angeles</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <h6 className='featuredCardTitle duration-150 text-xl font-bold'>New Age Hotel</h6>
                        <div className="flex justify-between">
                            <p className='text-green-500 font-light'>
                                <span className="font-bold">$385</span>
                                /starting at 
                            </p>
                            <div className="flex justify-between items-center space-x-1">
                                <p className='font-bold'>4.6</p>
                                <AiFillStar className='text-green-500'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[23.5%] overflow-hidden">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={featuredImg4} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute bottom-24 left-3 bg-black text-white px-2 rounded-2xl space-x-2 flex justify-around items-center'>
                        <SlLocationPin/>
                        <p>Chicago</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Helios Beach Resort</h6>
                        <div className="flex justify-between">
                            <p className='text-green-500 font-light'>
                                <span className="font-bold">$665</span>
                                /starting at 
                            </p>
                            <div className="flex justify-between items-center space-x-1">
                                <p className='font-bold'>4.8</p>
                                <AiFillStar className='text-green-500'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Featured
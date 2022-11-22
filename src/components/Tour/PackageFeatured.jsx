import React from 'react'
import packageImg1 from './images/packageImg1.jpg'
import packageImg2 from './images/packageImg2.jpg'
import packageImg3 from './images/packageImg3.jpg'
import packageImg4 from './images/packageImg4.jpg'
import {AiFillStar} from 'react-icons/ai'


const PackageFeatured = () => {
  return (
    <div className="w-[90%] lg:w-[1100px] mx-auto">
        <h1 data-aos="fade-right" data-aos-duration="300" className="text-3xl lg:text-[55px] my-6 lg:my-8 leading-tight text-center font-bold">
            Our Best Packages        
        </h1>
        <div className="flex flex-col lg:flex-row space-y-8 justify-between items-center">
            <div data-aos="fade-right" data-aos-duration="600" className="lg:w-[23.5%] overflow-hidden mt-8">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={packageImg1} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute top-5 left-3 bg-black text-white  text-sm  px-3 py-[2px] rounded-lg space-x-2 flex justify-around items-center'>                        
                        <p>Advneture</p>
                    </div>
                    <div className='absolute top-5 right-3 bg-white text-sm  text-secondary-300 px-2 rounded-lg space-x-2 flex justify-around items-center'>                        
                        <div className="flex justify-between items-center space-x-2 py-[2px]">
                            <AiFillStar className='text-green-500'/>
                            <p className='font-medium'>4.3</p>
                        </div>
                    </div>
                    <div className='absolute bottom-[100px] left-3 bg-white text-secondary-300  text-sm  px-3 py-1 rounded-lg space-x-2 flex justify-around items-center'>                        
                        <p>6 days / 5 nights</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Northen Lights Escape</h6>
                        <div className="flex justify-start items-center space-x-2">
                            <p className='text-green-500 text-xl font-bold'>
                                 $2569                                                                 
                            </p>
                            <span className="text-sm text-secondary-300">Starting price</span>                            
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="900" className="lg:w-[23.5%] overflow-hidden mt-8">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={packageImg2} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute top-5 left-3 bg-black text-white  text-sm  px-3 py-[2px] rounded-lg space-x-2 flex justify-around items-center'>                        
                        <p>History</p>
                    </div>
                    <div className='absolute top-5 right-3 bg-white text-sm  text-secondary-300 px-2 rounded-lg space-x-2 flex justify-around items-center'>                        
                        <div className="flex justify-between items-center space-x-2 py-[2px]">
                            <AiFillStar className='text-green-500'/>
                            <p className='font-medium'>4.2</p>
                        </div>
                    </div>
                    <div className='absolute bottom-[100px] left-3 bg-white text-secondary-300  text-sm  px-3 py-1 rounded-lg space-x-2 flex justify-around items-center'>                        
                        <p>8 days / 7 nights</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Essential Egypt</h6>
                        <div className="flex justify-start items-center space-x-2">
                            <p className='text-green-500 text-xl font-bold'>
                                 $1885                                                                 
                            </p>
                            <span className="text-sm text-secondary-300">Starting price</span>                            
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1200" className="lg:w-[23.5%] overflow-hidden mt-8">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={packageImg3} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute top-5 left-3 bg-black text-white  text-sm  px-3 py-[2px] rounded-lg space-x-2 flex justify-around items-center'>                        
                        <p>Desert</p>
                    </div>
                    <div className='absolute top-5 right-3 bg-white text-sm  text-secondary-300 px-2 rounded-lg space-x-2 flex justify-around items-center'>                        
                        <div className="flex justify-between items-center space-x-2 py-[2px]">
                            <AiFillStar className='text-green-500'/>
                            <p className='font-medium'>4.5</p>
                        </div>
                    </div>
                    <div className='absolute bottom-[100px] left-3 bg-white text-secondary-300  text-sm  px-3 py-1 rounded-lg space-x-2 flex justify-around items-center'>                        
                        <p>9 days / 8 nights</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Lambok, Indoneisa</h6>
                        <div className="flex justify-start items-center space-x-2">
                            <p className='text-green-500 text-xl font-bold'>
                                 $1385                                                                 
                            </p>
                            <span className="text-sm text-secondary-300">Starting price</span>                            
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className="lg:w-[23.5%] overflow-hidden mt-8">
                <div className="featuredCard relative overflow-hidden rounded-2xl">
                    <div className="rounded-2xl overflow-hidden">
                        <img src={packageImg4} className='w-full rounded-2xl duration-1000 hover:scale-110' alt="" />
                    </div>
                    <div className='absolute top-5 left-3 bg-black text-white  text-sm  px-3 py-[2px] rounded-lg space-x-2 flex justify-around items-center'>                        
                        <p>Beach</p>
                    </div>
                    <div className='absolute top-5 right-3 bg-white text-sm  text-secondary-300 px-2 rounded-lg space-x-2 flex justify-around items-center'>                        
                        <div className="flex justify-between items-center space-x-2 py-[2px]">
                            <AiFillStar className='text-green-500'/>
                            <p className='font-medium'>4.6</p>
                        </div>
                    </div>
                    <div className='absolute bottom-[100px] left-3 bg-white text-secondary-300  text-sm  px-3 py-1 rounded-lg space-x-2 flex justify-around items-center'>                        
                        <p>9 days / 8 nights</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <h6 className='featuredCardTitle duration-150 text-xl font-bold'>Phi Phi Island</h6>
                        <div className="flex justify-start items-center space-x-2">
                            <p className='text-green-500 text-xl font-bold'>
                                 $3585                                                                 
                            </p>
                            <span className="text-sm text-secondary-300">Starting price</span>                            
                        </div>
                    </div>
                </div>
            </div>                        
        </div>
    </div>
  )
}

export default PackageFeatured
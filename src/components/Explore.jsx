import React from 'react'
import exploreImg1 from '../images/exploreImg1.jpg'
import exploreImg2 from '../images/exploreImg2.jpg'
import exploreImg3 from '../images/exploreImg3.jpg'
import exploreImg4 from '../images/exploreImg4.jpg'
import exploreImg5 from '../images/exploreImg5.jpg'
import exploreImg6 from '../images/exploreImg6.jpg'
import exploreImg7 from '../images/exploreImg7.jpg'
import exploreImg8 from '../images/exploreImg8.jpg'
import exploreImg9 from '../images/exploreImg9.jpg'
import exploreImg10 from '../images/exploreImg10.jpg'
import exploreImg11 from '../images/exploreImg11.jpg'
import exploreImg12 from '../images/exploreImg12.jpg'

const Explore = () => {
  return (
    <div className="w-[90%] lg:w-[1100px] mx-auto">
        <h1 className="text-4xl  lg:text-[55px] lg:my-8 leading-tight text-center font-bold">
            Explore Nearby         
        </h1>
        <div className="flex flex-wrap justify-around lg:justify-between items-center space-y-4 lg:-space-x-8">
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg1} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center !mr-4">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                San Francisco
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                13 min drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] !mb-4 lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg2} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                Los Angeles
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                25 min drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg3} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                Miami
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                45 min drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg4} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                Sanjosh
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                55 min drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg5} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                New York
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                1-Hour drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg6} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                North Justen
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                2-Hour drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-5"></div>
        <div className="flex flex-wrap justify-around lg:justify-between items-center space-y-4 lg:-space-x-8">
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg7} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                Rio
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                20 min drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] !mb-4 lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg8} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                Las Vegas
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                3-Hour drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg9} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                Texas
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                55 min drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg10} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                Chicago
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                13 min drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg11} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                                New Keagan
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                35 min drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] lg:w-[15%]">
                    <div className="exploreCard relative overflow-hidden">
                        <div className="rounded-2xl overflow-hidden">
                            <img src={exploreImg12} className='w-40 rounded-full' alt="" />
                        </div>                        
                        <div className="space-y-2 mt-4">                            
                            <div className="text-center">
                            <h6 className='exploreCardTitle duration-150 text-xl font-bold'>
                               Oslo
                            </h6>
                            <p className='text-slate-500 font-light'>                                
                                1 hour 13 min drive 
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore
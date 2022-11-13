import React from 'react'
import blogImg1 from './images/blogImg1.jpg'
import blogImg2 from './images/blogImg2.jpg'
import blogImg3 from './images/blogImg3.jpg'
import blogImg4 from './images/blogImg4.jpg'

const Blog = () => {
  return (
    <div className='w-[90%] lg:w-[1100px] mx-auto'>
        <h1 className="text-3xl 2xl:text-5xl my-8 leading-tight text-center font-bold">
            Latest Blog & News         
        </h1>
        <div className="flex flex-col xl:flex-row 2xl:flex-row xl:space-x-16 2xl:space-x-16">
            <div className="w-full mb-10 2xl:w-[50%] 2xl:mb-0">
                <div className="group">
                    <img src={blogImg1} className="rounded-2xl mb-4" alt="" />
                    <h4 className='text-2xl 2xl:text-3xl font-bold duration-200 group-hover:text-primary'>
                        10 Ways on How to improve your Hotel Operations
                    </h4>
                </div>
            </div>
            <div className="w-full 2xl:w-[50%]">
                <div className="flex flex-col justify-center items-center space-y-9">
                    <div className="group flex flex-col xl:flex-row 2xl:flex-row items-start lg:items-center space-x-4">
                        <div className="w-full xl:w-[30%] 2xl:w-[30%]">
                            <img src={blogImg2} className="rounded-2xl mb-4" alt="" />
                        </div>
                        <div className="w-full 2xl:w-[70%] space-y-2">
                            <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                                Story of water world adventure
                            </h4>
                            <p className='text-secondary-300'>
                                Jacqueline Miler
                            </p>                            
                        </div>
                    </div>
                    <div className="group flex flex-col xl:flex-row 2xl:flex-row items-start lg:items-center space-x-4">
                        <div className="w-full xl:w-[30%] 2xl:w-[30%]">
                            <img src={blogImg3} className="rounded-2xl mb-4" alt="" />
                        </div>
                        <div className="w-full 2xl:w-[70%] space-y-2">
                            <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                                How Hotel Technology Can Help Small Hotel Businesses
                            </h4>
                            <p className='text-secondary-300'>
                                Frances Guerrero
                            </p>
                        </div>
                    </div>
                    <div className="group flex flex-col xl:flex-row 2xl:flex-row items-start lg:items-center space-x-4">
                        <div className="w-full xl:w-[30%] 2xl:w-[30%]">
                            <img src={blogImg4} className="rounded-2xl mb-4" alt="" />
                        </div>
                        <div className="w-full 2xl:w-[70%] space-y-2">
                            <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                                Hotel Service - Become a Guide for Your Guests
                            </h4>
                            <p className='text-secondary-300'>
                                Louis Ferguson
                            </p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
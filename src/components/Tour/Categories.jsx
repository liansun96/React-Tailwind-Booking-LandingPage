import React from 'react'
import category1 from './images/category1.jpg'
import category2 from './images/category2.jpg'
import category3 from './images/category3.jpg'
import category4 from './images/category4.jpg'
import category5 from './images/category5.jpg'
import category6 from './images/category6.jpg'
import category7 from './images/category7.jpg'
import category8 from './images/category8.jpg'

const Categories = () => {
  return (
    <div className='w-[90%] lg:w-[1100px] mx-auto'>
        <h1 className="text-3xl 2xl:text-5xl my-8 leading-tight text-center font-bold">
            Top Categories         
        </h1>
        <div className="space-y-10">            
            <div className="flex justify-between items-center space-x-4">
                <div className="w-[25%] group flex items-center space-x-4">
                    <div className="w-[50%]">
                        <img src={category1} className="rounded-2xl" alt="" />
                    </div>
                    <div className="w-[50%] space-y-2">
                        <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                            Beach
                        </h4>
                        <p className='text-secondary-300'>
                            4,568 Places
                        </p>                            
                    </div>
                </div>
                <div className="w-[25%] group flex items-center space-x-4">
                    <div className="w-[50%]">
                        <img src={category2} className="rounded-2xl" alt="" />
                    </div>
                    <div className="w-[50%] space-y-2">
                        <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                            Heritage
                        </h4>
                        <p className='text-secondary-300'>
                            2,850 Places
                        </p>
                    </div>
                </div>
                <div className="w-[25%] group flex items-center space-x-4">
                    <div className="w-[50%]">
                        <img src={category3} className="rounded-2xl" alt="" />
                    </div>
                    <div className="w-[50%] space-y-2">
                        <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                            Desert
                        </h4>
                        <p className='text-secondary-300'>
                            1,587 Places
                        </p>
                    </div>
                </div>
                <div className="w-[25%] group flex items-center space-x-4">
                    <div className="w-[50%]">
                        <img src={category4} className="rounded-2xl" alt="" />
                    </div>
                    <div className="w-[50%] space-y-2">
                        <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                            Tower
                        </h4>
                        <p className='text-secondary-300'>
                            986 Places
                        </p>
                    </div>
                </div>
            </div> 
            <div className="flex justify-between items-center space-x-4">
                <div className="w-[25%] group flex items-center space-x-4">
                    <div className="w-[50%]">
                        <img src={category5} className="rounded-2xl" alt="" />
                    </div>
                    <div className="w-[50%] space-y-2">
                        <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                            Mountain
                        </h4>
                        <p className='text-secondary-300'>
                            786 Places
                        </p>                            
                    </div>
                </div>
                <div className="w-[25%] group flex items-center space-x-4">
                    <div className="w-[50%]">
                        <img src={category6} className="rounded-2xl" alt="" />
                    </div>
                    <div className="w-[50%] space-y-2">
                        <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                            Safari
                        </h4>
                        <p className='text-secondary-300'>
                            568 Places
                        </p>
                    </div>
                </div>
                <div className="w-[25%] group flex items-center space-x-4">
                    <div className="w-[50%]">
                        <img src={category7} className="rounded-2xl" alt="" />
                    </div>
                    <div className="w-[50%] space-y-2">
                        <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                            Temple
                        </h4>
                        <p className='text-secondary-300'>
                            256 Places
                        </p>
                    </div>
                </div>
                <div className="w-[25%] group flex items-center space-x-4">
                    <div className="w-[50%]">
                        <img src={category8} className="rounded-2xl" alt="" />
                    </div>
                    <div className="w-[50%] space-y-2">
                        <h4 className='text-xl font-bold duration-200 group-hover:text-primary'>
                            Fastival
                        </h4>
                        <p className='text-secondary-300'>
                            654 Places
                        </p>
                    </div>
                </div>
            </div>          
        </div>
    </div>
  )
}

export default Categories
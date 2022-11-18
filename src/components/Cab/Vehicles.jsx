import React from 'react'
import seadanCar from './images/seadan.svg'
import microCar from './images/micro.svg'
import cuvCar from './images/suv-2.svg'
import suvCar from './images/suv.svg'
import pickupCar from './images/pickup.svg'
import coupeCar from './images/coupe.svg'

const Vehicles = () => {
  return (
    <div className='w-[90%] lg:w-[1100px] mx-auto'>
        <h1 data-aos="fade-right" data-aos-duration="300" className="text-3xl 2xl:text-5xl my-4 xl:my-8 leading-tight text-center font-bold">
            Our Awesome Vehicles         
        </h1>
        <div className="flex flex-wrap space-y-2 justify-between items-center">
            <div data-aos="fade-right" data-aos-duration="600" className="group w-[160px] h-[230px]">
                <div className="w-[160px] h-[220px] rounded-xl duration-300 custom-shadow-sm group-hover:custom-shadow">
                    <div className="flex-col">
                        <div className="h-[150px] w-full flex justify-center items-center">
                            <div className="w-[120px] h-[120px] rounded-full bg-secondary-400 flex justify-center items-center">
                                <img src={seadanCar} className="w-[70%]" alt="" />
                            </div>
                        </div>
                        <div className="text-center space-y-2">
                            <h6 className='text-xl font-bold duration-300 group-hover:text-primary'>Seadan</h6>
                            <p className='text-secondary-300 text-sm group-hover:text-zinc-800'>( 6 Cars )</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="900" className="group w-[160px] h-[230px]">
                <div className="w-[160px] h-[220px] rounded-xl duration-300 custom-shadow-sm group-hover:custom-shadow">
                    <div className="flex-col">
                        <div className="h-[150px] w-full flex justify-center items-center">
                            <div className="w-[120px] h-[120px] rounded-full bg-secondary-400 flex justify-center items-center">
                                <img src={microCar} className="w-[70%]" alt="" />
                            </div>
                        </div>
                        <div className="text-center space-y-2">
                            <h6 className='text-xl font-bold duration-300 group-hover:text-primary'>Micro</h6>
                            <p className='text-secondary-300 text-sm group-hover:text-zinc-800'>( 8 Cars )</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1200" className="group w-[160px] h-[230px]">
                <div className="w-[160px] h-[220px] rounded-xl duration-300 custom-shadow-sm group-hover:custom-shadow">
                    <div className="flex-col">
                        <div className="h-[150px] w-full flex justify-center items-center">
                            <div className="w-[120px] h-[120px] rounded-full bg-secondary-400 flex justify-center items-center">
                                <img src={cuvCar} className="w-[70%]" alt="" />
                            </div>
                        </div>
                        <div className="text-center space-y-2">
                            <h6 className='text-xl font-bold duration-300 group-hover:text-primary'>CUV</h6>
                            <p className='text-secondary-300 text-sm group-hover:text-zinc-800'>( 4 Cars )</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className="group w-[160px] h-[230px]">
                <div className="w-[160px] h-[220px] rounded-xl custom-shadow-sm group-hover:custom-shadow duration-300">
                    <div className="flex-col">
                        <div className="h-[150px] w-full flex justify-center items-center">
                            <div className="w-[120px] h-[120px] rounded-full bg-secondary-400 flex justify-center items-center">
                                <img src={suvCar} className="w-[70%]" alt="" />
                            </div>
                        </div>
                        <div className="text-center space-y-2">
                            <h6 className='text-xl font-bold duration-300 group-hover:text-primary'>SUV</h6>
                            <p className='text-secondary-300 text-sm group-hover:text-zinc-800'>( 5 Cars )</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1800" className="group w-[160px] h-[230px]">
                <div className="w-[160px] h-[220px] rounded-xl custom-shadow-sm group-hover:custom-shadow duration-300">
                    <div className="flex-col">
                        <div className="h-[150px] w-full flex justify-center items-center">
                            <div className="w-[120px] h-[120px] rounded-full bg-secondary-400 flex justify-center items-center">
                                <img src={pickupCar} className="w-[70%]" alt="" />
                            </div>
                        </div>
                        <div className="text-center space-y-2">
                            <h6 className='text-xl font-bold duration-300 group-hover:text-primary'>Pick up</h6>
                            <p className='text-secondary-300 text-sm group-hover:text-zinc-800'>( 3 Pickup Track )</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="2100" className="group w-[160px] h-[230px]">
                <div className="w-[160px] h-[220px] rounded-xl duration-300 custom-shadow-sm group-hover:custom-shadow">
                    <div className="flex-col">
                        <div className="h-[150px] w-full flex justify-center items-center">
                            <div className="w-[120px] h-[120px] rounded-full bg-secondary-400 flex justify-center items-center">
                                <img src={coupeCar} className="w-[70%]" alt="" />
                            </div>
                        </div>
                        <div className="text-center space-y-2">
                            <h6 className='text-xl font-bold duration-300 group-hover:text-primary'>Couper</h6>
                            <p className='text-secondary-300 text-sm group-hover:text-zinc-800'>( 9 Cars )</p>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </div>
  )
}

export default Vehicles
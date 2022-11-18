import React from 'react'
import Button from '../Button'
import {CgArrowsExchangeAlt} from 'react-icons/cg'

const Hero = () => {
  return (
    <div className='w-[90%] xl:w-[1100px] mx-auto 3xl:min-h-[50vh]'>
        <div className="cabHero w-full xl:w-[85%] ml-auto h-[300px] xl:h-[600px] flex justify-start items-center rounded-3xl mt-10">
            <div className="w-[90%] mx-auto xl:mx-0 xl:w-[500px] h-[530px] xl:h-[400px] bg-white custom-shadow rounded-3xl p-5 translate-y-[60%] xl:translate-y-0 xl:-translate-x-1/3">
              <h6 data-aos="fade-down" data-aos-duration="300" className='text-xl xl:text-2xl font-bold'>
                Book Your Online Cab
              </h6>
              <div data-aos="fade-down" data-aos-duration="600" className="border-t-[1px] border-secondary-500 my-3 xl:my-6"></div>
              <div className="space-y-8">
                <div data-aos="fade-down" data-aos-duration="900" className="flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <input id="draft" class="peer/draft" type="radio" name="status" checked />
                    <label for="draft" class="peer-checked/draft:text-sky-500">One Way</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input id="published" class="peer/published" type="radio" name="status" />
                    <label for="published" class="peer-checked/published:text-sky-500">Round Trip</label>
                  </div>                
                </div>
                <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0  xl:space-x-6">
                  <div data-aos="fade-down" data-aos-duration="300" className="w-full xl:w-[50%]">
                    <div class='p-4 border border-secondary-300 rounded-lg relative'>            
                        <p class="absolute -top-5 translate-x-2 translate-y-1/2 bg-white text-sm text-slate-500 px-1">Pickup</p>
                        <input type="text" placeholder='Select location' className='focus:outline-none w-[100%]' />
                    </div>
                  </div>
                  <div data-aos="fade-down" data-aos-duration="600" className="absolute top-[155px] left-[130px] xl:top-[167px] xl:left-[205px] flex justify-center items-center w-10 h-10 rounded-full z-10 bg-black">
                    <CgArrowsExchangeAlt className='text-white text-3xl rotate-90 xl:rotate-0'/>
                  </div>
                  <div data-aos="fade-down" data-aos-duration="900" className="w-full xl:w-[50%]">
                    <div class='p-4 border border-secondary-300 rounded-lg relative'>            
                        <p class="absolute -top-5 translate-x-2 xl:translate-x-32 translate-y-1/2 bg-white text-sm text-slate-500 px-1">Drop</p>
                        <input type="text" placeholder='              Select location' className='focus:outline-none w-[100%] hidden xl:block' />
                        <input type="text" placeholder='Select location' className='focus:outline-none w-[100%] block xl:hidden' />
                    </div>
                  </div>
                </div>   
                <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0  xl:space-x-6">
                  <div data-aos="fade-down" data-aos-duration="300" className="w-full xl:w-[50%]">
                    <div class='p-4 border border-secondary-300 rounded-lg relative'>            
                        <p class="absolute -top-5 translate-x-2 translate-y-1/2 bg-white text-sm text-slate-500 px-1">Pickup Date</p>
                        <input type="text" placeholder='Select date' className='focus:outline-none w-[100%]' />
                    </div>
                  </div>
                  <div data-aos="fade-down" data-aos-duration="900" className="w-full xl:w-[50%]">
                    <div class='p-4 border border-secondary-300 rounded-lg relative'>            
                        <p class="absolute -top-5 translate-x-2 xl:translate-x-20 translate-y-1/2 bg-white text-sm text-slate-500 px-1">Pickup Time</p>
                        <input type="text" placeholder='                     Select time' className='focus:outline-none hidden xl:block w-[100%]' />
                        <input type="text" placeholder='Select time' className='focus:outline-none w-[100%] block xl:hidden' />
                    </div>
                  </div>
                </div>                
                <div data-aos="fade-down" data-aos-duration="900" className="">
                  <Button className="w-full py-2 bg-black duration-200 hover:bg-zinc-800 text-white font-bold tracking-wider">
                    Search Cabs
                  </Button>
                </div>
              </div>
            </div>            
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import {SlLocationPin} from 'react-icons/sl'
import {BsCalendar} from 'react-icons/bs'
import {HiOutlineUser} from 'react-icons/hi'
import {IoSearch} from 'react-icons/io5'

const InputForm = () => {
  return (
    <div>
        <h6 className='text-base font-bold mb-4 hidden lg:block'>Check Availability</h6>
        <div className='bg-white rounded-2xl custom-shadow'>          
            <div className="flex flex-col lg:flex-row justify-between space-x-2 space-y-4 py-8 lg:py-5 lg:pl-6 lg:pr-14 relative">
                <div className="flex justify-center !items-center space-x-2 py-2 mt-4">
                    <SlLocationPin className='text-slate-500 text-4xl'/>      
                    <div class='p-4 border border-slate-200 rounded-lg relative'>            
                        <h2 class="absolute -top-6 translate-x-2 translate-y-1/2 bg-white text-slate-500 px-1">Location</h2>
                        <input type="text" placeholder='Select location' className='focus:outline-none' />
                    </div>
                </div>
                <div className="flex justify-center !items-center space-x-2 py-2">
                    <BsCalendar className='text-slate-500 text-4xl'/>      
                    <div class='p-4 border border-slate-200 rounded-lg relative'>            
                        <h2 class="absolute -top-6 translate-x-2 translate-y-1/2 bg-white text-slate-500 px-1">Check in - out</h2>
                        <input type="date" placeholder='Select location' className='focus:outline-none w-[200px]' />
                    </div>
                </div>
                <div className="flex justify-center !items-center space-x-2 py-2">
                    <HiOutlineUser className='text-slate-500 text-4xl'/>      
                    <div class='p-4 border border-slate-200 rounded-lg relative'>            
                        <h2 class="absolute -top-6 translate-x-2 translate-y-1/2 bg-white text-slate-500 px-1">Gurests & rooms</h2>
                        <input type="text" placeholder='2 Guests 1 Room' className='focus:outline-none' />
                    </div>
                </div>
                <div className="flex justify-center items-center absolute w-[60px] h-[60px] -bottom-[30px] right-[40%] lg:top-7 lg:-right-[30px] bg-primary rounded-full">
                    <IoSearch className='text-white text-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputForm    
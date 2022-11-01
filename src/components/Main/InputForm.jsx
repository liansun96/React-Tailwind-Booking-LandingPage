import React from 'react'
import {SlLocationPin} from 'react-icons/sl'
import {BsCalendar} from 'react-icons/bs'
import {HiOutlineUser} from 'react-icons/hi'
import {IoSearch} from 'react-icons/io5'

const InputForm = () => {
  return (
    <div>
        <h6 className='text-base font-bold mb-4'>Check Availability</h6>
        <div className='bg-white rounded-2xl custom-shadow'>          
            <div className="flex justify-between py-5 pl-6 pr-14 relative">
                <div className="flex justify-center !items-center space-x-2 py-2">
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
                        <input type="date" placeholder='Select location' className='focus:outline-none' />
                    </div>
                </div>
                <div className="flex justify-center !items-center space-x-2 py-2">
                    <HiOutlineUser className='text-slate-500 text-4xl'/>      
                    <div class='p-4 border border-slate-200 rounded-lg relative'>            
                        <h2 class="absolute -top-6 translate-x-2 translate-y-1/2 bg-white text-slate-500 px-1">Gurests & rooms</h2>
                        <input type="text" placeholder='2 Guests 1 Room' className='focus:outline-none' />
                    </div>
                </div>
                <div className="flex justify-center items-center absolute w-[60px] h-[60px] top-7 -right-[30px] bg-primary rounded-full">
                    <IoSearch className='text-white text-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputForm    
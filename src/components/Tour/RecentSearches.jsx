import React from 'react'
import {TbX} from 'react-icons/tb'

const RecentSearches = () => {
  return (
    <div className='w-[90%] lg:w-[1100px] mx-auto'>
      <div className="flex">
        <div className="w-[20%]">
          <h6 className='text-2xl font-bold '>Recent <br /> Searches</h6>
        </div>
        <div className="w-[70%] flex">  
          <div className="flex items-center px-2 rounded bg-secondary-400">
            <p className=''>Taman Sari</p>
            <TbX/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default RecentSearches
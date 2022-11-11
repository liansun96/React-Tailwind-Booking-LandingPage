import React from 'react'
import Hero from './Hero'
import './cab.css'
import Vehicles from './Vehicles'
import ChooseUs from './ChooseUs'
import DownloadApp from './DownloadApp'
import Sponsor from './Sponsor'
import Footer from './Footer'

const Cab = () => {
  return (
    <div className='font-Poppins'>
        <Hero/>
        <div className="py-5"></div>
        <Vehicles/>
        <div className="py-5"></div>
        <ChooseUs/>
        <div className="py-20"></div>
        <DownloadApp/>
        <div className="py-10"></div>
        <Sponsor/>
        <div className="py-10"></div>
        <Footer/>

    </div>
  )
}

export default Cab
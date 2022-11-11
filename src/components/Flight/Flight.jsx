import React from 'react'
import Blog from './Blog'
import BookingFeatured from './BookingFeatured'
import BookingFlight from './BookingFlight'
import Featured from './Featured'
import Footer from './Footer'
import Hero from './Hero'
import SpecialOffer from './SpecialOffer'

const Flight = () => {
  return (
    <div className="font-Poppins">
      <Hero/>
      <div className="py-5"></div>
      <SpecialOffer/>
      <div className="py-5"></div>
      <Featured/>
      <div className="py-5"></div>
      <BookingFeatured/>
      <div className="py-5"></div>
      <BookingFlight/>
      <div className="py-5"></div>
      <Blog/>
      <div className="py-5"></div>
      <Footer/>

    </div>
  )
}

export default Flight
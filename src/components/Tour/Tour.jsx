import React from 'react'
import Categories from './Categories'
import Discover from './Discover'
import Footer from './Footer'
import Hero from './Hero'
import PackageFeatured from './PackageFeatured'
import RecentSearches from './RecentSearches'
import SubscribeSec from './SubscribeSec'

const Tour = () => {
  return (
    <div className='font-Poppins'>        
        <Hero/>
        <div className="py-16"></div>        
        <PackageFeatured/>
        <div className="py-5 xl:py-10"></div>
        <SubscribeSec/>
        <div className="py-5 xl:py-10"></div>
        <Categories/>
        <div className="py-10"></div>
        <Discover/>
        <div className="py-10"></div>
        <Footer/>
    </div>
  )
}

export default Tour
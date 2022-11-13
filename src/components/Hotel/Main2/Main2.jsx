import React from 'react'
import ImageContainer2 from './ImageContainer2'
import TextContainer2 from './TextContainer2'

const Main2 = () => {
  return (
    <div className="relative">
      <div className="w-[90%] lg:w-[1100px] min-h-[90vh] 3xl:min-h-[70vh] 4xl:min-h-[60vh] mx-auto flex flex-col lg:flex-row justify-between items-center">
        <ImageContainer2/>
        <div className="py-5 block lg:hidden"></div>
        <TextContainer2/>        
      </div>      
    </div>
  )
}

export default Main2
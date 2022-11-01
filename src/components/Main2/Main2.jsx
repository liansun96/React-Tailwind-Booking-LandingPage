import React from 'react'
import ImageContainer2 from './ImageContainer2'
import TextContainer2 from './TextContainer2'

const Main2 = () => {
  return (
    <div className="relative">
      <div className="w-[77%] min-h-[100vh] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center">
        <ImageContainer2/>
        <TextContainer2/>        
      </div>      
    </div>
  )
}

export default Main2
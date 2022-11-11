import React from "react";
import ImageContainer from "./ImageContainer";
import TextContainer from "./TextContainer";
import InputForm from "./InputForm";

const Main = () => {
  return (
    <div className="relative">
      <div className="w-[90%] lg:w-[1100px] min-h-[100vh] 2xl:min-h-[90vh]  3xl:min-h-[70vh] mx-auto flex flex-col justify-around items-center lg:flex-row lg:justify-between lg:items-center">
        <TextContainer />
        <ImageContainer />
        <div className="py-20 block lg:hidden"></div>
      </div>
      <div className="w-[91%] lg:w-[1100px] mx-auto absolute -bottom-[100px] left-4 xl:bottom-[100px] xl:left-[125px]  2xl:bottom-12 3xl:bottom-20  2xl:left-[210px] 3xl:left-[400px]">
        <div className=" lg:w-[83%]">
          <InputForm />
        </div>
      </div>
    </div>
  );
};

export default Main;

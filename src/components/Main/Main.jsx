import React from "react";
import ImageContainer from "./ImageContainer";
import TextContainer from "./TextContainer";
import InputForm from "./InputForm";

const Main = () => {
  return (
    <div className="relative">
      <div className="w-[77%] min-h-[100vh] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center">
        <TextContainer />
        <ImageContainer />
      </div>
      <div className="w-[77%] mx-auto absolute bottom-16 left-[175px]">
        <div className="w-[83%]">
          <InputForm className="" />
        </div>
      </div>
    </div>
  );
};

export default Main;

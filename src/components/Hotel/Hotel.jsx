import React from "react";
import DownloadApp from "./DownloadApp";
import Explore from "./Explore";
import Featured from "./Featured";
import Footer from "./Footer";
import Main from "./Main/Main";
import Main2 from "./Main2/Main2";
import MainCarousel from "./MainCarousel";
import MiniCarousel from "./MiniCarousel";
// import Nav from "./Nav";
import Sponsor from "./Sponsor";

const Hotel = () => {
  return (
    <div className="w-[100%] font-Poppins min-h-[100vh]">
      {/* <Nav /> */}
      <Main />
      <div className="py-20 lg:py-10"></div>
      <MiniCarousel />
      <div className="py-10"></div>
      <Main2 /> 
      <div className="py-4 2xl:py-0"></div>
      <Featured/>
      <div className="py-5 lg:py-10"></div>
      <Sponsor/>
      <div className="py-5 lg:py-10"></div>
      <MainCarousel/>
      <div className="py-10"></div>
      <Explore/>
      <div className="py-10"></div>
      <DownloadApp/>
      <div className="py-10"></div>
      <Footer/>      
    </div>
  );
};

export default Hotel;

import React from "react";
import DownloadApp from "./components/DownloadApp";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import Main2 from "./components/Main2/Main2";
import MainCarousel from "./components/MainCarousel";
import MiniCarousel from "./components/MiniCarousel";
import Nav from "./components/Nav";
import Sponsor from "./components/Sponsor";

const App = () => {
  return (
    <div className="w-[100%] font-Poppins min-h-[100vh]">
      <Nav />
      <Main />
      <div className="py-5"></div>
      <MiniCarousel />
      <div className="py-10"></div>
      <Main2 />      
      <Featured/>
      <div className="py-10"></div>
      <Sponsor/>
      <div className="py-10"></div>
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

export default App;

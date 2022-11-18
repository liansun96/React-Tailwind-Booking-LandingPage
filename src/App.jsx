import React ,{useEffect} from "react";
import Nav from "./components/Nav";
import Hotel from "./components/Hotel/Hotel";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Flight from "./components/Flight/Flight";
import Tour from "./components/Tour/Tour";
import Cab from "./components/Cab/Cab"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="w-[100%] font-Poppins min-h-[100vh]">
      <Router>
        <Nav />        
        <Routes>
          <Route path="/" element={<Hotel />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/cab" element={<Cab />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

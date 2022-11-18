import React,{useEffect} from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { Data } from "./Data";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="w-full xl:w-[70%] mx-auto bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl  xl:text-4xl text-center font-bold my-5">Frequerntly Asked Questions</h1>
        <div className="w-[95%] xl:w-[80%] mx-auto px-4 py-6 space-y-6">
          {Data.map((item, index) => {
            return (
              <>
                <button
                  onClick={() => toggle(index)}
                  key={index}
                  className="flex flex-col justify-between items-start w-[100%] border-t-2 pt-6"
                >
                  <div className="w-[100%] flex justify-between items-center">
                    <h6 className="text-lg font-semibold text-start">{item.question}</h6>
                    <span className="duration-300">
                      {clicked === index ? (
                        <FiChevronUp data-aos="zoom-in" className="duration-300 text-2xl text-slate-700" />
                      ) : (
                        <FiChevronDown data-aos="zoom-in" className="duration-300 text-2xl text-slate-700" />
                      )}
                    </span>
                  </div>
                  <div className="text-start duration-300">
                    {clicked === index ? (
                      <p data-aos="fade-out" className="duration-300 text-slate-500 mt-1 w-[90%]">{item.answer}</p>
                    ) : null}
                  </div>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

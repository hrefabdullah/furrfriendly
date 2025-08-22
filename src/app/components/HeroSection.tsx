import React from "react";
import { Inter } from 'next/font/google';
import ClickSpark from '../utils/ClickSpark';
import ExploreMoreArrow from "./Explore";
import PawPattern from "./PawPrint";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const Hero = () => {
  return (
    <section
      className={`relative overflow-hidden bg-[#fff5b2] h-max max-h-[95vh] ${inter.className}`}
    >
      <div className="max-w-[80vw] sm:max-w-[85vw] lg:max-w-[100vw] mx-auto px-4 sm:px-0 lg:px-0">
        {/* <PawPattern  /> */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8">


          {/* Hero Text */}
          <div className="flex flex-col justify-center bg-[#fff] rounded-b-[40px] p-10 lg:p-30 pt-15 lg:pt-40 w-[100vw] lg:h-[100vh] lg:w-1/2 text-center md:text-left mb-2">
            <h1 className=" text-4xl sm:text-4xl md:text-[5vw] lg:text-6xl font-extrabold text-[#000000] mb-1 leading-tight relative">
              Pet Care Essentials
            </h1>
            <h2 className="text-2xl sm:text-2xl md:text-[3vw] lg:text-4xl font-bold text-[#f4b916] mb-3 relative">
              For your Furry Friend
            </h2>
            <p className="text-[#737373] text-sm sm:text-base md:text-[1.8vw] lg:text-base max-w-xl mx-auto md:mx-0 mb-5 leading-4.5">
              Quality products and services for your beloved pets. Everything your pet needs in one place.
            </p>
            {/* CTA Button */}
            <ClickSpark sparkColor="#fff" sparkSize={8} sparkRadius={12} sparkCount={6} duration={400}>
              <div className="md:text-left relative lg:top-0 sm:top-0 top-12 rounded-4xl ">
                <button className="relative bg-[#222222] text-white px-5 py-3 md:text-base sm:px-4 sm:py-2 rounded-4xl text-sm sm:text-base font-medium transition shadow-md hover:shadow-lg">
                  Shop Now
                </button>
              </div>
            </ClickSpark>
            {/* <div className="lg:inline rounded-xl hidden bg-[#f4b916] h-[50vh] w-[35vw] py-10 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-lg h-[20vh] w-[5vw] p-6"></div>
                  <div className="bg-white rounded-lg shadow-lg h-[20vh] w-[5vw] p-6"></div>
                  <div className="bg-white rounded-lg shadow-lg h-[20vh] w-[5vw] p-6"></div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Image */}
          <div className="w-[90vw] sm:w-[60vw] md:w-[75vw] lg:w-1/2 relative h-[60vh] sm:h-[60vh] lg:h-[75vh] mb-3">
            <svg
              className="absolute inset-0 w-[85%] sm:w-[85%] lg:w-[95%] h-full left-4 sm:left-6 lg:left-0 top-[-10px] sm:top-[-15px] lg:top-0 rotate-6 z-1"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fff"
                d="M66.6,-36.9C75.8,-22.7,65.3,4.5,50.9,28.6C36.5,52.7,18.3,73.7,-0.9,74.2C-20.1,74.9,-40.1,54.8,-48.3,34.2C-56.5,13.9,-52.9,-7.4,-42.9,-22.2C-32.8,-37,-16.4,-45.5,6.2,-49C28.8,-52.6,57.5,-51.2,66.6,-36.9Z"
                transform="translate(100 100)"
              />
            </svg>
            {/* <img
              src="/assets/cat2.png"
              alt="cat"
              className=" absolute brightness-300 w-[90%] sm:w-[80%] lg:w-[90%] h-full left-6 sm:left-8 lg:left-10 top-[-10px] sm:top-[-15px] rounded-lg object-contain z-2"
              loading="lazy"
            /> */}
            <img
              src="/assets/cat2.png"
              alt="cat"
              className="rotate-y-190 rotate-4 absolute w-[100%] sm:w-[80%] lg:w-[90%] h-full left-8 sm:left-6 lg:left-8 top-[-10px] sm:top-[-30px] rounded-lg object-contain z-2"
              loading="lazy"
            />
          </div>


        </div>
        <ExploreMoreArrow />
      </div>
    </section>
  );
};

export default Hero;
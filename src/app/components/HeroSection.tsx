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
      className={`relative overflow-hidden bg-[#FAF0DC] max-h-screen min-h-[86vh] lg:min-h-[91vh] flex items-center pb-10 lg:pb-0`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-12">
          {/* Hero Text */}
          <img  className='absolute z-1 opacity-15 -rotate-30 lg:left-30 left-15 lg:w-[10%] w-[17%] lg:top-10 top-65' src="/assets/pawprint.png" alt="" />
          <img  className='absolute z-1 opacity-15 -rotate-30 lg:left-13 left-7 lg:w-[10%] w-[17%] lg:top-60 top-85' src="/assets/pawprint.png" alt="" />
          <div className=" z-3 flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="rounded-3xl p-8 lg:p-12">
              <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 leading-12 lg:leading-18">
                Pet Care{" "}
                <span>Essentials</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-3">
                For your Furry Friend
              </h2>
              <p className="text-gray-600 text-md sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-4">
                Quality products and services for your beloved pets. Everything your pet needs in one place.
              </p>
              
              {/* CTA Button */}
              <ClickSpark sparkColor="#fff" sparkSize={8} sparkRadius={12} sparkCount={6} duration={400}>
                <button className="relative bg-gray-900 text-white px-5 py-3 font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Shop Now
                </button>
              </ClickSpark>
            </div>
          </div>

          {/* Image Section */}
          <div className="z-3 flex-1 relative h-[340px] sm:h-[500px] lg:h-[600px] w-full max-w-lg">
            {/* Background decorative element */}
            <div className="absolute inset-0  transform  scale-110"></div>
            
            <div className="absolute top-5 left-8 bg-gray-900 h-[85%] w-[78%] lg:w-[90%] lg:h-[80%] lg:left-2 rounded-full"></div>

            {/* Main image */}
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <img
                src="/assets/cat2.png"
                alt="Happy cat"
                className="w-[75%] h-[80%] lg:w-full lg:h-full object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Floating elements for visual interest
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#f4b916] rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#d4af37] rounded-full opacity-80 animate-pulse"></div> */}
          </div> 
        </div>
        
        {/* <ExploreMoreArrow /> */}
      </div>
    </section>
  );
};

export default Hero;
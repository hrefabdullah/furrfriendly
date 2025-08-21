import React from "react";
import { Inter } from 'next/font/google';
import ClickSpark from '../utils/ClickSpark';
import ExploreMoreArrow from "./Explore";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const Hero = () => {
  return (
    <section
      className={`relative overflow-hidden bg-[#004ab8] h-max min-h-[100vh] py-12 sm:py-16 lg:py-20 ${inter.className}`}
    >

      <div className="max-w-[90vw] sm:max-w-[85vw] lg:max-w-[80vw] mx-auto px-4 sm:px-0 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Hero Text */}
          <div className="w-full lg:w-1/2 text-center md:text-left mb-10 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-[5vw] lg:text-5xl font-extrabold text-[#ffffff] mb-3 leading-tight relative">
              PET CARE ESSENTIALS
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-[3vw] lg:text-3xl font-bold text-[#ffffff] mb-3 relative">
              FOR YOUR FURRY FRIENDS
            </h2>
            <p className="text-gray-100 text-sm sm:text-base md:text-[1.8vw] lg:text-base max-w-xl mx-auto md:mx-0 mb-5 leading-relaxed">
              Quality products and services for your beloved pets. Everything your pet needs in one place.
            </p>
            {/* CTA Button */}
            <ClickSpark sparkColor="#fff" sparkSize={8} sparkRadius={12} sparkCount={6} duration={400}>
              <div className="md:text-left mt-4 sm:mt-5">
                <button className="relative bg-[#f72630] text-white px-3 py-1 md:text-base sm:px-4 sm:py-2 rounded-md text-sm sm:text-base font-medium hover:bg-red-600 transition shadow-md hover:shadow-lg">
                  Shop Now
                </button>
              </div>
            </ClickSpark>
          </div>

          {/* Image */}
          <div className="w-full sm:w-[60vw] md:w-[75vw] lg:w-1/2 relative h-[47vh] sm:h-[50vh] lg:h-[60vh] mb-3">
            <svg
              className="absolute inset-0 w-[85%] sm:w-[85%] lg:w-[95%] h-full left-4 sm:left-6 lg:left-8 top-[-10px] sm:top-[-15px] rotate-6 z-1"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#f72630"
                d="M66.6,-36.9C75.8,-22.7,65.3,4.5,50.9,28.6C36.5,52.7,18.3,73.7,-0.9,74.2C-20.1,74.9,-40.1,54.8,-48.3,34.2C-56.5,13.9,-52.9,-7.4,-42.9,-22.2C-32.8,-37,-16.4,-45.5,6.2,-49C28.8,-52.6,57.5,-51.2,66.6,-36.9Z"
                transform="translate(100 100)"
              />
            </svg>
            <img
              src="/assets/cat2.png"
              alt="cat"
              className="absolute w-[90%] sm:w-[80%] lg:w-[90%] h-full left-4 sm:left-6 lg:left-8 top-[-10px] sm:top-[-15px] rounded-lg object-contain z-2"
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
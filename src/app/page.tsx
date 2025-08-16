import React from "react";
import Image from "next/image";
import { Inter } from 'next/font/google'
import ClickSpark from './utils/ClickSpark'
import ExploreMoreArrow from "./components/Explore";
import PawPattern from "./components/PawPrint";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const Hero: React.FC = () => {
  return (
    <section className={`overflow-hidden bg-[#004ab8] lg:h-[calc(100vh-80px)] h-[calc(100vh-64px)] py-20 ${inter.className}`}>
      <div className="max-w-[80vw] mx-auto px-0 sm:px-2 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Text */}
          <div className="sm:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-7xl font-extrabold text-[#ffffff] mb-3">
              GROOMING AND SUPPLIES
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff] mb-2">
              AT THE BEST RATES
            </h2>
            <p className="text-gray-100 text-sm md:text-normal max-w-2xl mx-auto lg:mx-0 mb-5">
              Little pets for a big heart. Fulfill all your pet's needs. The final stop for your pets.
            </p>
            {/* CTA Button */}
            <ClickSpark
              sparkColor='#fff'
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}>
              <div className="lg:text-left md:mt-5 mt-2">
                <button className="bg-[#ff1520] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:text-lg font-medium hover:bg-red-600 transition">
                  Shop Now
                </button>
              </div>
            </ClickSpark>
          </div>

          {/* Image */}
          <div className="sm:w-1/2 relative w-full h-[50vh] md:h-150 lg:h-155 mr-6">
            <PawPattern />
            <svg className="absolute inset-0 w-[80%] lg:w-[90%] h-full left-12 top-[-20px] rotate-7" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ff1520" d="M66.6,-36.9C75.8,-22.7,65.3,4.5,50.9,28.6C36.5,52.7,18.3,73.7,-0.9,74.2C-20.1,74.9,-40.1,54.8,-48.3,34.2C-56.5,13.9,-52.9,-7.4,-42.9,-22.2C-32.8,-37,-16.4,-45.5,6.2,-49C28.8,-52.6,57.5,-51.2,66.6,-36.9Z" transform="translate(100 100)" />
            </svg>
            <Image
              src="/assets/cat.png"
              alt="cat"
              className="rounded-lg w-full h-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <ExploreMoreArrow />
      </div>
    </section>
  );
};

export default Hero;
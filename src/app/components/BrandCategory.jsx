'use client';

import Link from "next/link";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function BrandCategory() {
  const brands = [
    { title: "Purina Friskies", img: "https://www.purina.in/sites/default/files/2025-09/FRISKIES%20Seafood%20Sensations%202.5kg_C1N1%20%281%29.png", link: "/store/catFood" },
    { title: "ProDiet", img: "https://www.orangepet.in/cdn/shop/files/ProDiet_Kitten_Ocean_Fish_Milk_Dry_Cat_Food_1.1_Kg_1200x1200_46d6f753-a45c-4f22-a332-eaa1753f8a6d_800x.jpg?v=1757577327", link: "/store/catFood"  },
    { title: "Purrpet", img: "https://supertails.com/cdn/shop/files/PurepetOceanFishAdultCatFood_6kg_08da2ccc-b9e0-41b3-a944-0a21fc12ec2e_1800x1800.png?v=1767676657", link: "/store/catFood"  },
    { title: "Royal Cain", img: "https://ik.imagekit.io/supertails/cdn/shop/products/petandparents_2_600x.png?v=1741765949", link: "/store/catFood"  },
    { title: "Grain Zero", img:"https://m.media-amazon.com/images/I/41IyJX9rPUL._SY300_SX300_QL70_FMwebp_.jpg", link: "/store/catFood"  }
  ];

  const scrollRef = useRef(null);
  const scrollByAmount = 320;

  return (
    <section className="bg-gray-900 py-10 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading + Controls */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Shop by Brand
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: 'smooth' })}
              className="bg-white/90 hover:bg-white text-gray-900 shadow-lg rounded-full p-2"
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: 'smooth' })}
              className="bg-white/90 hover:bg-white text-gray-900 shadow-lg rounded-full p-2"
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Scrollable Row */}
        <div 
          ref={scrollRef}
          className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6"
          style={{ scrollBehavior: "smooth", scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {brands.map((brand, idx) => (
            <Link key={idx} href={brand.link} className="flex-shrink-0 w-45 lg:w-73 snap-start group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={brand.img} 
                  alt={brand.title} 
                  className="w-full h-45 lg:h-75 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="p-2 text-center font-semibold text-gray-800">
                  {brand.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Arrows moved next to heading (right side) */}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

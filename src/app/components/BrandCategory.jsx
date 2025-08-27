'use client';

import Link from "next/link";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function BrandCategory() {
  const brands = [
    { title: "Cat Food", img: "https://www.purina.in/sites/default/files/2023-05/AGAIL_Adult%20with%20Sardine_FRONT_0.jpg", link: "/store/catFood" },
    { title: "Cat Grooming", img: "https://m.media-amazon.com/images/I/71GqwnKD4bL._UF1000,1000_QL80_.jpg", link: "/store/catGrooming" },
    { title: "Cat Toys", img: "https://supertails.com/cdn/shop/products/Frame10889-627733_600x.png?v=1696511732", link: "/store/catToys" },
    { title: "Dog Food", img: "https://headsupfortails.com/cdn/shop/files/8906002482832_325256e8-336f-4804-a01c-8e4351d124b7.jpg?v=1751632444", link: "/store/dogFood" },
    { title: "Dog Toys", img: "https://www.petsense.com/cdn/shop/files/1921400_8_3000x.jpg?v=1690480086", link: "/store/dogToys" },
    { title: "Dog Grooming", img: "https://www.papapawsome.com/cdn/shop/products/tinywow_CHOOSEYOURKIT-01_19581484.webp?v=1681293203&width=1445", link: "/store/dogGrooming" },
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

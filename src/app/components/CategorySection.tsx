'use client';

import Link from "next/link";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CategorySection() {
  const categories = [
    { 
      title: "Cat Food", 
      img: "https://www.purina.in/sites/default/files/2025-09/FRISKIES%20Seafood%20Sensations%202.5kg_C1N1%20%281%29.png", 
      alt: "Cat Food", 
      bg: "from-red-100 to-red-200", 
      link: "/store/catFood",
      description: "Premium nutrition for your feline friend"
    },
    { 
      title: "Cat Grooming", 
      img: "https://m.media-amazon.com/images/I/71GqwnKD4bL._UF1000,1000_QL80_.jpg", 
      alt: "Cat Grooming", 
      bg: "from-purple-100 to-purple-200", 
      link: "/store/catGrooming",
      description: "Keep your cat clean and healthy"
    },
    { 
      title: "Cat Toys", 
      img: "https://supertails.com/cdn/shop/products/Frame10889-627733_600x.png?v=1696511732", 
      alt: "Cat Toys", 
      bg: "from-blue-100 to-blue-200", 
      link: "/store/catToys",
      description: "Entertainment and exercise for cats"
    },
    { 
      title: "Dog Food", 
      img: "https://headsupfortails.com/cdn/shop/files/8906002482832_325256e8-336f-4804-a01c-8e4351d124b7.jpg?v=1751632444", 
      alt: "Dog Food", 
      bg: "from-green-100 to-green-200", 
      link: "/store/dogFood",
      description: "Nutritious meals for your canine companion"
    },
    { 
      title: "Dog Toys", 
      img: "https://www.petsense.com/cdn/shop/files/1921400_8_3000x.jpg?v=1690480086", 
      alt: "Dog Toys", 
      bg: "from-yellow-100 to-yellow-200", 
      link: "/store/dogToys",
      description: "Fun and engaging toys for dogs"
    },
    { 
      title: "Dog Grooming", 
      img: "https://www.papapawsome.com/cdn/shop/products/tinywow_CHOOSEYOURKIT-01_19581484.webp?v=1681293203&width=1445", 
      alt: "Dog Grooming", 
      link: "/store/dogGrooming",
      bg: "from-indigo-100 to-indigo-200",
      description: "Professional grooming essentials"
    },
  ];

  // Ensure a 3x3 grid (9 items) by padding with first itemscategorie];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollByAmount = 320;

  return (
    <section className="lg:h-[130vh] py-15 bg-white" aria-label="category">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4 lg:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-gray-900">Top</span> Categories
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mb-2">
            Explore our comprehensive range of pet products organized by category
          </p>
        </div>

        {/* 3x3 Grid fixed to viewport height */}
        <div className="grid  lg:grid-cols-3 grid-cols-3 grid-rows-2 gap-3 sm:gap-4 lg:gap-6 flex-1 min-h-0">
          {categories.map((cat, index) => (
            <Link 
              href={cat.link} 
              key={`${cat.title}-grid-${index}`} 
              className="group"
            >
              <div className="bg-[#FAF0DC] rounded-xl shadow-lg overflow-hidden h-[95%] lg:h-[100%] lg:w-[90%] flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.alt}
                    className="w-full h-full object-cover object-[10%_50%] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="px-3 py-2 sm:p-3 flex items-center justify-center">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 text-center">
                    {cat.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
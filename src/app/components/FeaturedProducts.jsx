"use client";

import React from 'react';
import Link from 'next/link';
import { catFood } from '../data/catFood';
import { dogFood } from '../data/dogFood';
import { catToys } from '../data/catToys';
import { dogToys } from '../data/dogToys';
import { catGrooming } from '../data/catGrooming';
import { dogGrooming } from '../data/dogGrooming';

// Get featured products (highest rated products from each category)
const getFeaturedProducts = () => {
  const allProducts = [
    ...catFood,
    ...dogFood,
    ...catToys,
    ...dogToys,
    ...catGrooming,
    ...dogGrooming
  ];
  
  // Sort by rating and get top 8
  return allProducts
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);
};

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular pet essentials, carefully selected for quality and customer satisfaction
          </p>
        </div>

        {/* Products - single row scrollable */}
        <div className="-mx-4 px-4" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div 
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProducts.map((product, idx) => (
              <Link 
                href={`/product/${product.id}`} 
                key={`${product.id}-${idx}`}
                className="group flex-shrink-0 snap-start w-64 sm:w-72"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full">
                  {/* Product Image */}
                  <div className="relative h-56 sm:h-60 bg-[#FAF0DC] overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Hover Overlay - neutral */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-5 sm:p-6 flex flex-col">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{product.brand}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                    </div>
                    
                    {/* Price */}
                    <div className="mt-auto">
                      { product.discountPrice ? (
                        <div className="flex items-center">
                          <span className="text-xl sm:text-2xl font-bold text-gray-900">${product.discountPrice}</span>
                          <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                          <span className="ml-2 px-2 py-1 bg-[#FAF0DC] text-gray-900 text-xs font-medium rounded-full">
                            SALE
                          </span>
                        </div>
                      ) : (
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">${product.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link 
            href="/store" 
            className="inline-block bg-gray-900 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
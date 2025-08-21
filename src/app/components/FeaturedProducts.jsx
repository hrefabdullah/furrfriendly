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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#E53E3E]">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our most popular pet essentials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link 
              href={`/product/${product.id}`} 
              key={product.id}
              className="group"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden aspect-square flex items-center justify-center p-4 mb-4 transition group-hover:shadow-md">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="max-h-48 w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#E53E3E] transition">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.brand}</p>
              <div className="mt-2 flex items-center">
                {/* Rating stars */}
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
              <div className="mt-2">
                {(product.discountedPrice ?? product.discountPrice) ? (
                  <div className="flex items-center">
                    <span className="font-bold text-[#E53E3E]">${product.discountedPrice ?? product.discountPrice}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                  </div>
                ) : (
                  <span className="font-bold text-[#E53E3E]">${product.price}</span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/store" 
            className="inline-block bg-[#2B6CB0] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
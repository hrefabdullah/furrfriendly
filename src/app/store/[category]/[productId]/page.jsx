"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { catFood } from "@/app/data/catFood";
// import { dogFood } from "@/app/data/dogFood";
// Import other data files if needed

const dataMap = {
  catFood,
  // dogFood,
  // catGrooming,
  // dogGrooming,
  // dogToys,
  // catToys,
};
  
const ProductPage = () => {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category;
  const productId = Array.isArray(params.productId) ? params.productId[0] : params.productId;
  const [quantity, setQuantity] = useState(1);
  
  const products = dataMap[category] || [];
  
  // Find product by name (use a slugified version in URL ideally)
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-xl text-gray-700">Product not found.</h2>
      </div>
    );
  }

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= (product.stock || 10)) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <a href="/" className="hover:text-gray-800">Home</a>
          <span className="mx-2">/</span>
          <a href="/store" className="hover:text-gray-800">Store</a>
          <span className="mx-2">/</span>
          <a href={`/store/${category}`} className="hover:text-gray-800 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Product Images */}
            <div className="lg:w-1/2 p-6">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 transition-shadow duration-300">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                {(product.discountedPrice ?? product.discountPrice) && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SALE
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 p-8 flex flex-col">
              <div className="flex items-center mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {product.brand}
                </span>
                <span className="bg-blue-100 text-gray-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded-full capitalize">
                  {product.category}
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded-full capitalize">
                  {product.age}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < (product.rating || 0) ? "text-yellow-400" : "text-gray-300"}`} 
                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">0 reviews</span>
              </div>
              
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-gray-900">₹{(product.discountedPrice ?? product.discountPrice) || product.price}</span>
                {(product.discountedPrice ?? product.discountPrice) && (
                  <span className="line-through text-gray-400 ml-3">₹{product.price}</span>
                )}
                {(product.discountedPrice ?? product.discountPrice) && (
                  <span className="ml-3 text-green-600 font-medium">
                    {Math.round(((product.price - (product.discountedPrice ?? product.discountPrice)) / product.price) * 100)}% OFF
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 mb-6">{product.description || "No description available."}</p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Availability:</p>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}></div>
                  <span className={`${product.stock > 0 ? "text-green-700" : "text-red-700"} font-medium`}>
                    {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
                  </span>
                </div>
              </div>
              
              {/* <div className="flex items-center mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 text-gray-600 hover:text-red-500 disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 text-gray-600 hover:text-red-500 disabled:opacity-50"
                    disabled={quantity >= (product.stock || 10)}
                  >
                    +
                  </button>
                </div>
              </div> */}
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-gray-900 hover:bg-red-700 text-white py-3 px-6 rounded-md font-medium transition duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Contact us
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-md transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

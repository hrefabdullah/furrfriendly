"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { catFood } from "../data/catFood";
import { dogFood } from "../data/dogFood";
import { catToys } from "../data/catToys";
import { dogToys } from "../data/dogToys";
import { catGrooming } from "../data/catGrooming";
import { dogGrooming } from "../data/dogGrooming";
import Link from "next/link";

const dataMap = { catFood, dogFood, catToys, dogToys, catGrooming, dogGrooming };

const StorePage = () => {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category;
  const products = dataMap[category] || [];

  // Filter states
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [showFilters, setShowFilters] = useState(false);

  const brands = useMemo(
    () => [...new Set(products.map(p => p.brand || "Unknown"))],
    [products]
  );
  const ages = useMemo(
    () => [...new Set(products.map(p => p.age || "Adult"))],
    [products]
  );
  const types = useMemo(
    () => [...new Set(products.map(p => p.category || "Dry"))],
    [products]
  );

  const filteredProducts = products.filter(p => {
    const withinPrice = p.price <= maxPrice;
    const matchesBrand = selectedBrand ? p.brand === selectedBrand : true;
    const matchesAge = selectedAge ? p.age === selectedAge : true;
    const matchesType = selectedType ? p.category === selectedType : true;
    return withinPrice && matchesBrand && matchesAge && matchesType;
  });

  return (
    <div className="bg-white min-h-screen py-8 px-4 lg:px-50">
      {/* Heading */}
      <div className="mb-5 p-4 rounded">
        <h1 className="text-3xl font-bold text-center capitalize text-gray-900">{category.replace(/([A-Z])/g, " $1")}</h1>
        {/* Mobile Filters Dropdown */}
        <div className="mt-3 lg:hidden">
          <button
            onClick={() => setShowFilters(prev => !prev)}
            className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition w-full"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
          {showFilters && (
            <div className="mt-3 border rounded-lg p-3 bg-white shadow-sm">
              {/* Price */}
              <div className="mb-6">
                <label className="mb-2 block font-medium text-gray-800">
                  Max Price: ₹{maxPrice}
                </label>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="
                  w-full 
                  appearance-none 
                  h-2 
                  rounded-lg 
                  bg-gray-900 
                  accent-gray-900
                "
                />
              </div>

              {/* Brand */}
              <div className="flex flex-col mb-3">
                <label className="mb-1 font-medium text-gray-900">Brand</label>
                <select
                  value={selectedBrand}
                  onChange={e => setSelectedBrand(e.target.value)}
                  className="border rounded px-2 py-2 text-gray-800"
                >
                  <option value="">All</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              {/* Age */}
              <div className="flex flex-col mb-3">
                <label className="mb-1 font-medium text-gray-700">Age</label>
                <select
                  value={selectedAge}
                  onChange={e => setSelectedAge(e.target.value)}
                  className="border rounded px-2 py-2 text-gray-800"
                >
                  <option value="">All</option>
                  {ages.map(age => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
              </div>
              {/* Type */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700">Type</label>
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                  className="border rounded px-2 py-2 text-gray-800"
                >
                  <option value="">All</option>
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Layout */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Sidebar (lg+) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="border rounded-xl p-4 bg-white shadow-sm sticky top-24">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Filters</h2>
            {/* Price */}
            <div className="mb-6">
              <label className="mb-2 block font-medium text-gray-800">Max Price: ₹{maxPrice}</label>
              <input
                type="range"
                min="0"
                max="5000"
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
            {/* Brand */}
            <div className="mb-4">
              <label className="mb-2 block font-medium text-gray-800">Brand</label>
              <select
                value={selectedBrand}
                onChange={e => setSelectedBrand(e.target.value)}
                className="w-full border rounded px-3 py-2 text-gray-800"
              >
                <option value="">All</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            {/* Age */}
            <div className="mb-4">
              <label className="mb-2 block font-medium text-gray-800">Age</label>
              <select
                value={selectedAge}
                onChange={e => setSelectedAge(e.target.value)}
                className="w-full border rounded px-3 py-2 text-gray-800"
              >
                <option value="">All</option>
                {ages.map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
            </div>
            {/* Type */}
            <div>
              <label className="mb-2 block font-medium text-gray-800">Type</label>
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                className="w-full border rounded px-3 py-2 text-gray-800"
              >
                <option value="">All</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </aside>

        {/* Products (main) */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Link
                key={`${product.id}`}
                href={`/store/${category}/${product.id}`}
                className="border rounded-xl p-2 flex flex-col items-center bg-gray-50 hover:shadow-lg transition group"
              >
                <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mt-2 text-gray-900">{product.name}</h3>
                <div className="flex gap-2">
                  <p className="bg-blue-100 h-max w-max lg:px-3 px-2 text-xs lg:text-sm py-0.5 rounded-full  text-gray-600 text-sm">{product.age}</p>
                  <p className="bg-red-100 h-max w-max lg:px-3 px-2 text-xs lg:text-sm py-0.5 rounded-full text-gray-600 text-sm">{product.category}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-gray-900 text-lg font-semibold">₹{(product.discountedPrice ?? product.discountPrice) || product.price}</p>
                  {(product.discountedPrice ?? product.discountPrice) && (
                    <p className="text-gray-500 text-sm line-through">₹{product.price}</p>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                <button className="mt-2 w-full bg-gray-900 text-white py-1 rounded hover:bg-[#1E4E8C] transition">
                  View Details
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;

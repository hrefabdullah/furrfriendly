"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";

const StorePage = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);

  // Fetch products from API
  useEffect(() => {
    setLoading(true);
    fetch(`/api/products?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  // Generate filter options dynamically
  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand || "Unknown"))],
    [products]
  );
  const ages = useMemo(
    () => [...new Set(products.map((p) => p.for || "Adult"))],
    [products]
  );
  const types = useMemo(
    () => [...new Set(products.map((p) => p.type || "Other"))],
    [products]
  );

  // Filter products
  const filteredProducts = products.filter((p) => {
    const withinPrice = p.price <= maxPrice;
    const matchesBrand = selectedBrand ? p.brand === selectedBrand : true;
    const matchesAge = selectedAge ? p.for === selectedAge : true;
    const matchesType = selectedType ? p.type === selectedType : true;
    return withinPrice && matchesBrand && matchesAge && matchesType;
  });

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500">Loading products...</p>
    );

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 lg:px-16">
      <h1 className="text-3xl font-bold text-gray-900 text-center capitalize mb-8">
        {category}
      </h1>

      <div className="lg:flex lg:gap-8">
        {/* Sidebar Filters */}
        <aside className="text-black hidden lg:block lg:w-72 sticky top-24 h-fit bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Price Slider */}
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Max Price: ₹{maxPrice}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Brand */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Brand</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">All</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Age / For */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Age</label>
            <select
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">All</option>
              {ages.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block font-medium mb-1">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">All</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 mt-6 lg:mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product._id}
                href={`/store/${category}/${product._id}`}
                className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center p-3"
              >
                {/* Product Image */}
                <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.img1}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Name */}
                <h3 className="mt-2 font-semibold text-gray-900 text-center">
                  {product.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-1 justify-center">
                  {product.brand && (
                    <span className="bg-blue-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                      {product.brand}
                    </span>
                  )}
                  {product.type && (
                    <span className="bg-purple-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                      {product.type}
                    </span>
                  )}
                  {product.for && (
                    <span className="bg-green-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                      {product.for}
                    </span>
                  )}
                  {product.size && (
                    <span className="bg-yellow-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                      {product.size} kg
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-900 font-semibold text-lg">
                    ₹{product.discountedPrice || product.price}
                  </span>
                  {product.discountedPrice && (
                    <span className="text-gray-500 line-through text-sm">
                      ₹{product.price}
                    </span>
                  )}
                </div>

                {/* Stock */}
                <p
                  className={`mt-1 text-sm font-medium ${
                    product.stock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock ? "In Stock" : "Out of Stock"}
                </p>

                <button className="mt-2 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  View Details
                </button>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No products match the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorePage;

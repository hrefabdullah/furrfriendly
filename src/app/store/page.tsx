"use client";

import React from 'react';
import Link from 'next/link';
import COLORS from '../theme';

// Define category data
const categories = [
  {
    id: 'cat',
    title: 'Cat Products',
    description: 'Everything your feline friend needs',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'catFood', name: 'Food', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'catToys', name: 'Toys', image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'catGrooming', name: 'Grooming', image: 'https://images.unsplash.com/photo-1607242792481-37f27e1d74e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
    ]
  },
  {
    id: 'dog',
    title: 'Dog Products',
    description: 'Premium products for your canine companion',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'dogFood', name: 'Food', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'dogToys', name: 'Toys', image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 'dogGrooming', name: 'Grooming', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
    ]
  }
];

// Special deals data
const deals = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Up to 40% off on selected items',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/store/deals'
  },
  {
    id: 2,
    title: 'New Arrivals',
    description: 'Check out our latest products',
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/store/new'
  }
];

export default function StorePage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#E53E3E] mb-4">Our Pet Store</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of premium pet products for your furry friends
          </p>
        </div>

        {/* Special Deals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2B6CB0] mb-8">Special Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deals.map((deal) => (
              <div 
                key={deal.id}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                  <p className="mb-4">{deal.description}</p>
                  <Link 
                    href={deal.link}
                    className="inline-block bg-[#E53E3E] text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#2B6CB0]">{category.title}</h2>
              <Link 
                href={`/store/${category.subcategories[0].id}`}
                className="text-[#E53E3E] font-medium hover:underline"
              >
                View All
              </Link>
            </div>

            {/* Category Banner */}
            <div className="relative rounded-xl overflow-hidden mb-8 h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-12 transform -translate-y-1/2 z-20 text-white max-w-md">
                <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                <p className="mb-4">{category.description}</p>
              </div>
            </div>

            {/* Subcategories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.subcategories.map((subcategory) => (
                <Link 
                  key={subcategory.id}
                  href={`/store/${subcategory.id}`}
                  className="group"
                >
                  <div className="relative rounded-lg overflow-hidden h-64 mb-3">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition z-10"></div>
                    <img 
                      src={subcategory.image} 
                      alt={subcategory.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <h4 className="text-2xl font-bold text-white">{subcategory.name}</h4>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-block bg-[#E53E3E] text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                      Shop {subcategory.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
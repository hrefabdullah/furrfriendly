"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {catFood} from '../../data/catFood';
import {dogFood} from '../../data/dogFood';
import {catToys} from '../../data/catToys';
import {dogToys} from '../../data/dogToys';
import {catGrooming} from '../../data/catGrooming';
import {dogGrooming} from '../../data/dogGrooming';

// Combine all product data
const allProducts = [
  ...catFood,
  ...dogFood,
  ...catToys,
  ...dogToys,
  ...catGrooming,
  ...dogGrooming
];

type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  discountedPrice?: number;
  discountPrice?: number;
  rating?: number;
  img: string;
  age?: string;
  stock: number;
  description?: string;
};

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (params.id) {
      const productId = Array.isArray(params.id) ? params.id[0] : params.id;
      const foundProduct = allProducts.find(p => p.id.toString() === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category)
        const related = allProducts
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    }
  }, [params.id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const addToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart!`);
    // In a real app, you would add to cart state/context here
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E53E3E]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-[#E53E3E] mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/store" 
          className="px-6 py-3 bg-[#2B6CB0] text-white rounded-md hover:bg-blue-700 transition"
        >
          Return to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-[#E53E3E]">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/store" className="text-gray-500 hover:text-[#E53E3E]">Store</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href={`/store/${product.category}`} className="text-gray-500 hover:text-[#E53E3E]">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-8">
            <img 
              src={product.img} 
              alt={product.name} 
              className="max-h-96 w-auto object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-4">By {product.brand}</p>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">({product.rating}/5)</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              {(product.discountedPrice ?? product.discountPrice) ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-[#E53E3E]">${product.discountedPrice ?? product.discountPrice}</span>
                  <span className="ml-3 text-xl text-gray-500 line-through">${product.price}</span>
                  <span className="ml-3 bg-[#E53E3E] text-white px-2 py-1 rounded-md text-sm">
                    {Math.round((1 - (product.discountedPrice ?? product.discountPrice) / product.price) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-[#E53E3E]">${product.price}</span>
              )}
            </div>

            {/* Availability */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Availability:</p>
              <div className="flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
                {product.stock > 0 && (
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.stock} {product.stock === 1 ? 'item' : 'items'} left)
                  </span>
                )}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button 
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-10 h-10 bg-gray-100 rounded-l-md flex items-center justify-center border border-gray-300"
                  disabled={quantity <= 1}
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-gray-100 rounded-r-md flex items-center justify-center border border-gray-300"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              disabled={product.stock <= 0}
              className={`w-full py-3 px-6 rounded-md font-medium text-white ${
                product.stock > 0 
                  ? 'bg-[#2B6CB0] hover:bg-blue-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              } transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>

            {/* Product Details */}
            <div className="mt-8 border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Brand:</span> {product.brand}</li>
                <li><span className="font-medium">Category:</span> {product.category}</li>
                {product.age && <li><span className="font-medium">Age:</span> {product.age}</li>}
                <li><span className="font-medium">SKU:</span> {product.id}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  href={`/product/${relatedProduct.id}`} 
                  key={relatedProduct.id}
                  className="group"
                >
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center p-4 mb-4 transition group-hover:shadow-md">
                    <img 
                      src={relatedProduct.img} 
                      alt={relatedProduct.name} 
                      className="max-h-48 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#E53E3E] transition">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-600">{relatedProduct.brand}</p>
                  <div className="mt-2">
                    {relatedProduct.discountPrice ? (
                      <div className="flex items-center">
                        <span className="font-bold text-[#E53E3E]">${relatedProduct.discountPrice}</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">${relatedProduct.price}</span>
                      </div>
                    ) : (
                      <span className="font-bold text-[#E53E3E]">${relatedProduct.price}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
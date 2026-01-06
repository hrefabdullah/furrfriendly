"use client";

import React, { useEffect, useState } from "react";
import COLORS from "../theme.js";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartQty, setCartQty] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 🔹 Read cart qty from localStorage
  const updateCartQty = () => {
    const cart: { quantity: number }[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const totalQty = cart.reduce(
      (sum: number, item) => sum + item.quantity,
      0
    );

    setCartQty(totalQty);
  };


  useEffect(() => {
    updateCartQty();

    // 🔹 Listen for cart updates
    window.addEventListener("cart-updated", updateCartQty);
    window.addEventListener("storage", updateCartQty);

    return () => {
      window.removeEventListener("cart-updated", updateCartQty);
      window.removeEventListener("storage", updateCartQty);
    };

    // 🔹 Listen for cart changes across tabs/pages
    window.addEventListener("storage", updateCartQty);
    return () => window.removeEventListener("storage", updateCartQty);
  }, []);

  return (
    <nav className={`bg-white ${inter.className} shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-10 flex justify-between items-center h-16 md:h-20">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight">
          <Link href="/" className="text-gray-900">
            OnlyPets.in
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-gray-600 font-medium">
          {["Home", "About", "Store", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-gray-900 transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center space-x-6">

          {/* Cart Icon */}
          <Link href="/checkout" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 hover:text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            {/* Cart Badge */}
            {cartQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartQty}
              </span>
            )}
          </Link>

          {/* Shop Button */}
          <Link
            href="/store"
            className="px-5 py-2.5 rounded-lg bg-gray-800 text-white font-medium hover:scale-105 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">

          {/* Mobile Cart */}
          <Link href="/checkout" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              />
            </svg>
            {cartQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartQty}
              </span>
            )}
          </Link>

          <button onClick={toggleMenu} className="bg-gray-800 rounded-xl p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/store"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/store"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 block text-center bg-gray-900 text-white py-2 rounded-lg"
              >
                Shop Now
              </Link>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;

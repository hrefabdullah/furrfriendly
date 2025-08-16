"use client";
import React, { useState } from "react";
import COLORS from "../theme.js";
import { Inter } from 'next/font/google'
import Link from "next/link.js";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-[#fff] ${inter.className} shadow-md sticky top-0 z-50 backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <div className={`text-2xl font-extrabold ${COLORS.textPrimary} tracking-tight`}>
          <span className="text-red-500 hover:text-red-600 cursor-pointer">FurrFriendly</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex space-x-8 ${COLORS.textSecondary} font-medium`}>
          <li>
            <Link
              href="/"
              className={`hover:${COLORS.textPrimary} transition-colors duration-200 relative group`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${COLORS.bgPrimary} group-hover:w-full transition-all duration-300`}></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:${COLORS.textPrimary} transition-colors duration-200 relative group`}
            >
              About
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${COLORS.bgPrimary} group-hover:w-full transition-all duration-300`}></span>
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`hover:${COLORS.textPrimary} transition-colors duration-200 relative group`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${COLORS.bgPrimary} group-hover:w-full transition-all duration-300`}></span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:${COLORS.textPrimary} transition-colors duration-200 relative group`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${COLORS.bgPrimary} group-hover:w-full transition-all duration-300`}></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${COLORS.textSecondary} p-2`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <a
            href="#"
            className={`px-5 py-2.5 rounded-lg ${COLORS.bgPrimary} text-white font-medium hover:${COLORS.bgPrimaryDark} transition-all duration-200 transform hover:scale-105`}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FEF7EC] px-4 pt-4 pb-6">
          <ul className={`flex flex-col space-y-4 ${COLORS.textSecondary} font-medium`}>
            <li>
              <a
                href="/"
                className={`block py-2 hover:${COLORS.textPrimary} transition-colors duration-200`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`block py-2 hover:${COLORS.textPrimary} transition-colors duration-200`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={`block py-2 hover:${COLORS.textPrimary} transition-colors duration-200`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block py-2 hover:${COLORS.textPrimary} transition-colors duration-200`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-5 py-2.5 rounded-lg ${COLORS.bgPrimary} text-white font-medium hover:${COLORS.bgPrimaryDark} transition-all duration-200 text-center`}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
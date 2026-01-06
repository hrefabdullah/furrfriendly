"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const ProductPage = () => {
  const { category, productId } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);

  /* ---------------- FETCH PRODUCT ---------------- */
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${productId}`);

        if (!res.ok) {
          throw new Error("Product not found");
        }

        const data = await res.json();
        setProduct(data);
        setActiveImage(data.img1); // default image
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [productId]);

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item) => item._id === product._id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        img1: product.img1,
        quantity,
        category,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
    window.dispatchEvent(new Event("cart-updated"));
  };

  const handleBuyNow = () => {
    addToCart();
    router.push("/checkout");
  };

  /* ---------------- STATES ---------------- */
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">

          {/* IMAGE GALLERY */}
          <div className="lg:w-1/2 p-6">
            <div className="flex flex-col gap-4">

              {/* Main Image */}
              <div className="border rounded-lg overflow-hidden">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-[400px] object-contain bg-white"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {[product.img1, product.img2, product.img3]
                  .filter(Boolean)
                  .map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`border rounded-lg p-1 ${activeImage === img
                          ? "border-gray-900"
                          : "border-gray-200"
                        }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-20 h-20 object-contain"
                      />
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="lg:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>

            <p className="text-2xl font-semibold text-gray-700 mb-4">
              ₹{product.price}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.brand && (
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  Brand: {product.brand}
                </span>
              )}
              {product.type && (
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  Type: {product.type}
                </span>
              )}
              {product.for && (
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  For: {product.for}
                </span>
              )}
              {product.size && (
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  Size: {product.size} kg
                </span>
              )}
            </div>


            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            {!product.stock && (
              <p className="text-red-600 mb-4">Out of stock</p>
            )}

            <div className="flex gap-4">
              <button
                onClick={addToCart}
                disabled={!product.stock}
                className="flex-1 bg-gray-900 text-white py-3 rounded-md disabled:opacity-50"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                disabled={!product.stock}
                className="flex-1 bg-green-600 text-white py-3 rounded-md disabled:opacity-50"
              >
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed top-6 right-6 bg-white shadow-xl p-4 rounded-lg">
          ✅ Added to cart
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductPage;

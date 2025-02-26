import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assests/img1.png";
import img2 from "../../assests/img2.png";
import img3 from "../../assests/img3.png";
import logo from "../../assests/logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHome, FaShoppingCart, FaSignOutAlt, FaStore, FaPhone } from 'react-icons/fa'; // Updated imports

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bannerImages = [img1, img2, img3];
  const PRODUCTS_PER_ROW = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/product/all", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (err) {
        setError(err.message);
        toast.error(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (filter === "available") return product.available;
    if (filter === "discount") return product.discount > 0;
    return true;
  });

  const rows = [];
  for (let i = 0; i < filteredProducts.length; i += PRODUCTS_PER_ROW) {
    rows.push(filteredProducts.slice(i, i + PRODUCTS_PER_ROW));
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3001/logout", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.redirectUrl;
        toast.success("Logged out successfully!");
      } else {
        throw new Error("Failed to log out");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch(`http://localhost:3001/user/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ productId: product._id }),
      });

      if (response.ok) {
        const message = await response.text();
        toast.success(message);
      } else {
        const error = await response.text();
        toast.error(`Failed to add to cart: ${error}`);
      }
    } catch (err) {
      toast.error("An error occurred while adding to the cart.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />

      {/* Header */}
      <header className="w-full h-16 flex justify-between items-center py-4 px-8 bg-gradient-to-r from-teal-500 to-cyan-600 shadow-md">
        <motion.div
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={logo}
            alt="RK Shop Logo"
            className="h-10 w-auto"
          />
        </motion.div>
        <nav className="flex space-x-6">
          <a href="/" className="text-white text-base hover:underline">
            <FaHome className="inline-block mr-2" /> 
          </a>
          <a href="/shop" className="text-white text-base font-semibold underline">
            <FaStore className="inline-block mr-2" /> 
          </a>
          <a href="/contact" className="text-white text-base hover:underline">
            <FaPhone className="inline-block mr-2" /> 
          </a>
          <a
            href="/cart"
            className="text-white text-base hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/cart";
            }}
          >
            <FaShoppingCart className="inline-block mr-2" /> Cart
          </a>
          <button
            onClick={handleLogout}
            className="text-white text-base hover:underline"
          >
            <FaSignOutAlt className="inline-block mr-2" /> LogOut
          </button>
        </nav>
      </header>

      {/* Banner Section */}
      <div
        className="relative h-72 mt-4 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImages[currentImageIndex]})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Right to Fashion Sale</h1>
          <p className="text-xl mt-4">50-80% Off on Top Brands</p>
          <button className="mt-6 px-6 py-2 bg-white text-teal-600 font-medium rounded-full hover:bg-gray-200">
            Shop Now
          </button>
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full shadow-md"
          onClick={handlePreviousImage}
        >
          &#8592;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full shadow-md"
          onClick={handleNextImage}
        >
          &#8594;
        </button>
      </div>

      {/* Shop Section */}
      <div className="px-10 lg:px-20 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Explore Our Collection</h1>
        </div>

        {/* Loading State */}
        {loading && <p>Loading products...</p>}

        {/* Error State */}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* Products Display */}
        {!loading && !error && (
          <div className="space-y-8">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="relative">
                <div className="flex space-x-4 overflow-x-auto no-scrollbar">
                  {row.map((product) => (
                    <motion.div
                      key={product._id}
                      className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 min-w-[250px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="h-60 bg-gray-100 flex items-center justify-center">
                        {product.image ? (
                          <img
                            src={`data:image/png;base64,${product.image}`}
                            alt={product.name}
                            className="h-full object-contain"
                          />
                        ) : (
                          <p className="text-gray-800 font-bold text-2xl">Image</p>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {product.name}
                        </h3>
                        <div className="flex justify-between items-center mt-4">
                          <div className="text-lg font-bold text-teal-600">
                            Rs : {product.discount > 0
                              ? (product.price - product.discount).toFixed(2)
                              : product.price.toFixed(2)}
                          </div>
                          {product.discount > 0 && (
                            <div className="line-through text-gray-500 text-sm">
                              Rs : {product.price.toFixed(2)}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="mt-4 w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;

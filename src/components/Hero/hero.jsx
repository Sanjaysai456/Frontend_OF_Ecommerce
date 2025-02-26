import React from "react";
import { motion } from "framer-motion";
import Head from "../../assests/headphones.jpeg";
import Mobile from "../../assests/mobilesam.jpg";
import boy from "../../assests/boy.png";
import girl from "../../assests/girl.png"
import Foot from "../footer"
import logo from "../../assests/logo.png"

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 flex flex-col">
      {/* Header */}
      <header className="w-full h-16 flex justify-between items-center py-6 px-8 bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg">
  <motion.div 
    className="text-xl font-extrabold text-white" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  >
    <img 
      src={logo} 
      alt="RK Shop Logo" 
      className="h-10 w-auto" // Adjust the size here
    />
  </motion.div>
  <motion.nav 
    className="flex space-x-8" 
    initial={{ opacity: 0, y: -20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1 }}
  >
   
    <a href="/about" className="text-white mt-2 hover:underline font-medium">
      About
    </a>
    <a href="/contact" className="text-white  mt-2 hover:underline font-medium">
      Contact
    </a>
    <a href="/register" className="px-6 py-2 bg-white text-teal-500 rounded-lg shadow-md hover:bg-teal-600 hover:text-white font-medium">
      Register
    </a>
    <a href="/login" className="px-6 py-2 bg-cyan-100 text-teal-600 border border-white rounded-lg hover:bg-cyan-600 hover:text-white font-medium">
      Login
    </a>
  </motion.nav>
</header>



      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16 lg:py-24">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Explore <span className="text-teal-600">US</span>
          </h1>
          <motion.p 
            className="mt-4 text-lg text-gray-600" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            Your one-stop destination for high-quality products at unbeatable prices. Shop smarter with  Us today!
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="/register"
              className="px-8 py-3 bg-teal-600 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-teal-700"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Shop Now
            </motion.a>
            <motion.a
              href="/about"
              className="px-8 py-3 bg-white teal-blue-600 border border-teal-600 font-medium text-lg rounded-lg shadow-lg hover:bg-teal-600 hover:text-white"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/2 flex items-center justify-center relative mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="grid grid-cols-2 gap-6" 
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 1.2 }}
          >
            <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src={Head}
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src={Mobile}
                alt="Product 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src={boy}
                alt="Product 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src={girl}
                alt="Product 4"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <motion.div 
        className="w-full bg-white py-12 px-8 lg:px-20 flex flex-wrap items-center justify-around shadow-lg rounded-t-3xl" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-teal-600">50K+</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-teal-600">20K+</h2>
          <p className="text-gray-600">Products Sold</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-teal-600">1K+</h2>
          <p className="text-gray-600">Brands Available</p>
        </div>
      </motion.div>
      <Foot/>

      {/* Footer Section */}
     
    </div>
  );
};

export default HeroSection;

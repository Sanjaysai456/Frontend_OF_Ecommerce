import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-teal-600 text-white py-12 px-8 lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-wrap justify-between items-start lg:items-center">
        {/* Logo and Description */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold">RightToFashion</span>
          </div>
          <p className="text-gray-200">
            Your trusted shopping partner for quality and value.
          </p>
        </div>

        {/* Location */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="font-bold text-lg mb-4">Location</h3>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <p>London Eye, London UK</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="font-bold text-lg mb-4">Contact Information</h3>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" />
            <p>088-777-666-85</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <p>contact@vegan.com</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="font-bold text-lg mb-4">Navigation Links</h3>
          <ul>
            <li className="mb-2 hover:text-gray-300"><a href="/login">Home</a></li>
           
            <li className="mb-2 hover:text-gray-300"><a href="/about">About Us</a></li>
            
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-start lg:items-center mt-12">
        {/* Quick Links */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-gray-300"><a href="/contact">Contact Us</a></li>
            <li className="mb-2 hover:text-gray-300"><a href="#faqs">FAQs</a></li>
            <li className="mb-2 hover:text-gray-300"><a href="#booking">Booking</a></li>
            <li className="mb-2 hover:text-gray-300"><a href="#pages">Pages</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="font-bold text-lg mb-4">Services Links</h3>
          <ul>
            <li className="mb-2 hover:text-gray-300"><a href="#home">Home</a></li>
            <li className="mb-2 hover:text-gray-300"><a href="#contact">Contact</a></li>
            <li className="mb-2 hover:text-gray-300"><a href="#blog">Blog</a></li>
            <li className="mb-2 hover:text-gray-300"><a href="#404">404</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0 flex items-center justify-around lg:justify-start lg:space-x-4">
          <a href="#" className="text-gray-300 hover:text-white"><FaFacebookF /></a>
          <a href="#" className="text-gray-300 hover:text-white"><FaTwitter /></a>
          <a href="#" className="text-gray-300 hover:text-white"><FaYoutube /></a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-300">
        © {new Date().getFullYear()} RK SHOP. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;

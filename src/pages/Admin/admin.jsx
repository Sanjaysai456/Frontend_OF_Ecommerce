import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    discount: "",
    bgcolor: "#ffffff",
    panelcolor: "#ffffff",
    textcolor: "#000000",
  });
  const [image, setImage] = useState(null); // State for file input

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to send multipart data
    const data = new FormData();
    data.append("image", image);
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:3001/product/create", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Show success message
        navigate("/adminpanel"); // Redirect to admin panel
      } else {
        alert(result.message || "Error creating product.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col">
      {/* Header */}
      <header className="w-full h-16 flex justify-between items-center py-6 px-8 bg-white shadow-lg">
        <motion.div
          className="text-xl font-extrabold text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Admin Panel
        </motion.div>
        <motion.nav
          className="flex space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="/" className="text-gray-700 hover:text-blue-700 font-medium">
            Home
          </a>
          <a href="/products" className="text-gray-700 hover:text-blue-700 font-medium">
            Products
          </a>
          <a href="/cart" className="text-gray-700 hover:text-blue-700 font-medium">
            Cart
          </a>
          <a href="/account" className="text-gray-700 hover:text-blue-700 font-medium">
            Account
          </a>
        </motion.nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-start px-8 lg:px-20 py-12 lg:py-16">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-6">
          <nav className="space-y-4">
            <a href="#all-products" className="block px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200">
              All Products
            </a>
            <a href="#create-product" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
              Create New Product
            </a>
          </nav>
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-6 ml-0 lg:ml-6 mt-6 lg:mt-0">
          <h1 className="text-2xl font-extrabold text-blue-600">Create New Product</h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <h2 className="text-lg font-bold text-gray-800">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-gray-600 font-medium">Product Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="block w-full border border-gray-300 rounded-lg mt-2 p-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full border border-gray-300 rounded-lg mt-2 p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Product Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="block w-full border border-gray-300 rounded-lg mt-2 p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter product price"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Discount Price</label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  className="block w-full border border-gray-300 rounded-lg mt-2 p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter discount price"
                />
              </div>
            </div>

            <h2 className="text-lg font-bold text-gray-800 mt-8">Panel Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <label className="block text-gray-600 font-medium">Background Color</label>
                <input
                  type="color"
                  name="bgcolor"
                  value={formData.bgcolor}
                  onChange={handleInputChange}
                  className="block w-full h-10 border border-gray-300 rounded-lg mt-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Panel Color</label>
                <input
                  type="color"
                  name="panelcolor"
                  value={formData.panelcolor}
                  onChange={handleInputChange}
                  className="block w-full h-10 border border-gray-300 rounded-lg mt-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Text Color</label>
                <input
                  type="color"
                  name="textcolor"
                  value={formData.textcolor}
                  onChange={handleInputChange}
                  className="block w-full h-10 border border-gray-300 rounded-lg mt-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

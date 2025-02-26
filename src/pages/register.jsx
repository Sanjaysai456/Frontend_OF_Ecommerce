import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // React Router hook for navigation

  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/user/register",
        {
          fullname,
          email,
          password,
        },
        { withCredentials: true } // Allow cookies
      );
  
     
      setTimeout(() => {
        navigate("/shop"); // Redirect to /shop after successful registration
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data || "Registration failed. Please try again.");
      console.error("Error during registration:", error.response || error.message);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-tal-100 to-teal-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-extrabold text-teal-600 text-center mb-6">
          Create an Account
        </h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block h-0 text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="John Doe"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 shadow-lg"
          >
            Register
          </button>
          {message && <p className="text-center text-green-500 mt-4">{message}</p>}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-teal-600 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

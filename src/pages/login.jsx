import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        {
          email,
          password,
        },
        { withCredentials: true } // Allow cookies
      );
  
     
      setTimeout(() => {
        navigate("/shop"); // Redirect to /shop after successful login
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data || "Login failed. Please try again.");
      console.error("Error during login:", error.response || error.message);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-extrabold teal-blue-600 text-center mb-6">
          Welcome Back
        </h1>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
          {message && <p className="text-center text-red-500 mt-4">{message}</p>}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-teal-600 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

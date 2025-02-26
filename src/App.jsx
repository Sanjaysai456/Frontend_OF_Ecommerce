import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/Hero/hero"
import Register from "./pages/register";
import Login from "./pages/login";  
import './App.css'
import Shop from "./pages/shop/shop"
import Admin from "./pages/Admin/admin"
import Cart from "./pages/cart/cart"
import About from "./pages/about/About"
import { Contact } from "./pages/contact/Contact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter> {/* Ensure BrowserRouter wraps Routes */}
      <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
        
        <Route path="/" element={<HeroSection />} />
        <Route path="/adminpanel" element={<Admin />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

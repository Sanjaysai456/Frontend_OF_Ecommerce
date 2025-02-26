import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Headset, Award } from "lucide-react";
import logo from "../../assests/logo.png";
import Footer from "../../components/footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 flex flex-col">
      {/* Header */}
      <header className="w-full h-20 flex justify-between items-center px-8 bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg">
        <motion.div 
          className="flex items-center space-x-4" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="ShopSmart Logo" className="h-12 w-auto" />
          <h1 className="text-2xl font-extrabold text-white"></h1>
        </motion.div>
        <motion.nav 
          className="flex space-x-6" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <a href="/login" className="text-white mt-2 hover:underline">Shop</a>
          <a href="/about" className="text-white mt-2 hover:underline">About</a>
          <a href="/contact" className="text-white mt-2 hover:underline">Contact</a>
          <a href="/register" className="px-4 py-2 bg-white text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white font-medium">Register</a>
          <a href="/login" className="px-4 py-2 bg-cyan-100 text-teal-600 border border-white rounded-lg hover:bg-cyan-600 hover:text-white font-medium">Login</a>
        </motion.nav>
      </header>

      {/* About Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Redefining your online shopping experience with style and security.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShoppingCart className="h-14 w-14 text-teal-500" />,
                title: "Wide Range",
                description: "Find everything you need, all in one place.",
              },
              {
                icon: <ShieldCheck className="h-14 w-14 text-cyan-600" />,
                title: "Secure Payments",
                description: "Your data and transactions are 100% protected.",
              },
              {
                icon: <Headset className="h-14 w-14 text-teal-600" />,
                title: "24/7 Support",
                description: "Our team is here to assist you anytime.",
              },
              {
                icon: <Award className="h-14 w-14 text-yellow-500" />,
                title: "Quality Products",
                description: "We guarantee top-quality products every time.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
                className="bg-gradient-to-r from-white via-teal-50 to-cyan-50 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-white to-teal-50 p-8 rounded-lg shadow-lg mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 text-center">
              To revolutionize the online shopping journey by offering an unmatched blend of quality, security, and convenience.
            </p>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

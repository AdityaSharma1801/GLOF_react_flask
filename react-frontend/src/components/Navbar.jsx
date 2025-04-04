import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-blue-700">GLOF Predictor 🌊</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/upload" className="hover:text-blue-500">Upload</Link></li>
        <li><Link to="/visualize" className="hover:text-blue-500">Visualize</Link></li>
        <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
        <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        <li><Link to="/login" className="hover:text-blue-500">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
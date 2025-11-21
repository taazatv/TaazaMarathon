// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Left Logo */}
        <Link to="/" className="logo-left">
          <img src="/marathon.png" alt="MileBlast" className="logo-img" />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/faqs" className="nav-link">FAQs</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/results" className="nav-link">Results</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>

        {/* Right Logo */}
        <div className="logo-right">
          <img src="/logo.webp" alt="MileBlast" className="logo-img" />
        </div>

        {/* Mobile Hamburger */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/faqs" onClick={toggleMenu}>FAQs</Link>
            <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
            <Link to="/results" onClick={toggleMenu}>Results</Link>
            <Link to="/about" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
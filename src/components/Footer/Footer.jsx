// src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaXTwitter, 
  FaYoutube 
} from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">

          {/* Logo & Tagline */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              MARA<span>THON</span> 2025
            </h2>
            <p className="tagline">Run Beyond Limits • New Delhi</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register Now</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><strong>Email:</strong> <a href="mailto:support@mileblast.in">support@mileblast.in</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
            <p><strong>Event Date:</strong> 28 December 2025</p>
          </div>

          {/* Social Icons - NOW WITH REAL ICONS */}
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://instagram.com/mileblastmarathon" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com/mileblastmarathon" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/mileblastindia" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                <FaXTwitter />
              </a>
              <a href="https://youtube.com/@mileblast" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 <strong>Marathon</strong> • Powered by CDLS Technologies Pvt Ltd</p>
          <p>Made with Fire in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
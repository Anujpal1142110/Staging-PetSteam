import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Top wave separator */}
        {/* <div className="w-full h-6 mb-12 relative overflow-hidden">
          <div className="absolute w-full h-full bg-primary-500 opacity-20 rounded-full -top-4 transform scale-x-150"></div>
        </div> */}
        
        {/* Company logo section */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">PET Stream</h2>
          <p className="text-gray-300 max-w-xl text-center mb-6">
            A leading project delivery company providing consulting, sales, and services in beverage, packaging, healthcare, and plastics industries.
          </p>
          <div className="flex space-x-4 mb-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-gray-800 hover:bg-blue-600 transition-all duration-300 p-3 rounded-full text-gray-300 hover:text-white hover:shadow-lg"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-gray-800 hover:bg-blue-400 transition-all duration-300 p-3 rounded-full text-gray-300 hover:text-white hover:shadow-lg"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-gray-800 hover:bg-blue-700 transition-all duration-300 p-3 rounded-full text-gray-300 hover:text-white hover:shadow-lg"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-gray-800 hover:bg-pink-600 transition-all duration-300 p-3 rounded-full text-gray-300 hover:text-white hover:shadow-lg"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Project Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Machine Refurbishment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Annual Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Plant Audit
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Breakdown Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" size={20} />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Office No. 1603A & 1603B, 16th floor, The Iconic Tower, Corenthum,
                  Sector -62, Noida, National Capital Region, India-201309
                </span>
              </li>
              <li className="flex items-center group">
                <FaPhone className="mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" size={20} />
                <a href="tel:+919811206119" className="text-gray-300 group-hover:text-white transition-colors">
                  +91-9811206119
                </a>
              </li>
              <li className="flex items-center group">
                <FaEnvelope className="mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" size={20} />
                <a href="mailto:info@petstream.in" className="text-gray-300 group-hover:text-white transition-colors">
                  info@petstream.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter subscription - New feature */}
        {/* <div className="mt-16 mb-8 bg-gray-800 rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-4 text-center">Stay updated with our latest news and services</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-medium text-white shadow-md hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div> */}

        <hr className="border-gray-700 my-8" />

        {/* Bottom copyright section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} PET Stream Incorporation. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

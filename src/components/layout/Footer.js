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
import logo from '../../assets/images/f_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Company logo section - More compact */}
        <div className="flex flex-col items-center mb-10">
          <img src={logo} alt="PET Stream Logo" className="h-16 mb-3" />
          <p className="text-gray-300 max-w-2xl text-center text-base leading-relaxed">
            A leading project delivery company providing consulting, sales, and services in beverage, packaging, healthcare, and plastics industries.
          </p>
        </div>

        {/* Social media icons - Moved after description */}
        <div className="flex justify-center space-x-4 mb-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-gray-800 hover:bg-blue-600 transition-colors duration-300 p-3 rounded-full text-gray-300 hover:text-white"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="bg-gray-800 hover:bg-blue-400 transition-colors duration-300 p-3 rounded-full text-gray-300 hover:text-white"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-gray-800 hover:bg-blue-700 transition-colors duration-300 p-3 rounded-full text-gray-300 hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-gray-800 hover:bg-pink-600 transition-colors duration-300 p-3 rounded-full text-gray-300 hover:text-white"
          >
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Footer content grid - Reduced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-blue-500 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> About Us
                </Link>
              </li>
              {/* <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Services
                </Link>
              </li> */}
              <li>
                <Link to="/products" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-blue-500 inline-block">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="services/project-design" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Project Consultancy
                </Link>
              </li>
              <li>
                <Link to="services/refurbishment" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Machine Refurbishment
                </Link>
              </li>
              <li>
                <Link to="services/maintenance" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Annual Maintenance
                </Link>
              </li>
              <li>
                <Link to="services/relocation" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Machine Installation & Dis-Assembly
                </Link>
              </li>
                   <li>
                <Link to="services/breakdown" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Breakdown Service
                </Link>
              </li>
                <li>
                <Link to="services/application" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Application Support
                </Link>
              </li>
                <li>
                <Link to="services/training" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Training
                </Link>
              </li>
                    <li>
                <Link to="services/parts" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center text-sm">
                  <span className="mr-2 text-blue-500">›</span> Spare Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-blue-500 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Office No. 1603A & 1603B, 16th floor, The Iconic Tower, Corenthum,
                  Sector -62, Noida, National Capital Region, India-201309
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" size={16} />
                <a href="tel:+919811206119" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  +91-9811206119
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" size={16} />
                <a href="mailto:info@petstream.in" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  info@petstream.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Bottom copyright section - More compact */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-3 md:mb-0">
            &copy; {currentYear} PET Stream Incorporation. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 text-xs transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-blue-400 text-xs transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
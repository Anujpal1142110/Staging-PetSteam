import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Products', path: '/products' },
    { title: 'Contact', path: '/contact' }
  ];

  // Page theme configurations
  const pageThemes = {
    '/': { active: 'Home', color: 'blue' },
    '/about': { active: 'About', color: 'indigo' },
    '/services': { active: 'Services', color: 'blue' },
    '/products': { active: 'Products', color: 'emerald' },
    '/contact': { active: 'Contact', color: 'purple' }
  };

  // Get current page theme
  const currentPath = Object.keys(pageThemes).find(path => 
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
  ) || '/';
  
  const currentTheme = pageThemes[currentPath];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // This ensures your header doesn't block page content
  const headerClass = isScrolled ? 'bg-white shadow-md' : 'bg-gray-50';
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass} py-4`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-white rounded-md shadow-sm p-1 border border-gray-100">
              <img
                src={logo}
                alt="PSI Logo"
                className="h-11"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium text-lg transition-colors duration-300 ${
                  location.pathname === item.path || 
                  (item.path !== '/' && location.pathname.startsWith(item.path))
                    ? `text-${currentTheme.color}-600 font-semibold`
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.title}
                {(location.pathname === item.path || 
                  (item.path !== '/' && location.pathname.startsWith(item.path))) && (
                  <motion.span
                    layoutId="navIndicator"
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-${currentTheme.color}-600`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Get a Quote Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none text-gray-700"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="bg-white shadow-md py-4 px-6 mt-3">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-2 ${
                  location.pathname === item.path || 
                  (item.path !== '/' && location.pathname.startsWith(item.path))
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-800'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-center font-medium shadow-md mt-2"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
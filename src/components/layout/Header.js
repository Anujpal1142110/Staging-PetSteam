import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
=======
import { FaBars, FaTimes } from 'react-icons/fa';
>>>>>>> c354b8e523b602d3590c9fa4d261d0f7a08a7b16
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD
  const [openDropdown, setOpenDropdown] = useState(null);
=======
>>>>>>> c354b8e523b602d3590c9fa4d261d0f7a08a7b16
  const location = useLocation();

  const navItems = [
    { title: 'Home', path: '/' },
<<<<<<< HEAD
    { 
      title: 'About', 
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { title: 'About Us', path: '/about/us' },
        { title: 'About Our Partners', path: '/about/partners' },
        { title: 'About Our Customers', path: '/about/customers' },
        { title: 'How We Work', path: '/about/how-we-work' }
      ]
    },
    { 
      title: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Project Design & Delivery Consultancy', path: '/services/project-design' },
        { title: 'Complete Machine Refurbishment Services & Health Checkup', path: '/services/refurbishment' },
        { title: 'Annual Maintenance Contract & Plant Audit', path: '/services/maintenance' },
        { title: 'Machine Relocation, Installation & Dis-Assembly', path: '/services/relocation' },
        { title: 'Breakdown Support', path: '/services/breakdown' },
        { title: 'Application Support', path: '/services/application' },
        { title: 'Training', path: '/services/training' },
        { title: 'Spare Parts & Consumables', path: '/services/parts' }
      ]
    },
    { 
      title: 'Products', 
      path: '/products',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Injection Molding Machine', path: '/products/injection-molding' },
        { title: 'Beverage Filling Line', path: '/products/beverage-filling' },
        { title: 'PET Preform Mold', path: '/products/pet-preform' },
        { title: 'Lab Equipment', path: '/products/lab-equipment' },
        { title: 'Drying & Dehumidification System', path: '/products/drying-system' },
        { title: 'Caps & Closures Mold', path: '/products/caps-mold' },
        { title: 'Packaging Mold', path: '/products/packaging-mold' },
        { title: 'Liquid Colorants & Additives', path: '/products/colorants' }
      ]
    },
    { 
      title: 'Newsroom', 
      path: '/newsroom',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Products Update', path: '/newsroom/products' },
        { title: 'Company Update', path: '/newsroom/company' },
        { title: 'Training Update', path: '/newsroom/training' },
        { title: 'Recent Projects', path: '/newsroom/projects' },
        { title: 'Industry Information Exchange', path: '/newsroom/industry' }
      ]
    },
    { title: 'Contact', path: '/contact' }
  ];

  // Page theme configurations matching PSI style
  const pageThemes = {
    '/': { active: 'Home', color: 'orange' },
    '/about': { active: 'About', color: 'orange' },
    '/services': { active: 'Services', color: 'orange' },
    '/products': { active: 'Products', color: 'orange' },
    '/newsroom': { active: 'Newsroom', color: 'orange' },
    '/contact': { active: 'Contact', color: 'orange' }
=======
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
>>>>>>> c354b8e523b602d3590c9fa4d261d0f7a08a7b16
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

<<<<<<< HEAD
  const headerClass = isScrolled ? 'bg-white shadow-md' : 'bg-white';

  const handleMouseEnter = (itemTitle) => {
    setOpenDropdown(itemTitle);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass} py-4 border-b border-gray-100`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo with PSI style */}
=======
  // This ensures your header doesn't block page content
  const headerClass = isScrolled ? 'bg-white shadow-md' : 'bg-gray-50';
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass} py-4`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
>>>>>>> c354b8e523b602d3590c9fa4d261d0f7a08a7b16
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

<<<<<<< HEAD
          {/* Desktop Navigation with PSI style */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.path}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.title)}
                onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
              >
                <Link
                  to={item.path}
                  className={`relative font-medium text-lg transition-colors duration-300 flex items-center ${
                    location.pathname === item.path || 
                    (item.path !== '/' && location.pathname.startsWith(item.path))
                      ? 'text-orange-600 font-semibold'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {item.title}
                  {(location.pathname === item.path || 
                    (item.path !== '/' && location.pathname.startsWith(item.path))) && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-600"
                    />
                  )}
                </Link>

                {/* PSI-style Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden"
                  >
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <motion.div
                        key={dropdownItem.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Link
                          to={dropdownItem.path}
                          className="block px-5 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-orange-600 hover:text-white"
                        >
                          {dropdownItem.title}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Get a Quote Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-md font-medium shadow-md transition-all duration-300"
=======
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
>>>>>>> c354b8e523b602d3590c9fa4d261d0f7a08a7b16
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

<<<<<<< HEAD
      {/* Mobile Menu with PSI style */}
=======
      {/* Mobile Menu */}
>>>>>>> c354b8e523b602d3590c9fa4d261d0f7a08a7b16
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
<<<<<<< HEAD
              <div key={item.path}>
                {item.hasDropdown ? (
                  <motion.div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                      className={`w-full flex items-center justify-between py-2 ${
                        location.pathname === item.path || 
                        (item.path !== '/' && location.pathname.startsWith(item.path))
                          ? 'text-orange-600 font-medium'
                          : 'text-gray-800'
                      }`}
                    >
                      {item.title}
                      <motion.div
                        animate={{ rotate: openDropdown === item.title ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown size={14} />
                      </motion.div>
                    </button>
                    
                    {openDropdown === item.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="block py-2 text-sm text-gray-700"
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <Link
                    to={item.path}
                    className={`py-2 ${
                      location.pathname === item.path || 
                      (item.path !== '/' && location.pathname.startsWith(item.path))
                        ? 'text-orange-600 font-medium'
                        : 'text-gray-800'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Get a Quote Button - Mobile */}
            <Link
              to="/contact"
              className="btn bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-md text-center font-medium shadow-md mt-2"
=======
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
>>>>>>> c354b8e523b602d3590c9fa4d261d0f7a08a7b16
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
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { title: 'Home', path: '/' },
    { 
      title: 'About', 
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { title: 'About Us', path: '/about/us' },
        { 
          title: 'About Our Partners', 
          path: '/about/partners',
          hasSubDropdown: true,
          subDropdownItems: [
            { title: 'NETSTAL', path: '/about/partners/netstal' },
            { title: 'GDXL', path: '/about/partners/gdxl' },
            { title: 'ZONWON', path: '/about/partners/zonwon' },
            { title: 'Newamstar', path: '/about/partners/newamstar' },
            { title: 'Corvaglia', path: '/about/partners/corvaglia' },
            { title: 'Glaroform', path: '/about/partners/glaroform' },
            { title: 'Eisbar', path: '/about/partners/eisbar' },
            { title: 'Colorway', path: '/about/partners/colorway' }
          ]
        },
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

  const headerClass = isScrolled ? 'bg-white shadow-md' : 'bg-white';

  // Dropdown handling functions
  const handleMenuItemClick = (itemTitle) => {
    if (openDropdown === itemTitle) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    } else {
      setOpenDropdown(itemTitle);
      setOpenSubDropdown(null);
    }
  };

  const handleSubDropdownClick = (e, itemTitle) => {
    e.stopPropagation(); // Prevent triggering parent dropdown toggle
    if (openSubDropdown === itemTitle) {
      setOpenSubDropdown(null);
    } else {
      setOpenSubDropdown(itemTitle);
    }
  };

  // Auto-close dropdowns when clicking an item
  const handleDropdownItemClick = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  // Added: Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass} py-4 border-b border-gray-100`}>
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
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.path}
                className="relative dropdown-container"
              >
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleMenuItemClick(item.title)}
                    className={`relative font-medium text-lg flex items-center group ${
                      location.pathname === item.path || 
                      (item.path !== '/' && location.pathname.startsWith(item.path))
                        ? 'text-orange-600 font-semibold'
                        : 'text-gray-700'
                    }`}
                  >
                    <span className="group-hover:text-orange-600 transition-colors duration-300">
                      {item.title}
                    </span>
                    <FaChevronDown 
                      size={12} 
                      className={`ml-2 group-hover:text-orange-600 transition-colors duration-300 ${
                        openDropdown === item.title ? 'transform rotate-180' : ''
                      }`}
                    />
                    {(location.pathname === item.path || 
                      (item.path !== '/' && location.pathname.startsWith(item.path))) && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-600"
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative font-medium text-lg flex items-center group ${
                      location.pathname === item.path || 
                      (item.path !== '/' && location.pathname.startsWith(item.path))
                        ? 'text-orange-600 font-semibold'
                        : 'text-gray-700'
                    }`}
                  >
                    <span className="group-hover:text-orange-600 transition-colors duration-300">
                      {item.title}
                    </span>
                    {(location.pathname === item.path || 
                      (item.path !== '/' && location.pathname.startsWith(item.path))) && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-600"
                      />
                    )}
                  </Link>
                )}

                {/* Main Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.title && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-lg z-50 w-72 py-1"
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <div 
                        key={dropdownItem.path}
                        className="relative dropdown-container"
                      >
                        {dropdownItem.hasSubDropdown ? (
                          <button
                            onClick={(e) => handleSubDropdownClick(e, dropdownItem.title)}
                            className={`flex justify-between items-center w-full px-5 py-3 ${
                              openSubDropdown === dropdownItem.title 
                                ? 'bg-orange-600 text-white' 
                                : 'text-gray-700 hover:bg-orange-600 hover:text-white'
                            } transition-all duration-300`}
                          >
                            <span>{dropdownItem.title}</span>
                            <FaChevronDown size={12} className={`ml-2 ${
                              openSubDropdown === dropdownItem.title ? 'transform rotate-180' : ''
                            }`} />
                          </button>
                        ) : (
                          <Link
                            to={dropdownItem.path}
                            onClick={handleDropdownItemClick}
                            className="block w-full px-5 py-3 text-gray-700 hover:bg-orange-600 hover:text-white transition-all duration-300"
                          >
                            {dropdownItem.title}
                          </Link>
                        )}

                        {/* Sub-dropdown Menu */}
                        {dropdownItem.hasSubDropdown && openSubDropdown === dropdownItem.title && (
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-50 w-60 py-1"
                          >
                            {dropdownItem.subDropdownItems.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={handleDropdownItemClick}
                                className="block w-full px-5 py-3 text-gray-700 hover:bg-orange-600 hover:text-white transition-all duration-300"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
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
              <div key={item.path}>
                {item.hasDropdown ? (
                  <motion.div>
                    <button
                      onClick={() => handleMenuItemClick(item.title)}
                      className={`w-full flex items-center justify-between py-2 group ${
                        location.pathname === item.path || 
                        (item.path !== '/' && location.pathname.startsWith(item.path))
                          ? 'text-orange-600 font-medium'
                          : 'text-gray-800'
                      }`}
                    >
                      <span className="group-hover:text-orange-600 transition-colors duration-300">
                        {item.title}
                      </span>
                      <motion.div
                        animate={{ rotate: openDropdown === item.title ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="group-hover:text-orange-600 transition-colors duration-300"
                      >
                        <FaChevronDown size={14} />
                      </motion.div>
                    </button>
                    
                    {/* Mobile Main Dropdown */}
                    {openDropdown === item.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <div key={dropdownItem.path}>
                              {dropdownItem.hasSubDropdown ? (
                                <div>
                                  <button
                                    onClick={(e) => handleSubDropdownClick(e, dropdownItem.title)}
                                    className="w-full flex items-center justify-between py-2 text-sm text-gray-700 hover:text-orange-600 transition-colors duration-300 group"
                                  >
                                    <span className="group-hover:text-orange-600 transition-colors duration-300">
                                      {dropdownItem.title}
                                    </span>
                                    <motion.div
                                      animate={{ rotate: openSubDropdown === dropdownItem.title ? 180 : 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="group-hover:text-orange-600 transition-colors duration-300"
                                    >
                                      <FaChevronDown size={12} />
                                    </motion.div>
                                  </button>
                                  
                                  {/* Mobile Sub Dropdown */}
                                  {openSubDropdown === dropdownItem.title && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="pl-4 pt-2 space-y-2">
                                        {dropdownItem.subDropdownItems.map((subItem) => (
                                          <Link
                                            key={subItem.path}
                                            to={subItem.path}
                                            onClick={handleDropdownItemClick}
                                            className="block py-2 text-xs text-gray-600 hover:text-orange-600 transition-colors duration-300"
                                          >
                                            {subItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  to={dropdownItem.path}
                                  onClick={handleDropdownItemClick}
                                  className="block w-full py-2 text-sm text-gray-700 hover:text-orange-600 transition-colors duration-300"
                                >
                                  {dropdownItem.title}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <Link
                    to={item.path}
                    className={`py-2 block w-full hover:text-orange-600 transition-colors duration-300 ${
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
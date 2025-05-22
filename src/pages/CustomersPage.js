import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CustomersData from '../data/customers';

const CustomersPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  
  // Sort customers by display order
  const sortedCustomers = [...CustomersData].sort((a, b) => a.displayOrder - b.displayOrder);
  
  useEffect(() => {
    // Set visibility after component mounts for animations
    setIsVisible(true);
    
    // Initialize filtered customers
    setFilteredCustomers(sortedCustomers);
  }, []);
  
  // Handle search
  useEffect(() => {
    const results = sortedCustomers.filter(customer =>
      customer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredCustomers(results);
  }, [searchTerm]);
  
  return (
    
      
      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Customers</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                PET Stream Incorporation is proud to work with leading organizations across multiple industries. Discover our valued customers and their success stories.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Search & Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 px-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
                <svg
                  className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* Customers Grid Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredCustomers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredCustomers.map((customer) => (
                  <motion.div
                    key={customer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="h-48 bg-gray-50 flex items-center justify-center p-6">
                      <img
                        src={customer.image}
                        alt={customer.title}
                        className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{customer.title}</h3>
                      <p className="text-gray-600 mb-4 flex-1">{customer.description}</p>
                      <a
                        href={`/Customers/${customer.slug}`}
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 inline-flex items-center"
                      >
                      
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-400 mb-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No customers found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We couldn't find any customers matching your search criteria. Please try different keywords.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
  
  );
};

export default CustomersPage;
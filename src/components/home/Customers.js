import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomersData from '../../data/customers';

const Customers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  
  // Filter featured Customers
  // const featuredCustomers = CustomersData
  //   .filter(customer => customer.isFeatured)
  //   .sort((a, b) => a.displayOrder - b.displayOrder);


  const featuredCustomers = CustomersData
    .filter(customer => customer.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map(customer => ({
        ...customer,
        slug: 'about/customers'
    }));

  useEffect(() => {
    // Set visibility after component mounts for animations
    setIsVisible(true);
    
  }, []);

  // Continuous scrolling effect from left to right
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isPaused) return;
    
    let lastTime = 0;
    const speed = 0.3; // Pixels per millisecond

    const scrollAnimation = (timestamp) => {
      const elapsed = timestamp - lastTime;
      
      if (elapsed > 16) { // Aim for 60fps
        lastTime = timestamp;
        
        // Move the scroll position from left to right
        scrollContainer.scrollLeft += speed * elapsed;
        
        // Reset to beginning when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      
      animationRef.current = requestAnimationFrame(scrollAnimation);
    };
    
    animationRef.current = requestAnimationFrame(scrollAnimation);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isVisible]);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Customers</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Description Text */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-medium text-gray-700">
              PET Stream Incorporation is proud to serve a diverse range of customers across various industries. We're committed to delivering exceptional value and building lasting relationships.
            </h3>
          </div>
        </motion.div>

        {/* Mobile and Small Screens: Continuous Carousel */}
        <div className="md:hidden relative mx-auto">
          {/* Scrolling Container for Mobile */}
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide py-6"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* First set of customers */}
              <div className="flex space-x-4 pr-4">
                {featuredCustomers.map((customer, index) => (
                  <motion.div 
                    key={customer.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-shrink-0 w-44"
                  >
                    <Link to={`/${customer.slug}`} className="block">
                      <div className="h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center p-4">
                        <img 
                          src={customer.image} 
                          alt={customer.title}
                          className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-105"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Duplicate set for seamless infinite scrolling */}
              <div className="flex space-x-4 pr-4">
                {featuredCustomers.map((customer, index) => (
                  <motion.div 
                    key={`dup-${customer.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-shrink-0 w-44"
                  >
                    <Link to={`/${customer.slug}`} className="block">
                      <div className="h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center p-4">
                        <img 
                          src={customer.image} 
                          alt={customer.title}
                          className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-105"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Continuous Carousel */}
        <div className="hidden md:block relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex py-6 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First set of customers */}
            <div className="flex space-x-8 pr-8">
              {featuredCustomers.map((customer, index) => (
                <motion.div 
                  key={customer.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex-shrink-0"
                >
                  <Link to={`/${customer.slug}`} className="block">
                    <div className="h-32 w-56 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center p-6">
                      <img 
                        src={customer.image} 
                        alt={customer.title}
                        className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Duplicate set for seamless infinite scrolling */}
            <div className="flex space-x-8 pr-8">
              {featuredCustomers.map((customer, index) => (
                <motion.div 
                  key={`dup-${customer.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex-shrink-0"
                >
                  <Link to={`/${customer.slug}`} className="block">
                    <div className="h-32 w-56 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center p-6">
                      <img 
                        src={customer.image} 
                        alt={customer.title}
                        className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        {/* <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link 
            to="/about/customers" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-500 hover:shadow-lg group relative overflow-hidden"
          >
            <span className="relative z-10">View All Customers</span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-800 transition-all duration-500 group-hover:h-full -z-0"></span>
          </Link>
        </motion.div> */}


          <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Link
                         to="/about/customers" 
                    className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
                  >
                      <span className="relative z-10">View All Customers</span>
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-800 transition-all duration-300 group-hover:h-full -z-0">→</span>
                    
                    
                  </Link>
                </motion.div>
      </div>
    </section>
  );
};

export default Customers;
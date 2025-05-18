import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PartnersData from '../../data/partners';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  
  // Filter featured Partners
  const featuredPartners = PartnersData
    .filter(service => service.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  useEffect(() => {
    // Set visibility after component mounts for animations
    setIsVisible(true);
  }, []);

  // Continuous scrolling effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isPaused) return;
    
    let lastTime = 0;
    const speed = 0.5; // Pixels per millisecond

    const scrollAnimation = (timestamp) => {
      const elapsed = timestamp - lastTime;
      
      if (elapsed > 16) { // Aim for 60fps
        lastTime = timestamp;
        
        // Move the scroll position
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

  // Manual navigation
  const scrollLeft = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsPaused(true);
    
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const scrollAmount = scrollContainer.clientWidth * 0.8;
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
    
    // Resume auto-scrolling after a delay
    setTimeout(() => setIsPaused(false), 1500);
  };

  const scrollRight = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsPaused(true);
    
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const scrollAmount = scrollContainer.clientWidth * 0.8;
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    // Resume auto-scrolling after a delay
    setTimeout(() => setIsPaused(false), 1500);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Partners</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Description Text - Matching PHP version */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-medium text-gray-700">
              At PET Stream Incorporation, We are about Partnership and collaborations, that's why we scour the globe to find partners who are the best at what they do and share our vision.
            </h3>
          </div>
        </motion.div>

        {/* Mobile and Small Screens: Scrollable Carousel */}
        <div className="md:hidden relative mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10 focus:outline-none"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10 focus:outline-none"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrolling Container for Mobile */}
          <div className="overflow-hidden px-10">
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
              {/* First set of partners */}
              <div className="flex space-x-4 pr-4">
                {featuredPartners.map((partner) => (
                  <motion.div 
                    key={partner.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-44"
                  >
                    <Link to={`/Partners/${partner.slug}`} className="block">
                      <div className="h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4">
                        <img 
                          src={partner.image} 
                          alt={partner.title}
                          className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Duplicate set for seamless infinite scrolling */}
              <div className="flex space-x-4 pr-4">
                {featuredPartners.map((partner) => (
                  <motion.div 
                    key={`dup-${partner.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-44"
                  >
                    <Link to={`/Partners/${partner.slug}`} className="block">
                      <div className="h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4">
                        <img 
                          src={partner.image} 
                          alt={partner.title}
                          className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: 4-Column Grid Layout (similar to PHP version) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredPartners.map((partner) => (
              <motion.div 
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/Partners/${partner.slug}`} className="block">
                  <div className="h-32 p-4 flex items-center justify-center">
                    <img 
                      src={partner.image} 
                      alt={partner.title}
                      className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link 
            to="/Partners" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
          >
            <span className="relative z-10">View All Partners</span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-800 transition-all duration-300 group-hover:h-full -z-0"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
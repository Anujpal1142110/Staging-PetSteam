import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PartnersData from '../../data/partners';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  // Filter and sort featured partners
  const featuredPartners = PartnersData
    .filter(p => p.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  // trigger entry animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // continuous auto-scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    let lastTime = 0;
    const speed = 0.5; // px per ms

    const step = (t) => {
      const delta = t - lastTime;
      if (delta > 16) {
        lastTime = t;
        container.scrollLeft += speed * delta;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused, isVisible]);

  // manual nav
  const scrollLeft = () => {
    cancelAnimationFrame(animationRef.current);
    setIsPaused(true);
    scrollContainerRef.current?.scrollBy({ left: -scrollContainerRef.current.clientWidth * 0.8, behavior: 'smooth' });
    setTimeout(() => setIsPaused(false), 1500);
  };
  const scrollRight = () => {
    cancelAnimationFrame(animationRef.current);
    setIsPaused(true);
    scrollContainerRef.current?.scrollBy({ left: scrollContainerRef.current.clientWidth * 0.8, behavior: 'smooth' });
    setTimeout(() => setIsPaused(false), 1500);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Partners</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-10"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-xl font-medium text-gray-700">
            At PET Stream Incorporation, we’re all about partnerships and collaborations, so we scour the globe to find
            partners who excel at what they do and share our vision.
          </h3>
        </motion.div>

        {/* Unified Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrolling Strip */}
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto whitespace-nowrap px-10 py-6 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Render two copies for seamless loop */}
              {[...featuredPartners, ...featuredPartners].map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block w-44 mx-2 flex-shrink-0"
                >
                  <Link to={`/Partners/${partner.slug}`}>
                    <div className="h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4">
                      <img
                        src={partner.image}
                        alt={partner.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View All */}
        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="/Partners"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
          >
            <span className="relative z-10">View All Partners</span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-800 transition-all duration-300 group-hover:h-full -z-0">→</span>
            
            
          </Link>
        </motion.div> */}

      </div>
    </section>
  );
};

export default Partners;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomersData from '../../data/customers';

const Customers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationFrame = useRef(null);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Featured customers sorted
  const featuredCustomers = CustomersData
    .filter(c => c.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  // Trigger fade-in
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    let lastTimestamp = 0;
    const speed = 0.3; // pixels per ms

    const step = (timestamp) => {
      const delta = timestamp - lastTimestamp;
      if (delta > 16) {
        lastTimestamp = timestamp;
        container.scrollLeft += speed * delta;
        // loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame.current = requestAnimationFrame(step);
    };

    animationFrame.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame.current);
  }, [isPaused, isVisible]);

  // Handlers for mouse/touch
  const onDragStart = (e) => {
    isDragging.current = true;
    setIsPaused(true);
    const container = scrollRef.current;
    container.classList.add('cursor-grabbing');
    startX.current = (e.pageX ?? e.touches?.[0]?.pageX) - container.offsetLeft;
    scrollLeftStart.current = container.scrollLeft;
  };

  const onDragMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const container = scrollRef.current;
    const x = (e.pageX ?? e.touches?.[0]?.pageX) - container.offsetLeft;
    const walk = x - startX.current;
    container.scrollLeft = scrollLeftStart.current - walk;
  };

  const onDragEnd = () => {
    isDragging.current = false;
    setIsPaused(false);
    const container = scrollRef.current;
    if (container) {
      container.classList.remove('cursor-grabbing');
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Customers</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6" />
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <h3 className="text-xl font-medium text-gray-700">
            PET Stream Incorporation is proud to serve a diverse range of customers across various industries. We're committed to delivering exceptional value and building lasting relationships.
          </h3>
        </motion.div>

        {/* Instruction for drag functionality */}
        <motion.div 
          className="text-center mb-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <p className="italic">Drag to explore our customers →</p>
        </motion.div>

        {/* Draggable Carousel */}
        <div
          ref={scrollRef}
          className="relative flex overflow-x-auto py-6 scrollbar-hide cursor-grab select-none"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory'
          }}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          {[...featuredCustomers, ...featuredCustomers].map((customer, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-44 md:w-56 px-4 scroll-snap-align-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: (idx % featuredCustomers.length) * 0.1 }}
            >
              <Link to={`/Customers/${customer.slug}`}>  
                <div className="h-24 md:h-32 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center p-4 md:p-6">
                  <img
                    src={customer.image}
                    alt={customer.title}
                    className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-105"
                    draggable="false" // Prevent browser default drag behavior
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link
            to="/Customers"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-500 hover:shadow-lg">
            View All Customers
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;
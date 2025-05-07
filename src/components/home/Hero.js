import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import s1 from '../../assets/images/s1.jpg';
import s2 from '../../assets/images/s2.jpg';
import s3 from '../../assets/images/s3.jpg';
import s4 from '../../assets/images/s4.jpg';
import s5 from '../../assets/images/s5.jpg';
import s6 from '../../assets/images/s6.jpg';
import s7 from '../../assets/images/s7.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);
  
  const slides = [
    {
      id: 1,
      image: s1,
      title: 'Beverage Industry Solutions',
      description: 'Comprehensive equipment and consultancy for beverage manufacturing and packaging operations.',
      buttonText: 'Explore Solutions',
      buttonLink: '/services/beverage'
    },
    {
      id: 2,
      image: s2,
      title: 'Advanced Packaging Technology',
      description: 'Cutting-edge machinery and systems for efficient and sustainable packaging applications.',
      buttonText: 'View Products',
      buttonLink: '/products'
    },
    {
      id: 3,
      image: s3,
      title: 'Healthcare Manufacturing',
      description: 'Specialized equipment for healthcare product manufacturing with precision and compliance.',
      buttonText: 'Learn More',
      buttonLink: '/services/healthcare'
    },
    {
      id: 4,
      image: s4,
      title: 'Expert Project Consultancy',
      description: 'Comprehensive project planning and implementation support from industry experts.',
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    {
      id: 5,
      image: s5,
      title: 'Professional Maintenance Services',
      description: 'Reliable maintenance and refurbishment services to maximize your equipment lifespan.',
      buttonText: 'Our Services',
      buttonLink: '/services'
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => {
      resetTimeout();
    };
  }, [currentSlide, slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background image with darker overlay */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Semi-transparent gradient overlay to improve text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
          
          {/* Content with improved visibility */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
              {/* Content container with semi-transparent background */}
              <div className="inline-block py-8 px-8 rounded-lg bg-black/30 backdrop-blur-sm">
                {/* Title with text shadow */}
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                {/* Description with text shadow */}
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto"
                  style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {/* Button with improved contrast and effects */}
                  <Link 
                    to={slides[currentSlide].buttonLink} 
                    className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-md shadow-lg transition-all duration-300 border-2 border-transparent hover:border-white"
                  >
                    {slides[currentSlide].buttonText}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows with improved visibility */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicator Dots with improved styling */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 shadow-md ${
              currentSlide === index 
                ? 'bg-blue-500 scale-125' 
                : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import servicesData from '../../data/services';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Filter featured services
  const featuredServices = servicesData
    .filter(service => service.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  useEffect(() => {
    // Set visibility after component mounts for animations
    setIsVisible(true);
  }, []);

  // Framer-motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-2 text-gray-800">Explore Our Products And Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Discover our comprehensive range of solutions designed to meet your needs and exceed your expectations.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {featuredServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 group"
            >
              <Link to={`/services/${service.slug}`} className="block h-full">
                <div className="h-64 overflow-hidden bg-gray-50 relative">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-contain p-6 transition-all duration-300 group-hover:scale-105"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.shortDescription || "Discover more about our specialized solutions"}
                  </p>
                  <span className="inline-block text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    Explore More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link 
            to="/services" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
          >
            <span className="relative z-10">View All Services</span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-800 transition-all duration-300 group-hover:h-full -z-0"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
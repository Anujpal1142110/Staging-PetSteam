import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/c-liquid-colorant.jpg';
import img2 from '../../assets/images/c-activeoxygenscavenger.jpg'; 
import img3 from '../../assets/images/c-oxygenblocker.jpg';
import img4 from '../../assets/images/c-co-blocker.jpg';
import img5 from '../../assets/images/c-aareducer.jpg';
import img6 from '../../assets/images/c-uvblocker.jpg';
import img7 from '../../assets/images/c-light-blocking-agent.jpg'; 
import img8 from '../../assets/images/c-anti-frictionagent.jpg';
import img9 from '../../assets/images/c-whitelightblocker.jpg';
import heroImg from '../../assets/images/colorway-banner.jpg';

const Colorway = () => {
  // State for product category selection if needed
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      {/* Hero Banner Section with Background Image */}
      <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">COLORWAY</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Innovative Coloring Solutions
          </p>
        </div>
      </section>

      {/* Partner Information Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">COLORWAY -</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Colorway is dedicated to the creation of a high-quality, safe and healthy coloring consumer with a slow scatters decay rate materials into coloring scheme, providing raw-eco-coloring and functional additive solutions, creating real value for customers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Recommendation Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-b pb-2">Product Recommendation</h2>
          
          {/* Products Grid - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Product 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={img1} 
                alt="Liquid Colorant" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">Liquid Colorant</h3>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={img2} 
                alt="Active Oxygen Scavenger" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">Active Oxygen Scavenger</h3>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={img3} 
                alt="Oxygen Blocker" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">Oxygen Blocker</h3>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          {/* Products Grid - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Product 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={img4} 
                alt="CO2 Blocker" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">CO2 Blocker</h3>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Product 5 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={img6} 
                alt="AA Reducer" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">AA Reducer</h3>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Product 6 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={img5} 
                alt="UV Blocker" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">UV Blocker</h3>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          {/* Products Grid - Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 7 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={img7} 
                alt="Light Blocking Agent" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">Light Blocking Agent</h3>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Product 8 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={img8} 
                alt="Anti-Friction Agent" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">Anti-Friction Agent</h3>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Product 9 */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={img9} 
                alt="White O.L Light Blocker" 
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">White O.L Light Blocker</h3>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Colorway Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">OUR ADVANTAGES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">High-Quality Materials</h3>
              <p className="text-gray-700">
                Premium quality coloring solutions that ensure safety and consistency across all products.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-700">
                Environmentally responsible raw-eco-coloring options that reduce environmental impact.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovative Technology</h3>
              <p className="text-gray-700">
                Cutting-edge additives and functional solutions that enhance product performance.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customizable Solutions</h3>
              <p className="text-gray-700">
                Tailored coloring schemes to meet specific brand requirements and product specifications.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Long-Lasting Performance</h3>
              <p className="text-gray-700">
                Slow scatter decay rate materials ensure color stability and longevity in final products.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer-Focused Value</h3>
              <p className="text-gray-700">
                Creating real value for customers through quality, innovation, and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Enhance Your Products with Advanced Coloring Solutions</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover how our innovative coloring and functional additives can improve your products and add value to your brand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link
              to="/products"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Colorway;
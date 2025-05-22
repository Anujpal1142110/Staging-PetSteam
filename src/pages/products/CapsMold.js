import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import sample images - you'll need to replace these with actual Corvaglia images
import img1 from '../../assets/images/corva-1.jpg'; // Replace with actual image
import img2 from '../../assets/images/corva-2.jpg'; // Replace with actual image
import img3 from '../../assets/images/corva-3.jpg'; // Replace with actual image
import img4 from '../../assets/images/corva-4.jpg'; // Replace with actual image
import imgHero from '../../assets/images/corva-5.jpg'; // Replace with actual hero image

const Corvaglia = () => {
  // State for benefits tab selection
  const [activeTab, setActiveTab] = useState('caps'); // 'caps', 'solutions', or 'special'

  return (
    <>
      {/* Hero Banner Section with Background Image */}
      <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imgHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">CORVAGLIA</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Global Leaders in PET Bottle Closure Solutions
          </p>
        </div>
      </section>

      {/* Partner Information Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">CORVAGLIA -</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Over 20% of all PET bottles filled with soft drinks all over the world are fitted with corvaglia closures. Several of our PET caps have been tested by international beverage manufacturers and approved for their specific use in a range of different areas.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This led not only to the creation of a corvaglia partner network spanning over 15 countries worldwide, but also to customers putting their trust in us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At PSI, we're proud to be a part of the corvaglia global network, offering innovative closure solutions that meet the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Product Category Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-b pb-2">Product Categories -</h2>
          
          {/* First Product */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Standard PET Bottle Closures</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our standard PET bottle closures are designed for maximum efficiency and reliability. Available in various sizes and colors, they provide excellent sealing properties while maintaining ease of opening for consumers. All closures meet international food safety standards and are optimized for high-speed filling lines.
              </p>
              {/* <Link 
                to="/products/standard-closures"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                
              </Link> */}
            </div>
            <div className="md:w-1/3">
              <img 
                src={img1} 
                alt="Standard PET Bottle Closures" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          
          {/* Second Product */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 md:order-1 md:pl-8 mb-6 md:mb-0 order-2">
              <img 
                src={img2} 
                alt="Lightweight Eco-Friendly Closures" 
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Lightweight Eco-Friendly Closures</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our lightweight closure solutions help reduce plastic usage while maintaining performance. These environmentally-friendly options are perfect for brands looking to minimize their ecological footprint without compromising on quality or consumer experience.
              </p>
              {/* <Link 
                to="/products/eco-closures"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                
              </Link> */}
            </div>
          </div>
          
          {/* Third Product */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Specialized Beverage Closures</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For carbonated soft drinks, sports beverages, and other specialized applications, our advanced closure designs ensure product integrity and consumer satisfaction. These closures feature enhanced barrier properties and are available with tamper-evident options for added security.
              </p>
              {/* <Link 
                to="/products/specialized-closures"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                
              </Link> */}
            </div>
            <div className="md:w-1/3">
              <img 
                src={img3} 
                alt="Specialized Beverage Closures" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          
          {/* Fourth Product */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 md:order-1 md:pl-8 mb-6 md:mb-0 order-2">
              <img 
                src={img4} 
                alt="Custom Closure Solutions" 
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Custom Closure Solutions</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team works directly with brands to develop custom closure solutions that meet specific requirements. Whether you need special colors, unique shapes, or innovative functionality, we can create closures that enhance your product experience and brand identity.
              </p>
              {/* <Link 
                to="/products/custom-closures"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Integrated Benefits Section with Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">BENEFITS / WHAT MAKES US DIFFERENT?</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap mb-8">
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'caps' 
                ? 'border border-green-500 text-green-600 bg-white' 
                : 'text-gray-600 hover:text-green-500'}`}
              onClick={() => setActiveTab('caps')}
            >
              Standard Caps
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'solutions' 
                ? 'border border-green-500 text-green-600 bg-white' 
                : 'text-gray-600 hover:text-green-500'}`}
              onClick={() => setActiveTab('solutions')}
            >
              Custom Solutions
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'special' 
                ? 'border border-green-500 text-green-600 bg-white' 
                : 'text-gray-600 hover:text-green-500'}`}
              onClick={() => setActiveTab('special')}
            >
              Special Applications
            </button>
          </div>
          
          <div className="border-t border-gray-200 mb-6"></div>
          
          {/* Standard Caps Benefits */}
          {activeTab === 'caps' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-700">Benefits / What Makes Us Different? (Standard Caps)</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Global reach with over 20% market share for soft drink PET bottle closures</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Tested and approved by international beverage manufacturers</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Robust partner network spanning over 15 countries worldwide</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">High-speed compatibility with all major filling lines</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Superior sealing properties for optimal product protection</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Consistent quality and performance across all production batches</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Available in a wide range of colors and finishes</span>
                </li>
              </ul>
            </div>
          )}
          
          {/* Custom Solutions Benefits */}
          {activeTab === 'solutions' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-700">Benefits / What Makes Us Different? (Custom Solutions) –</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Dedicated design and engineering team for custom projects</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Rapid prototyping capabilities for quick product development</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Brand-specific customization options for colors, textures, and logos</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Innovative solutions for unique packaging challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Flexible production capabilities to accommodate various order sizes</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Long-term partnership approach for continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Intellectual property protection for customer-specific designs</span>
                </li>
              </ul>
            </div>
          )}
          
          {/* Special Applications Benefits */}
          {activeTab === 'special' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-700">Benefits / What Makes Us Different? (Special Applications) –</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Enhanced barrier properties for carbonated beverages</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Specialized designs for sports drinks and functional beverages</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Tamper-evident features for product security</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Lightweight designs that reduce material usage without compromising performance</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Solutions for hot-fill applications with enhanced thermal stability</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Special closures for aseptic filling environments</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Eco-friendly options with reduced environmental impact</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Bottle Closure Solutions?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about Corvaglia closures and how they can improve your product quality and consumer experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Get a Quote
            </Link>
            <Link
              to="/services/project-design"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Corvaglia;
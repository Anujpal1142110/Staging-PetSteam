import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/medizinal.jpg';
import img2 from '../../assets/images/food.jpg';
import img3 from '../../assets/images/lebensmittel_header.jpg';

const Claroform = () => {
  // State for benefits tab selection
  const [activeTab, setActiveTab] = useState('medical'); // 'medical', 'packaging', or 'custom'

  return (
    <>
      {/* Hero Banner Section with Background Image */}
      <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">CLAROFORM</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
           
          </p>
        </div>
      </section>

      {/* Partner Information Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">CLAROFORM -</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              An Exclusive Partner of PST Group INC, are experts in the development and manufacture of high-performance injection moulds for food packaging, medical packaging. The trust in the uncompromising reliability of Claroform molds and commitment gives excellence in the latest technology, a drive to find solutions, and inclusive teamwork.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We As an Exclusive partner of Claroform offer –
            </p>
          </div>
        </div>
      </section>

      {/* Product Category Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-b pb-2">TOOLS WITH HIGHEST PRECISION FOR MEDICAL DEVICES</h2>
          
          {/* First Product */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Medical Products Solutions</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our moulds for medical products meet the most stringent demands for reproducible product quality with narrow tolerances. This also includes excellent cavity surface quality and comprehensive documentation. Our comprehensive development know-how yields important preliminary work for an efficient project workflow and excellent quality parts. We offer valuable support with plant integration and validation processes in our modern in-house test centre. The bottom line is that our customers benefit from a faster path to maximum manufacturing quality.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
            <div className="md:w-1/3">
              <img 
                src={img1} 
                alt="Medical Products Mold" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          
          {/* Second Product */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 md:order-1 md:pl-8 mb-6 md:mb-0 order-2">
              <img 
                src={img2} 
                alt="Packaging Molds" 
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Packaging Molds</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We are seasoned experts in developing and implementing new solutions for the food industry. We are fully familiar with the toughest demands for high hygiene, minimized plastic use, and complex packaging. The quality and wear resistance of our tools always guarantee constant results for problem-free further processing on downstream machines.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our customers can rely on fast and smooth implementation, and on all requirements being reliably met over extended service lives.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integrated Benefits Section with Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">OUR EXPERTISE</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap mb-8">
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'medical' 
                ? 'border border-orange-500 text-orange-600 bg-white' 
                : 'text-gray-600 hover:text-orange-500'}`}
              onClick={() => setActiveTab('medical')}
            >
              Medical Devices
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'packaging' 
                ? 'border border-orange-500 text-orange-600 bg-white' 
                : 'text-gray-600 hover:text-orange-500'}`}
              onClick={() => setActiveTab('packaging')}
            >
              Food Packaging
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'custom' 
                ? 'border border-orange-500 text-orange-600 bg-white' 
                : 'text-gray-600 hover:text-orange-500'}`}
              onClick={() => setActiveTab('custom')}
            >
              Innovation & Technology
            </button>
          </div>
          
          <div className="border-t border-gray-200 mb-6"></div>
          
          {/* Medical Solutions Benefits */}
          {activeTab === 'medical' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-700">Medical Device Molding Expertise</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Stringent quality control for reproducible medical products</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Narrow tolerances for precision components</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Excellent cavity surface quality for medical-grade parts</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Comprehensive documentation for regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Support with plant integration and validation processes</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Modern in-house test center for quality verification</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Faster path to maximum manufacturing quality</span>
                </li>
              </ul>
            </div>
          )}
          
          {/* Packaging Solutions Benefits */}
          {activeTab === 'packaging' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-700">Food Packaging Solutions</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Expertise in developing and implementing new food packaging solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Deep understanding of high hygiene requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Minimized plastic use for eco-friendly packaging</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Solutions for complex packaging challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">High wear resistance for extended service life</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Problem-free further processing on downstream machines</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Fast and smooth implementation of new solutions</span>
                </li>
              </ul>
            </div>
          )}
          
          {/* Innovation & Technology Benefits */}
          {activeTab === 'custom' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-700">Innovation & Technology</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Latest technology implementation for optimal results</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Comprehensive development know-how for efficient projects</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Uncompromising reliability in mold manufacturing</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Drive to find innovative solutions for complex challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Inclusive teamwork approach for best project outcomes</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Efficient project workflow from concept to production</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Commitment to excellence in every project</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Production Capabilities?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about Claroform molds and how they can improve your manufacturing quality and precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Claroform;
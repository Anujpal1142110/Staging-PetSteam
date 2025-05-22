import React from 'react';
import { Link } from 'react-router-dom';
import blowingSystemImg from '../../assets/images/n-bowler.jpg';

const BlowingSystem = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blowing Systems</h1>
              <p className="text-xl mb-6">
                High-performance bottle blowing solutions for the beverage industry
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded transition-colors duration-300"
              >
                Request a Quote
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src={blowingSystemImg} 
                alt="Newamstar Blowing System" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Advanced Blowing Technology</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Newamstar's Blowing Systems represent the cutting edge in PET bottle manufacturing technology. Our systems are designed for maximum efficiency, reliability, and flexibility to meet the diverse needs of the beverage industry. With a focus on energy efficiency and bottle quality, our blowing systems deliver consistent results with minimal downtime.
            </p>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Blowing System Product Line</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Bottle Blower</h4>
                <p className="text-gray-700 mb-4">
                  Our standard Bottle Blower is designed for high-speed production of PET bottles for various beverage applications. With advanced heating and stretching technology, it ensures optimal bottle quality while maximizing energy efficiency.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Production capacity: Up to 36,000 BPH</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Bottle sizes: 200ml to 2.5L</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Cavity options: 4, 6, 8, 10, 12, 16, 20, 24 cavities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Infrared oven with energy-saving design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Advanced preform handling system</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Big-container Blower</h4>
                <p className="text-gray-700 mb-4">
                  Specifically designed for large format containers, our Big-container Blower handles bottles from 3L up to 12L with exceptional precision and efficiency.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Production capacity: Up to 4,000 BPH</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Bottle sizes: 3L to 12L</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Specialized heat profile management for large containers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Reinforced stretching rods for heavier applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Enhanced cooling system for optimal bottle quality</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Gallon Blower</h4>
                <p className="text-gray-700 mb-4">
                  Our Gallon Blower is specialized for 3-5 gallon water bottles and jugs, featuring robust construction and specialized heating systems for these demanding applications.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Production capacity: Up to 2,000 BPH</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Specialized for 3-5 gallon containers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Heavy-duty mold handling system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Optimized for high material distribution efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Compatible with handle-insertion systems</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Key Features & Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Energy Efficiency</h4>
                    <p className="text-gray-700">Advanced heating technology reduces energy consumption by up to 35% compared to conventional systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Precise Temperature Control</h4>
                    <p className="text-gray-700">Zone-specific heating profiles ensure optimal material distribution and bottle quality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fast Mold Changeover</h4>
                    <p className="text-gray-700">Quick-change mold systems reduce downtime when switching between different bottle formats.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Advanced Process Control</h4>
                    <p className="text-gray-700">Sophisticated control systems with user-friendly interfaces for precise adjustment of all blowing parameters.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Lightweight Bottle Capability</h4>
                    <p className="text-gray-700">Specially designed to handle ultra-lightweight bottles for sustainable packaging solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Integration Ready</h4>
                    <p className="text-gray-700">Designed for seamless integration with filling systems, whether as standalone equipment or as part of a combiblock solution.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Technical Support & Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Newamstar provides comprehensive technical support for all our blowing systems, including:
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">Installation and commissioning by expert technicians</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">Operator training programs</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">Regular maintenance packages</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">Rapid response service support</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">Genuine spare parts supply</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Our service network ensures that your equipment operates at peak efficiency throughout its lifecycle, minimizing downtime and maximizing productivity.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Customer Testimonial</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Leading Water Bottler in South Asia</h4>
                <p className="text-gray-700 mb-4">
                  "Newamstar's Blowing System has significantly improved our production efficiency. The energy savings alone have reduced our operational costs by 18%, while the bottle quality has been consistently excellent."
                </p>
                <p className="text-gray-600 italic">- Technical Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Improve Your Bottle Production Efficiency</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about our Blowing Systems and how they can enhance your production line.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Request a Consultation
            </Link>
            <Link
              to="/newamstar"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlowingSystem;
import React from 'react';
import { Link } from 'react-router-dom';
import fillingSystemImg from '../../assets/images/n-filling.jpg';

const FillingSystem = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Filling Systems</h1>
              <p className="text-xl mb-6">
                Advanced filling solutions for beverages, dairy, liquors, condiments, and more
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded transition-colors duration-300"
              >
                Request a Quote
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src={fillingSystemImg} 
                alt="Newamstar Filling System" 
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Precision Filling Technology</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Newamstar's Filling Systems represent the pinnacle of liquid filling technology, offering precision, reliability, and flexibility across a wide range of applications. Our systems are designed to handle diverse products from water and carbonated beverages to sensitive dairy products, alcoholic beverages, condiments, and chemical products.
            </p>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Filling System Product Line</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Aseptic Filling</h4>
                <p className="text-gray-700 mb-4">
                  Our Aseptic Filling systems provide the highest level of product safety and extended shelf life for sensitive products without preservatives, such as dairy products, juices, and teas.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Production capacity: Up to 48,000 BPH</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Advanced sterilization systems for bottles, caps, and filling environment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">HEPA filtration and positive air pressure systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Hydrogen peroxide or peracetic acid sterilization options</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Ultra-clean Filling</h4>
                <p className="text-gray-700 mb-4">
                  For products requiring extended shelf life without the full aseptic process, our Ultra-clean Filling systems provide an optimal balance of product safety and operational efficiency.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Clean room environment with HEPA filtration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">UV sterilization for caps and bottle necks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Extended shelf life up to 30-90 days depending on product</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Hot Filling</h4>
                <p className="text-gray-700 mb-4">
                  Our Hot Filling systems are designed for products that require thermal processing for preservation, such as juices, teas, and sports drinks.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Precise temperature control systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Special handling for heat-sensitive bottles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Integrated cooling tunnels available</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Water Filling</h4>
                <p className="text-gray-700 mb-4">
                  Specialized for still water applications, our Water Filling systems offer high-speed operation with exceptional accuracy and hygiene.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Production speeds up to 72,000 BPH</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Electronic flow meters for precision filling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Clean-in-Place (CIP) systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Gallon-Water Filling</h4>
                <p className="text-gray-700 mb-4">
                  Specialized for large format containers, our Gallon-Water Filling systems handle 3-5 gallon bottles with high efficiency and reliability.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">CSD Filling</h4>
                <p className="text-gray-700 mb-4">
                  For carbonated soft drinks, our CSD Filling systems maintain precise carbonation levels while ensuring high-speed production.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Counter-pressure filling technology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Advanced CO2 management systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Minimal product loss and foam generation</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Liquor Filling</h4>
                  <p className="text-gray-700">
                    Specialized systems for alcoholic beverages, with features designed to handle spirits, wine, and beer with precision.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Condiment Filling</h4>
                  <p className="text-gray-700">
                    Designed for viscous products like sauces, ketchup, and mayonnaise, with specialized valves and pumps.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Edible Oil Filling</h4>
                  <p className="text-gray-700">
                    Systems optimized for the unique challenges of edible oils, with features to prevent oxidation and contamination.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Daily Chemical Product Filling</h4>
                  <p className="text-gray-700">
                    Specialized for personal care and home care products, with appropriate materials and sealing systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Key Features & Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Precision Filling</h4>
                    <p className="text-gray-700">Electronic flow meters and level sensors ensure accurate fill volumes with minimal variation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hygienic Design</h4>
                    <p className="text-gray-700">All systems feature sanitary designs with FDA-approved materials and CIP/SIP capabilities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Flexibility</h4>
                    <p className="text-gray-700">Quick changeover capabilities for different bottle sizes and product types.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Advanced Control Systems</h4>
                    <p className="text-gray-700">User-friendly HMI interfaces with comprehensive monitoring and control of all filling parameters.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Integration Capabilities</h4>
                    <p className="text-gray-700">Seamless integration with blowing, capping, and secondary packaging systems.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Industry Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Beverage Industry</h4>
                  <p className="text-gray-700">
                    Water, carbonated drinks, juices, teas, sports drinks, and energy drinks
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Dairy Industry</h4>
                  <p className="text-gray-700">
                    Milk, yogurt drinks, flavored milk, and plant-based alternatives
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Food Industry</h4>
                  <p className="text-gray-700">
                    Sauces, dressings, condiments, and edible oils
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Alcohol Industry</h4>
                  <p className="text-gray-700">
                    Spirits, wine, beer, and ready-to-drink cocktails
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Customer Success Story</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Major Asian Beverage Conglomerate</h4>
                <p className="text-gray-700 mb-4">
                  "After implementing Newamstar's aseptic filling system, we've increased our production efficiency by 25% while extending our product shelf life to 12 months without preservatives. The reliability and precision of the system have exceeded our expectations."
                </p>
                <p className="text-gray-600 italic">- Operations Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Elevate Your Filling Operations</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about our Filling Systems and how they can enhance your production line.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
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

export default FillingSystem;
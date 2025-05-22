import React from 'react';
import { Link } from 'react-router-dom';
import pretreatmentImg from '../../assets/images/n-pretreatmet.jpg';

const PretreatmentSystem = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Pretreatment Systems</h1>
              <p className="text-xl mb-6">
                Advanced processing solutions for water treatment, product preparation, and cleaning
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
                src={pretreatmentImg} 
                alt="Newamstar Pretreatment Systems" 
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Comprehensive Pretreatment Solutions</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Newamstar's Pretreatment Systems form the critical foundation of beverage and liquid product manufacturing. From water purification to ingredient preparation and system cleaning, our solutions ensure product quality, consistency, and safety. Engineered with the latest technology and designed for reliability, our pretreatment systems integrate seamlessly with your production processes to create a complete, efficient manufacturing environment.
            </p>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Pretreatment System Product Line</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Water Treatment System</h4>
                <p className="text-gray-700 mb-4">
                  Our Water Treatment Systems provide high-quality water for beverage production through a comprehensive purification process. These systems are customized based on your local water conditions and final product requirements.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Pre-filtration and multimedia filtration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Water softening and ion exchange</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Reverse osmosis (RO) systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">UV sterilization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Ozone treatment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Continuous monitoring and quality control</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Processing System</h4>
                <p className="text-gray-700 mb-4">
                  Our Processing Systems handle the preparation of product ingredients, ensuring consistent quality and efficient blending. These systems are tailored to specific product requirements and production volumes.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Sugar dissolution and inversion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Syrup preparation and blending</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Continuous in-line blending</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Precise dosing of ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Batch or continuous processing options</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">UHT System</h4>
                <p className="text-gray-700 mb-4">
                  Our Ultra-High Temperature (UHT) processing systems provide extended shelf life for dairy products, juices, and other beverages through rapid heating and cooling to eliminate microorganisms while preserving product quality.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Direct and indirect heating options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Precise temperature control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Integrated aseptic holding</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Energy-efficient heat recovery systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">CIP System</h4>
                <p className="text-gray-700 mb-4">
                  Clean-in-Place (CIP) systems provide automated cleaning and sanitization of production equipment without disassembly, ensuring hygienic production conditions while minimizing downtime.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Centralized or satellite CIP systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Programmable cleaning cycles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Chemical dosing and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Temperature and flow rate control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Cleaning validation and reporting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">COP/SOP System</h4>
                <p className="text-gray-700 mb-4">
                  Clean-Out-of-Place (COP) and Sterilize-Out-of-Place (SOP) systems provide thorough cleaning for removable parts and components that require disassembly for effective cleaning.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Immersion tanks with ultrasonic cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Spray washing systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Automated drying stations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Documentation and traceability</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Disinfectant Blending System</h4>
                  <p className="text-gray-700">
                    Systems for the precise preparation and dosing of sanitizing agents and disinfectants used in production hygiene processes.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Carbon Mixer</h4>
                  <p className="text-gray-700">
                    Specialized systems for the preparation and precise dosing of carbonation in beverage production, ensuring consistent carbonation levels.
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
                    <h4 className="font-semibold text-gray-800">Product Quality Assurance</h4>
                    <p className="text-gray-700">Our pretreatment systems ensure consistent raw material quality for reliable final product characteristics.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hygienic Design</h4>
                    <p className="text-gray-700">All systems are designed according to hygienic principles with FDA-approved materials and sanitary connections.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Process Automation</h4>
                    <p className="text-gray-700">Automated systems reduce manual intervention, improving consistency and reducing labor costs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Resource Efficiency</h4>
                    <p className="text-gray-700">Optimized processes reduce water, energy, and chemical consumption for sustainable operation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Comprehensive Monitoring</h4>
                    <p className="text-gray-700">Advanced instrumentation and control systems provide real-time process monitoring and documentation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Flexible Integration</h4>
                    <p className="text-gray-700">Modular design allows seamless integration with existing systems and future expansion.</p>
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
                    Water, carbonated soft drinks, juices, teas, and sports drinks
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Dairy Industry</h4>
                  <p className="text-gray-700">
                    Milk, yogurt drinks, flavored milk, and dairy alternatives
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Food Processing</h4>
                  <p className="text-gray-700">
                    Sauces, condiments, and liquid food products
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Personal Care</h4>
                  <p className="text-gray-700">
                    Liquid soaps, shampoos, and other personal care products
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Customer Success Story</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Leading Beverage Producer in Asia</h4>
                <p className="text-gray-700 mb-4">
                  "Implementing Newamstar's integrated water treatment and processing systems transformed our production capabilities. We've achieved a 25% reduction in water usage while improving product consistency and reducing downtime for cleaning. The systems' automation has also significantly reduced our labor requirements and improved our overall operational efficiency."
                </p>
                <p className="text-gray-600 italic">- Plant Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Enhance Your Production Foundation</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about our Pretreatment Systems and how they can improve your product quality and operational efficiency.
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

export default PretreatmentSystem;
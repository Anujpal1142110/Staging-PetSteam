import React from 'react';
import { Link } from 'react-router-dom';
import secondaryPackagingImg from '../../assets/images/n-secndory.jpg';

const SecondaryPackagingSystem = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Secondary Packaging Systems</h1>
              <p className="text-xl mb-6">
                Complete end-of-line solutions for efficient packaging and distribution
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
                src={secondaryPackagingImg} 
                alt="Newamstar Secondary Packaging" 
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Comprehensive Secondary Packaging Solutions</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Newamstar's Secondary Packaging Systems provide complete end-of-line solutions to handle your products after filling. From conveying and labeling to packaging and palletizing, our systems ensure efficient product handling with minimal manual intervention. Designed for reliability, flexibility, and ease of operation, our secondary packaging solutions integrate seamlessly with your production line to maximize efficiency and minimize downtime.
            </p>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Secondary Packaging Product Line</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Conveyor System</h4>
                  <p className="text-gray-700 mb-3">
                    Our advanced conveyor systems ensure smooth product flow throughout your production line.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Air conveyor systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Mass flow accumulation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Modular design</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Bottle Warmer</h4>
                  <p className="text-gray-700 mb-3">
                    Specialized equipment for warming bottles before labeling to ensure optimal label adhesion.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Precise temperature control</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Energy-efficient design</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Bottle Tilting System</h4>
                  <p className="text-gray-700 mb-3">
                    Systems for reorienting bottles for specific packaging requirements or promotional purposes.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Shower Cooling Tunnel</h4>
                  <p className="text-gray-700 mb-3">
                    Rapid cooling systems for hot-filled products to accelerate production process.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Water recirculation system</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Adjustable cooling zones</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Labeler</h4>
                  <p className="text-gray-700 mb-3">
                    High-precision labeling systems for various label types and container shapes.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Roll-fed, self-adhesive, and cold glue options</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Vision system inspection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Film Wrapper</h4>
                  <p className="text-gray-700 mb-3">
                    Systems for wrapping products in shrink film for bundle packaging.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Multiple pack formats</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Optimized film usage</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Carton Wrapper</h4>
                  <p className="text-gray-700 mb-3">
                    Automated systems for placing products into cartons for retail-ready packaging.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Starpack</h4>
                  <p className="text-gray-700 mb-3">
                    Our integrated packaging solution that combines multiple end-of-line functions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Sorting Robot</h4>
                  <p className="text-gray-700 mb-3">
                    Advanced robotic systems for high-speed product sorting and organization.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Robot Encaser</h4>
                  <p className="text-gray-700 mb-3">
                    Robotic case packing systems for gentle handling and flexible pack patterns.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Robot Palletizer</h4>
                  <p className="text-gray-700 mb-3">
                    Robotic systems for precise and flexible palletizing of various case sizes.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Multiple pallet patterns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-2 mt-1">➤</div>
                      <span className="text-gray-700">Easy pattern programming</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3 text-blue-700">Mechanical Palletizer</h4>
                  <p className="text-gray-700 mb-3">
                    Traditional palletizing systems for high-speed, consistent performance.
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
                    <h4 className="font-semibold text-gray-800">Modular Design</h4>
                    <p className="text-gray-700">Our systems are modular, allowing for easy expansion and reconfiguration as your needs change.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Integration Capability</h4>
                    <p className="text-gray-700">Seamless integration with existing equipment and centralized control systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quick Changeover</h4>
                    <p className="text-gray-700">Rapid format changes with minimal downtime for maximum production flexibility.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Advanced Automation</h4>
                    <p className="text-gray-700">Reduce labor costs and increase reliability with our automated systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Industry 4.0 Ready</h4>
                    <p className="text-gray-700">Connected systems with comprehensive data collection for production analysis and optimization.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Applications</h3>
              <p className="text-gray-700 mb-6">
                Our Secondary Packaging Systems are utilized across multiple industries:
              </p>
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
                    Milk, yogurt, and dairy-based products
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Food Industry</h4>
                  <p className="text-gray-700">
                    Sauces, oils, condiments, and prepared foods
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Chemical Industry</h4>
                  <p className="text-gray-700">
                    Personal care, home care, and industrial products
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Customer Success Story</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Leading Asian Beverage Manufacturer</h4>
                <p className="text-gray-700 mb-4">
                  "After implementing Newamstar's robotic palletizing system, we've seen a 40% increase in end-of-line efficiency and a significant reduction in product damage. The flexibility of the system has allowed us to handle multiple package formats with minimal changeover time."
                </p>
                <p className="text-gray-600 italic">- Logistics Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Optimize Your End-of-Line Operations</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about our Secondary Packaging Systems and how they can enhance your production efficiency.
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

export default SecondaryPackagingSystem;
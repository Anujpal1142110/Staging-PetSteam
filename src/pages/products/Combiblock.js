import React from 'react';
import { Link } from 'react-router-dom';
import combiblockImg from '../../assets/images/n-cobin.jpg';
import starbloc from '../../assets/images/starpack.jpg';
import waterCombi from '../../assets/images/water-filling.jpg';

const Combiblock = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Combiblock Solutions</h1>
              <p className="text-xl mb-6">
                Innovative and efficient combiblock solutions for your packaging needs
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
                src={combiblockImg} 
                alt="Newamstar Combiblock" 
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Combiblock Systems</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Newamstar's Combiblock systems are integrated solutions that combine multiple packaging processes into a single, efficient unit. These systems are designed to maximize production efficiency while minimizing footprint and operational costs. Our combiblock solutions are ideal for beverage, dairy, and food processing facilities looking to streamline their packaging operations.
            </p>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Combiblock Product Line</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Starbloc</h4>
                <p className="text-gray-700 mb-4">
                  The Starbloc is our flagship combiblock solution, integrating blowing, filling, and capping in a single machine. It's designed for maximum efficiency and minimal footprint in your production line.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Production capacity: Up to 48,000 BPH</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Bottle sizes: 200ml to 2.5L</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Energy saving: Up to 30% compared to separate machines</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Bottled Water Combiblock</h4>
                <p className="text-gray-700 mb-4">
                  Specially designed for the water industry, our Bottled Water Combiblock offers high-speed, efficient packaging for still and sparkling water products.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Clean room design for maximum hygiene</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Integrated CIP/SIP systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Compatible with ultra-light bottles</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Big-Container Combiblock</h4>
                <p className="text-gray-700 mb-4">
                  For larger format containers, our Big-Container Combiblock handles bottles from 3L up to 12L with ease and efficiency.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Aseptic Combiblock</h4>
                <p className="text-gray-700 mb-4">
                  Our Aseptic Combiblock is designed for sensitive products requiring the highest levels of hygiene and shelf-life, such as dairy products and juices.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Ultra-clean Combiblock</h4>
                <p className="text-gray-700 mb-4">
                  The Ultra-clean Combiblock provides extended shelf life for sensitive products while maintaining optimal production efficiency.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">CSD Combiblock</h4>
                <p className="text-gray-700 mb-4">
                  Specifically engineered for carbonated soft drinks, our CSD Combiblock maintains carbonation levels while ensuring high-speed production.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Hot-fill Combiblock</h4>
                <p className="text-gray-700 mb-4">
                  For products requiring hot-filling, this specialized combiblock ensures product integrity while maximizing production efficiency.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Non-beverage Combiblock</h4>
                <p className="text-gray-700 mb-4">
                  Our versatile Non-beverage Combiblock is designed for food, personal care, and home care products, offering the same efficiency and reliability as our beverage solutions.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Space Efficiency</h4>
                    <p className="text-gray-700">Up to 30% smaller footprint compared to separate machines.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Energy Savings</h4>
                    <p className="text-gray-700">Reduced energy consumption through integrated operations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Higher Efficiency</h4>
                    <p className="text-gray-700">Streamlined process flow with fewer transfer points.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Improved Product Quality</h4>
                    <p className="text-gray-700">Better control over entire packaging process for consistent quality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Reduced Labor Costs</h4>
                    <p className="text-gray-700">Integrated systems require fewer operators than separate machines.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Customer Success Stories</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Major Beverage Producer in Asia</h4>
                <p className="text-gray-700 mb-4">
                  "After implementing Newamstar's Combiblock solution, we saw a 22% increase in production efficiency and a 15% reduction in operational costs. The integrated system has been a game-changer for our facility."
                </p>
                <p className="text-gray-600 italic">- Production Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Packaging Process?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about our Combiblock solutions and how they can benefit your production line.
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

export default Combiblock;
import React from 'react';
import { Link } from 'react-router-dom';
import intelligentLogisticsImg from '../../assets/images/n-logistic.jpg';

const IntelligentLogistics = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Intelligent Logistics</h1>
              <p className="text-xl mb-6">
                Smart warehouse and logistics solutions for automated material handling
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
                src={intelligentLogisticsImg} 
                alt="Newamstar Intelligent Logistics" 
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Smart Warehouse & Logistics Solutions</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Newamstar's Intelligent Logistics systems represent the future of warehouse management and material handling. By combining advanced automation, robotics, and intelligent software, our solutions optimize the flow of products through your facility, from production to shipping. Our smart logistics solutions not only increase efficiency but also enhance inventory accuracy, reduce labor costs, and provide valuable real-time data for operational decision-making.
            </p>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Intelligent Logistics Product Line</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">Intelligent Warehouse</h4>
                <p className="text-gray-700 mb-4">
                  Our Intelligent Warehouse systems represent a comprehensive approach to modern storage and retrieval operations. Combining automated storage and retrieval systems (AS/RS) with advanced warehouse management software, these solutions maximize storage density while ensuring rapid access to products.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">High-density storage with automatic stacker cranes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Pallet, case, and tote handling capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Real-time inventory tracking and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Automated order fulfillment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">First-in, first-out (FIFO) or other inventory management strategies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">RGV (Rail Guided Vehicle)</h4>
                <p className="text-gray-700 mb-4">
                  Rail Guided Vehicles provide efficient horizontal transportation of materials within your facility on fixed paths. These systems are ideal for repetitive transport tasks with high throughput requirements.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">High-speed movement along fixed rails</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Heavy load capacity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Precise positioning for automated loading/unloading</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Integration with AS/RS systems and production lines</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">AGV (Automated Guided Vehicle)</h4>
                <p className="text-gray-700 mb-4">
                  Automated Guided Vehicles provide flexible material transport without fixed infrastructure. These autonomous vehicles navigate your facility using various guidance technologies, offering adaptable logistics solutions.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Flexible routing without fixed infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Laser, magnetic, or optical guidance systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Obstacle detection and safety systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Battery management for continuous operation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Central fleet management system</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-xl font-semibold mb-3 text-blue-700">WMS (Warehouse Management System)</h4>
                <p className="text-gray-700 mb-4">
                  Our Warehouse Management System is the brain behind our intelligent logistics solutions. This sophisticated software platform manages all aspects of warehouse operations, from inventory control to order fulfillment.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Real-time inventory tracking and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Order management and fulfillment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Resource allocation and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Performance analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Integration with ERP and other business systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Mobile access for management on the go</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Increased Operational Efficiency</h4>
                    <p className="text-gray-700">Automate repetitive tasks and optimize material flow to reduce cycle times by up to 50%.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Enhanced Inventory Accuracy</h4>
                    <p className="text-gray-700">Real-time tracking and automated processes reduce errors and improve inventory accuracy to over 99.9%.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Space Optimization</h4>
                    <p className="text-gray-700">High-density storage solutions can increase storage capacity by up to 40% in the same footprint.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Labor Cost Reduction</h4>
                    <p className="text-gray-700">Automated systems reduce the need for manual handling, lowering labor costs and reducing workplace injuries.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Data-Driven Decision Making</h4>
                    <p className="text-gray-700">Comprehensive analytics provide insights for continuous improvement and operational optimization.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1 text-xl">•</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Scalable Solutions</h4>
                    <p className="text-gray-700">Modular design allows for phased implementation and expansion as your business grows.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Integration with Production Lines</h3>
              <p className="text-gray-700 mb-6">
                Our Intelligent Logistics solutions are designed to integrate seamlessly with your production processes:
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">Direct connection between production output and automated storage</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">Just-in-time material delivery to production lines</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">Automated raw material management</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">End-to-end traceability from raw materials to finished products</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-3 mt-1">✓</div>
                  <span className="text-gray-700">Synchronized operations between production and logistics</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Customer Success Story</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Major Beverage Producer in Southeast Asia</h4>
                <p className="text-gray-700 mb-4">
                  "After implementing Newamstar's Intelligent Warehouse system, we've increased our storage capacity by 35% while reducing order fulfillment time by 60%. The real-time inventory visibility has virtually eliminated stockouts and overstocking situations. The integration with our production lines has created a truly seamless operation from production to shipping."
                </p>
                <p className="text-gray-600 italic">- Supply Chain Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Logistics Operations</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about our Intelligent Logistics solutions and how they can enhance your operational efficiency.
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

export default IntelligentLogistics;
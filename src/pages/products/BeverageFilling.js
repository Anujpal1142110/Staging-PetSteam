import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/n-cobin.jpg';
import img2 from '../../assets/images/n-bowler.jpg';
import img3 from '../../assets/images/n-filling.jpg';
import img4 from '../../assets/images/n-secndory.jpg';
import img5 from '../../assets/images/n-logistic.jpg';
import img6 from '../../assets/images/n-pretreatmet.jpg';
import img7 from '../../assets/images/newamstar.jpg';

const BeverageFilling = () => {
  // State for benefits tab selection
  const [activeTab, setActiveTab] = useState('main');

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative py-20">
        <img 
          src={img7} 
          alt="NewamStar Banner" 
          className="w-full h-auto"
        />
      </section>

      {/* Partner Information Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-uppercase mb-4">Newamstar –</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Newamstar is a company focusing on integrated solutions for smart factories of liquid products. We as the sales and Service partner of Newamstar for Indian market committed to providing comprehensive services for smart factories with production and storage integrated solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since its founding, Newamstar, under the concept of "Driving development through innovation and winning the market with quality", has been providing global customers in the five fields of beverages, dairy, liquors, condiments and daily chemicals with complete sets of intelligent equipment and comprehensive solutions for water treatment, pre-distribution, blowing, filling, secondary packaging, handling robots, intelligent stereo warehouses, etc. We also provide users with planning, designing and implementation of smart factory integration projects. From product recipe, three-dimensional bottle design to factory overall planning, and from key equipment R&D, software platform customization & development to full life cycle service of engineering projects, we are serving the customer like Coke, Nestle, Pepsico, Dali, C'estbon, Ganten, COFCO, Nice and other famous brands.
            </p>
          </div>
        </div>
      </section>

      {/* We with our Partner offer Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">We with our Partner offer –</h2>
          
          {/* Combiblock Section */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Combiblock</h3>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Starbloc</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Bottled Water Combiblock</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Big-Container Combiblock</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Aseptic Combiblock</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Ultra-clean Combiblock</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">CSD Combiblock</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Hot-fill Combiblock</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Non-beverage Combiblock</span>
                </li>
              </ul>
              <Link 
                to="/products/combiblock"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
            <div className="md:w-1/3">
              <img 
                src={img1} 
                alt="Combiblock System" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          
          {/* Blowing System */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 md:order-1 md:pl-8 mb-6 md:mb-0 order-2">
              <img 
                src={img2} 
                alt="Blowing System" 
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Blowing System</h3>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Bottle Blower</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Big-container Blower</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Gallon Blower</span>
                </li>
              </ul>
              <Link 
                to="/products/blowing-system"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
          </div>
          
          {/* Filling System */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Filling System</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Aseptic Filling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Ultra-clean Filling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Hot Filling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Water Filling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Gallon-Water Filling</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">CSD Filling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Liquor Filling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Condiment Filling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Edible Oil Filling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Daily Chemical Product Filling</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Link 
                  to="/products/filling-system"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src={img3} 
                alt="Filling System" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          
          {/* Secondary Packaging System */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 md:order-1 md:pl-8 mb-6 md:mb-0 order-2">
              <img 
                src={img4} 
                alt="Secondary Packaging System" 
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Secondary Packaging System</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Conveyor System</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Bottle Warmer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Bottle Tilting System</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Shower Cooling Tunnel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Labeler</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Film Wrapper</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Carton Wrapper</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Starpack</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Sorting Robot</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Robot Encaser</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Robot Palletizer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-orange-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Mechanical Palletizer</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Link 
                  to="/products/secondary-packaging-system"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
          
          {/* Intelligent Logistics */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Intelligent Logistics</h3>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Intelligent Warehouse</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">RGV(Rail Guided Vehicle)</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">AGV(Automated Guided Vehicle)</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">WMS(Warehouse Management System)</span>
                </li>
              </ul>
              <Link 
                to="/products/intelligent-logistics"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
            <div className="md:w-1/3">
              <img 
                src={img5} 
                alt="Intelligent Logistics" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          
          {/* Pretreatment System */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 md:order-1 md:pl-8 mb-6 md:mb-0 order-2">
              <img 
                src={img6} 
                alt="Pretreatment System" 
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Pretreatment System</h3>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Water Treatment System</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Processing System</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">UHT System</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">CIP System</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">COP/SOP System</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Disinfectant Blending System</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Carbon Mixer</span>
                </li>
              </ul>
              <Link 
                to="/products/pretreatment-system"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Make Us Different Section with Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-700 text-uppercase">WHAT MAKE US DIFFERENT?</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap mb-8">
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'main' 
                ? 'border border-orange-500 text-orange-600 bg-white' 
                : 'text-gray-600 hover:text-orange-500'}`}
              onClick={() => setActiveTab('main')}
            >
              Jiansu Newamstar Packaging Machinery Company, limited
            </button>
          </div>
          
          <div className="border-t border-gray-200 mb-6"></div>
          
          {/* Main Benefits */}
          {activeTab === 'main' && (
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Newamstar is devoted in providing customized production and storage integrated turn-key solution and all kinds of beverage product packaging solution for global customers.</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Leading supplier in liquid packaging industry in the world.</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Wide Service Network and spare part Supply.</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Approved by Major Beverage Industry Leaders.</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Best price to performance machine offering</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Offer short delivery of Machines & Complete solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">32+ years of expertise in liquid filling line system</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Technology leader in Aseptic filling line</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Secondery line equipment can be developed and customized as per customer need</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Newamstar offers lowest cost of machine maintenance</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Manufacturing Capabilities?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about our NewamStar systems and how they can enhance your production processes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Get a Quote
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BeverageFilling;

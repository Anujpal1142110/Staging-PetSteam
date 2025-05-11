import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images
import eisbarBanner from '../../assets/images/eisbaer.jpg';
import materialDryer from '../../assets/images/PET-material-lab-equipment.jpg';
import dehumidificationSystem from '../../assets/images/Drying-dehumidification-system.jpg';
import petCrystalizer from '../../assets/images/eisbaer.jpg';
import coolingSystem from '../../assets/images/eisbaer.jpg';
import mixingUnit from '../../assets/images/eisbaer.jpg';

const DryingSystem = () => {
  // State for tab selection
  const [activeTab, setActiveTab] = useState('features'); // 'features', 'applications', or 'specifications'
  const [activeInfoTab, setActiveInfoTab] = useState('company'); // 'company' or 'features'

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20">
        <img 
          src={eisbarBanner} 
          alt="EISBAR Banner" 
          className="w-full h-auto"
        />
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">EISBAR - <span className="text-red-700">Sustainable systems for the Plastics Industry</span></h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Eisbär Trockentechnik GmbH is an international company active in the area of systems engineering for the plastics 
              and recycling industry as well as building dehumidification and rehabilitation.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Whether you're an injection moulder, extruder, blow moulder, PSI offers an extensive range of high quality products 
              for Material Drying systems. If you need Mold dehumidification Systems, Material drying and conveying system, 
              PET Crystalizer, Cap cooling system, Mixing and dosing Unit, Lift Cooler, & Cooling System for Blow Moulds – 
              PSI: An Exclusive sales and Service partner of Eisbar has the perfect component solutions for you.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Equipment Category</h3>
            
            {/* Material Drying Systems */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Material Drying Systems</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Compact Dryers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Central Drying Systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Mobile Dryers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Energy-saving Systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High-performance Dryers</span>
                    </li>
                  </ul>
                  <Link 
                    to="/know-more-material-drying"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={materialDryer} 
                  alt="Material Drying Systems" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Dehumidification Systems */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Mold Dehumidification Systems</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Mold Dehumidifiers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Temperature Controllers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Multi-Circuit Systems</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Compact Units</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Mobile Solutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Custom Configurations</span>
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to="/know-more-dehumidification"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={dehumidificationSystem} 
                  alt="Mold Dehumidification Systems" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* PET Crystalizer */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">PET Crystalizer</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Standard Crystallizers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High-performance Models</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Integrated Systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Energy-efficient Solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Compact Designs</span>
                    </li>
                  </ul>
                  <Link 
                    to="/know-more-pet-crystalizer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={petCrystalizer} 
                  alt="PET Crystalizer" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Cooling Systems */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Cooling Systems</h4>
                  <p className="text-gray-700 mb-6">
                    Our cooling systems for blow molds and cap cooling provide efficient temperature control to ensure 
                    optimal production conditions and product quality. The systems are designed for energy efficiency 
                    and reliable operation in continuous production environments.
                  </p>
                  <Link 
                    to="/know-more-cooling-systems"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={coolingSystem} 
                  alt="Cooling Systems" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Mixing and Dosing Units */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Mixing and Dosing Units</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Gravimetric Dosing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Volumetric Dosing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Batch Blenders</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Continuous Mixers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Color Masterbatch Units</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Multi-component Systems</span>
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to="/know-more-mixing-units"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={mixingUnit} 
                  alt="Mixing and Dosing Units" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* What Makes Us Different Section with Tabs */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">WHAT MAKES US DIFFERENT?</h3>
              
              {/* Tabs */}
              <div className="flex flex-wrap border-b border-gray-200 mb-8">
                <button 
                  className={`py-3 px-6 font-medium ${activeInfoTab === 'company' 
                    ? 'border-b-2 border-red-500 text-red-600' 
                    : 'text-gray-600 hover:text-red-500'}`}
                  onClick={() => setActiveInfoTab('company')}
                >
                  EISBAR Company
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeInfoTab === 'features' 
                    ? 'border-b-2 border-red-500 text-red-600' 
                    : 'text-gray-600 hover:text-red-500'}`}
                  onClick={() => setActiveInfoTab('features')}
                >
                  System Features
                </button>
              </div>
              
              {/* Company Tab */}
              {activeInfoTab === 'company' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">International expertise in plastics processing technology</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">German-engineered systems with superior quality standards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Focus on energy efficiency and sustainable production</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Comprehensive service network with experienced technical support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Continuous innovation and development of new solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Custom-tailored systems designed for specific customer requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">PSI as exclusive sales and service partner ensures comprehensive local support</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {/* Features Tab */}
              {activeInfoTab === 'features' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-4">Our drying systems offer significant advantages:</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Energy-efficient operation with heat recovery systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Advanced control systems for precise process management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Low maintenance requirements with easy-access components</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Robust construction for long service life in industrial environments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Modular design for easy system expansion</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Intelligent networking capabilities for Industry 4.0 integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Optimized drying performance for high-quality end products</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-600 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Reduced energy consumption compared to conventional systems</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Product Features Section with Tabs */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Equipment Information</h3>
              
              {/* Tabs */}
              <div className="flex flex-wrap border-b border-gray-200 mb-8">
                <button 
                  className={`py-3 px-6 font-medium ${activeTab === 'features' 
                    ? 'border-b-2 border-red-500 text-red-600' 
                    : 'text-gray-600 hover:text-red-500'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Key Features
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeTab === 'applications' 
                    ? 'border-b-2 border-red-500 text-red-600' 
                    : 'text-gray-600 hover:text-red-500'}`}
                  onClick={() => setActiveTab('applications')}
                >
                  Applications
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeTab === 'specifications' 
                    ? 'border-b-2 border-red-500 text-red-600' 
                    : 'text-gray-600 hover:text-red-500'}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Technical Specifications
                </button>
              </div>
              
              {/* Features Tab */}
              {activeTab === 'features' && (
                <div>
                  <p className="text-gray-700 mb-6">
                    EISBAR drying systems are designed and manufactured to deliver exceptional performance in plastics processing applications. 
                    Our attention to detail and commitment to quality ensure reliable and efficient operation.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Equipment Quality Features</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Energy-Efficient Design</h5>
                          <p className="text-gray-700">Advanced heat recovery systems minimize energy consumption and operational costs.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Precision Control Systems</h5>
                          <p className="text-gray-700">Intuitive interfaces with advanced controls for precise process management.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Industrial-Grade Construction</h5>
                          <p className="text-gray-700">Premium materials and engineering for long-term reliability in demanding environments.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-red-600 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Modular System Architecture</h5>
                          <p className="text-gray-700">Flexible configurations allow for customization and future expansion.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-800 mb-2">European Engineering</h5>
                      <p className="text-gray-700">
                        Designed according to European engineering standards for precision, reliability, and durability.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-800 mb-2">Customizable Configurations</h5>
                      <p className="text-gray-700">
                        Adaptable to various processing requirements with customizable parameters and components.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-800 mb-2">Comprehensive Support</h5>
                      <p className="text-gray-700">
                        Expert technical support, maintenance services, and operator training available through PSI.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <div>
                  <p className="text-gray-700 mb-6">
                    EISBAR drying systems are designed for a wide range of applications in plastics processing, with solutions for various materials and production environments.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Material Applications</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">PET processing</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Hygroscopic polymers (PA, PC, PBT)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Engineering plastics</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Biodegradable materials</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Recycled materials</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Process Applications</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Injection molding</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Blow molding</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Extrusion</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">PET preform production</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Recycling operations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Industry Applications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-2">Packaging Industry</h5>
                        <p className="text-gray-700">
                          Complete drying solutions for bottle manufacturers and packaging producers.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-2">Automotive Sector</h5>
                        <p className="text-gray-700">
                          High-performance systems for technical parts and engineering components.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-2">Medical Industry</h5>
                        <p className="text-gray-700">
                          Precision drying systems for medical-grade plastics and components.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Global Applications</h4>
                    <p className="text-gray-700 mb-4">
                      EISBAR drying systems are used by leading manufacturers and plastics processors worldwide.
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-800 mb-3">Success Stories</h5>
                      <p className="text-gray-700 mb-4"></p>
                      
                      <h5 className="font-bold text-gray-800 mb-3">Success Stories</h5>
                      <p className="text-gray-700 mb-4">
                        Our customers have reported significant improvements after implementing EISBAR systems:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Energy consumption reduced by up to 35%</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Material waste decreased by up to 20%</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Production cycle times improved by 15%</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Enhanced product quality with consistent drying parameters</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Specifications Tab */}
              {activeTab === 'specifications' && (
                <div>
                  <p className="text-gray-700 mb-6">
                    EISBAR drying systems are engineered to the highest standards, using premium components and precision manufacturing processes.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Material Dryer Specifications</h4>
                    
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Model</th>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Capacity Range</th>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Drying Temperature</th>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Air Flow</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Compact Series</td>
                            <td className="py-3 px-4 border-b border-gray-200">10-100 kg/h</td>
                            <td className="py-3 px-4 border-b border-gray-200">50°C to 180°C</td>
                            <td className="py-3 px-4 border-b border-gray-200">30-100 m³/h</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Standard Series</td>
                            <td className="py-3 px-4 border-b border-gray-200">80-300 kg/h</td>
                            <td className="py-3 px-4 border-b border-gray-200">50°C to 180°C</td>
                            <td className="py-3 px-4 border-b border-gray-200">80-300 m³/h</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Advanced Series</td>
                            <td className="py-3 px-4 border-b border-gray-200">250-800 kg/h</td>
                            <td className="py-3 px-4 border-b border-gray-200">50°C to 200°C</td>
                            <td className="py-3 px-4 border-b border-gray-200">250-800 m³/h</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Industrial Series</td>
                            <td className="py-3 px-4 border-b border-gray-200">750-2000 kg/h</td>
                            <td className="py-3 px-4 border-b border-gray-200">50°C to 200°C</td>
                            <td className="py-3 px-4 border-b border-gray-200">750-2000 m³/h</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">Custom Systems</td>
                            <td className="py-3 px-4">Up to 5000 kg/h</td>
                            <td className="py-3 px-4">50°C to 200°C</td>
                            <td className="py-3 px-4">Custom configuration</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Dehumidification System Specifications</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Dew Point Range: -20°C to -65°C</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Process Air Temperature: Up to 180°C</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Air Flow Range: 30-2000 m³/h</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Available with Molecular Sieve Technology</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Regeneration: Automatic dual-bed systems</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Control System: PLC with touchscreen interface</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">PET Crystallizer Specifications</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Capacity Range: 50-2000 kg/h</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Operating Temperature: 160-180°C</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Crystallization Time: 20-40 minutes</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Agitation System: Horizontal or vertical</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Heating: Electric or gas options</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-red-600 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Control System: Automatic with recipe management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">General System Specifications</h4>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Parameter</th>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Specification</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Power Supply</td>
                            <td className="py-3 px-4 border-b border-gray-200">380-420V, 50/60Hz, 3-phase (configurable)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Control System</td>
                            <td className="py-3 px-4 border-b border-gray-200">Siemens PLC with HMI touchscreen interface</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Communication</td>
                            <td className="py-3 px-4 border-b border-gray-200">Modbus, Profinet, OPC-UA options available</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Insulation</td>
                            <td className="py-3 px-4 border-b border-gray-200">High-efficiency thermal insulation on all hot components</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Safety Systems</td>
                            <td className="py-3 px-4 border-b border-gray-200">Multiple temperature sensors, pressure controls, emergency stops</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Operating Environment</td>
                            <td className="py-3 px-4 border-b border-gray-200">5°C to 40°C ambient temperature, up to 80% humidity</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">Warranty Period</td>
                            <td className="py-3 px-4">24 months standard, extended options available</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Call to Action */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm text-center mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to Enhance Your Plastics Processing Capabilities?</h3>
              <p className="text-gray-700 mb-6">
                Contact our team of specialists today to discuss your specific requirements and discover how EISBAR drying systems 
                can optimize your production processes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded transition-colors duration-300"
                >
                  Request a Quote
                </Link>
                <Link 
                  to="/download"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition-colors duration-300"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">How do I determine the right drying system size for my operation?</h4>
                  <p className="text-gray-700">
                    Sizing depends on your material throughput, polymer type, and moisture content requirements. Our technical team can perform a detailed 
                    analysis of your specific needs to recommend the optimal system configuration. Factors considered include production volume, 
                    material type, and facility constraints.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">What installation and support services are provided?</h4>
                  <p className="text-gray-700">
                    PSI, as EISBAR's exclusive partner, provides comprehensive installation, startup, and operator training services. 
                    Our technicians ensure your system is properly integrated with your existing processes and optimized for maximum 
                    efficiency. Ongoing maintenance programs and emergency support are also available.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">How energy-efficient are EISBAR drying systems?</h4>
                  <p className="text-gray-700">
                    EISBAR systems incorporate multiple energy-saving technologies, including heat recovery, adaptive process control, 
                    and high-efficiency components. Compared to conventional dryers, our systems typically reduce energy consumption 
                    by 20-35%, depending on the application and operating conditions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Can EISBAR systems be integrated with our existing production line?</h4>
                  <p className="text-gray-700">
                    Yes, EISBAR systems are designed with flexibility in mind. They can be seamlessly integrated with your existing 
                    production equipment and control systems. We offer various communication protocols and customized interfaces to 
                    ensure compatibility with your current infrastructure.
                  </p>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </section>
    </>
  );
};

export default DryingSystem;
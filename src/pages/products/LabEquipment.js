import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Placeholder for actual image imports
import zonwoBanner from '../../assets/images/zonwo-banner.jpg';
import viscometer from '../../assets/images/Ubbelohde-Viscometer.jpg';
import bottleTester from '../../assets/images/bottle-tester.jpg';
import preformTester from '../../assets/images/performer-tester.jpg';
import gasChromatograph from '../../assets/images/Gas-Chromatograph.jpg';
import samplePreparation from '../../assets/images/Constant-water-bath.jpg';
import spectrophotometer from '../../assets/images/Spectrophotometer.jpg';

const LabEquipment = () => {
  // State for tab selection
  const [activeTab, setActiveTab] = useState('features'); // 'features', 'applications', or 'specifications'
  const [activeInfoTab, setActiveInfoTab] = useState('company'); // 'company' or 'preform'

  return (
    <>
      {/* Hero Banner Section */}
<section
  className="relative bg-fixed bg-center bg-cover h-64 md:h-96"
  style={{ backgroundImage: `url(${zonwoBanner})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    <h1 className="text-white text-3xl md:text-5xl font-bold">
      Beverage Filling
    </h1>
  </div>
</section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">ZONWON - Laboratory Testing Excellence</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We introduce the world's leading technology for Laboratory testing equipment for Polymer Material and Liquid testing. 
              From Zonwon we offer IV Tester and AA Analyser of high-standard designed in Germany, our range of IV testers starts from 
              Manual, Semi-automatic, and fully automatic - apart from Testing equipment we also offer other Laboratory peripherals 
              for sample preparation, testing and cleaning.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Equipment Category</h3>
            
            {/* Ubbelohde Viscometer */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Ubbelohde Viscometer</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS100 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS200 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS300 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS400 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS800 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS800H Series</span>
                    </li>
                  </ul>
                  <Link 
                    to="/know-more-viscometer"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={viscometer} 
                  alt="Ubbelohde Viscometer" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Bottle Test Instruments */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Bottle Test Instruments</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Bottle Size Tester</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Height Scale</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Verticality Tester</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Top Load Meter</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Balance DTY-B5000</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Sealing Performance Tester</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Humidity Chamber</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Refrigerator</span>
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to="/know-more-bottle-test-instruments"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={bottleTester} 
                  alt="Bottle Test Instruments" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Preform Test Instruments */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Preform Test Instruments</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Balance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Profile Projector</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">One button profile projector AY-100</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Verticality tester</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Wall thickness tester (Preform)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Inside Diameter of neck finish Tester</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Light Box T60</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Stress test (Polariscope Strain Viewer)</span>
                    </li>
                  </ul>
                  <Link 
                    to="/know-more-preform-test"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={preformTester} 
                  alt="Preform Test Instruments" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* GC112N Gas Chromatograph */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">GC112N Gas Chromatograph</h4>
                  <p className="text-gray-700 mb-6">
                    GC112N Gas chromatograph is one of widely used analytical instruments. 
                    It has become an ideal analytical instrument for separation or analysis in various fields.
                  </p>
                  <Link 
                    to="/know-more-chromatograph"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={gasChromatograph} 
                  alt="GC112N Gas Chromatograph" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            {/* Sample Preparation Equipment */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Sample Preparation Equipment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Polymer dissolver</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Pipe Machine</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Constant water bath T25</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Density Meter</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">PET standard chips</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Balance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Moisture meter</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Oven</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Testing necessary accessories</span>
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to="/know-more-sample-preparation"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={samplePreparation} 
                  alt="Sample Preparation Equipment" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Spectrophotometer */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Spectrophotometer</h4>
                  <p className="text-gray-700 mb-6">
                    ZonwonCS-820P is a smart, simple operation and highly precise spectrophotometer. 
                    It adopts 7 inches touch screen, full wavelength range, Android operating system.
                    Illumination: reflectance D/8° and transmittance D/0°(UV included / UV excluded), 
                    high accuracy for color measurement, large storage memory, PC software.
                  </p>
                  <Link 
                    to="/know-more-spectrophotometer"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={spectrophotometer} 
                  alt="Spectrophotometer" 
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
                    ? 'border-b-2 border-green-500 text-green-600' 
                    : 'text-gray-600 hover:text-green-500'}`}
                  onClick={() => setActiveInfoTab('company')}
                >
                  ZONWON Company
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeInfoTab === 'preform' 
                    ? 'border-b-2 border-green-500 text-green-600' 
                    : 'text-gray-600 hover:text-green-500'}`}
                  onClick={() => setActiveInfoTab('preform')}
                >
                  Laboratory Equipment
                </button>
              </div>
              
              {/* Company Tab */}
              {activeInfoTab === 'company' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">World's leading technology for laboratory testing equipment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High-standard equipment designed in Germany</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Comprehensive range of testing equipment from manual to fully automatic</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Global service network with experienced technical support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Trusted by leading manufacturers in over 50 countries</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Continuous innovation and development of new testing solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Comprehensive expertise in polymer material and liquid testing</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {/* Equipment Tab */}
              {activeInfoTab === 'preform' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-4">Our laboratory equipment offers significant advantages:</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High precision and accuracy in testing results</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Easy operation with intuitive interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Low maintenance requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Robust construction for long service life</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Comprehensive data analysis capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Compliance with international testing standards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Complete documentation for quality control</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Seamless integration with laboratory information systems</span>
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
                    ? 'border-b-2 border-green-500 text-green-600' 
                    : 'text-gray-600 hover:text-green-500'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Key Features
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeTab === 'applications' 
                    ? 'border-b-2 border-green-500 text-green-600' 
                    : 'text-gray-600 hover:text-green-500'}`}
                  onClick={() => setActiveTab('applications')}
                >
                  Applications
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeTab === 'specifications' 
                    ? 'border-b-2 border-green-500 text-green-600' 
                    : 'text-gray-600 hover:text-green-500'}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Technical Specifications
                </button>
              </div>
              
              {/* Features Tab */}
              {activeTab === 'features' && (
                <div>
                  <p className="text-gray-700 mb-6">
                    ZONWON laboratory equipment is designed and manufactured to deliver exceptional performance in testing applications. 
                    Our attention to detail and commitment to quality ensure reliable and accurate test results.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Equipment Quality Features</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">High Precision Measurement</h5>
                          <p className="text-gray-700">Advanced sensor technology ensures accurate and reproducible results.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">User-Friendly Interface</h5>
                          <p className="text-gray-700">Intuitive controls and displays for easy operation.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Robust Construction</h5>
                          <p className="text-gray-700">Premium materials and engineering for long-term reliability in laboratory environments.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Advanced Data Management</h5>
                          <p className="text-gray-700">Comprehensive data collection, storage, and export capabilities.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-800 mb-2">German Engineering</h5>
                      <p className="text-gray-700">
                        Designed according to German engineering standards for precision, reliability, and durability.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-800 mb-2">Customizable Options</h5>
                      <p className="text-gray-700">
                        Adaptable to various testing requirements with customizable parameters and accessories.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-800 mb-2">Comprehensive Support</h5>
                      <p className="text-gray-700">
                        Expert technical support, maintenance services, and operator training available worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <div>
                  <p className="text-gray-700 mb-6">
                    ZONWON laboratory equipment is designed for a wide range of applications in materials testing, quality control, and research environments.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Polymer Testing</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Viscosity determination</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Intrinsic viscosity measurement</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Molecular weight analysis</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Polymer degradation studies</span>
                        </li>
                        /* Fix for Polymer Testing section in Applications tab */

                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Additive content determination</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Packaging Quality Control</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Bottle testing and verification</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Preform quality evaluation</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Container wall thickness analysis</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Dimensional stability testing</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Top load and crush resistance measurement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Industry Applications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-2">Beverage Industry</h5>
                        <p className="text-gray-700">
                          Complete testing solutions for PET bottle manufacturers and beverage fillers.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-2">Polymer Producers</h5>
                        <p className="text-gray-700">
                          Quality control equipment for resin manufacturers and compounders.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-2">Research Institutions</h5>
                        <p className="text-gray-700">
                          Analytical instruments for academic and industrial research laboratories.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Global Applications</h4>
                    <p className="text-gray-700 mb-4">
                      ZONWON laboratory equipment is used by leading manufacturers, research centers, and quality control laboratories worldwide.
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-800 mb-3">Success Stories</h5>
                      <p className="text-gray-700 mb-4">
                        Our customers have reported significant improvements after implementing ZONWON equipment:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Increased testing throughput by up to 40%</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Improved measurement precision by 25%</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Reduced calibration and maintenance time by 30%</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Enhanced quality control with comprehensive test data</span>
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
                    ZONWON laboratory equipment is engineered to the highest standards, using premium components and precision manufacturing processes.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Ubbelohde Viscometer Specifications</h4>
                    
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Model</th>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Automation Level</th>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Sample Capacity</th>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Temperature Range</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">IVS100 Series</td>
                            <td className="py-3 px-4 border-b border-gray-200">Manual</td>
                            <td className="py-3 px-4 border-b border-gray-200">1 Sample</td>
                            <td className="py-3 px-4 border-b border-gray-200">25°C to 150°C</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">IVS200 Series</td>
                            <td className="py-3 px-4 border-b border-gray-200">Semi-automatic</td>
                            <td className="py-3 px-4 border-b border-gray-200">2 Samples</td>
                            <td className="py-3 px-4 border-b border-gray-200">25°C to 150°C</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">IVS400 Series</td>
                            <td className="py-3 px-4 border-b border-gray-200">Fully Automatic</td>
                            <td className="py-3 px-4 border-b border-gray-200">4 Samples</td>
                            <td className="py-3 px-4 border-b border-gray-200">25°C to 150°C</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">IVS800 Series</td>
                            <td className="py-3 px-4 border-b border-gray-200">Fully Automatic</td>
                            <td className="py-3 px-4 border-b border-gray-200">8 Samples</td>
                            <td className="py-3 px-4 border-b border-gray-200">25°C to 150°C</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">IVS800H Series</td>
                            <td className="py-3 px-4">Fully Automatic with Hopper</td>
                            <td className="py-3 px-4">8 Samples with Auto-feed</td>
                            <td className="py-3 px-4">25°C to 150°C</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Gas Chromatograph Specifications</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Temperature Range: 5°C to 450°C</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Temperature Control: ±0.1°C</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Detector Types: FID, TCD, ECD (optional)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Injection Ports: 1-2 (configurable)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Column Capacity: Up to 2 columns</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Software: Windows-based control system</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Spectrophotometer Specifications</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Wavelength Range: 360-750nm</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Wavelength Accuracy: ±0.2nm</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Photometric Range: 0-200% Reflectance</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Measurement Geometry: d/8°</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Display: 7-inch touch screen</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Operating System: Android</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Performance Specifications</h4>
                    
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
                            <td className="py-3 px-4 border-b border-gray-200">Measurement Accuracy</td>
                            <td className="py-3 px-4 border-b border-gray-200">±0.5% across all equipment categories</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Measurement Repeatability</td>
                            <td className="py-3 px-4 border-b border-gray-200">±0.2% across all equipment categories</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Power Requirements</td>
                            <td className="py-3 px-4 border-b border-gray-200">220V-240V, 50/60Hz (configurable)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Data Interface</td>
                            <td className="py-3 px-4 border-b border-gray-200">USB, Ethernet, RS-232 (model dependent)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Calibration Interval</td>
                            <td className="py-3 px-4 border-b border-gray-200">12 months recommended</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Operating Temperature</td>
                            <td className="py-3 px-4 border-b border-gray-200">15°C to 30°C</td>
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
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to Enhance Your Laboratory Testing Capabilities?</h3>
              <p className="text-gray-700 mb-6">
                Contact our team of specialists today to discuss your specific requirements and discover how ZONWON laboratory equipment can optimize your testing processes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact"
                  className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded transition-colors duration-300"
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
                  <h4 className="font-bold text-gray-800 mb-2">What is the typical lead time for laboratory equipment?</h4>
                  <p className="text-gray-700">
                    Lead times vary depending on the equipment type and customization requirements, but typically range from 4-8 weeks. Expedited options are available for urgent needs.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Do you provide installation and training services?</h4>
                  <p className="text-gray-700">
                    Yes, we offer comprehensive installation, calibration, and operator training services worldwide. Our technical specialists ensure your team is fully prepared to utilize all equipment features.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">What maintenance support does ZONWON provide?</h4>
                  <p className="text-gray-700">
                    We offer various maintenance packages including preventive maintenance visits, remote diagnostics, parts replacement, and emergency support. Service contracts can be tailored to your specific requirements.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Are your instruments compliant with international standards?</h4>
                  <p className="text-gray-700">
                    Yes, ZONWON equipment is designed to comply with relevant ISO, ASTM, and other international testing standards. Certification documentation is provided with each instrument.
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

export default LabEquipment;
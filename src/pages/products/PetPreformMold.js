import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moldImg from '../../assets/images/gdxl.jpeg';
import moldDesignImg from '../../assets/images/gdxl2.jpeg';
import blowMoldsImg from '../../assets/images/gdxl1-2.jpeg';
import closureMoldsImg from '../../assets/images/gdxl3.jpeg';
import hotRunnerImg from '../../assets/images/gdxl4.jpeg';

const PetPreformMold = () => {
  // State for benefits tab selection
  const [activeTab, setActiveTab] = useState('features'); // 'features', 'applications', or 'specifications'
  const [activeInfoTab, setActiveInfoTab] = useState('company'); // 'company' or 'preform'

  return (
    <>
      {/* Hero Banner */}
     <section className="relative py-20">
        <img 
          src={moldImg} 
          alt="NewamStar Banner" 
          className="w-full h-auto"
        />
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">GDXL - Innovation in PET Preform Molds</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              GDXL Precise Machinery Co. Ltd (GDXL) is a high-tech enterprise providing molding equipment and services to the PET plastics industry. We design, manufacture, research and develop professional PET molds, including blow molds, preform injection molds and cap compression and injection molds.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Trust, Precision, Compatibility for Short cycle time and long life is the key of our leading growth.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When it comes to GDXL, PET Stream Inc. is the leading Business Partner for South Asia – India, Bangladesh, Nepal & Sri Lanka, also we are making our footprint in the continent of Africa for few of our leading Customers we are responsible for world wide.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We with our Partner GDXL offer Satisfied prefabrication under Customer's exact demands in Liquid Container Package.
            </p>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Our Expertise</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="text-blue-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Advanced Design</h4>
                  <p className="text-gray-600">
                    State-of-the-art mold design utilizing the latest CAD/CAM technologies for optimal performance.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="text-blue-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Precision Manufacturing</h4>
                  <p className="text-gray-600">
                    High-precision machining and rigorous quality control for exceptional mold quality.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="text-blue-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Superior Performance</h4>
                  <p className="text-gray-600">
                    Optimized cooling and material distribution for fast cycles and consistent preforms.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Core Products Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Core Products</h3>
              
              {/* Preform Molds */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <img 
                    src={moldDesignImg} 
                    alt="Preform Molds" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-xl font-bold text-blue-700 mb-3">Preform Molds</h4>
                  <h6 className="font-semibold text-gray-700 mb-2">Preform Molds Is Applied To:</h6>
                  <p className="text-gray-700 mb-4">
                    32 cavities, 48 cavities, 56 cavities, 60 cavities, 72 cavities, 96 cavities, 128 cavities and 144 cavities;<br />
                    Neck finishes: φ28mm (1716、1810 and 1881), 26/22、29/25、30/25 and φ38mm etc.<br />
                    Applied to: HUSKY、UNIQUE、NETSTAL(and KM)、KATA
                  </p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300">
                    Get In Touch
                  </button>
                </div>
              </div>
              
              {/* Blow Molds */}
              <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
                <div className="md:w-1/2">
                  <img 
                    src={blowMoldsImg} 
                    alt="Blow Molds" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-xl font-bold text-blue-700 mb-3">Blow Molds</h4>
                  <h6 className="font-semibold text-gray-700 mb-2">Blow Molds Is Applied To:</h6>
                  <p className="text-gray-700 mb-4">
                    PET containers for beverage industry such as water bottle, CSD bottle, HR bottle, Aseptic bottle, etc.<br />
                    Various containers for the other industry, e.g. edible oil, condiment, cosmetic, protection product, and pharmaceutical etc.<br />
                    Different brands of two-step blow molding machines such as SIDEL, KRONES, KHS, TECH-LONGM, and NEWAMSTAR;<br />
                    Different brands of one-step blow molding machines such as SIPA, ASB, and AOKI;
                  </p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300">
                    Get In Touch
                  </button>
                </div>
              </div>
              
              {/* Closure Molds */}
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <img 
                    src={closureMoldsImg} 
                    alt="Closure Molds" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-xl font-bold text-blue-700 mb-3">Closure Molds</h4>
                  <h6 className="font-semibold text-gray-700 mb-2">Closure Molds Is Applied To:</h6>
                  <p className="text-gray-700 mb-4">
                    Various types of beverages such as water, juice, and tea, CSD soft drinks,<br />
                    Edible oil, cosmetics, health-care products, pharmaceutical and food etc.
                  </p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300">
                    Get In Touch
                  </button>
                </div>
              </div>
              
              {/* Hot Runner System */}
              <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
                <div className="md:w-1/2">
                  <img 
                    src={hotRunnerImg} 
                    alt="Hot Runner System" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-xl font-bold text-blue-700 mb-3">Hot Runner System</h4>
                  <h6 className="font-semibold text-gray-700 mb-2">Hot Runner Is Applied To:</h6>
                  <p className="text-gray-700 mb-4">
                    Suitable for perform injection machine and closure injection machine such as Husky, Nestal, KM and SIPA etc.<br />
                    The largest capacity of preform injection mold is 144 cavities, the largest capacity of closure injection mold is 96 cavities.
                  </p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
            {/* Video Section */}
            <div className="mb-12">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-96 rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/Kacv0wWB81w?si=s9SkC-N1ZMiKiD-s" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
            
            {/* What Makes Us Different Section with Tabs */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">WHAT MAKES US DIFFERENT?</h3>
              
              {/* Tabs */}
              <div className="flex flex-wrap border-b border-gray-200 mb-8">
                <button 
                  className={`py-3 px-6 font-medium ${activeInfoTab === 'company' 
                    ? 'border-b-2 border-orange-500 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-500'}`}
                  onClick={() => setActiveInfoTab('company')}
                >
                  GDXL Precise Machinery Company
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeInfoTab === 'preform' 
                    ? 'border-b-2 border-orange-500 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-500'}`}
                  onClick={() => setActiveInfoTab('preform')}
                >
                  GDXL Preform Mold
                </button>
              </div>
              
              {/* Company Tab */}
              {activeInfoTab === 'company' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High-tech enterprises of molding equipment & service to the PET plastic industry</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">GDXL was Founded in 1993 with its own R&D, developing more than 2000 projects every year</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">More than 60,000 cavities of GDXL molds are applied to global market</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Devoted, trustworthy and respected partner for our valuable customer</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">One of the best PET mold suppliers in the world</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Higher efficiency and longer life time is the key feature of GDXL mold</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Offer lowest cycle time with NETSTAL machine on any preform size and weight</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {/* Preform Tab */}
              {activeInfoTab === 'preform' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-4">Our customers include world's renowned preform convertor and beverage producer.<br/> GDXL preform molds offer preform of:</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">No crystallinity or scratches</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Minimal eccentricity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High surface quality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High Stability</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Low Acetaldehyde (AA) level</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Maximum energy effectiveness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Constant Weight</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Seamless parting lines</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Product Features Section with Tabs */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Product Information</h3>
              
              {/* Tabs */}
              <div className="flex flex-wrap border-b border-gray-200 mb-8">
                <button 
                  className={`py-3 px-6 font-medium ${activeTab === 'features' 
                    ? 'border-b-2 border-orange-500 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-500'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Key Features
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeTab === 'applications' 
                    ? 'border-b-2 border-orange-500 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-500'}`}
                  onClick={() => setActiveTab('applications')}
                >
                  Applications
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeTab === 'specifications' 
                    ? 'border-b-2 border-orange-500 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-500'}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Technical Specifications
                </button>
              </div>
              
              {/* Features Tab */}
              {activeTab === 'features' && (
                <div>
                  <p className="text-gray-700 mb-6">
                    GDXL preform molds are designed and manufactured to deliver exceptional performance in PET preform production. Our attention to detail and commitment to quality ensure that our molds produce preforms with superior characteristics.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Preform Quality Features</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">No crystallinity or scratches</h5>
                          <p className="text-gray-700">Our precision machining and polishing processes ensure perfect surface finish.</p>
                        </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-3">Cooling System</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="text-blue-500 mr-3 mt-1">✓</div>
                            <div>
                              <span className="font-semibold">Design:</span>
                              <span className="text-gray-700 ml-2">Optimized cooling channels for uniform temperature control</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="text-blue-500 mr-3 mt-1">✓</div>
                            <div>
                              <span className="font-semibold">Core Cooling:</span>
                              <span className="text-gray-700 ml-2">Bubbler or baffle system for efficient core cooling</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-3">Hot Runner System</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="text-blue-500 mr-3 mt-1">✓</div>
                            <div>
                              <span className="font-semibold">Types:</span>
                              <span className="text-gray-700 ml-2">Valve gate or thermal gate systems</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="text-blue-500 mr-3 mt-1">✓</div>
                            <div>
                              <span className="font-semibold">Suppliers:</span>
                              <span className="text-gray-700 ml-2">Compatible with leading hot runner suppliers</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Minimal eccentricity</h5>
                          <p className="text-gray-700">Precise alignment for consistent wall thickness distribution.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">High surface quality</h5>
                          <p className="text-gray-700">Mirror-finish cavity surfaces for optimal transparency and aesthetics.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">High stability</h5>
                          <p className="text-gray-700">Robust construction ensures long mold life and consistent performance.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Low Acetaldehyde (AA) level</h5>
                          <p className="text-gray-700">Optimized cooling and processing conditions minimize AA formation.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Constant weight</h5>
                          <p className="text-gray-700">Precise cavity dimensions ensure consistent preform weight.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-orange-500 mr-3 mt-1">➤</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Seamless parting lines</h5>
                          <p className="text-gray-700">Perfect mating surfaces minimize visible parting lines on finished preforms.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <img 
                        src={moldDesignImg} 
                        alt="Mold Design" 
                        className="w-full h-48 object-cover rounded mb-4"
                      />
                      <h5 className="font-bold text-gray-800 mb-2">Advanced Cooling Design</h5>
                      <p className="text-gray-700">
                        Optimized cooling channel layout for faster cycle times and consistent cooling.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <img 
                        src={closureMoldsImg} 
                        alt="Mold Manufacturing" 
                        className="w-full h-48 object-cover rounded mb-4"
                      />
                      <h5 className="font-bold text-gray-800 mb-2">Premium Materials</h5>
                      <p className="text-gray-700">
                        High-grade steel with special treatments for extended mold life.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <img 
                        src={hotRunnerImg} 
                        alt="Quality Testing" 
                        className="w-full h-48 object-cover rounded mb-4"
                      />
                      <h5 className="font-bold text-gray-800 mb-2">Rigorous Testing</h5>
                      <p className="text-gray-700">
                        Comprehensive inspection and testing before delivery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Quality Standards</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-3 mt-1">✓</div>
                        <span className="text-gray-700">100% cavity inspection before delivery</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-blue-500 mr-3 mt-1">✓</div>
                        <span className="text-gray-700">Detailed documentation and test reports</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <div>
                  <p className="text-gray-700 mb-6">
                    GDXL preform molds are designed for a wide range of applications in the beverage and packaging industries. Our molds are suitable for various preform sizes and bottle applications.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Beverage Containers</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Carbonated soft drinks</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Water bottles</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Juice containers</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Sports and energy drinks</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Hot-fill applications</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Non-Beverage Containers</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Food packaging</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Personal care products</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Household chemicals</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Pharmaceutical containers</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Wide-mouth jars</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Compatible Injection Molding Machines</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-2">HUSKY</h5>
                        <p className="text-gray-700">
                          Full compatibility with all HUSKY preform systems including HyPET and Index systems.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-2">NETSTAL</h5>
                        <p className="text-gray-700">
                          Optimized for NETSTAL PET-LINE machines for maximum efficiency.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h5 className="font-bold text-gray-800 mb-2">SIPA, KraussMaffei & Others</h5>
                        <p className="text-gray-700">
                          Compatible with all major injection molding machine brands for PET preform production.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Global Applications</h4>
                    <p className="text-gray-700 mb-4">
                      GDXL preform molds are used by leading PET converters and beverage producers worldwide. Our technology is trusted in more than 50 countries across six continents.
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                      <h5 className="font-bold text-gray-800 mb-3">Success Stories</h5>
                      <p className="text-gray-700 mb-4">
                        Our customers have reported significant improvements after switching to GDXL molds:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Up to 15% reduction in cycle time</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Extended mold life with over 10 million cycles</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Decreased energy consumption by up to 10%</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Improved preform quality and consistency</span>
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
                    GDXL preform molds are engineered to the highest standards, using premium materials and precision manufacturing processes. Below are the detailed technical specifications of our molds.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Materials & Construction</h4>
                    
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Component</th>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Material</th>
                            <th className="py-3 px-4 bg-gray-100 font-semibold text-gray-700 border-b border-gray-200 text-left">Treatment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Cavity Inserts</td>
                            <td className="py-3 px-4 border-b border-gray-200">Premium H13/P20 Steel</td>
                            <td className="py-3 px-4 border-b border-gray-200">Hardened to 48-52 HRC, Mirror Polished</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Core Inserts</td>
                            <td className="py-3 px-4 border-b border-gray-200">Premium H13/NAK80 Steel</td>
                            <td className="py-3 px-4 border-b border-gray-200">Hardened to 46-50 HRC, Nitrided</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Neck Ring Inserts</td>
                            <td className="py-3 px-4 border-b border-gray-200">Special Alloy Steel</td>
                            <td className="py-3 px-4 border-b border-gray-200">Hardened to 50-54 HRC, Special Coating</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Mold Base</td>
                            <td className="py-3 px-4 border-b border-gray-200">Aircraft-grade Aluminum/Steel</td>
                            <td className="py-3 px-4 border-b border-gray-200">Anodized/Heat Treated</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">Hot Runner Components</td>
                            <td className="py-3 px-4">Premium Steel & Copper Alloys</td>
                            <td className="py-3 px-4">Specialized Treatments for Wear Resistance</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Available Cavity Configurations</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">32 Cavities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">48 Cavities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">56 Cavities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">60 Cavities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">72 Cavities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">96 Cavities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">128 Cavities</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">144 Cavities</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-bold text-blue-700 mb-4">Available Neck Finishes</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">PCO 1810 (28mm)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">PCO 1881 (28mm)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Alaska (28mm)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">29/25mm Neck</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">30/25mm Neck</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">38mm Neck</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-orange-500 mr-3 mt-1">•</div>
                          <span className="text-gray-700">Custom neck finishes available</span>
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
                            <td className="py-3 px-4 border-b border-gray-200">Cycle Time</td>
                            <td className="py-3 px-4 border-b border-gray-200">Optimized for shortest cycle time based on preform weight</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Mold Life</td>
                            <td className="py-3 px-4 border-b border-gray-200">10+ million cycles guaranteed with proper maintenance</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Weight Consistency</td>
                            <td className="py-3 px-4 border-b border-gray-200">±0.1g variation between cavities</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Wall Thickness Variation</td>
                            <td className="py-3 px-4 border-b border-gray-200">Less than 0.05mm</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Surface Finish</td>
                            <td className="py-3 px-4 border-b border-gray-200">SPI-A1 to SPI-A2 finish</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 border-b border-gray-200">Cooling Efficiency</td>
                            <td className="py-3 px-4 border-b border-gray-200">Uniform cooling with less than 2°C temperature difference</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">AA Level</td>
                          <td className="py-3 px-4">Optimized for minimum AA formation (typically &lt; 3 ppm)</td>
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
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to Enhance Your PET Production?</h3>
              <p className="text-gray-700 mb-6">
                Contact our team of specialists today to discuss your specific requirements and discover how GDXL preform molds can optimize your production process.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded transition-colors duration-300"
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
                  <h4 className="font-bold text-gray-800 mb-2">What is the typical lead time for a new preform mold?</h4>
                  <p className="text-gray-700">
                    Lead times vary depending on complexity and cavity count, but typically range from 12-16 weeks from design approval to delivery. We can provide expedited timelines for urgent projects.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Can GDXL provide mold conversions for existing systems?</h4>
                  <p className="text-gray-700">
                    Yes, we specialize in converting existing molds to different neck finishes or to improve performance. Our conversion process typically takes 6-8 weeks and can significantly extend mold life.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">What maintenance support does GDXL provide?</h4>
                  <p className="text-gray-700">
                    We offer comprehensive maintenance support including regular service visits, spare parts supply, and emergency support. Our global service network ensures quick response times wherever your production is located.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">How do GDXL molds compare to competitors in terms of cycle time?</h4>
                  <p className="text-gray-700">
                    GDXL molds are designed for optimal thermal efficiency, typically achieving 5-15% faster cycle times compared to standard molds. This is achieved through advanced cooling channel design and premium materials.
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

export default PetPreformMold;
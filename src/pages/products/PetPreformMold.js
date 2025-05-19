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
      {/* Hero Banner with centered text */}
      <section className="relative">
        <div className="relative h-64 md:h-96">
          <img
            src={moldImg}
            alt="GDXL PET Preform Mold"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              GDXL – Innovation in PET Preform Molds
            </h1>
          </div>
        </div>
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
                    {/* icon */}
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
                    {/* icon */}
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
                    {/* icon */}
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
                    Suitable for preform injection machine and closure injection machine such as Husky, Netstal, KM and SIPA etc.<br />
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
              
              {/* Info Tabs */}
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
                      <span className="text-gray-700">High-tech enterprise of molding equipment & service to the PET plastic industry</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Founded in 1993 with its own R&D, developing over 2000 projects per year</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">60,000+ cavities of GDXL molds applied globally</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Devoted, trustworthy, respected partner for our customers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">One of the best PET mold suppliers in the world</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High efficiency and long mold life as key features</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Lowest cycle time on NETSTAL machines for any preform size</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {/* Preform Tab */}
              {activeInfoTab === 'preform' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-4">
                    Our customers include leading PET converters and beverage producers. GDXL preform molds offer:
                  </h5>
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
                      <span className="text-gray-700">High stability</span>
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
                      <span className="text-gray-700">Constant weight</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-orange-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Seamless parting lines</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Product Information Tabs */}
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
                  {/* ... full features content ... */}
                </div>
              )}

              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <div>
                  {/* ... full applications content ... */}
                </div>
              )}

              {/* Specifications Tab */}
              {activeTab === 'specifications' && (
                <div>
                  {/* ... full specifications content ... */}
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
                {/* ... FAQ items ... */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PetPreformMold;

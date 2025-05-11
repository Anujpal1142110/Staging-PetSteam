import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import injectionMoldingData from '../../data/products/injectionMolding';
import img1 from '../../assets/images/Injection-molding-machine.png';
import img2 from '../../assets/images/Pet-beverage-filling-line.png';
import img3 from '../../assets/images/pet-preforn-mold.png';
import img4 from '../../assets/images/PET-material-lab-equipment.jpg';
import img5 from '../../assets/images/Drying-dehumidification-system.jpg';
import img6 from '../../assets/images/caps-closures-mold.jpg';
import img7 from '../../assets/images/netstal-1.jpg';
const InjectionMolding = () => {
  // State for benefits tab selection
  const [activeTab, setActiveTab] = useState('med'); // 'pet', 'elios', or 'med'

  return (
    <>
      {/* Hero Banner Section with Application Icons */}
      {/* <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            
            
            <div className="md:w-1/2">
              <img 
                           src={img7} 
                alt="Netstal Injection Molding Machine" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section> */}
            <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img7})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">NETSTAL </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
           
          </p>
        </div>
      </section>

      {/* Partner Information Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">NETSTAL -</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In the field of custom molding machines, NETSTAL is the technology leader with high-performance machines that stand out in the market because of its manufacturing speed, perfect precision and maximum reliability. Strategic application fields are in the packaging, cups & closures, pharmaceutical, technical, beverage industry as well as in medical technology.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To secure your leading position as supplier to these markets you need machines that meet your market-specific requirements. In addition with 3E, system conditioning, real-time controls with Eventrics premium machinery and decades of experience. This combination gives you a valuable competitive edge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At PSI, we offer you tailored injection molding machines exclusively, along with training system and tools which gives you individually-relevant solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Machine Category Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-b pb-2">Machine category -</h2>
          
          {/* First Machine */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-800 mb-3">NETSTAL PET-LINE (1200-4000 kN)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With full compatibility with existing peripheral supply and other molding solutions, the PET-LINE makes switching to NETSTAL a breeze. The brand new PET-LINE also makes an impressive impact on its extremely-robust, highest-energy efficiency, optimized processing of PET and reliability in full continuous operation.
              </p>
              <Link 
                to="/products/pet-line"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
            <div className="md:w-1/3">
              <img 
                src={img1} 
                alt="NETSTAL PET-LINE Machine" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          
          {/* Second Machine */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 md:order-1 md:pl-8 mb-6 md:mb-0 order-2">
              <img 
                src={img2} 
                alt="NETSTAL ELION Machine" 
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <h3 className="text-xl font-bold text-blue-800 mb-3">NETSTAL ELION (800 - 4200 kN)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Powerful, fast, and precise injection molding machine.
              </p>
              <Link 
                to="/products/elion"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
          </div>
          
          {/* Third Machine */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-800 mb-3">NETSTAL ELION MEDICAL (800 - 2800 kN)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The ELION MEDICAL injection molding machines are the most widely used new standard of complex production lines for syringes, petri dishes, microplates, and all other plastic parts in medical technology.
              </p>
              <Link 
                to="/products/elion-medical"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
            <div className="md:w-1/3">
              <img 
                src={img3} 
                alt="NETSTAL ELION MEDICAL Machine" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          
          {/* Fourth Machine */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 md:order-1 md:pl-8 mb-6 md:mb-0 order-2">
              <img 
                 src={img4} 
                alt="NETSTAL ELIOS Machine" 
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <h3 className="text-xl font-bold text-blue-800 mb-3">NETSTAL ELIOS (6500 - 10000 kN)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Setting standards in the premium segment – Discover the ELIOS. Perfect results now available for high performance injection molding with its cutting-edge drive technology.
              </p>
              <Link 
                to="/products/elios"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integrated Benefits Section with Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">BENEFITS / WHAT MAKE US DIFFERENT?</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap mb-8">
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'pet' 
                ? 'border border-orange-500 text-orange-600 bg-white' 
                : 'text-gray-600 hover:text-orange-500'}`}
              onClick={() => setActiveTab('pet')}
            >
              For PET Machine
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'elios' 
                ? 'border border-orange-500 text-orange-600 bg-white' 
                : 'text-gray-600 hover:text-orange-500'}`}
              onClick={() => setActiveTab('elios')}
            >
              For ELIOS & ELION Or Non PET Machine
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'med' 
                ? 'border border-orange-500 text-orange-600 bg-white' 
                : 'text-gray-600 hover:text-orange-500'}`}
              onClick={() => setActiveTab('med')}
            >
              Elion Med Kit
            </button>
          </div>
          
          <div className="border-t border-gray-200 mb-6"></div>
          
          {/* Pet Machine Benefits */}
          {activeTab === 'pet' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-700">Benefits / What Make Us Different? (For PET Machine)</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Clamping force: 3000 kN, 4000 kN, 5000 kN</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Up to 144 cavities</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Electric clamping unit with 1.9 s lock-to-lock time</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Lateral post-mold cooling unit with up to 4 post-cooling stations</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Energy-efficient, two-stage injection unit</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">New PETX screw provides optimal processing of virgin PET, rPET and additives</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">aXos controller of the latest generation with innovative operating concept</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">SMART OPERATION for easier, safer and faster commissioning and production</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Lowest energy consumption in the market due to recuperation of kinetic energy</span>
                </li>
              </ul>
            </div>
          )}
          
          {/* ELIOS & ELION Benefits */}
          {activeTab === 'elios' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-700">Benefits / What Make Us Different? (For ELIOS & ELION Or Non PET Machine) –</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Range of clamping forces 1200 - 10000 kN</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Specialised electronic clamping device</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">High-performance injection units that are electric or hybrid</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Specialised adaptive drive systems</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Modular system</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Maximum energy effectiveness</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Absolute accuracy</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Reliability and excellence</span>
                </li>
              </ul>
            </div>
          )}
          
          {/* Elion Med Kit Benefits */}
          {activeTab === 'med' && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-700">Benefits / What Make Us Different? (Elion Med Kit) –</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Range of clamping forces: 800-2800 kN</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Electrical clamping apparatus for incredibly quick cycle times</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Integral force measurement for maximum shot-to-shot consistency and a stable part weight in an all-electric injection unit.</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">AXOS controller that is freely programmable for maximum flexibility and user-friendliness</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Due to the recovery of kinetic energy, there is maximum energy efficiency.</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Maximum system availability and dependability</span>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700 leading-relaxed">Intelligent Action: dependable integration of handling requirements into the machine controller</span>
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
            Contact our team to learn more about our injection molding machines and how they can enhance your production processes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Get a Quote
            </Link>
            <Link
              to="/services/project-design"
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

export default InjectionMolding;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// images
import img1 from '../../assets/images/Injection-molding-machine.png';
import img2 from '../../assets/images/Pet-beverage-filling-line.png';
import img3 from '../../assets/images/pet-preforn-mold.png';
import img4 from '../../assets/images/PET-material-lab-equipment.jpg';
import img5 from '../../assets/images/Drying-dehumidification-system.jpg';
import img6 from '../../assets/images/caps-closures-mold.jpg';
import img7 from '../../assets/images/netstal-1.jpg';

const InjectionMolding = () => {
  const [activeTab, setActiveTab] = useState('med'); // 'pet' | 'elios' | 'med'

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${img7})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">NETSTAL</h1>
        </div>
      </section>

      {/* Partner Info */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">NETSTAL –</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In the field of custom molding machines, NETSTAL is the technology leader with
            high-performance machines that stand out in the market because of their speed,
            precision, and reliability. Strategic application fields include packaging, cups &
            closures, pharmaceutical, technical, beverage, and medical technology.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To secure your leading position as a supplier to these markets you need machines that
            meet your market-specific requirements. Combined with 3E system conditioning, real-time
            Eventrics controls and decades of experience, NETSTAL gives you a valuable competitive
            edge.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At PSI, we offer tailored injection molding machines, training systems and tools to
            deliver individually-relevant solutions.
          </p>
        </div>
      </section>

      {/* Machine Categories */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 space-y-12">
          {/* PET-LINE */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">NETSTAL PET-LINE (1200–4000 kN)</h3>
              <p className="text-gray-700 mb-4">
                With full compatibility to existing peripherals, PET-LINE makes switching to
                NETSTAL a breeze—and offers extreme robustness, top energy efficiency and
                continuous-run reliability.
              </p>
              <Link
                to="/products/pet-line"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img src={img1} alt="NETSTAL PET-LINE" className="w-full h-auto rounded shadow" />
            </div>
          </div>

          {/* ELION */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img src={img2} alt="NETSTAL ELION" className="w-full h-auto rounded shadow" />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">NETSTAL ELION (800–4200 kN)</h3>
              <p className="text-gray-700 mb-4">Powerful, fast, and precise injection molding machine.</p>
              <Link
                to="/products/elion"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* ELION MEDICAL */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                NETSTAL ELION MEDICAL (800–2800 kN)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The ELION MEDICAL machines are the new standard for syringes, petri dishes,
                microplates and other medical parts.
              </p>
              <Link
                to="/products/elion-medical"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Know More
              </Link>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img src={img3} alt="NETSTAL ELION MEDICAL" className="w-full h-auto rounded shadow" />
            </div>
          </div>

          {/* ELIOS */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img src={img4} alt="NETSTAL ELIOS" className="w-full h-auto rounded shadow" />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">NETSTAL ELIOS (6500–10000 kN)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Premium-segment performance with cutting-edge drive technology.
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

      {/* Benefits Tabs (unchanged) */}
      <section className="py-12">
        {/* … your existing tabs markup … */}
      </section>

      
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Manufacturing Capabilities?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about our injection molding machines and how they can
            enhance your production processes.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium shadow-md transition-colors duration-300"
            >
              Get a Quote
            </Link>

            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-md font-medium transition-colors duration-300"
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

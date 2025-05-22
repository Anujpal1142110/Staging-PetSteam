import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import heroImg from '../../assets/images/how-banner.jpg';
import analyseImg from '../../assets/images/how-1.jpg';
import adviseImg from '../../assets/images/how-2.jpg';
import implementImg from '../../assets/images/how-3.jpg';
import supportImg from '../../assets/images/how-4.jpg';

const HowWeWork = () => {
  return (
    <>
      {/* Hero Banner Section */}
<section
  className="relative bg-fixed bg-center bg-cover h-64 md:h-96"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    <h1 className="text-white text-3xl md:text-5xl font-bold">
      Beverage Filling
    </h1>
  </div>
</section>


      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Your application, Our Competence</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Your reliable partner for first-class equipment and service need.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-gray-700 mb-6 max-w-4xl mx-auto">
              We're in the solutions business. Experience tells us that by working with you and 
              understanding your business, we can put the best systems, processes and partnerships in 
              place to respond to your unique challenges.
            </p>
          </div>

          {/* Four Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Step 1: Analyse */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Analyse</h3>
                <p className="text-gray-700 mb-4">
                  We analyse your project in depth so we truly understand your vision.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src={analyseImg} 
                  alt="Analyse" 
                  className="w-full h-64 md:h-auto object-cover"
                />
              </div>
            </div>

            {/* Step 2: Advise */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 md:w-2/3 order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Advise</h3>
                <p className="text-gray-700 mb-4">
                  Petstream scopes and scrutinises your project then recommends the equipment, 
                  partners and processes that will get the job done. Our engineers live and breathe 
                  product design and development.
                </p>
              </div>
              <div className="md:w-1/3 order-1 md:order-2">
                <img 
                  src={adviseImg} 
                  alt="Advise" 
                  className="w-full h-64 md:h-auto object-cover"
                />
              </div>
            </div>

            {/* Step 3: Implement */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Implement</h3>
                <p className="text-gray-700 mb-4">Down to business, down to the last detail:</p>
                <ul className="text-gray-700 space-y-2">
                  {[
                    'Project management',
                    'Scope of work documentation',
                    'Material & logistics',
                    'Timelines',
                    'Change management',
                    'Step by step log',
                    'Installation & commissioning',
                    'Factory, mould & documentation',
                    'Global certification sign-off'
                  ].map(item => (
                    <li key={item} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3">
                <img 
                  src={implementImg} 
                  alt="Implement" 
                  className="w-full h-64 md:h-auto object-cover"
                />
              </div>
            </div>

            {/* Step 4: Support */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 md:w-2/3 order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Support</h3>
                <p className="text-gray-700 mb-4">
                  You're never alone. Petstream is a true partner, supporting your business with 
                  factory-certified, European-trained technicians.
                </p>
                <ul className="text-gray-700 space-y-2">
                  {[
                    'Predictive / Scheduled maintenance Programs',
                    'Emergency Maintenance',
                    'Process Training'
                  ].map(item => (
                    <li key={item} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 order-1 md:order-2">
                <img 
                  src={supportImg} 
                  alt="Support" 
                  className="w-full h-64 md:h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4">Maintenance and Support</h3>
            <p className="text-gray-700 mb-4">
              Petstream uses predictive maintenance to minimise the costs and lost revenue by 
              identifying potential issues before they occur. The Petstream Service Program provides 
              you with fixed prices and is split into predictive and emergency maintenance options.
            </p>
            <p className="text-gray-700 mb-4">
              There's predictive maintenance and then there's — emergency maintenance. Petstream are 
              readily available when the machinery is down. Time is money and we don't believe in 
              wasting either.
            </p>
          </div>

          {/* Training Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4">Training</h3>
            <p className="text-gray-700 mb-4">
              Petstream provides a structured training program delivered by our certified 
              European-trained technicians. You'll learn from skilled moulding technicians who are 
              trained in the art of moulding and have years of practical experience.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-lg mb-6">
              Contact with us through our representative or submit a business inquiry online.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;

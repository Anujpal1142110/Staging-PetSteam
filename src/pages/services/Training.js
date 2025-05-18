import React from 'react';
import trainingBg from '../../assets/images/n-logistic.jpg';

const Training = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative">
        <img 
          src={trainingBg} 
          alt="Training Banner" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Training</h1>
          <div className="flex items-center text-white">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Training</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-8 flex-grow bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Main content area */}
            <div className="md:w-2/3">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service First Approach</h2>
                <p className="text-gray-800 leading-relaxed mb-4">
                  PET Stream Inc. is committed to servicing our clients throughout the lifecycle of their technology. Our services extend beyond installation into breakdown support, spare parts, preventative maintenance, software applications & more to keep your manufacturing operation running smoothly.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Commitment Beyond Installation</h2>
                <p className="text-gray-800 leading-relaxed mb-6">
                  At PET Stream Inc. the relationship with the client doesn't end with installation of our own machine only. We are committed to making sure your manufacturing operation is on schedule and achieving its potential through our service agreements.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Our highly skilled team of service engineers provide nationwide & overseas engineering support and technical assistance enabling our manufacturers customers to reduce downtime, maximise production and get the most out of their machines.
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-orange-500 p-6">
                <h3 className="text-xl font-bold text-center text-white mb-4">Training</h3>
                <p className="text-white">
                  Our expert team will get your operators and shopfloor owners proficient and up to speed on how to best utilize machinery and software to take your manufacturing process to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
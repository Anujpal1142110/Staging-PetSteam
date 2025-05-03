import React from 'react';
import { Link } from 'react-router-dom';
import companyData from '../../data/company';

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <img 
              src="/images/about-company.jpg" 
              alt="About PET Stream" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {companyData.history}
            </p>
            <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {companyData.values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary-700 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
            <Link 
              to="/about" 
              className="btn btn-primary"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
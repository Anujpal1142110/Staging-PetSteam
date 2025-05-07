import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { FaCheck } from 'react-icons/fa';
import companyData from '../data/company';
import teamData from '../data/team';

const AboutPage = () => {
  return (
    <>
      {/* <Helmet>
        <title>{companyData.name} - About Us</title>
        <meta name="description" content="Learn about PET Stream Incorporation, our history, mission, and team." />
      </Helmet> */}
      
      {/* Hero Banner */}
      <section
        className="relative py-24 md:py-32 bg-gray-900 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/about-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our journey, our mission, and the team behind PET Stream Incorporation.
          </p>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {companyData.history}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our capabilities are beyond a Sales & Service Partner, we also offer services such as Machine Refurbishment, 
                Hot Runner on-site refurbishment, Annual maintenance contract, Plant Audit, Breakdown service, 
                Project consultation, and New Product development to our customers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through our dedication to excellence and customer satisfaction, we have established ourselves as a 
                trusted partner for many leading manufacturers across India.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/images/company-history.jpg" 
                alt="PET Stream History" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What drives us forward and shapes our approach to business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">Our Vision</h3>
              <p className="text-gray-600">
                {companyData.vision}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">Our Mission</h3>
              <p className="text-gray-600">
                {companyData.mission}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  {/* <FaCheck className="text-primary-700 text-xl" /> */}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals guiding PET Stream Incorporation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-700 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
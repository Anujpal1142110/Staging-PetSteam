import React from 'react';
import aboutImage from '../assets/images/abpt.jpg';
import aboutImg from '../assets/images/project-update.jpg';

const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
   <section
        className="relative py-24 md:py-32 bg-gray-900 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(73, 72, 72, 0.7), rgba(34, 32, 32, 0.7)), url(${aboutImage})`,
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
      

      
      {/* About Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Cultivating trust, Creating value</h2>
            <p className="text-gray-600 text-center mb-12">Your reliable partner for first-class equipment and service need.</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our role in the plastic industry</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Pet Stream, we offer world's –leading capital equipment and tool solutions of the highest quality for maximum manufacturing efficiency and lowest cost of ownership. We operate in a customer-centric and value-adding manner. In doing so, we focus on customer's need, markets and a sustainable future. This makes us the best Supplier for highest production efficiency, sustainably.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              We offer equipment with highest precision and maximum value addition supported by prompt service network.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              PSI stands for leading Project delivery, Sales and Service, and Project consultancy provider in field of Plastic engineering. The PSI : As a Company, is the outcome of expertise and on hand experience of Mr. Ravi Bansal, the founder of the company under partnership with Mrs. Priyanka Bansal. It came into existence in 2017 with its registered office in Delhi. At present PSI has been expanding its foot print across the India, we are also active in South Asian Region and African Continent as a Sales & Service and Project delivery company with a team of over 100+ professionals for various dedicated roles and tasks. We have dedicated warehouses for spare parts of our equipment, consumable spare parts of capital equipment & tools being used in Plastics moulding and liquid Filling machines.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              With over 80+ service technicians located across the country we are well setup to service the remotest locations where our customers are located, from Northern part of India to Southern part of south East Asia, and from Eastern part of South Asia to Western Coast of African continent, we have machines and tools running successfully across the length and breadth.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              We are not bound by bureaucratic rules and procedures, we have stable systems in place to ensure that our customers will always be in centre of our policies and ambitions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PET Stream Inc. is an international supplier of technologically advanced machines for the PET plastic industry. We have supplied and exported machines to numerous countries and to international end-user facilities.
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
                src={aboutImg} 
                alt="PET Stream History" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What drives us forward and shapes our approach to business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in providing innovative and sustainable plastic solutions, empowering businesses to achieve optimal efficiency and environmental responsibility.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Mission</h3>
              <p className="text-gray-600">
                We are committed to delivering cutting-edge technology and exceptional service to the plastic industry. By understanding our customers' unique needs, we provide customized solutions that maximize production efficiency while minimizing environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUsPage;
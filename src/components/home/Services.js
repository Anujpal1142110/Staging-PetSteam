import React from 'react';
import { Link } from 'react-router-dom';
// import { FaLightbulb, FaTools, FaCalendarCheck, FaRocket } from 'react-icons/fa';
import servicesData from '../../data/services';

const Services = () => {
  // Filter featured services
  const featuredServices = servicesData
    .filter(service => service.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  // Map icon names to components
  // const getIcon = (iconName) => {
  //   switch(iconName) {
  //     case 'FaLightbulb':
  //       return <FaLightbulb className="text-3xl text-primary-500" />;
  //     case 'FaTools':
  //       return <FaTools className="text-3xl text-primary-500" />;
  //     case 'FaCalendarCheck':
  //       return <FaCalendarCheck className="text-3xl text-primary-500" />;
  //     case 'FaRocket':
  //       return <FaRocket className="text-3xl text-primary-500" />;
  //     default:
  //       return <FaLightbulb className="text-3xl text-primary-500" />;
  //   }
  // };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services to support the beverage, packaging, healthcare, 
            and plastics industries with world-class expertise and equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-6">
                <div className="mb-4">
                  {/* {getIcon(service.icon)} */}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.shortDescription}
                </p>
                <Link 
                  to={`/services/${service.slug}`} 
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="btn btn-primary"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

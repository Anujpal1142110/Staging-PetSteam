// File: components/home/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import companyData from '../../data/company';

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content Section - Now First */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">In Our World Speed and Reliability is Crucial -</h2>
            <div className="text-gray-600 mb-6 leading-relaxed space-y-4">
              <p>{companyData.history.paragraph1}</p>
              <p>{companyData.history.paragraph2}</p>
              <p>{companyData.history.paragraph3}</p>
            </div>
            {/* <Link 
              to="/about" 
              className="btn btn-primary inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
            </Link> */}
          </div>
          
          {/* YouTube video embed - Now Second */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="mt-6">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/eIvSqklTqyE?si=hnlVEmynvN5s4zVp" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
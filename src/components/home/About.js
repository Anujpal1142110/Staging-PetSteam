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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
            <div dangerouslySetInnerHTML={{ __html: companyData.history }} className="text-gray-600 mb-6 leading-relaxed" />
            <Link 
              to="/about" 
              className="btn btn-primary"
            >
              Learn More About Us
            </Link>
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
        
        {/* Alternative option: Full-width video below content (like in the screenshot) */}
        {/* 
        <div className="mt-12">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/eIvSqklTqyE?si=hnlVEmynvN5s4zVp"
            title="PET Stream Company Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        */}
      </div>
    </section>
  );
};

export default About;
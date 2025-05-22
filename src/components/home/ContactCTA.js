import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section 
      className="py-20 bg-primary-700 text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url(/images/cta-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Manufacturing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Our team of experts is ready to help you select the right equipment and services 
          for your specific requirements.
        </p>
        <Link 
          to="/contact" 
          className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-3"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
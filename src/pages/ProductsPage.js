import React from 'react';
// import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import productsData from '../data/products';
import industriesData from '../data/industries';
import companyData from '../data/company';

const ProductsPage = () => {
  return (
    <>
      {/* <Helmet>
        <title>{companyData.name} - Products</title>
        <meta name="description" content="Explore our range of high-quality equipment and tools for the beverage, packaging, healthcare, and plastics industries." />
      </Helmet> */}
      
      {/* Hero Banner */}
      <section
        className="relative py-24 md:py-32 bg-gray-900 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/products-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            World-class equipment and tools for the beverage, packaging, healthcare, and plastics industries.
          </p>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide specialized equipment and solutions for various industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((industry) => (
              <div 
                key={industry.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our selection of high-quality equipment for various industrial applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.images.find(img => img.isPrimary)?.url || product.images[0]?.url} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={`/products/${product.slug}`} 
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary-700 text-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 lg:flex items-center">
              <div className="lg:w-2/3 lg:pr-8 mb-6 lg:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                <p className="text-lg opacity-90">
                  We understand that every manufacturing operation is unique. Contact us to discuss your 
                  specific requirements and learn how we can help you achieve optimal performance.
                </p>
              </div>
              <div className="lg:w-1/3 lg:text-right">
                <Link 
                  to="/contact" 
                  className="inline-block btn bg-white text-primary-700 hover:bg-gray-100 text-lg px-6 py-3"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
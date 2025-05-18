import React from 'react';
import newsroom from '../../assets/images/newsroom.jpg';

const ProductsUpdate = () => {
  // Sample data based on the screenshot
  const products = [
    {
      id: 1,
      name: "Introducing Our Latest PET Line Technology",
      date: "May 10, 2025",
      tlb_cms_text: "We are excited to announce the launch of our newest PET Line Technology with improved efficiency and reduced energy consumption."
    },
    {
      id: 2,
      name: "Elion Series Gets Major Software Update",
      date: "April 22, 2025",
      tlb_cms_text: "The new software update for our Elion Series provides enhanced control features and improved user interface for better operation."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Logo */}
              <a href="/" className="flex items-center">
                <img src="/api/placeholder/180/60" alt="PSI Logo" className="h-16" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner with newsroom image */}
      <section className="relative">
        <img 
          src={newsroom} 
          alt="Products Update Banner" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Products Update</h1>
          <div className="flex items-center text-white">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Products Update</span>
          </div>
        </div>
      </section>

      {/* Main Content - Products/Blog Area */}
      <div className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {products.map(product => (
              <div key={product.id} className="border-b border-gray-200 pb-8">
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <div className="text-gray-500 text-sm mb-3">{product.date}</div>
                    <p className="text-gray-600 mb-4">
                      {product.tlb_cms_text}
                    </p>
                  </div>
                  <div>
                    <a 
                      href={`/product/${product.id}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsUpdate;
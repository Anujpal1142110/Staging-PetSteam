import React from 'react';
import trainingBg from '../../assets/images/trng.jpeg';

const TrainingUpdate = () => {
  // Sample data based on the PHP code
  const trainingUpdates = [
    {
      id: 1,
      name: "Advanced PET Processing Techniques",
      date: "May 15, 2025",
      tlb_image: "pet-training.jpg",
      tlb_cms_text: "Join our comprehensive workshop on advanced PET processing techniques. This hands-on training will cover the latest innovations in processing efficiency, quality control, and troubleshooting common issues."
    },
    {
      id: 2,
      name: "Machine Maintenance Workshop",
      date: "April 20, 2025",
      tlb_image: "maintenance-workshop.jpg",
      tlb_cms_text: "Our technical experts will lead this intensive workshop on preventative maintenance and repair procedures for injection molding equipment. Learn how to maximize uptime and extend machine life."
    },
    {
      id: 3,
      name: "Quality Assurance Certification",
      date: "March 30, 2025",
      tlb_image: "quality-assurance.jpg",
      tlb_cms_text: "This certification program provides comprehensive training on quality assurance protocols for beverage packaging. Participants will learn industry standards, testing procedures, and compliance requirements."
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

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex space-x-8">
                <li><a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a></li>
                <li><a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a></li>
                <li><a href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</a></li>
                <li><a href="/consulting-services" className="text-gray-700 hover:text-blue-600 font-medium">Consulting & Services</a></li>
                <li><a href="/newsroom" className="text-blue-600 font-medium">Newsroom</a></li>
                <li><a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a></li>
              </ul>
              
              {/* Search Icon */}
              <button className="ml-8 bg-green-500 hover:bg-green-600 text-white p-3 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner with training image */}
      <section className="relative">
        <img 
          src={trainingBg} 
          alt="Training Update Banner" 
          className="w-full h-96 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Training Update</h1>
          <div className="flex items-center text-white">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Training Update</span>
          </div>
        </div>
      </section>

      {/* Main Content - Training Updates Grid */}
      <div className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingUpdates.map(update => (
              <div key={update.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="overflow-hidden">
                  <a href={`/training-update/${update.id}`} className="block">
                    <img 
                      src={`/api/placeholder/600/400`} 
                      alt={update.name} 
                      className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </a>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">{update.date}</div>
                    <a href={`/training-update/${update.id}`} className="block">
                      <h4 className="text-xl font-bold text-gray-800 hover:text-blue-700 transition-colors">{update.name}</h4>
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-4">
                      {update.tlb_cms_text.length > 200 
                        ? `${update.tlb_cms_text.substring(0, 200)}...` 
                        : update.tlb_cms_text}
                    </p>
                    <a 
                      href={`/training-update/${update.id}`} 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* No footer as requested */}
    </div>
  );
};

export default TrainingUpdate;
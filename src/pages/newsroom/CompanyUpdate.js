import React from 'react';
import newsroom from '../../assets/images/newsroom.jpg';

const CompanyUpdate = () => {
  // Sample data based on the PHP code
  const companyUpdates = [
    {
      id: 1,
      name: "PSI Achieves ISO 9001:2015 Certification",
      date: "May 12, 2025",
      tlb_image: "certification.jpg",
      tlb_cms_text: "We are proud to announce that PSI has successfully achieved ISO 9001:2015 certification, demonstrating our commitment to quality management systems and continuous improvement."
    },
    {
      id: 2,
      name: "New Regional Office Opening in Mumbai",
      date: "April 18, 2025",
      tlb_image: "mumbai-office.jpg",
      tlb_cms_text: "PSI is expanding its presence with a new regional office in Mumbai to better serve our growing customer base in western India. The new facility will be operational from May 2025."
    },
    {
      id: 3,
      name: "PSI Celebrates 15 Years of Excellence",
      date: "March 25, 2025",
      tlb_image: "anniversary.jpg",
      tlb_cms_text: "This month marks 15 years since PSI was founded. We're celebrating this milestone with our team members and reflecting on our journey of innovation and growth in the industry."
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
              <button className="ml-8 bg-orange-500 hover:bg-orange-600 text-white p-3 transition-colors">
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

      {/* Hero Banner with newsroom image */}
      <section className="relative">
        <img 
          src={newsroom} 
          alt="Company Update Banner" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Company Update</h1>
          <div className="flex items-center text-white">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Company Update</span>
          </div>
        </div>
      </section>

      {/* Main Content - Company Updates Grid */}
      <div className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyUpdates.map(update => (
              <div key={update.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="overflow-hidden">
                  <a href={`/company-update/${update.id}`} className="block">
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
                    <a href={`/company-update/${update.id}`} className="block">
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
                      href={`/company-update/${update.id}`} 
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

export default CompanyUpdate;
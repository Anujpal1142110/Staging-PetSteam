import React from 'react';
import newsroom from '../../assets/images/newsroom.jpg';

const IndustryInformationExchange = () => {
  // Sample data based on the PHP code
  const industryUpdates = [
    {
      id: 1,
      name: "New Regulations for PET Packaging in Food Industry",
      date: "May 18, 2025",
      tlb_image: "regulations.jpg",
      tlb_cms_text: "Recent regulatory changes have introduced stricter standards for PET packaging used in the food industry. These new guidelines focus on material purity, recycled content requirements, and testing protocols to ensure consumer safety."
    },
    {
      id: 2,
      name: "Global Trends in Sustainable Packaging Solutions",
      date: "May 5, 2025",
      tlb_image: "sustainable-trends.jpg",
      tlb_cms_text: "Market analysis reveals significant growth in sustainable packaging adoption across global markets. This report explores emerging technologies, consumer preferences, and cost-effective approaches to implementing eco-friendly packaging solutions."
    },
    {
      id: 3,
      name: "Industry 4.0 Implementation in Beverage Manufacturing",
      date: "April 22, 2025",
      tlb_image: "industry-4.jpg",
      tlb_cms_text: "A comprehensive look at how Industry 4.0 technologies are transforming beverage manufacturing operations. Case studies highlight successful implementations of IoT sensors, real-time monitoring, and predictive maintenance systems."
    },
    {
      id: 4,
      name: "Supply Chain Resilience in Packaging Materials",
      date: "April 10, 2025",
      tlb_image: "supply-chain.jpg",
      tlb_cms_text: "Recent global disruptions have highlighted the importance of supply chain resilience in packaging materials. This analysis examines strategies for mitigating risks, alternative sourcing approaches, and inventory management best practices."
    },
    {
      id: 5,
      name: "Innovation in Recycling Technologies for PET Products",
      date: "March 28, 2025",
      tlb_image: "recycling-tech.jpg",
      tlb_cms_text: "Breakthrough developments in PET recycling technologies are creating new opportunities for closed-loop systems. This overview covers chemical recycling advancements, depolymerization techniques, and quality improvements in recycled materials."
    },
    {
      id: 6,
      name: "Market Report: Automation in Packaging Industries",
      date: "March 15, 2025",
      tlb_image: "automation-market.jpg",
      tlb_cms_text: "Our latest market analysis examines the rapid growth of automation solutions in packaging industries. The report includes ROI assessments, technology comparisons, and implementation roadmaps for various production environments."
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
          alt="Industry Information Exchange Banner" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Industry Information Exchange</h1>
          <div className="flex items-center text-white">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Industry Information Exchange</span>
          </div>
        </div>
      </section>

      {/* Main Content - Industry Updates Grid */}
      <div className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryUpdates.map(update => (
              <div key={update.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="overflow-hidden">
                  <a href={`/industry-updates/${update.id}`} className="block">
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
                    <a href={`/industry-updates/${update.id}`} className="block">
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
                      href={`/industry-updates/${update.id}`} 
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

export default IndustryInformationExchange;
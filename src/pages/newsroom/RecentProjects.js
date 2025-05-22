import React from 'react';
import newsroom from '../../assets/images/newsroom.jpg';

const RecentProjects = () => {
  // Sample data based on the PHP code
  const projects = [
    {
      id: 1,
      name: "PET Bottling Line Installation - Delhi Beverages",
      date: "May 8, 2025",
      tlb_image: "delhi-bottling.jpg",
      tlb_cms_text: "Successfully completed the installation of a high-speed PET bottling line for Delhi Beverages, increasing their production capacity by 40%. The turnkey project included integration with existing infrastructure and comprehensive staff training."
    },
    {
      id: 2,
      name: "Automation Upgrade - Global Foods Ltd",
      date: "April 15, 2025",
      tlb_image: "automation-upgrade.jpg",
      tlb_cms_text: "Implemented state-of-the-art automation systems for Global Foods' packaging facility in Pune. The upgrade reduced manual intervention by 65% and improved production efficiency while maintaining the highest quality standards."
    },
    {
      id: 3,
      name: "Warehouse Management System - Eastern Distributors",
      date: "March 30, 2025",
      tlb_image: "warehouse-system.jpg",
      tlb_cms_text: "Deployed an integrated warehouse management system for Eastern Distributors, featuring RFID tracking, automated inventory management, and predictive analytics. The solution optimized storage space and reduced order fulfillment time."
    },
    {
      id: 4,
      name: "Sustainable Packaging Redesign - GreenLife Products",
      date: "February 22, 2025",
      tlb_image: "sustainable-packaging.jpg",
      tlb_cms_text: "Collaborated with GreenLife Products to redesign their packaging line for improved sustainability. The project reduced plastic usage by 30% while enhancing product protection and maintaining brand identity across all packaging."
    },
    {
      id: 5,
      name: "Quality Control System Implementation - Pharma Solutions",
      date: "January 18, 2025",
      tlb_image: "quality-control.jpg",
      tlb_cms_text: "Designed and implemented a comprehensive quality control system for Pharma Solutions' new manufacturing facility. The system includes real-time monitoring, automated inspections, and integrated compliance documentation."
    },
    {
      id: 6,
      name: "Injection Molding Facility Upgrade - PlastiTech Industries",
      date: "December 12, 2024",
      tlb_image: "injection-molding.jpg",
      tlb_cms_text: "Completed a major upgrade of PlastiTech's injection molding facility, including installation of energy-efficient equipment, advanced cooling systems, and precision control mechanisms. The upgrade reduced energy consumption by 25%."
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

      {/* Hero Banner with newsroom image */}
      <section className="relative">
        <img 
          src={newsroom} 
          alt="Recent Projects Banner" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Recent Projects</h1>
          <div className="flex items-center text-white">
            <a href="/" className="hover:text-gray-200">Home</a>
            <span className="mx-2">›</span>
            <span>Recent Projects</span>
          </div>
        </div>
      </section>

      {/* Main Content - Projects Grid */}
      <div className="py-16 flex-grow bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="overflow-hidden">
                  <a href={`/project/${project.id}`} className="block">
                    <img 
                      src={`/api/placeholder/600/400`} 
                      alt={project.name} 
                      className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </a>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">{project.date}</div>
                    <a href={`/project/${project.id}`} className="block">
                      <h4 className="text-xl font-bold text-gray-800 hover:text-blue-700 transition-colors">{project.name}</h4>
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-4">
                      {project.tlb_cms_text.length > 200 
                        ? `${project.tlb_cms_text.substring(0, 200)}...` 
                        : project.tlb_cms_text}
                    </p>
                    <a 
                      href={`/project/${project.id}`} 
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

export default RecentProjects;
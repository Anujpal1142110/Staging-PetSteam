// File: components/common/NewsEventsWidget.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsEventsWidget = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [isVisible, setIsVisible] = useState(true);

  // Sample data
  const recentNews = [
    {
      id: 1,
      date: 'MAY 15',
      title: 'Manufacturing Expansion Complete',
      category: 'Company News'
    },
    {
      id: 2,
      date: 'MAY 10',
      title: 'New PET-Line Technology Launch',
      category: 'Product'
    },
    {
      id: 3,
      date: 'MAY 5',
      title: 'Industry Excellence Award',
      category: 'Awards'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      date: 'JUN 15',
      title: 'Plastic Technology Expo 2025',
      location: 'Mumbai'
    },
    {
      id: 2,
      date: 'JUL 20',
      title: 'PET-Line Demo Day',
      location: 'Our Facility'
    },
    {
      id: 3,
      date: 'AUG 05',
      title: 'Industry Networking Meet',
      location: 'Delhi'
    }
  ];

  // Auto show after 10 seconds when closed
  React.useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 60000); // 10 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      {/* Direct Content Box with Blue Theme and Green Outline */}
      <div className="bg-white rounded-2xl shadow-2xl w-80 border-2">
        {/* Header - Blue Background */}
        <div className="bg-blue-600 text-white rounded-t-2xl p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-wide">NEWS & EVENTS</h2>
          <button 
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors p-1 hover:bg-white hover:bg-opacity-20 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex-1 py-3 px-4 text-sm font-semibold transition-all duration-200 ${
              activeTab === 'news'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            Latest News ({recentNews.length})
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 py-3 px-4 text-sm font-semibold transition-all duration-200 ${
              activeTab === 'events'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            Events ({upcomingEvents.length})
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-64 overflow-y-auto">
          {activeTab === 'news' ? (
            <div className="space-y-3">
              {recentNews.map((news) => (
                <div 
                  key={news.id}
                  className="group p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-pointer hover:bg-blue-50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500 font-semibold">
                      {news.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                    {news.title}
                  </h4>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="group p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-50 border border-blue-100 hover:shadow-sm transition-all duration-200 cursor-pointer hover:from-blue-100 hover:to-blue-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white rounded-lg p-2 text-center min-w-[45px]">
                      <div className="text-xs font-bold leading-tight">{event.date}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                        {event.title}
                      </h4>
                      <p className="text-xs text-gray-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex space-x-2">
            <Link 
              to="/news"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-3 rounded-lg text-sm font-semibold transition-colors"
            >
              All News
            </Link>
            <Link 
              to="/events"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-3 rounded-lg text-sm font-semibold transition-colors"
            >
              All Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Usage example
const ExampleUsage = () => {
  return (
    
     <NewsEventsWidget />
  );
};

export default ExampleUsage;
export { NewsEventsWidget };
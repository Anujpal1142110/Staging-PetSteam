// File: components/home/NewsEvents.js
import React from 'react';
import { Link } from 'react-router-dom';

const NewsEvents = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      date: 'MAY 15, 2025',
      title: 'PET Stream Expands Manufacturing Capabilities',
      excerpt: 'We are excited to announce the expansion of our manufacturing facilities to meet growing demand for precision technology solutions in the packaging industry...',
      slug: 'pet-stream-expands-manufacturing'
    },
    {
      id: 2,
      date: 'MAY 10, 2025',
      title: 'New PET-Line Technology Launch',
      excerpt: 'Introducing our latest breakthrough in preform system technology, featuring enhanced automation and improved reliability for beverage manufacturers...',
      slug: 'new-pet-line-technology-launch'
    },
    {
      id: 3,
      date: 'MAY 5, 2025',
      title: 'Industry Excellence Award Recognition',
      excerpt: 'PET Stream Incorporation receives prestigious recognition for innovation in precision technology and outstanding customer service in the manufacturing sector...',
      slug: 'industry-excellence-award'
    }
  ];

  // Sample events data
  const eventsData = [
    {
      id: 1,
      date: 'JUN 15',
      title: 'Plastic Technology Expo 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Mumbai Convention Center'
    },
    {
      id: 2,
      date: 'JUL 20',
      title: 'PET-Line Demo Day',
      time: '2:00 PM - 5:00 PM',
      location: 'Our Facility'
    },
    {
      id: 3,
      date: 'AUG 05',
      title: 'Industry Networking Meet',
      time: '6:00 PM - 8:00 PM',
      location: 'Delhi Business Hub'
    },
    {
      id: 4,
      date: 'SEP 12',
      title: 'Technical Training Workshop',
      time: '10:00 AM - 4:00 PM',
      location: 'Training Center'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        {/* <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              In Our World Speed and Reliability is Crucial
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                PET Stream Incorporation is a leading project delivery company, provides Project consultancy, Sales, 
                and service in the fields of beverage, packaging, healthcare, precision technology, and other relevant 
                fields of plastics industries, representing world-class manufacturers of capital equipment and tools.
              </p>
              <p>
                Our company Leadership is having active experience of more than two decades in the Indian 
                manufacturing sector, this expertise and exposure have shaped our vision which relies on trust and 
                precision, we value time, we have hands-on experience to guide our customers to select the right 
                equipment for their higher profit margin in the time of need.
              </p>
              <p>
                Our capabilities are beyond a Sales & Service Partner, we also offer services e.g. – Machine 
                Refurbishment, Hot Runner on-site refurbishment, Annual maintenance contract, Plant Audit, 
                Breakdown service, Project consultation, and New Product development to our customers.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/3 lg:pl-8">
            <div className="bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-lg shadow-lg transform hover:scale-105">
              <Link 
                to="/news-events" 
                className="block text-white text-center py-6 px-8 rounded-lg"
              >
                <h3 className="text-xl font-bold tracking-wide">NEWS & EVENTS</h3>
              </Link>
            </div>
          </div>
        </div> */}

        {/* News & Events Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Latest News Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Latest News</h3>
            <div className="space-y-6">
              {newsData.map((news) => (
                <div 
                  key={news.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500"
                >
                  <div className="text-green-600 font-semibold text-sm mb-2 uppercase tracking-wide">
                    {news.date}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3 hover:text-green-600 transition-colors">
                    <Link to={`/news/${news.slug}`}>{news.title}</Link>
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <Link 
                    to={`/news/${news.slug}`}
                    className="text-green-600 hover:text-orange-700 font-semibold text-sm uppercase tracking-wide transition-colors inline-flex items-center group"
                  >
                    READ MORE
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link 
                to="/news"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
              >
                View All News
              </Link>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Upcoming Events</h3>
           <div className="space-y-4">
  {eventsData.map((event) => (
    <div 
      key={event.id}
      className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{event.date}</div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">{event.title}</h4>
            <p className="text-gray-300 text-sm">{event.time}</p>
            <p className="text-gray-300 text-sm">{event.location}</p>
          </div>
        </div>
        <div className="text-blue-500 hover:text-white transition-colors cursor-pointer">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  ))}
</div>

            <div className="mt-8">
              <Link 
                to="/events"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
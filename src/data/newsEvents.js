// File: data/newsEvents.js

export const newsData = [
  {
    id: 1,
    date: 'May 15, 2025',
    title: 'PET Stream Expands Manufacturing Capabilities',
    excerpt: 'We are excited to announce the expansion of our manufacturing facilities to meet growing demand for precision technology solutions in the packaging industry. This expansion will enable us to serve more customers while maintaining our commitment to quality and reliability.',
    content: `
      <p>PET Stream Incorporation is proud to announce a significant expansion of our manufacturing capabilities...</p>
      <p>This strategic expansion represents our commitment to meeting the evolving needs of our customers...</p>
    `,
    slug: 'pet-stream-expands-manufacturing',
    image: '/images/news/expansion.jpg',
    author: 'PET Stream Team',
    category: 'Company News'
  },
  {
    id: 2,
    date: 'May 10, 2025',
    title: 'New PET-Line Technology Launch',
    excerpt: 'Introducing our latest breakthrough in preform system technology, featuring enhanced automation and improved reliability for beverage manufacturers. This innovation sets new industry standards for efficiency and precision.',
    content: `
      <p>Our engineering team has developed the most advanced preform system in the world...</p>
      <p>Key features include enhanced automation, improved energy efficiency, and superior reliability...</p>
    `,
    slug: 'new-pet-line-technology-launch',
    image: '/images/news/pet-line-launch.jpg',
    author: 'Engineering Team',
    category: 'Product Launch'
  },
  {
    id: 3,
    date: 'May 5, 2025',
    title: 'Industry Excellence Award Recognition',
    excerpt: 'PET Stream Incorporation receives prestigious recognition for innovation in precision technology and outstanding customer service in the manufacturing sector. This award validates our commitment to excellence.',
    content: `
      <p>We are honored to receive the Industry Excellence Award for 2025...</p>
      <p>This recognition reflects our team\'s dedication to innovation and customer satisfaction...</p>
    `,
    slug: 'industry-excellence-award',
    image: '/images/news/award.jpg',
    author: 'Management Team',
    category: 'Awards'
  },
  {
    id: 4,
    date: 'April 28, 2025',
    title: 'Partnership with Global Technology Leader',
    excerpt: 'Strategic partnership announcement with leading international technology provider to enhance our service offerings and expand market reach in the Asia-Pacific region.',
    content: `
      <p>This strategic partnership will enhance our ability to serve customers...</p>
      <p>Together, we will deliver cutting-edge solutions to the packaging industry...</p>
    `,
    slug: 'global-partnership-announcement',
    image: '/images/news/partnership.jpg',
    author: 'Business Development',
    category: 'Partnerships'
  }
];

export const eventsData = [
  {
    id: 1,
    date: 'JUN 15',
    fullDate: '2025-06-15',
    title: 'Plastic Technology Expo 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'Mumbai Convention Center',
    description: 'Join us at India\'s premier plastic technology exhibition where we\'ll showcase our latest innovations and connect with industry leaders.',
    type: 'Exhibition',
    registrationLink: '/events/plastic-tech-expo-2025'
  },
  {
    id: 2,
    date: 'JUL 20',
    fullDate: '2025-07-20',
    title: 'PET-Line Demo Day',
    time: '2:00 PM - 5:00 PM',
    location: 'PET Stream Facility, Pune',
    description: 'Experience our cutting-edge PET-Line technology in action. Live demonstrations, technical presentations, and Q&A sessions with our experts.',
    type: 'Demo',
    registrationLink: '/events/pet-line-demo-day'
  },
  {
    id: 3,
    date: 'AUG 05',
    fullDate: '2025-08-05',
    title: 'Industry Networking Meet',
    time: '6:00 PM - 8:00 PM',
    location: 'Delhi Business Hub',
    description: 'Network with industry professionals, share insights, and explore collaboration opportunities in the packaging and beverage industry.',
    type: 'Networking',
    registrationLink: '/events/industry-networking-meet'
  },
  {
    id: 4,
    date: 'SEP 12',
    fullDate: '2025-09-12',
    title: 'Technical Training Workshop',
    time: '10:00 AM - 4:00 PM',
    location: 'PET Stream Training Center',
    description: 'Comprehensive technical training on equipment maintenance, troubleshooting, and optimization techniques for maximum efficiency.',
    type: 'Training',
    registrationLink: '/events/technical-training-workshop'
  },
  {
    id: 5,
    date: 'OCT 18',
    fullDate: '2025-10-18',
    title: 'Annual Customer Conference',
    time: '9:00 AM - 5:00 PM',
    location: 'Bangalore Convention Center',
    description: 'Our flagship annual event bringing together customers, partners, and industry experts to discuss trends, innovations, and future opportunities.',
    type: 'Conference',
    registrationLink: '/events/annual-customer-conference'
  }
];

export default {
  newsData,
  eventsData
};
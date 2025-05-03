import React from 'react';
// import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Products from '../components/home/Products';
import ContactCTA from '../components/home/ContactCTA';
import companyData from '../data/company';
const HomePage = () => {
  return (
    <>
      {/* <Helmet> */}
        <title>{companyData.name} - Home</title>
        <meta name="description" content={companyData.description} />
      {/* </Helmet> */}
      <Hero />
      <About />
      <Services />
      <Products />
      <ContactCTA />
    </>
  );
};
export default HomePage;
// client/src/pages/ContactPage.js
import React, { useState } from "react";
import companyData from "../data/company";
import axios from "axios";
import mapImage from "../assets/images/map.webp";
import contactBanner from "../assets/images/consultancybanner.jpeg";
import ravi from "../assets/team/1-Ravi-Bansal.jpeg";
import Avinash from "../assets/team/2-Avinash-kumar-Pal.jpeg";
import Manish from "../assets/team/3-Manish-kaushik.jpeg";
import Toshak from "../assets/team/4-Toshak-chaudhary.jpeg";
import Ambuj from "../assets/team/5-Ambuj-kumar-shukla.jpeg";
import Aravind from "../assets/team/6-Aravind.jpeg";
import Saurabh from "../assets/team/7-Saurabh-tyagi.jpeg";
import mailIcon from "../assets/images/mail_icon.webp";
import emailjs from "@emailjs/browser"; //me

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      //me
      const emailSubject = `Welcome ${formData.name} - ${formData.company}`;
      const emailMessage = `
      we will get back to u soon 
      Name:${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Company: ${formData.company}
      Job Title: ${formData.jobTitle || "N/A"}
      Product Interest: ${formData.productInterest || "N/A"}
      Address: ${formData.address || "N/A"}
      Message:${formData.message}`;

      // me
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          email: formData.email,
          subject: emailSubject,
          message: emailMessage,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      if (response.status === 200) { //me
        setTimeout(() => {
          setSubmitStatus({
            success: true,
            message: "Thank you for your message! We will contact you soon.",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
          });
          setIsSubmitting(false);
        }, 1500);
      } //me
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message:
          "There was an error sending your message. Please try again later.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact us
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Reach out to us for inquiries, service requests, or to discuss how
            we can help optimize your manufacturing operations.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're after a machine, spare part, power tool, or need to
              book a service call PSI will help you find the right solution in a
              timely manner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Corporate Office */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">
                  PET Stream Inc.
                </h3>
                <h4 className="text-lg font-semibold text-blue-700">
                  Corporate Office:
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 mt-1 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-700">
                    Office No. 1603A & 1603B, 16th floor, The Iconic Tower,
                    Corenthum, Sector -62, Noida, National Capital Region,
                    India-201309
                  </p>
                </div>
                <div className="flex items-center group">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+919811206119"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    +91-98112 06119
                  </a>
                </div>
                <div className="flex items-center group">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:ravi.bansal@petstream.in"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    ravi.bansal@petstream.in
                  </a>
                </div>
              </div>
            </div>

            {/* Head Office */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-700">
                  Head Office:
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 mt-1 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-700">
                    Office No 206, 2nd floor, Vardhman capital complex, L.S.C
                    Gulabi bagh, Delhi,India- 110052
                  </p>
                </div>
                <div className="flex items-center group">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+919811906119"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    +91-98119 06119
                  </a>
                </div>
                <div className="flex items-center group">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@petstream.in"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    info@petstream.in
                  </a>
                </div>
              </div>
            </div>

            {/* Registered Office */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-700">
                  Registered Office:
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 mt-1 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-700">
                    Office no 7255/77A, Ajendra Market, Ground Floor, Shakti
                    Nagar, Delhi-110007(INDIA)
                  </p>
                </div>
                <div className="flex items-center group">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+919811906119"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    +91-9811906119
                  </a>
                </div>
                <div className="flex items-center group">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 group-hover:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:manish.kaushik@petstream.com"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    manish.kaushik@petstream.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Map Section */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Our Global Presence
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Visit us at our office or contact us for detailed directions.
      </p>
    </div>
    <div className="rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.12345678!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our office locations"
      ></iframe>
    </div>
  </div>
</section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-2xl text-gray-800 mb-4 font-medium">
              Contact details of your leading specialists from Team PSI for
              sales and service - domestic & overseas
            </h4>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-[66.67%] md:mx-auto mb-16">
              {[
                {
                  name: "RAVI BANSAL",
                  position: "Chief Executive Officer",
                  phone: "+91 9811206119",
                  image: ravi,
                  email: "ravi.bansal@petstream.in", // Primary email only
                },
                {
                  name: "MANISH KAUSHIK",
                  position: "Admin, Purchase & Supply Chain Head",
                  phone: "+91 9811906119",
                  image: Manish,
                  email: "manish.kaushik@petstream.in",
                },

                {
                  name: "SAURABH TYAGI",
                  position: "Admin, Purchase & Supply Chain Head",
                  phone: "+91 9899896260",
                  image: Saurabh,
                  email: "mailto:saurabh.tyagi@petstream.in",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-60">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-red-600 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 mb-4">{member.position}</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-blue-600">Tel :</span>
                        <span className="text-gray-700">{member.phone}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:opacity-80"
                        >
                          <img src={mailIcon} alt="mail" className="w-8 h-8" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fourth Member - Centered */}

            {/* Second Row - Middle Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-[66.67%] md:mx-auto mb-16">
              {[
                {
                  name: "TOSHAK RAMESH CHAUDHARI",
                  position: "Service Head – Beverage Filling Line Division",
                  phone: "+91 9811963119",
                  image: Toshak,
                  email: "toshak.chaudhari@petstream.in",
                },
                {
                  name: "AVINASH KUMAR PAL",
                  position:
                    "Service Head – Injection Molding & Lab Equipment Division",
                  phone: "+91 9811906197",
                  image: Avinash,
                  email: "avinash.pal@petstream.in",
                },
                {
                  name: "ARAVIND PILLAI",
                  position: "Service Manager – Injection Molding Division",
                  phone: "+91 9319684532",
                  image: Aravind,
                  email: "aravind.pillai@petstream.in",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                >
                  <div className="relative h-60">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-red-600 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 mb-4">{member.position}</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-blue-600">Tel :</span>
                        <span className="text-gray-700">{member.phone}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:opacity-80"
                        >
                          <img src={mailIcon} alt="mail" className="w-8 h-8" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Decorative top accent */}
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-2 bg-orange-100 text-green-600 rounded-full font-medium mb-6">
                Get in Touch with Our Experts
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
              {/* Left Side - Enhanced Form Title and Features */}
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    ENQUIRY <span className="text-green-500 block">FORM</span>
                  </h2>
                  <div className="h-1.5 w-24 bg-green-500 mb-8 rounded-full"></div>

                  <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                    Contact with us through our representative or submit a
                    business inquiry online.
                  </p>

                  {/* Added features list */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Instant response within 24 hours
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        100% secure & confidential
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Quick consultation booking
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Enhanced Form Fields */}
              <div className="lg:w-2/3">
                {submitStatus && (
                  <div
                    className={`mb-8 p-6 rounded-2xl shadow-lg ${
                      submitStatus.success
                        ? "bg-green-50 text-green-800 border-2 border-green-200"
                        : "bg-red-50 text-red-800 border-2 border-red-200"
                    }`}
                  >
                    <div className="flex items-center">
                      {submitStatus.success ? (
                        <svg
                          className="w-6 h-6 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="bg-white rounded-3xl shadow-2xl backdrop-blur-xl p-8 lg:p-12">
                    {/* First Row - Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="group">
                        <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                          Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Enter Email Address"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Second Row - Contact No and Job Title */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="group">
                        <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                          Contact No
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Contact Number"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                          Job Title
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle || ""}
                            onChange={handleChange}
                            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Job Title"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Third Row - Company Name and Product Dropdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="group">
                        <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                          Company Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                          Product Interest
                        </label>
                        <div className="relative">
                          <select
                            name="productInterest"
                            value={formData.productInterest || ""}
                            onChange={handleChange}
                            className="block w-full pl-4 pr-10 py-4 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                          >
                            <option value="">Select Your Product</option>
                            <option value="Netstal">Netstal</option>
                            <option value="GDXL">GDXL</option>
                            <option value="Zonwon">Zonwon</option>
                            <option value="Newamstar">Newamstar</option>
                            <option value="Corvaglia">Corvaglia</option>
                            <option value="Glaroform">Glaroform</option>
                            <option value="Eisbar">Eisbar</option>
                            <option value="Colorway">Colorway</option>
                            <option value="Spare Parts And Services">
                              Spare Parts And Services
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fourth Row - Address */}
                    <div className="mb-8">
                      <div className="group">
                        <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                          Address
                        </label>
                        <div className="relative">
                          <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="address"
                            value={formData.address || ""}
                            onChange={handleChange}
                            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                            placeholder="Enter Address"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Fifth Row - Enquiry */}
                    <div className="mb-10">
                      <div className="group">
                        <label className="block text-gray-700 font-bold mb-3 text-sm tracking-wide">
                          Enquiry
                        </label>
                        <div className="relative">
                          <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                          </div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                            placeholder="Tell us about your requirements..."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center gap-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ${
                          isSubmitting
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:transform hover:-translate-y-1"
                        }`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </div>
                        ) : (
                          "Submit Enquiry"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;

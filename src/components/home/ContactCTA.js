import React, { useState } from 'react';

// Contact Form Modal Component with Enhanced Form
const ContactFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    productInterest: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add your actual form submission logic here
      console.log('Form submitted:', formData);
      
      // Success handling
      setSubmitStatus({
        success: true,
        message: "Your enquiry has been submitted successfully! We'll contact you shortly."
      });
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        jobTitle: '',
        company: '',
        productInterest: '',
        address: '',
        message: ''
      });
      
      // Close modal after delay
      setTimeout(() => {
        onClose();
        // Reset status after modal closes
        setTimeout(() => setSubmitStatus(null), 300);
      }, 2000);
      
    } catch (error) {
      // Error handling
      setSubmitStatus({
        success: false,
        message: "There was an error submitting your enquiry. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <style>{`
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
        .modal-backdrop {
          backdrop-filter: blur(8px);
        }
      `}</style>
      
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 overflow-y-auto modal-backdrop"
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-2xl w-full max-w-6xl my-8 shadow-2xl max-h-[95vh] overflow-y-auto">
          {/* Close button at top-right */}
          <div className="sticky top-0 bg-white z-20 flex justify-end p-4 border-b border-gray-100">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Main content */}
          <div className="px-8 pb-8">
            {/* Contact Form Section */}
            <section className="relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                  <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
              </div>

              <div className="relative z-10 py-8">
                <div className="max-w-7xl mx-auto">
                  {/* Decorative top accent */}
                  <div className="text-center mb-8">
                    <div className="inline-block px-8 py-3 bg-gradient-to-r from-orange-100 to-orange-50 text-green-600 rounded-full font-semibold mb-6 shadow-lg">
                      🚀 Get in Touch with Our Experts
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side - Enhanced Form Title and Features */}
                    <div className="lg:w-1/3">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                          ENQUIRY <span className="text-green-500 block">FORM</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-green-400 to-green-600 mb-6 rounded-full"></div>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          Contact with us through our representative or submit a
                          business inquiry online.
                        </p>

                        {/* Added features list */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center shadow-md">
                              <svg
                                className="w-6 h-6 text-green-500"
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
                            <span className="text-gray-700 font-medium">
                              Instant response within 24 hours
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center shadow-md">
                              <svg
                                className="w-6 h-6 text-green-500"
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
                            <span className="text-gray-700 font-medium">
                              100% secure & confidential
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center shadow-md">
                              <svg
                                className="w-6 h-6 text-green-500"
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
                            <span className="text-gray-700 font-medium">
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
                          className={`mb-6 p-4 rounded-xl shadow-lg ${
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
                            <p className="font-semibold">{submitStatus.message}</p>
                          </div>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
                          {/* First Row - Name and Email */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Name *
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-200"
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
                                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                  placeholder="Enter your name"
                                />
                              </div>
                            </div>
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Email Address *
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-200"
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
                                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                  placeholder="Enter Email Address"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Second Row - Contact No and Job Title */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Contact No
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-200"
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
                                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                  placeholder="Contact Number"
                                />
                              </div>
                            </div>
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Job Title
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-200"
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
                                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                  placeholder="Job Title"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Third Row - Company Name and Product Dropdown */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Company Name
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-200"
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
                                  value={formData.company || ""}
                                  onChange={handleChange}
                                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                  placeholder="Company Name"
                                />
                              </div>
                            </div>
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Product Interest
                              </label>
                              <div className="relative">
                                <select
                                  name="productInterest"
                                  value={formData.productInterest || ""}
                                  onChange={handleChange}
                                  className="block w-full pl-4 pr-10 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer hover:border-gray-300"
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
                          <div className="mb-6">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Address
                              </label>
                              <div className="relative">
                                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-200"
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
                                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                                  placeholder="Enter Address"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Fifth Row - Enquiry */}
                          <div className="mb-8">
                            <div className="group">
                              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide">
                                Enquiry *
                              </label>
                              <div className="relative">
                                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-200"
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
                                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none hover:border-gray-300"
                                  placeholder="Tell us about your requirements..."
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="flex items-center justify-center">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className={`px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ${
                                isSubmitting
                                  ? "opacity-70 cursor-not-allowed"
                                  : "hover:transform hover:-translate-y-1 hover:from-green-600 hover:to-green-700"
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
          </div>
        </div>
      </div>
    </>
  );
};

// Updated ContactCTA Component
const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        className="py-20 bg-blue-700 text-white relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9))',
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Manufacturing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our team of experts is ready to help you select the right equipment and services 
            for your specific requirements.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            Contact Us Today
          </button>
        </div>
      </section>
      
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ContactCTA;
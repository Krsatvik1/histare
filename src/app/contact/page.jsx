'use client'
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/profooter';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    message: ''
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/myzpvkwv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contact: '',
          message: ''
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Main content flex-1 makes it take available space */}
      <main className="flex-1 w-full pt-24 sm:pt-28 md:pt-32 pb-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#3c597B] leading-tight"
              style={{ fontFamily: "Rofane", fontStyle: "italic" }}
            >
              <span className="not-italic font-normal">Contact Us</span>
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-[#3C597B] mb-2 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-[#3C597B] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-[#3C597B] mb-2 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-[#3C597B] focus:border-transparent"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-[#3C597B] mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-[#3C597B] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-[#3C597B] mb-2 font-medium">
                  Contact
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-[#3C597B] focus:border-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[#3C597B] mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-[#3C597B] focus:border-transparent resize-vertical"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col items-center space-y-3 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#3C597B] hover:bg-[#2a4261] 
                           text-white font-medium py-3 px-8 rounded-md transition-colors 
                           focus:outline-none focus:ring-2 focus:ring-[#3C597B] focus:ring-offset-2"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={`text-sm text-center ${
                    status.includes('successfully')
                      ? 'text-green-600'
                      : status.includes('Sending')
                      ? 'text-blue-600'
                      : 'text-red-600'
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </main>

      {/* Footer - Sticks to bottom */}
      <Footer />
    </div>
  );
};

export default ContactPage;

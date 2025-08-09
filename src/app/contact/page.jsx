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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Create mailto link with form data
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Contact: ${formData.contact}\n` +
      `Message: ${formData.message}`
    );
    
    window.location.href = `mailto:renjithrajan2003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#F3F0ED] flex flex-col">
      {/* Header with Navbar */}
      <Navbar />
      
      {/* Title Section */}
      <div className="flex items-center justify-center py-16 px-6 md:px-20">
        <h2
          className="text-4xl md:text-5xl text-[#3c597B] text-center"
          style={{ fontFamily: "Rofane", fontStyle: "italic" }}
        >
          <span className="not-italic font-normal">Contact Us</span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 pb-12">
        {/* Contact Form */}
        <div className="space-y-8">
          {/* First Row - First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Second Row - Email and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Contact
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-600 mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
              placeholder="Your message..."
            />
          </div>

          {/* Send Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
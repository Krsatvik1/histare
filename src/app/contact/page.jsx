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

  const [status, setStatus] = useState(""); // For showing success/error messages

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
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          contact: formData.contact,
          message: formData.message
        })
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
    <div className="min-h-screen bg-[#F3F0ED] flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Title */}
      <div className="flex items-center justify-center py-10 px-6 md:px-20 mt-[80px]">
        <h2
          className="text-4xl md:text-5xl text-[#3c597B] text-center"
          style={{ fontFamily: "Rofane", fontStyle: "italic" }}
        >
          <span className="not-italic font-normal">Contact Us</span>
        </h2>
      </div>

      {/* Form */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 pb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              rows={6}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
              placeholder="Your message..."
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center space-y-2">
            <button
              type="submit"
              className="bg-[#3C597B] hover:bg-[#3C59f0] text-white font-medium py-3 px-8 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;

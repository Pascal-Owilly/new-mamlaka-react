import React, { useState } from 'react';
import axios from 'axios';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://testmanagement.pythonanywhere.com/api/blog/contact-us/create/', formData);
      if (response.status === 200 || response.status === 201) {
        setStatusMessage('Your message has been sent successfully!');
      } else {
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage('Failed to send your message. Please try again later.');
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section
        className="hero-section flex flex-col items-center justify-center text-center p-16"
        style={{ backgroundColor: '#402a6f', minHeight: '30vh' }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-gray-200 max-w-2xl">
          We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to share your thoughts, feel free to reach out. Our team is always ready to support you.
        </p>
      </section>

      {/* Contact Section with Form and Map */}
      <div className="container p-8 bg-gray-100">
        <div className="row">
          {/* Contact Form Column */}
          <div className="col-md-6">
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-4 text-purple-700">Get in Touch</h2>

                {/* Name Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700"
                  />
                </div>

                {/* Message Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border rounded w-full py-2 px-3 text-gray-700 h-32"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
                  >
                    Send Message
                  </button>
                </div>

                {/* Status Message */}
                {statusMessage && <p className="mt-4 text-center text-purple-600">{statusMessage}</p>}
              </form>
            </div>
          </div>

          {/* Map Column */}
          <div className="col-md-6">
            <h2 className="text-gray-800">Our Location</h2>
            <div className="map-container mt-3">
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8066302536363!2d36.7805007742029!3d-1.290309798697427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a74508e065%3A0xa5cbc5deae5472db!2sWu%20Yi%20plaza!5e0!3m2!1sen!2ske!4v1723736534747!5m2!1sen!2ske"
        width="100%" // Use percentage to make it responsive
        height="450"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
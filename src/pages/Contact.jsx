

import React, { useState } from 'react';
import './Contact.css'; // Ensure this CSS file is in the same directory
import { ToastContainer, toast } from "react-toastify";
import { contact2, contact3 } from '../assets';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendMsgBtn = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (validateForm()) {
      // Perform the form submission logic here
      console.log('Form data:', formData);
      // Clear form and errors after successful submission (if needed)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      toast.success("Your message has been sent, we will reach you soon");
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="relative">
        <img className="object-cover w-full h-80 md:h-[485px]" src={contact3} alt="contact-img1" />
        <img className="absolute top-16 left-12 md:left-1/6 w-3/4 md:w-1/3 border-8 border-white" src={contact2} alt="contact-img2" />
        <div className="text-center py-8 md:py-16">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800">CONTACT</h3>
          <hr className="border-t-2 border-gray-300 mx-auto my-4 w-1/3 md:w-1/4" />
          <p className="text-lg md:text-xl text-gray-700 w-4/5 md:w-2/3 mx-auto">
            Reach out to us at ZenZest Treasures! Since 2012, our dedicated team is here to provide you with personalized support and expert advice. Whether you need help with an order, product information, or anything else, we're just a message or call away. Contact us for a seamless and friendly customer experience.
          </p>
        </div>
      </div>
      <section id="contact" className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 w-full md:w-1/3">
              <i className="fa-solid fa-location-dot text-2xl text-gray-600 mb-4"></i>
              <h5 className="text-xl font-bold text-gray-800 mb-2">Our Address</h5>
              <p className="text-gray-600">Adams Street, Byculla, Mumbai, Maharashtra, India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 w-full md:w-1/3">
              <i className="fa-regular fa-envelope text-2xl text-gray-600 mb-4"></i>
              <h5 className="text-xl font-bold text-gray-800 mb-2">Email Us</h5>
              <p className="text-gray-600">zenzestts@gmail.com</p>
              <p className="text-gray-600">zenztcraft34@yahoo.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
              <i className="fa-solid fa-phone-volume text-2xl text-gray-600 mb-4"></i>
              <h5 className="text-xl font-bold text-gray-800 mb-2">Call Us</h5>
              <p className="text-gray-600">02296 54658812</p>
              <p className="text-gray-600">02296 25898559</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
                <input
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
                <input
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                <input
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                onClick={sendMsgBtn}
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <ToastContainer 
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </section>
    </div>
  );
};

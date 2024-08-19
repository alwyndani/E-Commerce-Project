
import React, { useState } from 'react';
import './Contact.css'; // Ensure this CSS file is in the same directory
import { ToastContainer, toast } from "react-toastify";

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
      setErrors({}, toast.success("Your message has been send, we will reach you soon"));

    }
  };

  return (
    <div>
      <section id="contact">
        <div className="container">
          <h3 className="contact-heading">CONTACT</h3>
          <hr className="divider" />
          <p className="contact-description w-2/3 m-auto pb-9">
            Reach out to us at ZenZest Treasures! Since 2012, our dedicated team is here to provide you with personalized support and expert advice. Whether you need help with an order, product information, or anything else, we're just a message or call away. Contact us for a seamless and friendly customer experience.
          </p>
          <div className="contact-info">
            <div className="info-card">
              <i className="fa-solid fa-location-dot"></i>
              <h5>Our Address</h5>
              <p>Adams Street, Byculla, Mumbai, Maharashtra, India</p>
            </div>
            <div className="info-card">
              <i className="fa-regular fa-envelope"></i>
              <h5>Email Us</h5>
              <p>zenzestts@gmail.com</p>
              <p>zenztcraft34@yahoo.com</p>
            </div>
            <div className="info-card">
              <i className="fa-solid fa-phone-volume"></i>
              <h5>Call Us</h5>
              <p>02296 54658812</p>
              <p>02296 25898559</p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  className="form-control"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className="error">{errors.subject}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button onClick={sendMsgBtn} type="submit" className="btn btn-submit">
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

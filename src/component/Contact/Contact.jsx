import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>
            If you have any inquiries or need assistance, please feel free to
            reach out to us.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <img
                src="https://cdn-icons-png.flaticon.com/128/726/726623.png"
                alt="Email"
                className="animated-icon"
              />
              <h3>Email</h3>
              <p>info@recruitapp.com</p>
            </div>
            <div className="contact-item">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4370/4370113.png"
                alt="Phone"
                className="animated-icon"
              />
              <h3>Phone</h3>
              <p>+1 123 456 7890</p>
            </div>
            <div className="contact-item">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2991/2991231.png"
                alt="Location"
                className="animated-icon"
              />
              <h3>Location</h3>
              <p> F-148 Saket, New Delhi, India</p>
            </div>
          </div>
          <form className="contact-form">
            <h2>Send us a Message</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="animated-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="animated-input"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="animated-textarea"
              />
            </div>
            <div className="form-group">
              <button className="animated-button">Send</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

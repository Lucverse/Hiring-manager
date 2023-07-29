import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              We aim to provide a seamless hiring experience, streamlining the
              recruitment process for HR professionals.
            </p>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>E-commerce Solutions</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>
              F-148 Saket
              <br />
              New Delhi, India
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@recruitapp.com
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

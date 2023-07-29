import React from "react";
import "./About.css";
import Footer from "./Footer/Footer";

const About = () => {
  return (
    <div>
      <div className="about-me-container">
        <h1>About Us</h1>
        <p>
          Welcome to our digital recruitment solution app! We aim to provide a
          seamless hiring experience for multiple MNCs, streamlining the
          recruitment process for hiring managers and HR professionals.
        </p>
        <div className="feature-section">
          <div className="feature-image">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7067/7067977.png"
              alt="Key Features"
              className="animated-image"
            />
          </div>
          <div className="feature-content">
            <h2>Key Features</h2>
            <ul>
              <li>
                Efficient candidate search based on location and job roles.
              </li>
              <li>Advanced filtering options to refine search results.</li>
              <li>Ranking and evaluation tools for evaluating candidates.</li>
              <li>Seamless integration with company HR systems.</li>
              <li>Customizable application forms for job seekers.</li>
            </ul>
          </div>
        </div>
        <div className="benefit-section">
          <div className="benefit-content">
            <h2>Benefits</h2>
            <ul>
              <li>
                Save time and resources with our streamlined recruitment
                process.
              </li>
              <li>Access a diverse pool of talented candidates.</li>
              <li>
                Enhance collaboration and communication between hiring teams.
              </li>
              <li>
                Make data-driven hiring decisions with our advanced evaluation
                tools.
              </li>
              <li>Improve the overall candidate experience.</li>
            </ul>
          </div>
          <div className="benefit-image">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7067/7067935.png"
              alt="Benefits"
              className="animated-image"
            />
          </div>
        </div>
        <div className="candidate-section">
          <div className="candidate-image">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7238/7238017.png"
              alt="Candidate"
            />
            <div className="candidate-text">
              <h2>Find the Perfect Candidates</h2>
              <p>
                Effortlessly search for candidates based on location and job
                roles. Our advanced filtering options allow you to refine your
                search and find the best talent for your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

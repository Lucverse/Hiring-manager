import React from "react";
import "./KeyFeatures.css";

const KeyFeatures = () => {
  const featuresData = [
    {
      title: "Intuitive Candidate Management",
      description:
        "Effortlessly manage and track your candidates through every stage of the hiring process.",
      image: "https://cdn-icons-png.flaticon.com/128/2139/2139551.png"
    },
    {
      title: "Powerful Job Posting",
      description: "Create and publish captivating job postings in minutes.",
      image: "https://cdn-icons-png.flaticon.com/128/3850/3850285.png"
    },
    {
      title: "Automated Screening and Shortlisting",
      description:
        "Bid farewell to manual screening! Our intelligent algorithms analyze applicant data, resumes, and qualifications.",
      image: "https://cdn-icons-png.flaticon.com/128/10872/10872056.png"
    },
    {
      title: "Seamless Collaboration",
      description:
        "Efficiently collaborate with your team and streamline decision-making.",
      image: "https://cdn-icons-png.flaticon.com/128/7829/7829198.png"
    }
  ];

  return (
    <div className="key-features-container">
      {featuresData.map((feature, index) => (
        <div className="grid-item" key={index}>
          <img
            src={feature.image}
            alt={feature.title}
            className="feature-image"
          />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default KeyFeatures;

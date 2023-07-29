import React from "react";
import "./BenefitsSection.css";

const BenefitsSection = () => {
  const benefitsData = [
    {
      title: "Time-Saving",
      description:
        "Our online recruitment solution eliminates manual paperwork and repetitive tasks, allowing you to focus your energy on interviewing top candidates and making informed hiring decisions.",
      image: "https://cdn-icons-png.flaticon.com/128/1584/1584942.png"
    },
    {
      title: "Enhanced Efficiency",
      description:
        "Automate key aspects of the hiring process, such as candidate screening and scheduling, to expedite the process and spend less time on administrative tasks.",
      image: "https://cdn-icons-png.flaticon.com/128/1459/1459073.png"
    },
    {
      title: "Improved Candidate Quality",
      description:
        "Our solution leverages advanced algorithms and AI-driven insights to identify the most qualified candidates for your specific job requirements, resulting in a higher quality pool of talent.",
      image: "https://cdn-icons-png.flaticon.com/128/3500/3500896.png"
    },
    {
      title: "Cost Reduction",
      description:
        "Cut down on recruitment costs associated with advertising, agency fees, and lengthy hiring cycles. Our online recruitment solution offers a cost-effective alternative without compromising on quality.",
      image: "https://cdn-icons-png.flaticon.com/128/781/781760.png"
    }
  ];

  return (
    <section className="benefits-section">
      <h2 className="section-title">
        Benefits for Hiring Managers and HR Professionals
      </h2>
      <div className="benefits-container">
        {benefitsData.map((benefit, index) => (
          <div className="benefit" key={index}>
            <img
              src={benefit.image}
              alt={benefit.title}
              className="benefit-image"
            />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;

import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./CandidateSearch.css";

const CandidateSearch = () => {
  const candidates = [
    {
      name: "Candidate 1",
      jobRole: "Software Developer",
      location: "New York"
    },
    { name: "Candidate 2", jobRole: "Data Analyst", location: "San Francisco" },
    { name: "Candidate 3", jobRole: "UX Designer", location: "London" },
    { name: "Candidate 4", jobRole: "Marketing Manager", location: "Paris" },
    { name: "Candidate 5", jobRole: "Sales Representative", location: "Tokyo" },
    { name: "Candidate 6", jobRole: "Project Manager", location: "Berlin" },
    { name: "Candidate 7", jobRole: "Graphic Designer", location: "Sydney" },
    { name: "Candidate 8", jobRole: "Financial Analyst", location: "Toronto" },
    { name: "Candidate 9", jobRole: "HR Coordinator", location: "Singapore" },
    { name: "Candidate 10", jobRole: "Product Manager", location: "Seattle" }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = candidates.filter(
      (candidate) =>
        candidate.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        candidate.jobRole
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <div className="candidate-search-container">
        <h2>Candidate Search</h2>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search by name or job role"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {searchTerm === "" && (
          <h1 className="search-placeholder">Search for Candidate</h1>
        )}
        {searchResults.length > 0 ? (
          <div className="search-results">
            <ul>
              {searchResults.map((candidate, index) => (
                <li key={index}>
                  <p>
                    <strong>Name:</strong> {candidate.name}
                  </p>
                  <p>
                    <strong>Job Role:</strong> {candidate.jobRole}
                  </p>
                  <p>
                    <strong>Location:</strong> {candidate.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          searchTerm !== "" && (
            <p className="no-results">No candidates found.</p>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CandidateSearch;

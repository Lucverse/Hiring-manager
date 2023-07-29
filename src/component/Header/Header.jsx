import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Seamless Hiring Experience for MNCs</h1>
        <p>
          Efficiently streamline your hiring process with our digital
          recruitment solution.
        </p>
        <NavLink
          to="/login"
          className="cta-button"
          activeclassname="active-link"
        >
          Get Started
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

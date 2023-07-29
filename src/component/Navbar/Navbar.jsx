import React, { useState } from "react";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const renderLogo = () => {
    return (
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9626/9626716.png"
          alt="Company Logo"
        />
      </div>
    );
  };

  const renderDropdown = () => {
    return (
      <div
        className="profile"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
          alt="Profile"
          className="profile"
        />
        {showDropdown && (
          <div className="dropdown-content">
            <Link to="/account">Account</Link>
            <Link to="/settings">Settings</Link>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="navbar">
      {renderLogo()}
      <div className="links">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/search">Search</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {renderDropdown()}
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

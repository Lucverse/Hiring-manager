import React from "react";
import { useSelector } from "react-redux";
import "./Account.css";

const Account = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="account-container">
      <div className="account-image">
        <img
          src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
          alt="Profile"
        />
      </div>
      <div className="account-details">
        <h2>Account Information</h2>
        <p>
          <strong>Name:</strong> {user.fullName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default Account;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const mncUsers = JSON.parse(localStorage.getItem("mncusers"));
    if (!mncUsers || !Array.isArray(mncUsers)) {
      localStorage.setItem("mncusers", JSON.stringify([]));
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      password,
      username
    };
    console.log(newUser);
    const existingUsers = JSON.parse(localStorage.getItem("mncusers")) || [];
    const userExists = existingUsers.some(
      (user) => user.email === email || user.username === username
    );

    if (userExists) {
      alert("User with the same email or username already exists.");
    } else {
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("mncusers", JSON.stringify(updatedUsers));
      alert("Successful signup! You can now log in.");
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h3>Signup</h3>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default SignupForm;
